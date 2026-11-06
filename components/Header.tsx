import NavLinks from './NavLinks';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-4 shadow-md dark:shadow-none sticky top-0 z-50">
      <div className="max-w-4xl mx-auto flex justify-between items-center w-full">
        <div className="text-xl font-bold text-gray-900 dark:text-white">
          Damilola&apos;s Portfolio
        </div>
        <NavLinks />
      </div>
    </header>
  );
}