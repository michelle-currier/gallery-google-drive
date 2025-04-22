"use client";
import React, { useEffect, useState } from "react";

export default function FolderImages() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    async function fetchFiles() {
      try {
        const response = await fetch("/api/google-drive-folder"); // Corrected URL
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setFiles(data.files);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    }
    fetchFiles();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mb-8">
      {files.map((file) => (
        <div key={file.id}>
          <img
            className="h-40 w-full max-w-full rounded-lg object-cover"
            src={`https://drive.google.com/thumbnail?id=${file.id}&sz=w1000`}
            alt={file.name}
          />
          <p className="text-center">{file.name}</p>
        </div>
      ))}
    </div>
  );
}
