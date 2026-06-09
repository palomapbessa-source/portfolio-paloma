import Image from "next/image";
import BackButton from "@/app/components/ui/BackButton";


export default function Sobre() {
  return (
    <main className="pt-24 pb-16 min-h-screen">

      <div className="max-w-6xl mx-auto px-4">

        {/* HERO SOBRE */}
        <div className="mt-8 grid md:grid-cols-2 gap-10 items-start">

          {/* TEXTO */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--brand-primary-900)]">
              Quem sou
            </h1>

            <p className="mt-4 text-[var(--neutral-900)] leading-relaxed">
              Sou Paloma Bessa, Product UX Designer com mais de 5 anos de experiência em produtos digitais,
              atuando de ponta a ponta — da pesquisa à interface — com foco em acessibilidade, clareza e consistência.
            </p>

            <p className="mt-4 text-[var(--neutral-900)] leading-relaxed">
              Ao longo de mais de 10 anos no design gráfico, refinei um olhar crítico para interface e qualidade visual,
              permitindo transformar complexidade em experiências claras e eficazes.
            </p>

            <h2
            className="
              mt-12

              text-[24px]
              leading-[32px]

              font-bold

              text-[var(--brand-primary-700)]
            "
            >
              Como trabalho
            </h2>

            <p className="mt-4 text-[var(--neutral-900)] leading-relaxed">
              Sou movida por curiosidade e aprendizado contínuo, buscando compreender profundamente o comportamento humano
              para criar soluções que conectem necessidades reais e objetivos de negócio.
            </p>

            <p className="mt-4 text-[var(--neutral-900)] leading-relaxed">
              Atuo de forma transversal entre UX Research, arquitetura da informação e design de interação.
            </p>
          </div>

          {/* IMAGEM */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/paloma_foto.png"
              alt="Paloma Bessa, Product UX Designer, smiling at camera in professional portrait"
              width={500}
              height={500}
              className="w-full max-w-md h-auto object-contain"
              priority
            />
          </div>

        </div>

        {/* COMPETÊNCIAS */}

          <h2
            className="
              mt-12

              text-[24px]
              leading-[32px]

              font-bold

              text-[var(--brand-primary-700)]
            "
          >
            Competências
          </h2>

          <div
            className="
              mt-4

              grid
              md:grid-cols-3

              gap-8
            "
          >

            {/* UX & PRODUTO */}

            <div
              className="
                pl-6

                border-l-2
                border-[var(--brand-accent-500)]
              "
            >

              <div
                className="
                  w-12
                  h-12

                  rounded-lg

                  bg-[var(--support-primary-100)]

                  flex
                  items-center
                  justify-center
                "
              >

                <Image
                  src="/icons/ux-icon.svg"
                  alt="UX & Produto"
                  width={24}
                  height={24}
                />

              </div>

              <h3
                className="
                  mt-4

                  text-[16px]
                  leading-[24px]

                  font-semibold

                  text-[var(--brand-primary-700)]
                "
              >
                UX & Produto
              </h3>

              <ul className="mt-4 space-y-1">

                {[
                  "UX Research",
                  "Arquitetura da Informação",
                  "Design de Interação",
                  "Colaboração & Trabalho com times ágeis",
                ].map((item) => (

                  <li
                    key={item}
                    className="
                      flex
                      gap-2
                      items-start
                    "
                  >

                    <Image
                      src="/icons/service-bullet.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="mt-0.5"
                    />

                    <span
                      className="
                        text-[16px]
                        leading-[24px]

                        text-[var(--text-secondary)]
                      "
                    >
                      {item}
                    </span>

                  </li>

                ))}

              </ul>

            </div>

            {/* UI DESIGN */}

            <div
              className="
                pl-6

                border-l-2
                border-[var(--brand-accent-500)]
              "
            >

              <div
                className="
                  w-12
                  h-12

                  rounded-lg

                  bg-[var(--support-primary-100)]

                  flex
                  items-center
                  justify-center
                "
              >

                <Image
                  src="/icons/ui-icon.svg"
                  alt="UI Design"
                  width={24}
                  height={24}
                />

              </div>

              <h3
                className="
                  mt-4

                  text-[16px]
                  leading-[24px]

                  font-semibold

                  text-[var(--brand-primary-700)]
                "
              >
                UI Design
              </h3>

              <ul className="mt-4 space-y-1">

                {[
                  "Acessibilidade",
                  "Consistência visual",
                  "Design System",
                  "Prototipação",
                  "Handoff",
                ].map((item) => (

                  <li
                    key={item}
                    className="
                      flex
                      gap-2
                      items-start
                    "
                  >

                    <Image
                      src="/icons/service-bullet.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="mt-0.5"
                    />

                    <span
                      className="
                        text-[16px]
                        leading-[24px]

                        text-[var(--text-secondary)]
                      "
                    >
                      {item}
                    </span>

                  </li>

                ))}

              </ul>

            </div>

            {/* SOFTSKILLS */}

            <div
              className="
                pl-6

                border-l-2
                border-[var(--brand-accent-500)]
              "
            >

              <div
                className="
                  w-12
                  h-12

                  rounded-lg

                  bg-[var(--support-primary-100)]

                  flex
                  items-center
                  justify-center
                "
              >

                <Image
                  src="/icons/softskills-icon.svg"
                  alt="Softskills"
                  width={24}
                  height={24}
                />

              </div>

              <h3
                className="
                  mt-4

                  text-[16px]
                  leading-[24px]

                  font-semibold

                  text-[var(--brand-primary-700)]
                "
              >
                Softskills
              </h3>

              <ul className="mt-4 space-y-1">

                {[
                  "Organização",
                  "Pensamento analítico",
                  "Empatia & Curiosidade",
                  "Aprendizado contínuo",
                  "Comunicação com devs e PMs",
                ].map((item) => (

                  <li
                    key={item}
                    className="
                      flex
                      gap-2
                      items-start
                    "
                  >

                    <Image
                      src="/icons/service-bullet.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="mt-0.5"
                    />

                    <span
                      className="
                        text-[16px]
                        leading-[24px]

                        text-[var(--text-secondary)]
                      "
                    >
                      {item}
                    </span>

                  </li>

                ))}

              </ul>

            </div>

          </div>

        {/* FORMAÇÃO */}

        <div
          className="
            mt-12

            flex
            flex-col

            md:flex-row
            md:items-end
            md:justify-between

            gap-8
          "
        >

          <div>

            <h2
              className="
                text-[24px]
                leading-[32px]

                font-bold

                text-[var(--brand-primary-700)]
              "
            >
              Formação
            </h2>

            <p
              className="
                mt-4

                text-[16px]
                leading-[24px]

                text-[var(--text-secondary)]
              "
            >
              Pós-graduação em UX Design — ESPM
              <br />
              Bacharelado em Comunicação — PUC SP
            </p>

          </div>

          <div className="flex justify-center mt-8">

          <a
            href="/curriculo.pdf"
            download
            className="
              inline-flex

              items-center
              justify-center

              gap-3

              px-8
              py-4

              rounded-full

              bg-[var(--brand-accent-500)]

              text-white
              font-semibold

              hover:opacity-90
              transition-opacity
            "
          >

            <Image
              src="/icons/download.svg"
              alt=""
              width={24}
              height={24}
            />

            <span>Baixar currículo</span>

          </a>

        </div>

        </div>

      {/* VOLTAR PARA HOME */}

      <div
        className="
          mt-24

          flex

          justify-center
        "
      >

        <BackButton />
        </div>
      </div>
    </main>
  );
}