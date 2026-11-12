// import { Project } from '@/lib/projects-db';
import { getProjects } from '@/lib/projects-db';
import { Suspense } from 'react';

async function SchoolProjectList() {
  // Fetch with query parameter
  // const res = await fetch('http://localhost:3000/api/projects?type=school', { cache: 'force-cache' });
  // const projects: Project[] = await res.json();

  const projects = await getProjects('school');

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

export default async function SchoolProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">School Projects</h2>
      <Suspense fallback={<p className="text-gray-500 animate-pulse">Loading projects...</p>}>
        <SchoolProjectList />
      </Suspense>
    </div>
  );
}