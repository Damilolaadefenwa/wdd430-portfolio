import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Damilola Adefenwa | Full-Stack Developer & Designer',
  description: 'Portfolio of a full-stack software engineer bridging responsive web applications with technical digital design.',
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Software Developer', 'Lagos', '3D Jewelry CAD', 'Technical Fashion'],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-us">
      <body className="flex flex-col min-h-screen bg-gray-50" suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}