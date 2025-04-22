"use client";
import React, { useState } from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";

export function DefaultGallery() {
  const data = [
    {
      imageLink:
        "//drive.google.com/thumbnail?id=18XHl8u93XNKr1LRfou5yEDs90tSBU73D&sz=w1000",
    },
    {
      imageLink:
        "https://drive.google.com/thumbnail?id=1_OafK69u2ghByqcuGEeIIhrPLVMLrca7&sz=w1000",
    },
    {
      imageLink:
        "https://drive.google.com/thumbnail?id=1r1hPkjMrs4TLMYKBm8768KEWXJ_ovcNK&sz=w1000",
    },
    {
      imageLink:
        "https://drive.google.com/thumbnail?id=1tWHCVwtPEeINs_-HdbuDZ5vNOXhtmGr8&sz=w1000",
    },
    {
      imageLink:
        "https://drive.google.com/thumbnail?id=107QVK8H57pJAtvsiVAkaedVbz-wHaPsh&sz=w1000",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    },
    {
      imageLink:
        "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
    },
    {
      imageLink:
        "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
    },
    {
      imageLink:
        "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
    },
  ];

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const toggleDialog = (image?: string) => {
    if (open) {
      setOpen(false); // Close the dialog
      setSelectedImage(null);
    } else {
      setOpen(true); // Open the dialog
      setSelectedImage(image || null);
    }
  };
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mb-8">
        <p>This is just pulling the links from the drive...</p>
        {data.map(({ imageLink }, index) => (
          <div key={index} onClick={() => toggleDialog(imageLink)}>
            <img
              className="h-40 w-full max-w-full rounded-lg object-cover object-center cursor-pointer"
              src={imageLink}
              alt={`gallery-photo-${index}`}
            />
          </div>
        ))}
      </div>
      <Dialog size="xl" open={open} handler={() => toggleDialog()}>
        <DialogBody className="p-0" onClick={() => toggleDialog()}>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected Full Size"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogBody>
      </Dialog>
    </div>
  );
}
