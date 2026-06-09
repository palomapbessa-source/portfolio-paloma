import Link from "next/link";
import Image from "next/image";

export default function BackButton({
  href = "/",
  label = "Voltar para home",
  direction = "left",
}) {

  const isRight = direction === "right";

  return (

    <Link
      href={href}

      className="
        group

        inline-flex

        items-center

        gap-2

        text-sm

        font-medium

        text-[#4B4B4B]

        transition-all

        duration-300

        hover:text-[#312255]
      "
    >

      {/* ÍCONE ESQUERDA */}

      {!isRight && (

        <Image
          src="/icons/arrow.svg"
          alt={label}
          width={24}
          height={24}

          className="
            transition-transform
            duration-300

            group-hover:-translate-x-1
          "
        />

      )}

      {/* TEXTO */}

      <span
        className="
          transition-all

          duration-300

          group-hover:font-bold
        "
      >
        {label}
      </span>

      {/* ÍCONE DIREITA */}

      {isRight && (

        <Image
          src="/icons/arrow.svg"

          alt={label}

          width={24}

          height={24}

          className="
            rotate-180

            transition-transform

            duration-300

            group-hover:translate-x-1
          "
        />

      )}

    </Link>

  );

}