// lib/projects-db.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school';
  technologies: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'StoreKeep',
    description: 'A modern e-commerce web application featuring dynamic weather forecasting via the Open-Meteo API and Shopify Admin-API store data integration.',
    type: 'school',
    technologies: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    id: 2,
    title: 'The Stellar Stitch',
    description: 'A responsive space-themed apparel and rocket toy e-commerce website.',
    type: 'opensource',
    technologies: ['JavaScript', 'HTML5', 'Tailwind CSS'],
    link: 'https://github.com/Damilolaadefenwa/theStellarStitch'
  },
  {
    id: 3,
    title: 'The Assignment Tracker',
    description: 'A simple and efficient web application built to help keep track of assignments and tasks using a clean, intuitive interface.',
    type: 'school',
    technologies: ['PHP', 'MySQL', 'Sass']
  },
  {
    id: 4,
    title: 'Book-API Web Service',
    description: 'A REST API for managing a collection of books.',
    type: 'opensource',
    technologies: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Swagger', 'Supertest'],
    link: 'https://github.com/Damilolaadefenwa/cse341-books'
  },
  {
    id: 5,
    title: 'Database Design Final Project',
    description: 'An ER diagram and normalized schema for a library system.',
    type: 'school',
    technologies: ['PostgreSQL', 'SQL']
  }
];

export function getProjects(type?: string | null): Project[] {
  if (type) return projects.filter(p => p.type === type);
  return projects;
}

export function getProjectById(id: number): Project | null {
  return projects.find(p => p.id === id) ?? null;
}