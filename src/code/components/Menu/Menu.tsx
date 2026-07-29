"use client";

import { useEffect, useState } from "react";
import getFood from "@/code/typescript/api/getFood";
import type { Food } from "@/code/typescript/types";

const sections = [
  { id: "entrees", label: "Entrées", tagId: 8, description: "Classic comfort plates with bold flavor and house-made care." },
  { id: "pasta", label: "Pasta", tagId: 7, description: "Fresh pasta, rich sauces, and timeless Italian favorites." },
  { id: "steaks", label: "Steaks", tagId: 9, description: "Perfectly grilled cuts served with signature sides." },
  { id: "salads", label: "Salads", tagId: 4, description: "Bright, crisp salads made for a lighter bite." },
  { id: "sides", label: "Sides", tagId: 10, description: "House-made accompaniments to complete every meal." },
  { id: "desserts", label: "Desserts", tagId: 5, description: "Sweet finishes inspired by family recipes." },
  { id: "drinks", label: "Drinks", tagId: 6, description: "Refreshing beverages to pair with every course." },
];

function MenuItemCard({ food }: { food: Food }) {
  const imageUrl = food.acf?.image || food.acf?.photo || "/assets/logo.png";

  return (
    <article className="rounded-[24px] border border-[#E3D5C3]/20 bg-[#E3D5C3] p-4 shadow-[0_10px_35px_rgba(0,0,0,0.15)]">
      <div className="flex items-start gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#2A2725]/15 bg-[#2A2725]/5">
          <img src={imageUrl} alt={food.title?.rendered || "Menu item"} className="h-full w-full object-cover" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-[#2A2725]">{food.title?.rendered || "Signature dish"}</h3>
            {/* #C86632 Accent for Price */}
            <span className="shrink-0 text-sm font-bold text-[#C86632]">${food.acf?.price || "0"}</span>
          </div>
          <p className="mt-2 text-sm leading-6 text-[#2A2725]/80">{food.acf?.description || "A seasonal favorite prepared with care."}</p>
        </div>
      </div>
    </article>
  );
}

const Menu = () => {
  const [activeTab, setActiveTab] = useState(sections[0].id);
  const [menuItemsBySection, setMenuItemsBySection] = useState<Record<string, Food[]>>({});

  const loadSection = async (sectionId: string) => {
    const section = sections.find((item) => item.id === sectionId);
    if (!section) return;

    const items = ((await getFood(section.tagId)) as Food[] | null) ?? [];
    setMenuItemsBySection((prev) => ({ ...prev, [sectionId]: items }));
  };

  useEffect(() => {
    void loadSection(activeTab);
  }, [activeTab]);

  const currentSection = sections.find((item) => item.id === activeTab);
  const currentItems = currentSection ? menuItemsBySection[activeTab] ?? [] : [];

  return (
    <section id="menu" className="Menu px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col items-center gap-5 text-center" data-aos="fade-up">
          <div className="flex items-center justify-center">
            <img
              src="/assets/logo.png"
              alt="Nona's Restaurant"
              className="h-16 w-16 rounded-full border-2 border-[#E3D5C3] bg-[#E3D5C3] object-contain shadow-[0_10px_30px_rgba(0,0,0,0.2)] sm:h-20 sm:w-20"
            />
          </div>
          <div className="max-w-2xl">
            {/* #C86632 Accent for Subheading */}
            <p className="text-xl font-bold italic text-[#C86632]">Our Menu</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#E3D5C3] sm:text-4xl">
              Family recipes, handcrafted with heart.
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2" data-aos="fade-up" data-aos-delay="100">
            {sections.map((section) => {
              const isActive = activeTab === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(section.id);
                    loadSection(section.id);
                  }}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                    isActive
                      ? "border-[#C86632] bg-[#C86632] text-[#E3D5C3]" // Accent fill on active tab
                      : "border-[#E3D5C3]/30 bg-[#E3D5C3] text-[#2A2725] hover:border-[#C86632] hover:text-[#C86632]"
                  }`}
                >
                  {section.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Outer Container (#2A2725 Background, #E3D5C3 Border) */}
        <div className="rounded-[32px] border border-[#E3D5C3]/20 bg-[#2A2725] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.4)] sm:p-8" data-aos="fade-up" data-aos-delay="140">
          {currentSection ? (
            <>
              {/* Centered Title & Description (#E3D5C3 Text) */}
              <div className="mb-6 border-b border-[#E3D5C3]/15 pb-4 text-center">
                <h3 className="text-2xl font-semibold text-[#E3D5C3]">{currentSection.label}</h3>
                <p className="mt-2 text-sm leading-6 text-[#E3D5C3]/80">{currentSection.description}</p>
              </div>

              {currentItems.length > 0 ? (
                <div className="grid gap-4 lg:grid-cols-2">
                  {currentItems.map((food: Food) => (
                    <MenuItemCard key={food.id} food={food} />
                  ))}
                </div>
              ) : (
                <p className="text-center text-sm text-[#E3D5C3]/70">More dishes are being prepared for this section.</p>
              )}
            </>
          ) : (
            <p className="text-center text-sm text-[#E3D5C3]/70">Loading menu...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;