import React from 'react';
import Link from 'next/link';

export default function ProjectHighlights() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 bg-gray-50">
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-newsreader font-bold text-spaceGray mb-4">
            Highlights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work in web and mobile development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Compass Law Group */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
            <div className="h-48 bg-gray-100 bg-cover bg-center bg-compass bg-no-repeat" />
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-newsreader font-semibold text-spaceGray">
                Compass Law Group
              </h3>
              <p className="text-gray-600 text-sm">
                This website was created from scratch using a Vue.js frontend, PHP/Laravel backend, and Statamic CMS. One highlight is the testimonial rotator. I worked with a designer on this project.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Vue.js</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">PHP</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Laravel</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Statamic</span>
              </div>
            </div>
          </div>

          {/* MDisrupt */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
            <div className="h-48 bg-gray-100 bg-cover bg-center bg-mdisrupt bg-no-repeat" />
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-newsreader font-semibold text-spaceGray">
                MDisrupt
              </h3>
              <p className="text-gray-600 text-sm">
                A Flutter-based mobile application for Web, iOS, and Android. Expert marketplace for health-tech startups.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Flutter</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Dart</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Java</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Next.js</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">TypeScript</span>
              </div>
            </div>
          </div>

          {/* Fivestone */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
            <div className="h-48 bg-gray-100 bg-cover bg-center bg-fivestone bg-no-repeat" />
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-newsreader font-semibold text-spaceGray">
                Fivestone
              </h3>
              <p className="text-gray-600 text-sm">
                I created the website for a design agency in New York using a Vue.js frontend, PHP/Laravel backend, and Statamic CMS. one highlight is the menu drawer animation. I worked with a designer on this project.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Vue.js</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">PHP</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Laravel</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Statamic</span>
              </div>
            </div>
          </div>
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