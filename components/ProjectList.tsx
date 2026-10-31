import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  liveDemoLink?: string;
}

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
}

