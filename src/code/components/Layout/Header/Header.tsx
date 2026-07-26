"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useContextData } from "@/code/typescript/context/Provider";

const navItems = [
  { label: "Home", path: "/", active: true },
  { label: "Menu", path: "/menu", active: false },
  { label: "About", path: "/about", active: false },
  { label: "Contact", path: "/contact", active: false },
  {
    label: "Others",
    path: "#others",
    active: false,
    dropdown: [
      { id: 1, name: "Catering", path: "#events", page: "/" },
      { id: 2, name: "Gallery", path: "#gallery", page: "/" },
      { id: 3, name: "Location", path: "#location", page: "/" },
    ],
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`ml-1 h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function OrderNowButton({ mobile = false }: { mobile?: boolean }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg bg-[#E3D5C3] px-4 py-2 text-sm font-medium text-[#2A2725] transition-all duration-300 hover:scale-105 hover:bg-[#C86632] hover:text-[#E3D5C3]";

  return (
    <a
      href="https://www.doordash.com/store/nona’s-restaurant-lodi-30510461/40175558/?rwg_token=AE37R_gM84b4JesefYU7BWnKjQeS5Oc-hICYPqvkJV0KgiOzQ0EjK62W6F5QwGx5NbdmnHkSpbARoEgT0UQS65VmgY03W1DvKw==&utm_campaign=gpa"
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${mobile ? "w-full" : ""}`}
      aria-label="Order now"
    >
      <img src="/assets/imgi_116_logo144.ico" alt="DoorDash" className="h-5 w-5" />
      <span>Order Now</span>
    </a>
  );
}

export default function MinimalHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOthersOpen, setIsOthersOpen] = useState(false);
  const [isMobileOthersOpen, setIsMobileOthersOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { scroll, setScroll } = useContextData();

  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [setScroll]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOthersOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setIsOthersOpen(false);
    setIsMobileOthersOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsOpen((prev) => !prev);
    setIsMobileOthersOpen(false);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-in-out ${
        scroll > 120 ? "bg-[#2A2725]/95 shadow-lg" : "bg-[#2A2725]/70"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <img
            src="/assets/logo.png"
            alt="Nona's Restaurant"
            className="h-10 w-10 rounded-full bg-white object-contain shadow-2xl ring-2 ring-white"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label} ref={dropdownRef} className="relative">
                <button
                  type="button"
                  onClick={() => setIsOthersOpen((prev) => !prev)}
                  className="inline-flex cursor-pointer items-center text-sm font-medium text-[#E3D5C3] transition-colors duration-150 hover:text-[#C86632]"
                  aria-expanded={isOthersOpen}
                >
                  {item.label}
                  <ChevronIcon open={isOthersOpen} />
                </button>

                {isOthersOpen && (
                  <div className="absolute left-0 mt-2 w-48 rounded-lg border border-[#E3D5C3]/20 bg-[#2A2725] p-2 shadow-xl">
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.id}
                        href={dropItem.path}
                        onClick={() => {
                          setIsOthersOpen(false);
                          setIsOpen(false);
                        }}
                        className="block rounded-md px-3 py-2 text-sm text-[#E3D5C3] transition-colors hover:bg-[#C86632] hover:text-white"
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.path}
                className="text-sm font-medium text-[#E3D5C3] transition-colors duration-150 hover:text-[#C86632]"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <OrderNowButton />
        </div>

        <button
          onClick={toggleMobileMenu}
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-[#E3D5C3] hover:bg-[#C86632]/20 md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <svg className="h-6 w-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[#E3D5C3]/20 bg-[#2A2725] px-4 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-3">
            <OrderNowButton mobile />

            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => setIsMobileOthersOpen((prev) => !prev)}
                    className="inline-flex items-center text-left text-base font-medium text-[#E3D5C3] hover:text-[#C86632]"
                  >
                    {item.label}
                    <ChevronIcon open={isMobileOthersOpen} />
                  </button>

                  {isMobileOthersOpen && (
                    <div className="ml-4 flex flex-col gap-2">
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.id}
                          href={dropItem.path}
                          onClick={closeMenu}
                          className="text-sm text-[#E3D5C3] hover:text-[#C86632]"
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.path}
                  onClick={closeMenu}
                  className="text-base font-medium text-[#E3D5C3] hover:text-[#C86632]"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}