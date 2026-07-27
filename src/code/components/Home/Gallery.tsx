"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import getGallery from "@/code/typescript/api/getGallery";
import type { GalleryItem } from "@/code/typescript/types";

const Gallery = ({ initialImages = [] }: { initialImages?: GalleryItem[] }) => {
  const [images, setImages] = useState<GalleryItem[]>(initialImages);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const loadImages = async () => {
      if (images.length > 0) return;

      const galleryItems = await getGallery();
      if (isMounted) {
        setImages(galleryItems.slice(0, 8));
      }
    };

    loadImages();

    return () => {
      isMounted = false;
    };
  }, [images.length]);

  const startIndex = page * 4;
  const visibleImages = images.slice(startIndex, startIndex + 4);
  const hasNextPage = images.length > startIndex + 4;
  const hasPreviousPage = page > 0;

  if (images.length === 0) {
    return null;
  }

  return (
    <section id="gallery" className="scroll-mt-24 bg-[#E3D5C3] px-4 py-12 sm:px-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 max-w-2xl">
          <p className="text-xl font-bold italic text-[#C86632] sm:text-2xl">
            Gallery
          </p>
          <h2 className="mt-2 text-lg font-bold tracking-tight text-[#2A2725] sm:text-xl">
            A little glimpse of the warmth behind every dish
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {visibleImages.map((item: any) => {
            const imageUrl = item.acf?.image || item.acf?.image_url || item.acf?.gallery_image || "";
            const title = item.title?.rendered || "Gallery image";

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedImage(imageUrl)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-[#C86632]/20 bg-[#f5ebdf] text-left shadow-[0_20px_60px_rgba(0,0,0,0.30)]"
              >
                <div className="relative aspect-square">
                  <Image
                    src={imageUrl}
                    alt={item.acf?.alt || title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-5 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            disabled={!hasPreviousPage}
            className="rounded-full border border-[#C86632]/40 px-4 py-2 text-sm font-semibold text-[#C86632] transition hover:bg-[#C86632] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous 4
          </button>
          <button
            type="button"
            onClick={() => setPage((prev) => prev + 1)}
            disabled={!hasNextPage}
            className="rounded-full border border-[#C86632]/40 px-4 py-2 text-sm font-semibold text-[#C86632] transition hover:bg-[#C86632] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next 4
          </button>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2A2725]/85 px-4 py-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-[90vh] w-full max-w-5xl rounded-4xl border border-[#E3D5C3]/20 bg-[#2A2725] p-3 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 cursor-pointer rounded-full bg-[#E3D5C3] px-3 py-1 text-sm font-semibold text-[#2A2725]"
            >
              Close
            </button>
            <div className="relative h-[80vh] w-full overflow-hidden rounded-3xl">
              <Image
                src={selectedImage}
                alt="Selected gallery image"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;