const config = {
    appWriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appTableID: String(import.meta.env.VITE_APPWRITE_TABLE_ID),
    appBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default config;