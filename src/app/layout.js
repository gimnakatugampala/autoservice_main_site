// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppChat from './components/WhatsAppChat';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://autoservice.lk'),
  title: {
    default: 'autoservice.lk - Free Auto Service Management System for Sri Lanka',
    template: '%s | autoservice.lk'
  },
  description: 'Transform your service station with autoservice.lk - 100% free forever. Complete management system for Sri Lankan automotive businesses. No credit card required.',
  keywords: ['auto service', 'service station', 'Sri Lanka', 'vehicle management', 'free software', 'garage management'],
  authors: [{ name: 'autoservice.lk' }],
  creator: 'autoservice.lk',
  publisher: 'autoservice.lk',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'autoservice.lk - Free Auto Service Management System',
    description: '100% free forever. Complete service station management for Sri Lankan automotive businesses.',
    url: 'https://autoservice.lk',
    siteName: 'autoservice.lk',
    locale: 'en_LK',
    type: 'website',
    images: [
      {
        url: '/assets/images/autoservice_logo.jpg',
        width: 1200,
        height: 630,
        alt: 'autoservice.lk - Free Auto Service Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'autoservice.lk - Free Auto Service Management System',
    description: '100% free forever. Complete service station management for Sri Lankan automotive businesses.',
    images: ['/assets/images/autoservice_logo.jpg'],
    creator: '@autoservicelk',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/assets/images/autoservice_logo.jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppChat />
      </body>
    </html>
  );
}