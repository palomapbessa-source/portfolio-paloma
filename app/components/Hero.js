import FloatingScrollButton from "@/app/components/ui/FloatingScrollButton";

export default function Hero() {
  return (

    <section
      className="
        bg-gradient-to-b
        from-[#F2C2C2]
        to-[#D0C2F2]

        rounded-b-[48px]
        md:rounded-b-[64px]

        overflow-hidden
      "
    >

      <div
        className="
          max-w-6xl
          mx-auto
          px-4

          h-screen

          flex
          flex-col
          items-center
          justify-between

          text-center
        "
      >

        {/* ESPAÇO SUPERIOR */}
        <div />

        {/* TEXTO */}
        <div className="w-full">

          <h1
            className="
              font-[family-name:var(--font-pt-serif)]

              text-[48px]
              md:text-[72px]

              font-normal

              leading-[0.95]

              tracking-[-0.03em]

              text-[#312255]
            "
          >
            Construindo experiências significativas
          </h1>

          <p
            className="
              mt-8
              mx-auto
              max-w-2xl

              text-[#171717]

              text-[18px]
              md:text-[24px]

              leading-[1.5]
            "
          >
            Product UX Designer com foco em criar soluções
            estratégicas, intuitivas e centradas nas pessoas
          </p>

        </div>

        {/* BOTÃO */}
        <div className="pb-8 md:pb-10">
          <FloatingScrollButton />
        </div>

      </div>

    </section>

  );
}