import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-700 text-white py-4 shadow-md sticky top-0 z-50">
      <nav className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tight hover:text-blue-200 transition-colors">
          <Link href="/">Damilola&apos;s Portfolio</Link>
        </div>
        <ul className="flex gap-6 font-medium">
          <li><Link href="/" className="hover:underline hover:text-blue-200 transition-all">Home</Link></li>
          <li><Link href="/about" className="hover:underline hover:text-blue-200 transition-all">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}