import { google } from "googleapis";

export default async function handler(req, res) {
  const API_KEY = process.env.GOOGLE_API_KEY; // Load API key from .env.local
  const FOLDER_ID = "1vP3xg_n60hFK4tM4QHjXEX8GHhca7OZJ"; // Replace with your folder ID

  const drive = google.drive({
    version: "v3",
    auth: API_KEY, // Use API key from environment
  });

  try {
    const response = await drive.files.list({
      q: `'${FOLDER_ID}' in parents and trashed = false`,
      fields: "files(id, name, mimeType, thumbnailLink)",
    });

    res.status(200).json({ files: response.data.files });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
