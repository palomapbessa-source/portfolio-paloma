import Hero from "@/app/components/Hero";
import ProjectsSection from "@/app/components/ProjectsSection";
import ServicesSection from "@/app/components/ServicesSection";

export default function Home() {
  return (
    <div className="bg-[var(--background)]">
      <Hero />
      <ProjectsSection />
      <ServicesSection />
    </div>
  );
}