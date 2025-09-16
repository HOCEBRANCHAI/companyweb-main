import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { AnimatedBackground } from '../AnimatedBackground';
interface MainLayoutProps {
  children: React.ReactNode;
  showBackground?: boolean;
}
export function MainLayout({
  children,
  showBackground = false
}: MainLayoutProps) {
  return <div className="min-h-screen flex flex-col bg-[#0A0826] relative">
      {showBackground && <AnimatedBackground />}
      <Header />
      <main className="flex-grow relative z-10">{children}</main>
      <Footer />
    </div>;
}