// components/Header.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes'; // 👈 Eklendi

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme(); // 👈 Tema hook'u

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md dark:bg-gray-900/90'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FL</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              FitLife
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/trainers"
              className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 font-medium transition-colors"
            >
              Antrenörler
            </Link>
            <Link
              href="/schedule"
              className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 font-medium transition-colors"
            >
              Ders Programı
            </Link>
            <Link
              href="/plans"
              className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 font-medium transition-colors"
            >
              Üyelik Planları
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 font-medium transition-colors"
            >
              İletişim
            </Link>
          </nav>

          {/* Action Buttons & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {/* 👇 Dark/Light Mode Butonu */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>
            <Link
              href="/register"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all shadow-md hover:shadow-lg"
            >
              Üye Ol
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-900 dark:text-white" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900 dark:text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/trainers"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Antrenörler
              </Link>
              <Link
                href="/schedule"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Ders Programı
              </Link>
              <Link
                href="/plans"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Üyelik Planları
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-col space-y-3">
                {/* 👇 Mobile Dark Mode Butonu */}
                <button
                  onClick={() => {
                    setTheme(theme === 'dark' ? 'light' : 'dark');
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
                >
                  {theme === 'dark' ? (
                    <Sun className="h-5 w-5 text-yellow-500" />
                  ) : (
                    <Moon className="h-5 w-5 text-gray-700" />
                  )}
                  <span>{theme === 'dark' ? 'Aydınlık Moda Geç' : 'Karanlık Moda Geç'}</span>
                </button>
                <Link
                  href="/register"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Üye Ol
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}