"use client";
import React, { useState, useEffect } from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";

type ImageType = {
  id: string;
  name: string;
  url: string;
};

const GalleryAPI: React.FC = () => {
  const [images, setImages] = useState<ImageType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null); // To handle the image clicked for the modal
  const [openModal, setOpenModal] = useState<boolean>(false); // To control modal visibility

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/drive");
        if (!response.ok) throw new Error("Failed to load images");

        const data = await response.json();
        const imagesWithUrls = data.images.map((image: any) => ({
          ...image,
          url: `https://www.googleapis.com/drive/v3/files/${image.id}?alt=media&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
        }));
        console.log("Fetched Images:", data.images); // Log the response to check
        //setImages(data.images);
        setImages(imagesWithUrls);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handleImageClick = (image: ImageType) => {
    setSelectedImage(image);
    setOpenModal(true); // Open the modal when an image is clicked
  };

  const toggleModal = () => {
    setOpenModal(!openModal); // Toggle the modal open/close state
  };

  if (loading) return <p>Loading images...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="pt-2">
      <h2 className="text-2xl font-bold mb-4">Image Gallery</h2>
      {images.length === 0 ? (
        <p>No images found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="border rounded-lg shadow"
              onClick={() => handleImageClick(image)} // Handle image click
            >
              <img
                src={image.url}
                alt={image.name}
                className="h-60 w-full max-w-full rounded-lg object-cover object-center cursor-pointer"
              />
              <p className="text-sm text-center mt-2">{image.name}</p>
            </div>
          ))}
        </div>
      )}

      {/* Dialog modal for larger image view */}
      {selectedImage && (
        <Dialog
          open={openModal}
          handler={toggleModal}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <DialogBody
            className="flex flex-col"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <div className="flex justify-end">
              <button
                className="mt-8 px-4 py-2 bg-purple-500 text-white rounded-md"
                onClick={toggleModal} // Close modal when clicked
              >
                Close
              </button>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={selectedImage.url}
                alt={selectedImage.name}
                className="max-w-full max-h-full rounded-lg"
              />
            </div>
            <p className="text-center mt-4">{selectedImage.name}</p>
          </DialogBody>
        </Dialog>
      )}
    </div>
  );
};

export default GalleryAPI;
