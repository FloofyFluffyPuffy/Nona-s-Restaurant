import Image from "next/image";
import getGallery from "@/code/typescript/api/getGallery";

const Gallery = async () => {
  const galleryItems = await getGallery();
  const images = galleryItems.slice(0, 8);

  if (images.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#E3D5C3] px-2 py-4 sm:px-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-2xl">
          <p className="text-2xl font-bold italic text-[#C86632]">
            Gallery
          </p>
          <h2 className="mt-2 text-xl font-bold tracking-tight text-[#2A2725] sm:text-xl">
            A little glimpse of the warmth behind every dish
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((item) => {
            const imageUrl = item.acf?.image || item.acf?.image_url || item.acf?.gallery_image || "";
            const title = item.title?.rendered || "Gallery image";

            return (
              <article
                key={item.id}
                className="group relative overflow-hidden rounded-3xl border border-[#C86632]/20 bg-[#f5ebdf] shadow-[0_20px_60px_rgba(0,0,0,0.30)]"
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
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;