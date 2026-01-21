"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, User } from "lucide-react";
import { autobiografias, talleres } from "@/lib/revista-data";

const Autobiografias = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCurso, setSelectedCurso] = useState("Todos");
  const [selectedTaller, setSelectedTaller] = useState("Todos");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // Filtrar autobiografías
  const filteredAutobiografias = useMemo(() => {
    return autobiografias.filter((auto) => {
      const matchesSearch = auto.nombre
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCurso =
        selectedCurso === "Todos" || auto.curso === selectedCurso;
      const matchesTaller =
        selectedTaller === "Todos" || auto.taller === selectedTaller;

      return matchesSearch && matchesCurso && matchesTaller;
    });
  }, [searchTerm, selectedCurso, selectedTaller]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="autobiografias" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Autobiografías
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Historias de vida de nuestros compañeros: 50 años de trayectorias,
              logros y recuerdos compartidos
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </motion.div>

          {/* Stats Summary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
          >
            {[
              { value: 91, label: "Estudiantes originales", color: "blue" },
              { value: 78, label: "Sobrevivientes", color: "green" },
              { value: 57, label: "En grupo WhatsApp", color: "purple" },
              { value: 21, label: "Sin contacto", color: "orange" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                className={`bg-${stat.color}-600 text-white rounded-lg p-4 text-center cursor-pointer`}
              >
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200"
          >
            <div className="grid md:grid-cols-3 gap-4">
              {/* Search */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Buscar por nombre
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Escribe un nombre..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Curso Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Filtrar por curso
                </label>
                <select
                  value={selectedCurso}
                  onChange={(e) => setSelectedCurso(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="Todos">Todos los cursos</option>
                  <option value="6°A">6°A</option>
                  <option value="6°B">6°B</option>
                </select>
              </div>

              {/* Taller Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Filtrar por taller
                </label>
                <select
                  value={selectedTaller}
                  onChange={(e) => setSelectedTaller(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="Todos">Todos los talleres</option>
                  {talleres.map((taller) => (
                    <option key={taller} value={taller}>
                      {taller}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-gray-600">
              Mostrando {filteredAutobiografias.length} de{" "}
              {autobiografias.length} autobiografías
            </div>
          </motion.div>

          {/* Autobiografías Grid */}
          {filteredAutobiografias.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredAutobiografias.map((auto) => (
                <motion.div
                  key={auto.id}
                  variants={cardVariants}
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
                >
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 text-white">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3"
                    >
                      <User className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-center">
                      {auto.nombre}
                    </h3>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    {/* Details */}
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <span className="font-semibold mr-2">Curso:</span>
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                          {auto.curso}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <span className="font-semibold mr-2">Taller:</span>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                          {auto.taller}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <span className="font-semibold mr-2">Profesión:</span>
                        <span>{auto.profesion}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <span className="font-semibold mr-2">Ciudad:</span>
                        <span>{auto.ciudad}</span>
                      </div>
                    </div>

                    {/* Excerpt */}
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      {auto.excerpt}
                    </p>

                    {/* Expanded Biography */}
                    <AnimatePresence>
                      {expandedId === auto.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mb-4 pt-4 border-t border-gray-200 overflow-hidden"
                        >
                          <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                            {auto.biografia}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Read More Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() =>
                        setExpandedId(expandedId === auto.id ? null : auto.id)
                      }
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                    >
                      {expandedId === auto.id ? "Ver menos" : "Leer biografía completa"}
                      <motion.div
                        animate={{ rotate: expandedId === auto.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4 ml-2" />
                      </motion.div>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No se encontraron resultados
              </h3>
              <p className="text-gray-600">
                Intenta ajustar los filtros o la búsqueda
              </p>
            </motion.div>
          )}

          {/* Note about more autobiographies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center"
          >
            <p className="text-gray-700">
              <span className="font-semibold">Nota:</span> Esta sección incluye
              una selección de autobiografías. La revista completa contiene las
              historias de todos los compañeros que participaron en esta edición
              especial.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Autobiografias;
