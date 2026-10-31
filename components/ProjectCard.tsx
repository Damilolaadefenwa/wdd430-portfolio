interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  liveDemoLink?: string;
}

export default function ProjectCard({ title, description, technologies, link, liveDemoLink }: ProjectCardProps) {
  return (
    <article className="p-6 border-l-4 border-blue-600 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4 grow">{description}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {tech}
          </span>
        ))}
      </div>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block mt-auto text-violet-950 font-medium hover:text-blue-800 hover:underline">
          View Code &rarr;
        </a>
      )}
      {liveDemoLink && (
        <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-emerald-950 font-medium hover:text-green-800 hover:underline">
          Live Demo &rarr;
        </a>
      )}
    </article>
  );
}