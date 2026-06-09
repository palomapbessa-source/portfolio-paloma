"use client";

import { useState } from "react";
import ContactModal from "./contact/ContactModal";
import Image from "next/image";
import ContactToast from "./contact/ContactToast";

export default function ContactCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [showToast, setShowToast] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSuccess = () => {

    setIsModalOpen(false);

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);

  };

  return (
    <>

    <div
      className="
        w-full

        h-auto
        md:h-[400px]

        flex
        flex-col
        md:flex-row

        items-center

        gap-12
        md:gap-16

        py-12
      "
    >

      {/* CONTEÚDO */}

      <div
        className="
          flex-1

          flex
          flex-col
          justify-center
        "
      >

        <h3
          className="
            text-[36px]
            leading-[40px]

            font-bold

            text-[var(--brand-primary-900)]
          "
        >
          Tem um desafio, oportunidade
          <br />
          ou produto para evoluir?
        </h3>

        <p
          className="
            mt-8

            text-[22px]
            leading-[150%]

            text-[var(--neutral-500)]

            max-w-[620px]
          "
        >
          Ajudo empresas e times a transformar
          hipóteses em soluções digitais estratégicas
          com foco em clareza, execução e resultado.
        </p>

        <button
        onClick={() => setIsModalOpen(true)}
          className="
            mt-8

            w-fit

            px-8
            py-4

            rounded-full

            bg-[var(--brand-accent-500)]

            text-white
            font-semibold

            transition-all
            duration-300

            hover:opacity-90
          "
        >
          Vamos conversar
        </button>

      </div>

      {/* IMAGEM */}

      <div
        className="
          flex-1

          h-full

          flex
          items-center
          justify-center
        "
      >

        <div
          className="
            relative

            h-[300px]
            md:h-full

            aspect-square
          "
        >

          <Image
            src="/images/contato.png"
            alt="Vamos conversar"
            fill
            sizes="(max-width: 768px) 80vw, 500px"
            className="
              object-contain
            "
          />

        </div>
        <ContactModal
        isOpen={isModalOpen}
        onClose={closeModal}
        />

      </div>

    </div>

    </>
  );
}
