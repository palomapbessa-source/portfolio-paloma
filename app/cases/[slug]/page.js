import { projects } from "@/data/projects";
import CaseTemplate from "@/app/components/CaseTemplate";

export default async function CasePage({ params }) {

  const resolvedParams = await params;

  const slug = resolvedParams.slug;

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    return (
      <main className="pt-24 px-4">
        Projeto não encontrado
      </main>
    );
  }

  return (
    <CaseTemplate
      project={project}
      projects={projects}
    />
  );
}