"use client";

import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { ContextProvider, useContextData } from "@/code/typescript/context/Provider";
import path from "path";

const navItems = [
  { label: "Home", path: "#", active: true },
  { label: "Menu", path: "#Menu", active: false },
  { label: "About", path: "#about", active: false },
  { label: "Contact", path: "#contact", active: false },
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

export default function MinimalHeader() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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

  return (
    <header className={`fixed transition-color duration-500 ease-in-out top-0 z-50 w-full ${scroll > 120 ? "bg-black" : "bg-black/50"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
          <img src={"/assets/logo.png"} alt="Nona's Restaurant" className="reveal mx-auto h-10 w-10 rounded-full bg-white object-contain shadow-2xl ring-2 ring-white" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-sm font-medium text-[#E3D5C3] transition-colors duration-150 hover:text-[#C86632]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.doordash.com/store/nona’s-restaurant-lodi-30510461/40175558/?rwg_token=AE37R_gM84b4JesefYU7BWnKjQeS5Oc-hICYPqvkJV0KgiOzQ0EjK62W6F5QwGx5NbdmnHkSpbARoEgT0UQS65VmgY03W1DvKw==&utm_campaign=gpa"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#E3D5C3] px-4 py-2 text-sm font-medium text-[#2A2725] transition-all duration-300 hover:scale-110 hover:bg-[#C86632] hover:text-[#E3D5C3]"
          >
            Order Now!
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
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
        <div className="md:hidden border-b border-gray-200 bg-white px-4 pt-2 pb-6">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-700 hover:text-indigo-600"
              >
                {item.label}
              </Link>
            ))}
            <hr className="my-2 border-gray-100" />
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-gray-700 hover:text-indigo-600"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsOpen(false)}
              className="rounded-lg bg-indigo-600 py-2.5 text-center text-base font-medium text-white hover:bg-indigo-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}