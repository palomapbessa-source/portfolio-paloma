import CaseGallery from "@/app/components/CaseGallery";
import BackButton from "@/app/components/ui/BackButton";

export default function CaseTemplate({
  project,
  projects,
}) {

  if (!project) {
    return (
      <main className="pt-24 px-4">
        Projeto não encontrado
      </main>
    );
  }

  const currentIndex =
  projects.findIndex(
    (p) => String(p.slug) === String(project.slug)
  );

  const hasNext =
    currentIndex !== -1 &&
    currentIndex < projects.length - 1;

  const nextProject =
    hasNext
      ? projects[currentIndex + 1]
      : null;

  return (

    <main className="pt-24 pb-24  min-h-screen">

      {/* CONTEÚDO */}
      <div className="max-w-[700px] mx-auto px-4">

        <h1
          className="
            mt-10
            text-4xl
            md:text-5xl
            font-bold
            leading-tight
            text-[#312255]
          "
        >
          {project.title}
        </h1>

        {/* TAGS */}
        {project.tags?.length > 0 && (

          <div className="flex flex-wrap gap-3 mt-6">

            {project.tags.map((tag) => (

              <span
                key={tag}
                className="
                  px-3
                  py-1
                  rounded-full
                  border
                  border-[#D9D9D9]
                  text-sm
                  text-[#4B4B4B]
                  bg-white
                "
              >
                {tag}
              </span>

            ))}

          </div>

        )}

        {/* SEÇÕES */}

        {project.sections?.length > 0 && (

          <div className="mt-20 space-y-20">

            {project.sections.map((section) => (

              <section key={section.title}>

                <h2
                  className="
                    text-[28px]
                    md:text-[32px]
                    font-semibold
                    text-[#F26D6D]
                  "
                >
                  {section.title}
                </h2>

                {section.content && (

                  <p
                    className="
                      mt-6
                      text-[#4B4B4B]
                      text-lg
                      leading-relaxed
                    "
                  >
                    {section.content}
                  </p>

                )}

                {section.list?.length > 0 && (

                  <ul
                    className="
                      mt-6
                      pl-6
                      list-disc
                      space-y-2
                      text-lg
                      text-[#4B4B4B]
                    "
                  >

                    {section.list.map((item) => (

                      <li key={item}>
                        {item}
                      </li>

                    ))}

                  </ul>

                )}

                {/* GALERIA DENTRO DA SEÇÃO */}

                {/* GALERIAS DA SEÇÃO */}

                {section.galleries?.length > 0 && (

                  <div className="mt-14 space-y-16">

                    {section.galleries.map((gallery, i) => (

                      <div
                        key={i}
                        className="
                          relative
                          left-1/2

                          w-screen
                          max-w-6xl

                          -translate-x-1/2

                          px-4
                        "
                      >

                        <CaseGallery
                          images={gallery.images}
                          columns={gallery.columns}
                        />

                        {gallery.caption && (

                          <p
                            className="
                              mt-5

                              max-w-[700px]

                              mx-auto

                              text-center

                              italic

                              text-sm

                              leading-relaxed

                              text-[#8C8A97]
                            "
                          >
                            {gallery.caption}
                          </p>

                        )}

                      </div>

                    ))}

                  </div>

                )}

              </section>

            ))}

          </div>

        )}

      </div>

      {/* GALERIA FINAL */}


      {project.gallery?.length > 0 && (

        <div
          className="
            mt-24

            relative

            left-1/2

            w-screen

            max-w-6xl

            -translate-x-1/2

            px-4
          "
        >

          <CaseGallery
            images={project.gallery}
            columns={project.galleryColumns}
          />

        </div>

      )}


      {/* NAVEGAÇÃO ENTRE CASES */}

      <div
        className="
          mt-24

          flex

          justify-center
        "
      >

        <BackButton
          href={
            nextProject
              ? `/cases/${nextProject.slug}`
              : "/#projetos"
          }

          label={
            nextProject
              ? "Próximo projeto"
              : "Voltar para projetos"
          }

          direction={
            nextProject
              ? "right"
              : "left"
          }
        />

      </div>

    </main>

  );

}