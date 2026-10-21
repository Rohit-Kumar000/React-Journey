import conf from "../config/config.js";
import { Client, ID, TablesDB, Storage, Query, Permission, Role } from "appwrite";
import { missingAppwriteConfig } from "../config/config.js";

export class Service {
  client = new Client();
  tablesDB;
  bucket;

  constructor() {
    if (conf.appwriteUrl) this.client.setEndpoint(conf.appwriteUrl);
    if (conf.appwriteProjectId) this.client.setProject(conf.appwriteProjectId);
    this.tablesDB = new TablesDB(this.client);
    this.bucket = new Storage(this.client);
  }

  assertConfigured() {
    if (missingAppwriteConfig.length) {
      throw new Error(`Appwrite is not configured. Add these variables to your .env file: ${missingAppwriteConfig.join(", ")}.`);
    }
  }

  ownerPermissions(userId, { publicRead = false } = {}) {
    const permissions = [
      Permission.update(Role.user(userId)),
      Permission.delete(Role.user(userId)),
    ];
    permissions.push(publicRead ? Permission.read(Role.any()) : Permission.read(Role.user(userId)));
    return permissions;
  }

  async createPost({ title, slug, content, featuredImage, userId }) {
    this.assertConfigured();
    if (!userId) throw new Error("You must be signed in to create a post.");
    // The client lists rows, which requires table-level read permission in Appwrite.
    // To avoid exposing private drafts under a public-read table, this client app only publishes active posts.
    const safeStatus = "active";
    return this.tablesDB.createRow({
      databaseId: conf.appwriteDatabaseId,
      tableId: conf.appwriteTableID,
      rowId: slug,
      data: { title: title.trim(), content, featuredImage, status: safeStatus, userId },
      permissions: this.ownerPermissions(userId, { publicRead: safeStatus === "active" }),
    });
  }

  async updatePost(rowId, { title, content, featuredImage, userId }) {
    this.assertConfigured();
    if (!userId) throw new Error("You must be signed in to update a post.");
    const safeStatus = "active";
    return this.tablesDB.updateRow({
      databaseId: conf.appwriteDatabaseId,
      tableId: conf.appwriteTableID,
      rowId,
      data: { title: title.trim(), content, featuredImage, status: safeStatus },
      permissions: this.ownerPermissions(userId, { publicRead: safeStatus === "active" }),
    });
  }

  async deletePost(rowId) {
    this.assertConfigured();
    return this.tablesDB.deleteRow({
      databaseId: conf.appwriteDatabaseId,
      tableId: conf.appwriteTableID,
      rowId,
    });
  }

  async getPost(rowId) {
    this.assertConfigured();
    try {
      return await this.tablesDB.getRow({
        databaseId: conf.appwriteDatabaseId,
        tableId: conf.appwriteTableID,
        rowId,
      });
    } catch (error) {
      if (error?.code === 404 || error?.code === 401 || error?.code === 403) return null;
      throw error;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    this.assertConfigured();
    const response = await this.tablesDB.listRows({
      databaseId: conf.appwriteDatabaseId,
      tableId: conf.appwriteTableID,
      queries: [...queries, Query.orderDesc("$createdAt")],
    });
    return response;
  }

  async uploadFile(file, userId) {
    this.assertConfigured();
    if (!file) throw new Error("Choose an image to upload.");
    if (!userId) throw new Error("You must be signed in to upload an image.");
    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!allowedTypes.includes(file.type)) throw new Error("Use a JPG, PNG, WEBP, or GIF image.");
    if (file.size > 5 * 1024 * 1024) throw new Error("Image size must be 5 MB or less.");
    return this.bucket.createFile({
      bucketId: conf.appwriteBucketId,
      fileId: ID.unique(),
      file,
      permissions: [
        Permission.read(Role.any()),
        Permission.update(Role.user(userId)),
        Permission.delete(Role.user(userId)),
      ],
    });
  }

  async deleteFile(fileId) {
    this.assertConfigured();
    if (!fileId) return true;
    return this.bucket.deleteFile({ bucketId: conf.appwriteBucketId, fileId });
  }

  getFileView(fileId) {
    if (!conf.appwriteUrl || !conf.appwriteProjectId || !conf.appwriteBucketId || !fileId) return "";
    return this.bucket.getFileView({ bucketId: conf.appwriteBucketId, fileId });
  }
}

const service = new Service();
export default service;
