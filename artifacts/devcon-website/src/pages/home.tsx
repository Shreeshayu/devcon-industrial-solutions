import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Strengths from '@/components/Strengths';
import Brands from '@/components/Brands';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background w-full">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Strengths />
        <Brands />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}
