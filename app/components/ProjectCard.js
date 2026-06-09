import Image from "next/image";
import Link from "next/link";

import Tag from "@/app/components/ui/Tag";

export default function ProjectCard({
project,
priority = false,
}) {

const mobileTags = project.tags.slice(0, 3);
const desktopTags = project.tags.slice(0, 4);

return (

<Link
  href={`/cases/${project.slug}`}
  className="
    group
    block

    overflow-hidden
    rounded-lg

    bg-white

    shadow-sm

    transition-all
    duration-300

    md:hover:scale-105
    md:hover:shadow-lg
  "
>

  {/* IMAGEM */}
  <div
    className="
      relative
      aspect-[4/3]
      overflow-hidden
    "
  >

    <Image
      src={project.image}
      alt={project.title}
      fill
      priority={priority}
      sizes="(max-width: 768px) 100vw, 50vw"
      className="
        object-cover

        transition-transform
        duration-500

        group-hover:scale-105
      "
    />

  </div>

  {/* CONTEÚDO */}
  <div className="p-5">

    <h3
      className="
        text-lg
        font-semibold

        text-[var(--brand-primary-700)]
      "
    >
      {project.title}
    </h3>

    {/* MOBILE */}
    <div
      className="
        mt-4

        flex
        gap-2

        overflow-hidden

        md:hidden
      "
    >

      {mobileTags.map((tag, index) => (

        <Tag
          key={`${project.slug}-${tag}-${index}`}
        >
          {tag}
        </Tag>

      ))}

      {project.tags.length > 3 && (

        <Tag>
          +{project.tags.length - 3}
        </Tag>

      )}

    </div>

    {/* DESKTOP */}
    <div
      className="
        hidden

        md:flex
        gap-2

        mt-4

        overflow-hidden
      "
    >

      {desktopTags.map((tag, index) => (

        <Tag
          key={`${project.slug}-${tag}-${index}`}
        >
          {tag}
        </Tag>

      ))}

      {project.tags.length > 4 && (

        <Tag>
          +{project.tags.length - 4}
        </Tag>

      )}

    </div>

  </div>

</Link>

);

}
