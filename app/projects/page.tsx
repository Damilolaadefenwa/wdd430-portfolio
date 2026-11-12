// import { Project } from '@/lib/projects-db';
import { Suspense } from 'react';
import { getProjects } from '@/lib/projects-db';

// 1. Inner component that fetches the database rows
async function ProjectList() {
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
}


// 2. Main page renders the heading immediately and wraps ProjectList in Suspense
export default function ProjectsOverview() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">All Projects</h2>
      <Suspense fallback={<p className="text-gray-500 animate-pulse">Loading projects...</p>}>
        <ProjectList />
      </Suspense>
    </div>
  );
}


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