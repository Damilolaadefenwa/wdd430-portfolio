import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'StoreKeep',
    description: 'A modern e-commerce web application featuring dynamic weather forecasting via the Open-Meteo API and Shopify Admin-API store data integration.',
    technologies: ['Vanilla JS', 'Node.js Proxy', 'Vite', 'Native CSS'],
    link: 'https://github.com/Damilolaadefenwa/storeKeepwdd330',
    liveDemoLink: 'https://damilolaadefenwa.github.io/storeKeepwdd330' 
  },
  {
    title: 'The Stellar Stitch',
    description: 'A responsive space-themed apparel and rocket toy e-commerce website.',
    technologies: ['JavaScript', 'HTML5', 'Tailwind CSS'],
    link: 'https://github.com/Damilolaadefenwa/theStellarStitch',
    liveDemoLink: 'https://the-stellar-stitch.onrender.com'
  },
   {
    title: 'The Assignment Tracker',
    description: 'A simple and efficient web application built to help keep track of assignments and tasks using a clean, intuitive interface and Model-View-Controller (MVC) design pattern.',
    technologies: ['PHP', 'SCSS', 'Sass', 'MySQL/MariaDB', 'MVC'],
    link: 'https://github.com/Damilolaadefenwa/assignmenttracker_app',
    liveDemoLink: 'https://assignmenttracker-app.onrender.com/'
  }
];

export default function Home() { 
  return (
    <main className="container mx-auto px-4 py-12 grow">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">My Portfolio</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          I&apos;m a full-stack developer blending structured software engineering with digital design. Here are some of my recent applications.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}