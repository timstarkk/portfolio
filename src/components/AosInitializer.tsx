"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AosInitializer() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      once: false
    });
  }, []);

  return null; // This component doesn't render anything
} 