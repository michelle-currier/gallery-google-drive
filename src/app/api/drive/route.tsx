import { NextResponse } from "next/server";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY!;
const FOLDER_ID = process.env.NEXT_PUBLIC_GOOGLE_FOLDER_ID!;

export async function GET() {
  if (!API_KEY || !FOLDER_ID) {
    return NextResponse.json(
      { error: "Missing API Key or Folder ID" },
      { status: 500 }
    );
  }

  try {
    // const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents+and+mimeType+contains+'image'&key=${API_KEY}&fields=files(id,name,thumbnailLink,webViewLink)`;
    const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}' in parents and mimeType contains 'image'&key=${API_KEY}&fields=files(id,name)`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch images");

    const data = await response.json();
    // Map to get the direct media URLs for each image
    const images = await Promise.all(
      data.files.map(async (file: any) => {
        // Fetch the direct media URL
        const mediaUrl = `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media&key=${API_KEY}`;

        return {
          id: file.id,
          name: file.name,
          url: mediaUrl, // Direct media URL
        };
      })
    );

    // const images = data.files.map((file: any) => ({
    //   id: file.id,
    //   name: file.name,
    //   url: file.thumbnailLink || file.webViewLink,
    // }));
    console.log(data.files);
    console.log(images);

    return NextResponse.json({ images }, { status: 200 });
  } catch (error) {
    console.error("Google Drive API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }
}
