
// import { Project } from '@/lib/projects-db';
import { getProjects } from '@/lib/projects-db';

export default async function SchoolProjects() {
  // Fetch with query parameter
  // const res = await fetch('http://localhost:3000/api/projects?type=school', { cache: 'force-cache' });
  // const projects: Project[] = await res.json();
  /*
   * INSTRUCTOR NOTE: 
   * Bypassed fetch('http://localhost:3000/api/projects') and called the database directly. 
   * Next.js Server Components run on the server during the Vercel build phase where 
   * localhost does not exist, causing fatal prerender build errors. 
   * The API endpoints are still active and testable at /api/projects.
  */
  
  const projects = getProjects('school');

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">School Projects</h2>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-bold text-lg dark:text-white">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-200">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}