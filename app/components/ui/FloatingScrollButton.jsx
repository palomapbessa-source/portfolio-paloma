"use client";

import Image from "next/image";

export default function FloatingScrollButton() {

  const scrollToProjects = () => {
    const section = document.getElementById("projetos");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (

    <button
      onClick={scrollToProjects}
      aria-label="Ir para projetos"
      className="
        animate-floating
        flex
        items-center
        gap-3
        text-[#FF7A7A]
        hover:opacity-70
        transition-opacity
        duration-300
        cursor-pointer
      "
    >

      {/* ÍCONE */}
      <Image
        src="/icons/hand-down.svg"
        alt=""
        width={56}
        height={56}
        className="w-14 h-14"
        />

      {/* TEXTO */}
      <span
        className="
          text-[16px]
          uppercase
          tracking-[0.10em]
          font-medium
        "
      >
        Projetos
      </span>

    </button>

  );
}