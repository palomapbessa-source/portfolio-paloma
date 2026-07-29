import Grainient from "./Grainient";

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-b-[48px]
        md:rounded-b-[64px]
      "
    >
      {/* Background */}
      <Grainient
      color1="#F2C2C2"
      color2="#D0C2F2"
      color3="#E4E6EF"
      timeSpeed={4}
      colorBalance={0}
      warpStrength={1}
      warpFrequency={5}
      warpSpeed={2}
      warpAmplitude={50}
      blendAngle={0}
      blendSoftness={0.05}
      rotationAmount={500}
      noiseScale={2}
      grainAmount={0}
      grainScale={2}
      grainAnimated={false}
      contrast={1.5}
      gamma={1}
      saturation={1}
      centerX={0}
      centerY={0}
      zoom={0.9}
    />

      {/* Conteúdo */}
      <div
        className="
          relative
          z-10

          max-w-5xl
          mx-auto
          min-h-screen

          px-4

          flex
          items-center
          justify-center

          text-center
        "
      >

        {/* Texto */}
        <div
          className="
            max-w-5xl

            flex
            flex-col
            items-center

            gap-8
          "
        >
          <h1
            className="

              font-[family-name:var(--font-montserrat)]

              text-[48px]
              md:text-[72px]

              font-semibold

              leading-[0.95]

              tracking-[-0.03em]

              text-[#312255]
            "
          >
            Construindo experiências significativas
          </h1>

          <p
            className="
              mx-auto
              max-w-2xl

              text-[var(--neutral-500)]

              text-[18px]
              md:text-[24px]

              leading-[1.5]
            "
          >
            Product UX Designer com foco em criar soluções
            estratégicas, intuitivas e centradas nas pessoas
          </p>

          {/* botão */}
          <a
            href="#contato"
            className="
              inline-flex
              items-center
              justify-center

              h-14
              px-8

              rounded-full

              bg-[#FF7A7A]
              text-white

              font-medium

              transition-all
              duration-300

              hover:scale-105
              hover:bg-[#FF6B6B]
            "
          >
            Vamos conversar
          </a>
        </div>

      </div>
    </section>
  );
}