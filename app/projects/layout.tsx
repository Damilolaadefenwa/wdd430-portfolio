
import Link from "next/link";

// export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
//     return (
//         <section>
//             <nav>
//                 <Link href="/projects">Overview</Link> | {' '}
//                 <Link href="/projects/settings">Settings</Link>
//             </nav>
//             {children}
//         </section>
//     );
// };

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 w-full grow">
      {/* Section-specific nested navigation */}
      <nav className="flex gap-6 mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
        <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
          Overview
        </Link>
        <Link href="/projects/opensource" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
          Open Source
        </Link>
        <Link href="/projects/school" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
          School
        </Link>
      </nav>

      {/* The nested pages will render inside this div */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        {children}
      </div>
    </section>
  );
}