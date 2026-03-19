import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Senior Creative Developer Portfolio',
  description: 'Awwwards-level interactive portfolio showcasing webGL and scroll animation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased text-white bg-[#121212]`}>
        {children}
      </body>
    </html>
  );
}
