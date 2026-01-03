'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import { Car, CheckCircle, FileText, Package, Zap, Shield, Clock, Star, TrendingUp, Sparkles, ArrowRight, Gift } from 'lucide-react';




export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { number: "500+", label: "Service Stations", icon: Car },
    { number: "$0", label: "Forever Free", icon: Gift },
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

      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-sm font-semibold text-green-400 backdrop-blur-sm animate-pulse">
                <Gift size={16} />
                <span>100% FREE Forever - No Credit Card Required!</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                The Future of
                <span className="block bg-gradient-to-r from-[#156ac7] via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                  Auto Service
                </span>
                Management
              </h1>
              
              <p className="text-xl text-gray-400 leading-relaxed">
                Transform your service station with AI-powered automation, real-time analytics, and seamless operations. <span className="text-green-400 font-semibold">Completely free to use</span> - built for the modern Sri Lankan automotive industry.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-[#156ac7] to-blue-600 text-white rounded-xl hover:shadow-2xl hover:shadow-[#156ac7]/50 transition-all font-semibold text-lg flex items-center justify-center relative overflow-hidden">
                  <a href='https://autoserviceapp.online/' target='_blank' className="relative z-10 flex items-center">
                    Start Using Free
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </a>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#156ac7] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all font-semibold text-lg backdrop-blur-sm">
                  Watch Demo
                </button>
              </div>

              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                  <span>No hidden fees or charges</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                  <span>Free forever - all features included</span>
                </div>
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
                    <div className="px-3 py-1 bg-green-500/20 border border-green-500/40 rounded-full text-xs font-bold text-green-400">
                      FREE
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

      {/* Free Forever Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-sm font-semibold text-green-400 backdrop-blur-sm mb-8">
            <Sparkles size={16} />
            <span>Why We're Free</span>
          </div>
          
          <h2 className="text-5xl font-bold mb-6">
            100% Free.
            <span className="block text-[#156ac7]">Forever.</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            We believe every service station in Sri Lanka deserves access to world-class management tools. That's why autoservice.lk is completely free - no trials, no hidden fees, no credit card required. Ever.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Gift, 
                title: "All Features Included", 
                desc: "Get access to every feature from day one. No premium plans or upgrades needed." 
              },
              { 
                icon: Shield, 
                title: "No Hidden Costs", 
                desc: "What you see is what you get. Zero setup fees, zero monthly charges, zero surprises." 
              },
              { 
                icon: Zap, 
                title: "Always Free", 
                desc: "We're committed to keeping autoservice.lk free forever. That's our promise to you." 
              }
            ].map((item, idx) => (
              <div key={idx} className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all backdrop-blur-sm hover:scale-105 duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/50 group-hover:shadow-green-500/70 transition-all group-hover:scale-110 mx-auto">
                  <item.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
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
              Explore All Features (All Free!)
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#156ac7]/20 to-blue-600/20 blur-3xl -z-10"></div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-[#156ac7] to-blue-400 bg-clip-text text-transparent">
              Service Station?
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12">
            Join 500+ service stations across Sri Lanka. <span className="text-green-400 font-semibold">Start using for free today</span> - no credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href='https://autoserviceapp.online/' target='_blank' className="px-10 py-5 bg-gradient-to-r from-[#156ac7] to-blue-600 text-white rounded-xl hover:shadow-2xl hover:shadow-[#156ac7]/50 transition-all font-semibold text-lg">
              Start Using Free
            </a>
            <Link href="/features" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all font-semibold text-lg backdrop-blur-sm">
              See All Features
            </Link>
          </div>
        </div>
      </section>

      <Footer />

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