import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              imageSrc={project.imageSrc}
              href={`/work/${project.slug}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
