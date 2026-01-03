'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Car, Users, Package, FileText, MessageSquare, Mail, FileSpreadsheet, CheckCircle, Menu, X, ArrowRight, Zap, Shield, Clock, Star, TrendingUp, Sparkles } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const stats = [
    { number: "500+", label: "Service Stations", icon: Car },
    { number: "50K+", label: "Vehicles Managed", icon: CheckCircle },
    { number: "99.9%", label: "Uptime", icon: Shield },
    { number: "24/7", label: "Support", icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#156ac7]/20 via-black to-blue-900/20 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-[#156ac7]/30 rounded-full blur-3xl transition-all duration-300"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
          }}
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#156ac7] to-blue-600 flex items-center justify-center shadow-lg shadow-[#156ac7]/50 group-hover:shadow-[#156ac7]/70 transition-all group-hover:scale-110">
                <Car className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#156ac7] to-blue-400 bg-clip-text text-transparent">
                AutoService.lk
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/features" className="text-gray-300 hover:text-white transition-colors font-medium relative group">
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#156ac7] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/benefits" className="text-gray-300 hover:text-white transition-colors font-medium relative group">
                Benefits
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#156ac7] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors font-medium relative group">
                Pricing
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#156ac7] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors font-medium relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#156ac7] group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button className="px-6 py-2.5 text-white hover:text-[#156ac7] transition-all font-medium">
                Sign In
              </button>
              <button className="px-6 py-2.5 bg-gradient-to-r from-[#156ac7] to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-[#156ac7]/50 transition-all font-medium group">
                Use App
                <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              <Link href="/features" className="block text-gray-300 hover:text-white font-medium py-2">Features</Link>
              <Link href="/benefits" className="block text-gray-300 hover:text-white font-medium py-2">Benefits</Link>
              <a href="#pricing" className="block text-gray-300 hover:text-white font-medium py-2">Pricing</a>
              <a href="#contact" className="block text-gray-300 hover:text-white font-medium py-2">Contact</a>
              <button className="w-full px-6 py-3 text-white border border-white/20 rounded-lg hover:bg-white/5 transition-all font-medium">
                Sign In
              </button>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-[#156ac7] to-blue-600 text-white rounded-lg font-medium">
                Use App
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#156ac7]/10 border border-[#156ac7]/30 rounded-full text-sm font-semibold text-[#156ac7] backdrop-blur-sm">
                <Sparkles size={16} />
                <span>Trusted by 500+ Service Stations in Sri Lanka</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                The Future of
                <span className="block bg-gradient-to-r from-[#156ac7] via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                  Auto Service
                </span>
                Management
              </h1>
              
              <p className="text-xl text-gray-400 leading-relaxed">
                Transform your service station with AI-powered automation, real-time analytics, and seamless operations. Built for the modern Sri Lankan automotive industry.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-[#156ac7] to-blue-600 text-white rounded-xl hover:shadow-2xl hover:shadow-[#156ac7]/50 transition-all font-semibold text-lg flex items-center justify-center relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#156ac7] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all font-semibold text-lg backdrop-blur-sm">
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
                    <div className="text-2xl font-bold text-[#156ac7] mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3D Card Effect */}
            <div className="relative perspective-1000">
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-xl shadow-2xl transform hover:rotate-y-12 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#156ac7]/20 to-transparent rounded-3xl"></div>
                
                <div className="relative space-y-6">
                  {/* Live Dashboard Preview */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-400">Live Dashboard</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                      <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                      <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-[#156ac7]/20 to-transparent rounded-xl border border-[#156ac7]/30 backdrop-blur-sm transform hover:scale-105 transition-all">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#156ac7] to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                        <CheckCircle className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold text-white">254 Vehicles</div>
                        <div className="text-sm text-gray-400">+12% this month</div>
                      </div>
                      <TrendingUp className="ml-auto text-green-400" size={20} />
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-500/20 to-transparent rounded-xl border border-green-500/30 backdrop-blur-sm transform hover:scale-105 transition-all">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
                        <FileText className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold text-white">89 Job Cards</div>
                        <div className="text-sm text-gray-400">Completed today</div>
                      </div>
                      <Star className="ml-auto text-yellow-400 fill-yellow-400" size={20} />
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-500/20 to-transparent rounded-xl border border-purple-500/30 backdrop-blur-sm transform hover:scale-105 transition-all">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg">
                        <Package className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold text-white">1,247 Parts</div>
                        <div className="text-sm text-gray-400">In inventory</div>
                      </div>
                      <div className="ml-auto flex items-center gap-1 text-sm text-green-400">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        Active
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#156ac7] to-blue-600 rounded-2xl opacity-20 blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl opacity-20 blur-2xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Everything You Need.
              <span className="block text-gray-500">Nothing You Don't.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed with instant loading and real-time updates" },
              { icon: Shield, title: "Enterprise Security", desc: "Bank-level encryption with automated backups and disaster recovery" },
              { icon: Clock, title: "Save 10+ Hours", desc: "Automate routine tasks and focus on growing your business" }
            ].map((item, idx) => (
              <div key={idx} className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all backdrop-blur-sm hover:scale-105 duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-[#156ac7] to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#156ac7]/50 group-hover:shadow-[#156ac7]/70 transition-all group-hover:scale-110">
                  <item.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/features" className="inline-flex items-center gap-2 text-[#156ac7] hover:text-blue-400 font-semibold text-lg group">
              Explore All Features
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#156ac7]/20 to-blue-600/20 blur-3xl -z-10"></div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-[#156ac7] to-blue-400 bg-clip-text text-transparent">
              Service Station?
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12">
            Join 500+ service stations across Sri Lanka. Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-gradient-to-r from-[#156ac7] to-blue-600 text-white rounded-xl hover:shadow-2xl hover:shadow-[#156ac7]/50 transition-all font-semibold text-lg">
              Start Free Trial
            </button>
            <button className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all font-semibold text-lg backdrop-blur-sm">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#156ac7] to-blue-600 flex items-center justify-center">
                  <Car className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold">AutoService.lk</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                The complete service station management system for Sri Lankan automotive businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/benefits" className="hover:text-white transition-colors">Benefits</Link></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Colombo, Sri Lanka</li>
                <li>info@autoservice.lk</li>
                <li>+94 XX XXX XXXX</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>&copy; 2026 AutoService.lk. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}