"use client";
import ContactForm from "./ContactForm";
import Image from "next/image";

export default function ContactModal({
  isOpen,
  onClose,
  onSuccess,
}) {

  if (!isOpen) return null;

  return (

    <div
      className="
        fixed
        inset-0
        z-50

        flex
        items-center
        justify-center

        bg-black/50
      "
    >

      <div
        className="

          relative
          
          bg-[var(--background)]

          w-[90%]
          max-w-[600px]

          rounded-3xl

          p-8
        "
      >

        <div className="flex justify-end mb-10">

            <button
                onClick={onClose}
                aria-label="Fechar modal"
                className="
                    absolute

                    top-10
                    right-10

                    flex
                    items-center
                    justify-center

                    text-[var(--neutral-500)]

                    hover:opacity-70
                    transition-opacity
                "
                >
                <Image
                    src="/icons/close.svg"
                    alt="Fechar"
                     width={24}
                    height={24}
                />
            </button>

        </div>

        <h2
        className="
            text-[36px]
            leading-[40px]
            font-bold
            text-[var(--brand-primary-900)]
        "
        >
        Vamos conversar?
        </h2>

        <p
        className="
            mt-4

            text-[22px]
            leading-[150%]

            text-[var(--neutral-500)]
        "
        >
        Me conta sobre seu projeto ou desafio.
        </p>

        <ContactForm onSuccess={onSuccess} />

      </div>

    </div>

  );

}