//importing Vercel live query into my project database file to enable 
// live queries and real-time updates for project data. 

import { sql } from '@vercel/postgres';

// Temporary debug check:
console.log('Loaded POSTGRES_URL:', process.env.POSTGRES_URL ? 'FOUND' : 'MISSING');

export interface Project {
  id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school';
  technologies: string[];
  link?: string;
}

export async function getProjects(type?: string | null): Promise<Project[]> {
  if (type) {
    const { rows } = await sql<Project>`
      SELECT * FROM projects WHERE type = ${type} ORDER BY id
    `;
    return rows;
  }
  const { rows } = await sql<Project>`SELECT * FROM projects ORDER BY id`;
  return rows;
}

export async function getProjectById(id: number): Promise<Project | null> {
  const { rows } = await sql<Project>`
    SELECT * FROM projects WHERE id = ${id}
  `;
  return rows[0] ?? null;
}

// ADDING PAGINATION AND FILTERING FUNCTIONALITY TO THE PROJECTS DATABASE FILE
// 1. Set to 3 items per page so you can test pagination with your 5 projects.
const ITEMS_PER_PAGE = 3;

export async function fetchFilteredProjects(
  query: string,
  currentPage: number
): Promise<Project[]> {
  //Adding input validation to ensure that the currentPage is always a whole number of 1 or higher
  const safePage = Math.max(1, Math.floor(currentPage) || 1);
  const offset = (safePage - 1) * ITEMS_PER_PAGE;

  // Escape literal % and _ characters so they don't act as unintended wildcards
  const safeQuery = query.trim().slice(0, 100).replace(/[%_\\]/g, '\\$&');
  const searchTerm = `%${safeQuery}%`;

  const { rows } = await sql<Project>`
    SELECT * FROM projects
    WHERE
      title ILIKE ${searchTerm} OR
      description ILIKE ${searchTerm} OR
      array_to_string(technologies, ' ') ILIKE ${searchTerm}
    ORDER BY id
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
  `;

  return rows;
}

//2. Function to fetch the total number of pages based on the filtered projects
export async function fetchProjectsPages(query: string): Promise<number> {
  const searchTerm = `%${query}%`;

  const { rows } = await sql<{ count: string }>`
    SELECT COUNT(*) FROM projects
    WHERE
      title ILIKE ${searchTerm} OR
      description ILIKE ${searchTerm} OR
      array_to_string(technologies, ' ') ILIKE ${searchTerm}
  `;

  const totalCount = Number(rows[0]?.count ?? 0);
  return Math.ceil(totalCount / ITEMS_PER_PAGE);
}