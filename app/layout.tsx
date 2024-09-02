import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import NavBar from '@/components/navbar/NavBar';

import { FilterProvider } from '@/context/FilterContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gambit Royal',
  description: 'Gambit Royal recruitment test',
  openGraph: {
    title: 'Gambit Royal',
    description: 'Gambit Royal recruitment test',
    url: 'http://localhost:3000/',
    siteName: 'Gambit Royal',
  },
  authors: [
    {
      name: 'Artur Buja',
    },
  ],
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='canonical' href='http://localhost:3000/' />
      </head>
      <body className={inter.className}>
        <FilterProvider>
          <NavBar />
          <main>{children}</main>
        </FilterProvider>
      </body>
    </html>
  );
}
