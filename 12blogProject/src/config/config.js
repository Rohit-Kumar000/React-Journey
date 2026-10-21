const readEnv = (key, fallback = "") => {
  const value = import.meta.env[key];
  return typeof value === "string" ? value.trim() : fallback;
};

const config = Object.freeze({
  appwriteUrl: readEnv("VITE_APPWRITE_URL"),
  appwriteProjectId: readEnv("VITE_APPWRITE_PROJECT_ID"),
  appwriteDatabaseId: readEnv("VITE_APPWRITE_DATABASE_ID"),
  appwriteTableID: readEnv("VITE_APPWRITE_TABLE_ID"),
  appwriteBucketId: readEnv("VITE_APPWRITE_BUCKET_ID"),
  tinymceApiKey: readEnv("VITE_TINYMCE_API_KEY"),
});

export const missingAppwriteConfig = [
  ["VITE_APPWRITE_URL", config.appwriteUrl],
  ["VITE_APPWRITE_PROJECT_ID", config.appwriteProjectId],
  ["VITE_APPWRITE_DATABASE_ID", config.appwriteDatabaseId],
  ["VITE_APPWRITE_TABLE_ID", config.appwriteTableID],
  ["VITE_APPWRITE_BUCKET_ID", config.appwriteBucketId],
].filter(([, value]) => !value).map(([key]) => key);

export default config;
