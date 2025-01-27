'use client';

import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className="container mx-auto px-4 py-8 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-primary-color">
          Cloud Analytics Platform
        </h1>

        <div className="mb-8 space-y-4">
          <nav className="flex justify-center space-x-4">
            <Link 
              href="/about" 
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              About Our Project
            </Link>
            <Link 
              href="/database-query" 
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Database Query
            </Link>
          </nav>

          <div className="flex justify-center space-x-4">
            <button 
              className="button"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isHovered ? 'Explore Now!' : 'Click Me'}
            </button>
          </div>
        </div>

        <div className="image-grid">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div 
              key={index} 
              className="transform transition-transform hover:scale-105"
            >
              <Image 
                src="/images/image.png" 
                alt={`Platform Visualization ${index}`}
                width={200} 
                height={200}
                className="rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
