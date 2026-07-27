"use client";

import { useEffect } from "react";
import { useContextData } from "@/code/typescript/context/Provider";

const SectionHashScrollHandler = () => {
  const { sectionHash, setSectionHash } = useContextData();

  useEffect(() => {
    if (!sectionHash) return;

    const attemptScroll = () => {
      const targetElement = document.querySelector(sectionHash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        setSectionHash("");
        return true;
      }
      return false;
    };

    if (attemptScroll()) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      attemptScroll();
    }, 250);

    return () => window.clearTimeout(timeoutId);
  }, [sectionHash, setSectionHash]);

  return null;
};

export default SectionHashScrollHandler;
