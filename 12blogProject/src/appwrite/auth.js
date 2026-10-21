import config, { missingAppwriteConfig } from "../config/config.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    if (config.appwriteUrl) this.client.setEndpoint(config.appwriteUrl);
    if (config.appwriteProjectId) this.client.setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  assertConfigured() {
    const required = missingAppwriteConfig.filter((key) =>
      ["VITE_APPWRITE_URL", "VITE_APPWRITE_PROJECT_ID"].includes(key)
    );
    if (required.length) throw new Error(`Appwrite authentication is not configured. Add: ${required.join(", ")}.`);
  }

  async createAccount({ email, password, name }) {
    this.assertConfigured();
    await this.account.create({ userId: ID.unique(), email: email.trim(), password, name: name.trim() });
    return this.login({ email, password });
  }

  async login({ email, password }) {
    this.assertConfigured();
    return this.account.createEmailPasswordSession({ email: email.trim(), password });
  }

  async getCurrentUser() {
    try {
      this.assertConfigured();
      return await this.account.get();
    } catch (error) {
      if ([401, 403, 404].includes(error?.code)) return null;
      console.error("Unable to retrieve the current Appwrite user:", error);
      return null;
    }
  }

  async logout() {
    this.assertConfigured();
    try {
      await this.account.deleteSessions();
    } catch (error) {
      if (![401, 404].includes(error?.code)) throw error;
    }
  }
}

const authService = new AuthService();
export default authService;
