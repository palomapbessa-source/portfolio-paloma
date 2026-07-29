"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="https://wa.me/551144885155?text=Olá,%20Paloma!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      className={`
        fixed
        z-50

        right-5
        md:right-8

        ${
          isFooterVisible
            ? "bottom-32 md:bottom-32"
            : "bottom-8"
        }

        flex
        items-center
        justify-center

        w-14
        h-14

        md:w-16
        md:h-16

        rounded-full
        bg-[#25D366]

        shadow-lg

        transition-all
        duration-300

        hover:scale-105
        hover:bg-[#20BA5A]
      `}
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
}