// import { Project } from '@/lib/projects-db';
import { Suspense } from 'react';
import {fetchFilteredProjects, fetchProjectsPages } from '@/lib/projects-db';
import { ProjectSearch } from '@/components/ProjectSearch';
import { Pagination } from '@/components/Pagination';

async function FilteredProjectsContent({
  searchParams,
}: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const resolvedParams = searchParams ? await searchParams : undefined;
  const query = resolvedParams?.query || '';
  const currentPage = Number(resolvedParams?.page) || 1;

  const [projects, totalPages] = await Promise.all([
    fetchFilteredProjects(query, currentPage),
    fetchProjectsPages(query),
  ]);

  return (
    <>
      {projects.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          No projects found matching &ldquo;{query}&rdquo;.
        </p>
      ) : (
        <ul className="space-y-4">
          {projects.map((project) => (
            <li
              key={project.id}
              className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              <h3 className="font-bold text-lg dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-200 mt-1">
                {project.description}
              </p>
              {project.technologies && project.technologies.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-blue-100 dark:bg-blue-900 px-2 py-0.5 text-xs font-medium text-blue-800 dark:text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}

      <Pagination totalPages={totalPages} />
    </>
  );
}

export default function ProjectsOverview({
  searchParams,
}: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        All Projects
      </h2>

      {/* Suspense is required in Next.js 16 for Client Components using useSearchParams */}
      <Suspense
        fallback={
          <div className="h-10 w-full rounded-lg bg-gray-200 dark:bg-gray-700 mb-6 animate-pulse" />
        }
      >
        <ProjectSearch />
      </Suspense>

      <Suspense
        fallback={
          <p className="text-gray-500 animate-pulse">Loading projects...</p>
        }
      >
        <FilteredProjectsContent searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

// 1. Inner component that fetches the database rows
/* async function ProjectList() {
  // Fetch my your new API
  // const res = await fetch('http://localhost:3000/api/projects', { cache: 'force-cache' });
  // const projects: Project[] = await res.json();

  const projects = await getProjects();

  return (
    <ul className="space-y-4">
      {Array.isArray(projects) && projects.map((project) => (
        <li key={project.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h3 className="font-bold text-lg dark:text-white">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-200">{project.description}</p>
        </li>
      ))}
    </ul>
  );
} */


// 2. Main page renders the heading immediately and wraps ProjectList in Suspense
/* export default function ProjectsOverview() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">All Projects</h2>
      <Suspense fallback={<p className="text-gray-500 animate-pulse">Loading projects...</p>}>
        <ProjectList />
      </Suspense>
    </div>
  );
}
 */

/* export default async function ProjectsOverview() {
  
  const projects = await getProjects();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">All Projects</h2>
      <ul className="space-y-4">
        {Array.isArray(projects) && projects.map((project) => (
          <li key={project.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-bold text-lg dark:text-white">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-200">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
} */