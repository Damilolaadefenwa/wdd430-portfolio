
// 1. Fixing Issue:Calculate the year ONCE outside the component
const currentYear = new Date().getFullYear(); 

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 mt-auto border-t border-gray-200 dark:border-gray-800 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] dark:shadow-none">
      <div className="container mx-auto text-center px-4">
        <p className="text-xl  font-bold">
          &copy; {currentYear} | Damilola Adefenwa | All rights reserved
        </p>
      </div>
    </footer>
  );
}