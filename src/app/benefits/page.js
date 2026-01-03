'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Car, TrendingUp, Clock, DollarSign, Users, Shield, Zap, Target, CheckCircle, ArrowRight, BarChart3, Sparkles, Award, ThumbsUp, HeartHandshake, Rocket, Menu, X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Benefits() {
  const [activeTab, setActiveTab] = useState('efficiency');
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const tabs = [
    { id: 'efficiency', name: 'Efficiency', icon: Zap },
    { id: 'revenue', name: 'Revenue', icon: TrendingUp },
    { id: 'customer', name: 'Customer', icon: Users }
  ];

  const mainBenefits = [
    {
      icon: Clock,
      title: "Save 10+ Hours Per Week",
      description: "Automate routine tasks and eliminate paperwork",
      stats: "87% reduction in admin time",
      color: "from-[#156ac7] to-blue-600"
    },
    {
      icon: DollarSign,
      title: "Increase Revenue by 30%",
      description: "Better customer retention and upselling",
      stats: "Average 30% revenue growth",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Users,
      title: "Boost Customer Satisfaction",
      description: "Faster service and better communication",
      stats: "95% customer satisfaction rate",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const tabContent = {
    efficiency: {
      title: "Streamline Your Operations",
      description: "Transform your workflow with intelligent automation and real-time insights",
      benefits: [
        {
          icon: Zap,
          title: "Automated Workflows",
          description: "Eliminate manual data entry and repetitive tasks with smart automation",
          metrics: ["60% faster processing", "Zero data errors", "Real-time updates"]
        },
        {
          icon: Target,
          title: "Optimized Scheduling",
          description: "AI-powered scheduling maximizes bay utilization and reduces wait times",
          metrics: ["35% more bookings", "Reduced idle time", "Better resource allocation"]
        },
        {
          icon: BarChart3,
          title: "Real-Time Insights",
          description: "Make data-driven decisions with live dashboards and analytics",
          metrics: ["Instant reporting", "Performance tracking", "Predictive insights"]
        },
        {
          icon: Clock,
          title: "Time Tracking",
          description: "Monitor job progress and technician productivity in real-time",
          metrics: ["Accurate time logs", "Labor cost control", "Efficiency metrics"]
        }
      ]
    },
    revenue: {
      title: "Grow Your Bottom Line",
      description: "Increase profitability through better customer relationships and operational excellence",
      benefits: [
        {
          icon: TrendingUp,
          title: "Upsell Opportunities",
          description: "Identify and capitalize on service opportunities with intelligent recommendations",
          metrics: ["30% higher ticket value", "Smart suggestions", "Service packages"]
        },
        {
          icon: Users,
          title: "Customer Retention",
          description: "Keep customers coming back with automated follow-ups and loyalty programs",
          metrics: ["85% retention rate", "Repeat business", "Referral growth"]
        },
        {
          icon: BarChart3,
          title: "Revenue Analytics",
          description: "Track profitability by service, technician, and customer segment",
          metrics: ["Profit margins", "Service performance", "Growth trends"]
        },
        {
          icon: DollarSign,
          title: "Payment Optimization",
          description: "Reduce outstanding payments with automated reminders and online payments",
          metrics: ["Faster collections", "Reduced DSO", "Multiple payment options"]
        }
      ]
    },
    customer: {
      title: "Deliver Exceptional Service",
      description: "Build lasting relationships with personalized, efficient customer experiences",
      benefits: [
        {
          icon: Sparkles,
          title: "Personalized Experience",
          description: "Remember customer preferences and service history for tailored recommendations",
          metrics: ["360° customer view", "Service history", "Personal preferences"]
        },
        {
          icon: HeartHandshake,
          title: "Proactive Communication",
          description: "Keep customers informed with automated updates and reminders",
          metrics: ["SMS & email alerts", "Appointment reminders", "Service updates"]
        },
        {
          icon: ThumbsUp,
          title: "Faster Service",
          description: "Reduce wait times and streamline the service process",
          metrics: ["50% faster check-in", "Digital signatures", "Express checkout"]
        },
        {
          icon: Award,
          title: "Loyalty Programs",
          description: "Reward repeat customers and encourage referrals",
          metrics: ["Point systems", "Special offers", "VIP tiers"]
        }
      ]
    }
  };

  const testimonials = [
    {
      name: "Rajith Fernando",
      role: "Owner, Premium Auto Care",
      location: "Colombo",
      quote: "autoservice.lk transformed our business. We've increased revenue by 40% and our customers love the SMS updates.",
      avatar: "RF",
      stats: { revenue: "+40%", time: "-12hrs/week" }
    },
    {
      name: "Chaminda Silva",
      role: "Manager, Express Service Station",
      location: "Kandy",
      quote: "The inventory management alone saved us thousands. We never run out of parts anymore and waste has dropped significantly.",
      avatar: "CS",
      stats: { efficiency: "+65%", waste: "-45%" }
    },
    {
      name: "Malini Perera",
      role: "Owner, City Auto Service",
      location: "Galle",
      quote: "Our customer satisfaction scores went from 3.5 to 4.8 stars. The automated reminders and follow-ups make such a difference.",
      avatar: "MP",
      stats: { satisfaction: "4.8/5", retention: "+85%" }
    }
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
     <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-sm font-semibold text-green-400 backdrop-blur-sm mb-8">
            <Rocket size={16} />
            <span>Proven Results from 500+ Service Stations</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Real Benefits.
            <span className="block bg-gradient-to-r from-[#156ac7] via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Real Results.
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-16">
            Join hundreds of Sri Lankan service stations that have transformed their operations and grown their business with autoservice.lk
          </p>

          {/* Main Benefits Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {mainBenefits.map((benefit, idx) => (
              <div key={idx} className="group relative p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all backdrop-blur-sm hover:scale-105 duration-300 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-3xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 mb-4">{benefit.description}</p>
                <div className="text-[#156ac7] font-semibold">{benefit.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Benefits with Tabs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-16">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-[#156ac7] to-blue-600 text-white shadow-lg shadow-[#156ac7]/50'
                      : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon size={20} />
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">{tabContent[activeTab].title}</h2>
            <p className="text-xl text-gray-400">{tabContent[activeTab].description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tabContent[activeTab].benefits.map((benefit, idx) => (
              <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all backdrop-blur-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#156ac7] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {benefit.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="text-[#156ac7] flex-shrink-0" size={16} />
                      <span className="text-gray-300">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-400">See how service stations across Sri Lanka are growing with autoservice.lk</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#156ac7] to-blue-600 rounded-full flex items-center justify-center text-2xl font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-xs text-[#156ac7]">{testimonial.location}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                
                <div className="flex gap-4 pt-4 border-t border-white/10">
                  {Object.entries(testimonial.stats).map(([key, value]) => (
                    <div key={key} className="flex-1">
                      <div className="text-2xl font-bold text-[#156ac7]">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Start Seeing Results
            <span className="block text-[#156ac7]">In Just 7 Days</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Join 500+ service stations. Free 30-day trial. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-gradient-to-r from-[#156ac7] to-blue-600 text-white rounded-xl hover:shadow-2xl hover:shadow-[#156ac7]/50 transition-all font-semibold text-lg">
              Start Free Trial
            </button>
            <Link href="/features" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all font-semibold text-lg backdrop-blur-sm inline-flex items-center justify-center gap-2">
              Explore Features
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