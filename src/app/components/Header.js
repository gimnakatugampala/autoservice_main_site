'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg shadow-[#156ac7]/50 group-hover:shadow-[#156ac7]/70 transition-all group-hover:scale-110">
              <img 
                src="/assets/images/autoservice_logo.jpg" 
                alt="autoservice.lk logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#156ac7] to-blue-400 bg-clip-text text-transparent">
              autoservice.lk
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#156ac7] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/features" className="text-gray-300 hover:text-white transition-colors font-medium relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#156ac7] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/benefits" className="text-gray-300 hover:text-white transition-colors font-medium relative group">
              Benefits
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#156ac7] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#156ac7] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg text-sm font-semibold text-green-400">
              100% FREE
            </div>
            <a href='https://autoserviceapp.online/' target='_blank' className="px-6 py-2.5 bg-gradient-to-r from-[#156ac7] to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-[#156ac7]/50 transition-all font-medium group">
              Use App Free
              <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            <Link href="/" className="block text-gray-300 hover:text-white font-medium py-2">Home</Link>
            <Link href="/features" className="block text-gray-300 hover:text-white font-medium py-2">Features</Link>
            <Link href="/benefits" className="block text-gray-300 hover:text-white font-medium py-2">Benefits</Link>
            <Link href="/contact" className="block text-gray-300 hover:text-white font-medium py-2">Contact</Link>
            <div className="pt-4 border-t border-white/10">
              <div className="text-center mb-3 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg text-sm font-semibold text-green-400">
                100% FREE - No Credit Card Required
              </div>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-[#156ac7] to-blue-600 text-white rounded-lg font-medium">
                Use App Free
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}