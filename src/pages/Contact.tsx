import React from 'react';
import { Header } from '../components/layout/Header';

export function Contact() {
  return (
    <div className="min-h-screen bg-[#0F0B1F]">
      <Header />
      <div className="w-full h-[calc(100vh-80px)]">
        <iframe
          src="https://contactus-lemon.vercel.app/"
          className="w-full h-full border-none"
          title="Contact Form"
        />
      </div>
    </div>
  );
}