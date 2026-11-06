
'use client'; // This directive tells Next.js to render this component on the client side

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();

  // Using an array makes it easy to add more links later without copying and pasting massive Tailwind strings
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav aria-label="Primary" className="flex gap-6">
      {links.map((link) => {
        const isActive = pathname === link.href;
        
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`font-semibold transition-colors ${
              isActive 
                ? 'text-violet-950 dark:text-white underline' 
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:underline'
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}