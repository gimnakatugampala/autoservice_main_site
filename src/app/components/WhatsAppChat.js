'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Replace this with your actual WhatsApp number (in international format without + or spaces)
  const whatsappNumber = '94764961707'; // Example: 94XXXXXXXXX for Sri Lanka
  const defaultMessage = 'Hi! I have a question about autoservice.lk';
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        {/* Tooltip/Preview */}
        {isOpen && (
          <div className="bg-white text-black rounded-2xl shadow-2xl p-4 max-w-xs animate-slide-up">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-sm mb-1">Chat with us on WhatsApp</h3>
                <p className="text-xs text-gray-600">We typically reply within minutes</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold text-sm transition-all"
            >
              Start Chat
            </button>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all hover:scale-110 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
          
          {/* Icon */}
          <MessageCircle className="text-white relative z-10" size={28} />
          
          {/* Notification Badge */}
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white">
            1
          </span>
        </button>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
}