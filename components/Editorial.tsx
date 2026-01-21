"use client";

import { useState } from "react";
import { editorials } from "@/lib/revista-data";

const Editorial = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="editorial" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Editorial
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reflexiones de nuestros compañeros sobre 50 años de historia y hermandad
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          {/* Editorial Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {editorials.map((editorial) => (
              <div
                key={editorial.id}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {editorial.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600 space-x-4">
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {editorial.author}
                      </span>
                    </div>
                    <div className="mt-2">
                      <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {editorial.curso}
                      </span>
                    </div>
                  </div>

                  {/* Excerpt */}
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {editorial.excerpt}
                  </p>

                  {/* Expanded Content */}
                  {expandedId === editorial.id && (
                    <div className="prose prose-gray max-w-none mb-6">
                      <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                        {editorial.content}
                      </div>
                    </div>
                  )}

                  {/* Read More Button */}
                  <button
                    onClick={() =>
                      setExpandedId(
                        expandedId === editorial.id ? null : editorial.id
                      )
                    }
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    {expandedId === editorial.id ? "Leer menos" : "Leer más"}
                    <svg
                      className={`w-4 h-4 ml-2 transition-transform ${
                        expandedId === editorial.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Decorative bottom */}
                <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-700"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Editorial;
