import React, { useEffect, useRef } from 'react';
export function AnimatedBackground() {
  return <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0826] opacity-98"></div>
      <div className="absolute inset-0">
        <div className="stars-container">
          {[...Array(120)].map((_, i) => <div key={i} className="star" style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          backgroundColor: i % 4 === 0 ? 'rgba(234, 58, 112, 0.8)' // Pink accent (parent company)
          : i % 4 === 1 ? 'rgba(30, 27, 63, 0.8)' // Nav hover
          : i % 4 === 2 ? 'rgba(74, 45, 128, 0.8)' // Purple
          : 'rgba(99, 102, 241, 0.8)',
          boxShadow: i % 4 === 0 ? '0 0 4px rgba(234, 58, 112, 0.9)' : i % 4 === 1 ? '0 0 3px rgba(30, 27, 63, 0.9)' : i % 4 === 2 ? '0 0 3px rgba(74, 45, 128, 0.9)' : '0 0 4px rgba(99, 102, 241, 0.9)',
          borderRadius: '50%',
          animation: `float ${Math.random() * 10 + 10}s linear infinite`,
          opacity: Math.random() * 0.5 + 0.3
        }} />)}
        </div>
      </div>
    </div>;
}