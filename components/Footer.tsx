
// 1. Fixing Issue:Calculate the year ONCE outside the component
const currentYear = new Date().getFullYear(); 

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-auto border-t border-gray-800">
      <div className="container mx-auto text-center px-4">
        <p className="text-sm">
          {/* 2. Inject the stable variable here */}
          &copy; {currentYear} | Damilola Adefenwa | All rights reserved
        </p>
      </div>
    </footer>
  );
}
