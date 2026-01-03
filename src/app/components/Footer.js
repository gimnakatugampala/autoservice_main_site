'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img 
                  src="/assets/images/autoservice_logo.jpg" 
                  alt="autoservice.lk logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold">autoservice.lk</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              The complete service station management system for Sri Lankan automotive businesses. 100% free forever - no hidden fees, no credit card required.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg text-sm font-semibold text-green-400">
              🎉 Completely FREE to use
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/benefits" className="hover:text-white transition-colors">Benefits</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Based in Colombo, Sri Lanka</li>
              <li>Serving all of Sri Lanka online</li>
              <li>info@autoserviceapp.online</li>
              <li>+94 76 496 1707</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>&copy; 2026 autoservice.lk. All rights reserved. Free forever.</p>
        </div>
      </div>
    </footer>
  );
}