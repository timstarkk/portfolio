import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: "Marketplace Platform",
    description: "A full-stack marketplace application built with Next.js, Spring Boot, and AWS. Features real-time messaging, payment processing, and dynamic search.",
    tech: ["Next.js", "Java", "AWS"],
    image: "/marketplace-preview.jpg",  // You'll need to add this image
    link: "/projects"
  },
  {
    title: "Cross-Platform Mobile App",
    description: "A Flutter-based mobile application for both iOS and Android, featuring offline-first architecture and real-time synchronization.",
    tech: ["Flutter", "Dart", "Firebase"],
    image: "/mobile-preview.jpg",  // You'll need to add this image
    link: "/projects"
  },
  {
    title: "Enterprise Dashboard",
    description: "A scalable dashboard for enterprise clients, handling large datasets with efficient data visualization and real-time updates.",
    tech: ["React", "TypeScript", "GraphQL"],
    image: "/dashboard-preview.jpg",  // You'll need to add this image
    link: "/projects"
  }
];

export default function ProjectHighlights() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 bg-gray-50">
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-newsreader font-bold text-spaceGray mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work in web and mobile development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="h-48 relative bg-gray-100">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-newsreader font-semibold text-spaceGray">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/projects"
            className="inline-block bg-spaceGray text-spaceWhite font-semibold px-12 py-4 rounded-sm text-sm hover:bg-opacity-90 transition-all"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
} 