"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AosInitializer() {
  useEffect(() => {
    try {
      // Double-check we're in a browser environment
      if (typeof window !== 'undefined') {
        AOS.init({
          offset: 200,
          duration: 800,
          once: false,
          // Disable animations on mobile for better performance
          disable: window.innerWidth < 768 ? true : false
        });
      }
    } catch (error) {
      // Silently fail if AOS initialization fails
      console.error('AOS initialization failed:', error);
    }
  }, []);

  return null; // This component doesn't render anything
} 