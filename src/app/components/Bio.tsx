import React from 'react';

export default function Bio() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <div className="space-y-12">
        <div className="text-center">
          {/* <h2 className="text-4xl font-newsreader font-bold text-spaceGray mb-4">
            About Me
          </h2> */}
          {/* <div className="w-20 h-1 bg-spaceGray mx-auto rounded-full mb-8" /> */}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              I&apos;m a software engineer who builds web apps and marketplaces. Over 3+ years, my work has helped secure funding rounds and driven business growth.
            </p>
          </div>

          <div className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-newsreader font-semibold text-spaceGray mb-4">
              Technical Focus
            </h3>
            <ul className="grid grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-spaceGray rounded-full"></span>
                <span>React/Next.js</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-spaceGray rounded-full"></span>
                <span>TypeScript</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-spaceGray rounded-full"></span>
                <span>Java Spring Boot</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-spaceGray rounded-full"></span>
                <span>AWS</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-spaceGray rounded-full"></span>
                <span>Flutter</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-spaceGray rounded-full"></span>
                <span>Dart</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 