"use client"
import { useEffect } from 'react';
import { useContextData } from '@/code/typescript/context/Provider';

const SectionHashScrollHandler = () => {
  const { sectionHash, setSectionHash } = useContextData()

  useEffect(() => {
    if (!sectionHash) return;

    const timer = setTimeout(() => {
      const targetElement = document.querySelector(sectionHash)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" })
        setSectionHash("")
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [sectionHash, setSectionHash])

  return null
}

export default SectionHashScrollHandler