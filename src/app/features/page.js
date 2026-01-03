'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Car, Users, Package, FileText, MessageSquare, Mail, FileSpreadsheet, BarChart3, Settings, Database, Cloud, Lock, Zap, CheckCircle, ArrowRight, Smartphone, Calendar, CreditCard, Search, Bell, Clipboard, TrendingUp, FileCheck, DollarSign, Sparkles } from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Features() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);

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

  const categories = [
    { id: 'all', name: 'All Features', icon: Sparkles },
    { id: 'management', name: 'Management', icon: Settings },
    { id: 'automation', name: 'Automation', icon: Zap },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 }
  ];

  const features = [
    {
      category: 'management',
      icon: Car,
      title: "Vehicle Management",
      description: "Complete vehicle lifecycle tracking with detailed service history, maintenance schedules, and comprehensive owner information.",
      features: [
        "Digital vehicle profiles with photo gallery",
        "Complete service history timeline",
        "Automated maintenance reminders",
        "VIN & registration management",
        "Multi-vehicle owner tracking",
        "Vehicle health reports"
      ],
      color: "from-blue-500 to-cyan-500",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      category: 'management',
      icon: Users,
      title: "Customer Database",
      description: "360° customer relationship management with complete history, preferences, communication tracking, and loyalty programs.",
      features: [
        "Comprehensive customer profiles",
        "Purchase & service history",
        "Loyalty program integration",
        "Communication preferences",
        "Custom fields & tags",
        "Customer segmentation"
      ],
      color: "from-purple-500 to-pink-500",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      category: 'management',
      icon: Package,
      title: "Inventory Control",
      description: "Real-time inventory tracking with automated reordering, supplier management, cost optimization, and multi-location support.",
      features: [
        "Live stock levels across locations",
        "Automated reorder points",
        "Supplier management portal",
        "Multi-location tracking",
        "Barcode & QR scanning",
        "Stock valuation reports"
      ],
      color: "from-green-500 to-emerald-500",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      category: 'management',
      icon: FileText,
      title: "Digital Job Cards",
      description: "Paperless job card system with technician assignment, time tracking, real-time status updates, and digital approvals.",
      features: [
        "Drag-and-drop workflow builder",
        "Time & labor tracking",
        "Parts usage recording",
        "Photo & video documentation",
        "Digital signatures & approvals",
        "Job status notifications"
      ],
      color: "from-orange-500 to-red-500",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      category: 'automation',
      icon: MessageSquare,
      title: "SMS Notifications",
      description: "Automated SMS campaigns for appointment reminders, service updates, promotional offers, and customer engagement.",
      features: [
        "Appointment reminders",
        "Service completion alerts",
        "Payment reminders",
        "Promotional campaigns",
        "Custom message templates",
        "Delivery tracking & analytics"
      ],
      color: "from-[#156ac7] to-blue-500",
      gradient: "from-[#156ac7]/20 to-blue-500/20"
    },
    {
      category: 'automation',
      icon: Mail,
      title: "Email Marketing",
      description: "Automated email workflows for customer engagement, follow-ups, marketing campaigns, and customer retention.",
      features: [
        "Drip campaign automation",
        "Service follow-up emails",
        "Newsletter management",
        "Drag-and-drop template builder",
        "A/B testing capabilities",
        "Email performance analytics"
      ],
      color: "from-indigo-500 to-purple-500",
      gradient: "from-indigo-500/20 to-purple-500/20"
    },
    {
      category: 'management',
      icon: FileSpreadsheet,
      title: "Invoicing & Quotes",
      description: "Professional invoicing with online payments, automated reminders, comprehensive quote management, and tax calculations.",
      features: [
        "Customizable invoice templates",
        "Online payment integration",
        "Automated payment reminders",
        "Quote to invoice conversion",
        "Multi-currency support",
        "Tax & discount calculations"
      ],
      color: "from-yellow-500 to-orange-500",
      gradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
      category: 'analytics',
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time business intelligence with customizable dashboards, detailed performance metrics, and predictive insights.",
      features: [
        "Revenue & profit analytics",
        "Technician performance tracking",
        "Customer behavior insights",
        "Inventory turnover reports",
        "Custom dashboard builder",
        "Exportable reports"
      ],
      color: "from-cyan-500 to-blue-500",
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      category: 'automation',
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI-powered appointment scheduling with automated reminders, capacity optimization, and intelligent resource allocation.",
      features: [
        "Online booking portal",
        "Automated confirmations",
        "Capacity management",
        "Resource allocation",
        "Waitlist management",
        "Calendar integrations"
      ],
      color: "from-pink-500 to-rose-500",
      gradient: "from-pink-500/20 to-rose-500/20"
    },
    {
      category: 'management',
      icon: CreditCard,
      title: "Payment Processing",
      description: "Integrated payment gateway with multiple payment methods, automated reconciliation, and secure transactions.",
      features: [
        "Multiple payment methods",
        "Split payment support",
        "Refund management",
        "Payment plans & installments",
        "Auto-reconciliation",
        "PCI DSS compliant"
      ],
      color: "from-green-500 to-teal-500",
      gradient: "from-green-500/20 to-teal-500/20"
    },
    {
      category: 'analytics',
      icon: TrendingUp,
      title: "Business Intelligence",
      description: "Predictive analytics and insights to optimize operations, forecast revenue, and increase profitability.",
      features: [
        "Predictive maintenance alerts",
        "Revenue forecasting",
        "Customer lifetime value",
        "Churn prediction",
        "Trend analysis",
        "ROI tracking"
      ],
      color: "from-violet-500 to-purple-500",
      gradient: "from-violet-500/20 to-purple-500/20"
    },
    {
      category: 'automation',
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native mobile apps for technicians and customers with offline capability, push notifications, and real-time sync.",
      features: [
        "Technician mobile app",
        "Customer self-service portal",
        "Offline mode support",
        "Push notifications",
        "Photo & document uploads",
        "GPS tracking"
      ],
      color: "from-[#156ac7] to-cyan-500",
      gradient: "from-[#156ac7]/20 to-cyan-500/20"
    },
    {
      category: 'automation',
      icon: Bell,
      title: "Smart Reminders",
      description: "Automated reminder system for service due dates, appointments, payments, and customer follow-ups.",
      features: [
        "Service due reminders",
        "Birthday & anniversary wishes",
        "Payment due notifications",
        "Warranty expiration alerts",
        "Follow-up reminders",
        "Custom reminder rules"
      ],
      color: "from-amber-500 to-orange-500",
      gradient: "from-amber-500/20 to-orange-500/20"
    },
    {
      category: 'management',
      icon: Clipboard,
      title: "Digital Checklists",
      description: "Standardized inspection checklists with photo documentation, quality control, and compliance tracking.",
      features: [
        "Custom checklist templates",
        "Photo documentation",
        "Quality control tracking",
        "Digital signatures",
        "Compliance reports",
        "Audit trails"
      ],
      color: "from-lime-500 to-green-500",
      gradient: "from-lime-500/20 to-green-500/20"
    },
    {
      category: 'analytics',
      icon: FileCheck,
      title: "Performance Reports",
      description: "Comprehensive reporting system with automated generation, scheduled delivery, and custom report builder.",
      features: [
        "Automated report generation",
        "Scheduled email delivery",
        "Custom report builder",
        "KPI dashboards",
        "Benchmark comparisons",
        "Executive summaries"
      ],
      color: "from-sky-500 to-blue-500",
      gradient: "from-sky-500/20 to-blue-500/20"
    },
    {
      category: 'management',
      icon: DollarSign,
      title: "Expense Tracking",
      description: "Complete expense management with receipt scanning, vendor management, and profitability analysis.",
      features: [
        "Receipt scanning & OCR",
        "Vendor management",
        "Category tracking",
        "Budget management",
        "Profit margin analysis",
        "Tax reporting"
      ],
      color: "from-emerald-500 to-teal-500",
      gradient: "from-emerald-500/20 to-teal-500/20"
    }
  ];

  const filteredFeatures = activeCategory === 'all' 
    ? features 
    : features.filter(f => f.category === activeCategory);

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
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#156ac7]/10 border border-[#156ac7]/30 rounded-full text-sm font-semibold text-[#156ac7] backdrop-blur-sm mb-8">
            <Zap size={16} />
            <span>50+ Powerful Features</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Everything You Need to
            <span className="block bg-gradient-to-r from-[#156ac7] via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Run Your Business
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed">
            From vehicle management to advanced analytics, AutoService.lk provides all the tools you need to streamline operations and grow your service station.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                    activeCategory === cat.id
                      ? 'bg-gradient-to-r from-[#156ac7] to-blue-600 text-white shadow-lg shadow-[#156ac7]/50 scale-105'
                      : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20'
                  }`}
                >
                  <Icon size={18} />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="group relative p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all backdrop-blur-sm hover:scale-105 duration-300 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <feature.icon className="text-white" size={28} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{feature.description}</p>
                  
                  <ul className="space-y-3">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="text-[#156ac7] flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-sm text-gray-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Floating decoration */}
                <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${feature.color} rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity pointer-events-none`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Service Stations", icon: Car },
              { number: "50K+", label: "Vehicles Managed", icon: CheckCircle },
              { number: "99.9%", label: "Uptime", icon: Lock },
              { number: "24/7", label: "Support", icon: Smartphone }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group">
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-[#156ac7] group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold text-[#156ac7] mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#156ac7]/20 to-blue-600/20 blur-3xl -z-10"></div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Try AutoService.lk free for 30 days. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-gradient-to-r from-[#156ac7] to-blue-600 text-white rounded-xl hover:shadow-2xl hover:shadow-[#156ac7]/50 transition-all font-semibold text-lg group">
              Start Free Trial
              <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <Link href="/benefits" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all font-semibold text-lg backdrop-blur-sm inline-flex items-center justify-center gap-2">
              See Benefits
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}