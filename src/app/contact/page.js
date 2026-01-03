'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Car, Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, ArrowRight, CheckCircle, Sparkles, Users, Building, Globe } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    serviceType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        serviceType: 'general'
      });
      
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@autoservice.lk",
      subtext: "We'll respond within 24 hours",
      color: "from-[#156ac7] to-blue-500",
      action: "mailto:info@autoservice.lk"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+94 11 234 5678",
      subtext: "Mon-Fri 9AM-6PM",
      color: "from-green-500 to-emerald-500",
      action: "tel:+94112345678"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      details: "Chat with our team",
      subtext: "Available during business hours",
      color: "from-purple-500 to-pink-500",
      action: "#"
    },
    {
      icon: Calendar,
      title: "Schedule Demo",
      details: "Book a call",
      subtext: "See AutoService.lk in action",
      color: "from-orange-500 to-red-500",
      action: "#"
    }
  ];

  const offices = [
    {
      city: "Colombo",
      address: "123 Galle Road, Colombo 03",
      phone: "+94 11 234 5678",
      email: "colombo@autoservice.lk",
      hours: "Mon-Fri: 9AM-6PM"
    },
    {
      city: "Kandy",
      address: "456 Peradeniya Road, Kandy",
      phone: "+94 81 234 5678",
      email: "kandy@autoservice.lk",
      hours: "Mon-Fri: 9AM-6PM"
    },
    {
      city: "Galle",
      address: "789 Matara Road, Galle",
      phone: "+94 91 234 5678",
      email: "galle@autoservice.lk",
      hours: "Mon-Fri: 9AM-6PM"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to get started?",
      answer: "You can be up and running in less than 24 hours. Our onboarding team will help you import your data and train your staff."
    },
    {
      question: "Do you offer training?",
      answer: "Yes! We provide comprehensive training for your team, including on-site sessions and ongoing video tutorials."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer 24/7 email support, phone support during business hours, and live chat. Premium plans include dedicated account managers."
    },
    {
      question: "Can I migrate my existing data?",
      answer: "Absolutely! Our team will help you migrate all your existing customer, vehicle, and inventory data at no extra cost."
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
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#156ac7]/10 border border-[#156ac7]/30 rounded-full text-sm font-semibold text-[#156ac7] backdrop-blur-sm mb-8">
            <Sparkles size={16} />
            <span>We're Here to Help</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Get in Touch
            <span className="block bg-gradient-to-r from-[#156ac7] via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              With Our Team
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Have questions about AutoService.lk? Our team is ready to help you transform your service station. Reach out today!
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, idx) => (
              <a
                key={idx}
                href={method.action}
                className="group relative p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all backdrop-blur-sm hover:scale-105 duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl pointer-events-none`}></div>
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <method.icon className="text-white" size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                  <p className="text-[#156ac7] font-semibold mb-1">{method.details}</p>
                  <p className="text-sm text-gray-400">{method.subtext}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="relative">
              <div className="sticky top-24">
                <h2 className="text-4xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-gray-400 mb-8">Fill out the form and we'll get back to you within 24 hours.</p>
                
                {isSuccess && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3">
                    <CheckCircle className="text-green-400" size={24} />
                    <div>
                      <p className="font-semibold text-green-400">Message sent successfully!</p>
                      <p className="text-sm text-gray-400">We'll get back to you soon.</p>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[#156ac7] transition-all text-white placeholder-gray-500"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[#156ac7] transition-all text-white placeholder-gray-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[#156ac7] transition-all text-white placeholder-gray-500"
                        placeholder="+94 XX XXX XXXX"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-300">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[#156ac7] transition-all text-white placeholder-gray-500"
                        placeholder="Your Service Station"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">How can we help? *</label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[#156ac7] transition-all text-white"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="demo">Schedule a Demo</option>
                      <option value="support">Technical Support</option>
                      <option value="sales">Sales Question</option>
                      <option value="partnership">Partnership Opportunity</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[#156ac7] transition-all text-white placeholder-gray-500 resize-none"
                      placeholder="Tell us more about your needs..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#156ac7] to-blue-600 text-white rounded-xl hover:shadow-2xl hover:shadow-[#156ac7]/50 transition-all font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4">Our Offices</h2>
                <p className="text-gray-400 mb-8">Visit us at any of our locations across Sri Lanka.</p>
              </div>
              
              <div className="space-y-6">
                {offices.map((office, idx) => (
                  <div key={idx} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#156ac7] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3">{office.city}</h3>
                        <div className="space-y-2 text-sm text-gray-400">
                          <p className="flex items-center gap-2">
                            <Building size={16} className="text-[#156ac7]" />
                            {office.address}
                          </p>
                          <p className="flex items-center gap-2">
                            <Phone size={16} className="text-[#156ac7]" />
                            {office.phone}
                          </p>
                          <p className="flex items-center gap-2">
                            <Mail size={16} className="text-[#156ac7]" />
                            {office.email}
                          </p>
                          <p className="flex items-center gap-2">
                            <Clock size={16} className="text-[#156ac7]" />
                            {office.hours}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">Quick answers to common questions</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3 flex items-start gap-3">
                  <CheckCircle className="text-[#156ac7] flex-shrink-0 mt-1" size={20} />
                  {faq.question}
                </h3>
                <p className="text-gray-400 pl-8">{faq.answer}</p>
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
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-[#156ac7] to-blue-400 bg-clip-text text-transparent">
              Service Station?
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12">
            Start your free 30-day trial today. No credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-gradient-to-r from-[#156ac7] to-blue-600 text-white rounded-xl hover:shadow-2xl hover:shadow-[#156ac7]/50 transition-all font-semibold text-lg group">
              Start Free Trial
              <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" size={20} />
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