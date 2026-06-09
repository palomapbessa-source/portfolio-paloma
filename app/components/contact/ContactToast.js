import Image from "next/image";

export default function ContactToast() {
  return (
    <div
      className="
        fixed
        top-6
        left-1/2
        -translate-x-1/2

        z-[9999]

        flex
        items-center
        gap-3

        px-6
        py-4

        rounded-2xl

        bg-[var(--support-success-100)]

        shadow-[0_8px_24px_rgba(0,0,0,0.12)]
      "
    >
      <Image
        src="/icons/check.svg"
        alt=""
        width={24}
        height={24}
      />

      <span
        className="
          text-[16px]
          leading-[24px]
          font-normal

          text-[var(--neutral-900)]
        "
      >
        Mensagem enviada! Retornarei em breve.
      </span>
    </div>
  );
}