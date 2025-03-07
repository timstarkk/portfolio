import React from 'react'
import Hero from '../components/Hero/Hero';
import Banner from '../components/Banner/Banner';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import AosInitializer from '../components/AosInitializer';

export default function Home() {
    const scrollToProjects = (e) => {
        e.preventDefault();
        
        // Ensure we're in a browser environment
        if (typeof window === 'undefined') return;
        
        // Use setTimeout to ensure DOM is fully loaded
        setTimeout(() => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 100);
    };

    return (
        <>
            <AosInitializer />
            <Hero>
                <Banner title="TIM STARK" subtitle="Full-Stack Developer">
                    <button onClick={scrollToProjects} id="big-btn" className="btn btn-primary">view projects</button>
                </Banner>
            </Hero>
            <About />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}
