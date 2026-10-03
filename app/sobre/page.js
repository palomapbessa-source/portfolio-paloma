import BackButton from "@/app/components/ui/BackButton";
import Image from "next/image";
import ProfileCard from "@/app/components/ui/ProfileCard";

export default function Sobre() {
  return (
    <main className="pt-24 pb-16 min-h-screen">

      <div className="max-w-6xl mx-auto px-4">

        {/* SOBRE */}
        <div className="mt-8 grid md:grid-cols-2 gap-10 items-center">

          {/* TEXTO */}
          <div>

            <h1 className="text-3xl md:text-4xl font-bold text-[var(--brand-primary-900)]">
              Sobre mim
            </h1>

            <p className="mt-4 text-[16px] leading-[24px] text-[var(--text-primary)]">
              Minha trajetória profissional começou na Comunicação e se
              consolidou ao longo de 10 anos no Design Editorial, período em
              que desenvolvi uma base sólida em gestão de projetos,
              comunicação visual e atenção aos detalhes. Essa experiência
              formou um repertório que hoje aplico ao desenvolvimento de
              produtos digitais.
            </p>

            <p className="mt-4 text-[16px] leading-[24px] text-[var(--text-primary)]">
              Em 2020, migrei para Product Design, passando a atuar além da
              interface, investigando problemas, compreendendo necessidades
              dos usuários e definindo soluções alinhadas aos objetivos do
              produto. Desde então, há mais de 5 anos, atuo em produtos
              digitais, integrando UX Research, Product Discovery, UX/UI e
              Design Systems.
            </p>

            <p className="mt-4 text-[16px] leading-[24px] text-[var(--text-primary)]">
              Hoje, meu principal diferencial está em conectar visão de
              usuário, estratégia de produto e qualidade de interface,
              combinando pesquisa, dados e novas tecnologias, como IA, para
              transformar problemas complexos em experiências simples,
              acessíveis e escaláveis.
            </p>

          </div>


          {/* ESPAÇO RESERVADO PARA O CARD */}
          <div className="flex items-center justify-center">
            <ProfileCard />
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