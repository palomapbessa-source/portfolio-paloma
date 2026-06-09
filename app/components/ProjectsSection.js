"use client";

import { useState } from "react";
import Image from "next/image";

import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

const PROJECTS_PER_PAGE = 4;

export default function ProjectsSection() {

const [visibleProjects, setVisibleProjects] = useState(
PROJECTS_PER_PAGE
);

const [loading, setLoading] = useState(false);

const hasPagination =
projects.length > PROJECTS_PER_PAGE;

const allProjectsVisible =
visibleProjects >= projects.length;

const loadMore = () => {

setLoading(true);

setTimeout(() => {

  setVisibleProjects((prev) =>
    Math.min(
      prev + PROJECTS_PER_PAGE,
      projects.length
    )
  );

  setLoading(false);

}, 500);

};

const showLessProjects = () => {

setVisibleProjects(PROJECTS_PER_PAGE);

const section =
  document.getElementById("projetos");

if (section) {

  window.scrollTo({
    top: section.offsetTop - 100,
    behavior: "smooth",
  });

}
};

const handleProjectsButton = () => {

if (allProjectsVisible) {
  showLessProjects();
  return;
}

loadMore();

};

return (

<section
  id="projetos"
  className="py-24 pb-0"
>

  <div className="max-w-6xl mx-auto px-4">

    <h2
      className="
        text-3xl
        md:text-4xl
        font-bold
        text-[var(--brand-primary-900)]
      "
    >
      Projetos
    </h2>

    <div
      className="
        grid
        md:grid-cols-2
        gap-8
        mt-12
      "
    >

      {projects
        .slice(0, visibleProjects)
        .map((project, index) => (

          <ProjectCard
            key={project.slug}
            project={project}
            priority={index === 0}
          />

      ))}

    </div>

    {hasPagination && (

      <div
        className="
          mt-16
          flex
          justify-center
        "
      >

        <button
          onClick={handleProjectsButton}
          disabled={loading}
          className="
            inline-flex
            items-center
            justify-center
            gap-3

            min-w-[220px]

            px-8
            py-4

            rounded-full

            bg-[var(--brand-accent-500)]

            text-[var(--background)]
            font-semibold

            transition-all
            duration-300

            hover:opacity-90

            disabled:opacity-70
          "
        >

          {loading ? (

            <>

              <span
                className="
                  h-4
                  w-4

                  rounded-full

                  border-2
                  border-[var(--background)]
                  border-t-transparent

                  animate-spin
                "
              />

              Carregando...

            </>

          ) : (

            <>

              <Image
                src="/icons/grid-view.svg"
                alt=""
                aria-hidden="true"
                width={20}
                height={20}
              />

              {allProjectsVisible
                ? "Menos projetos"
                : "Mais projetos"}

            </>

          )}

        </button>

      </div>

    )}

  </div>

</section>

);

}
