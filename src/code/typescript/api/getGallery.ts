import { GalleryItem } from "../types";

async function getGallery() {
  const galleryBase =
    process.env.NEXT_PUBLIC_WP_WEBSITE_GALLERY_URL ||
    process.env.NEXT_PUBLIC_WP_WEBSITE_IMAGE_URL;

  if (!galleryBase) {
    console.error("WordPress gallery URL is not defined.");
    return [];
  }

  const res = await fetch(galleryBase, { cache: "no-store" });

  if (!res.ok) {
    console.error("Failed to fetch gallery images", res.statusText);
    return [];
  }

  const data = (await res.json()) as GalleryItem[];

  if (!Array.isArray(data)) {
    return [];
  }

  return data
    .filter((item) => {
      const imageUrl = item?.acf?.image || item?.acf?.image_url || item?.acf?.gallery_image;
      return Boolean(imageUrl);
    })
    .slice(0, 8);
}

export default getGallery;
