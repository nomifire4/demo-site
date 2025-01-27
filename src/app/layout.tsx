import type { Metadata } from "next";
import Link from "next/link";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  display: "swap",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "My Next.js App",
    template: "%s | My Next.js App",
  },
  description: "A modern web application built with Next.js",
  applicationName: "My Next.js App",
  authors: [{ name: "Your Name" }],
  generator: "Next.js",
  keywords: ["nextjs", "react", "web app"],
  openGraph: {
    title: "My Next.js App",
    description: "A modern web application built with Next.js",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-white dark:bg-gray-900 text-black dark:text-white">
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex justify-center space-x-6">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/charts" 
                  className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Charts
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        
        <footer className="container mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} My Next.js App. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}