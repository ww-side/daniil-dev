import { Inter } from 'next/font/google';

import { cn } from '@/shared/lib/styles';
import { Header, Preloader } from '@/shared/ui/components';

import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          'max-md: mx-auto h-screen w-[672px] px-7 antialiased max-md:w-full',
        )}
      >
        <Preloader />
        <Header />
        {children}
      </body>
    </html>
  );
}
