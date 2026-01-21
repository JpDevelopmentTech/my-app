"use client";

import { useState } from "react";
import { visionesActualidad } from "@/lib/revista-data";

const VisionesActualidad = () => {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  return (
    <section id="visiones" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Visiones de Actualidad
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Análisis contemporáneos sobre temas relevantes de Colombia y el mundo
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {visionesActualidad.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Icon Header */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 flex items-center justify-center">
                  <span className="text-6xl">{article.icon}</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-semibold text-blue-700">
                      {article.author}
                    </p>
                    {article.profession && (
                      <p className="text-xs text-gray-600">{article.profession}</p>
                    )}
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {selectedArticle === article.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                        {article.content}
                      </p>
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      Página {article.page}
                    </span>

                    <button
                      onClick={() =>
                        setSelectedArticle(
                          selectedArticle === article.id ? null : article.id
                        )
                      }
                      className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors flex items-center"
                    >
                      {selectedArticle === article.id ? "Ver menos" : "Leer más"}
                      <svg
                        className={`w-4 h-4 ml-1 transition-transform ${
                          selectedArticle === article.id ? "rotate-180" : ""
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionesActualidad;
