"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { revistaInfo } from "@/lib/revista-data";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const statsVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100 },
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full filter blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center text-white space-y-8 max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 px-6 py-2 rounded-full text-yellow-300 font-semibold text-sm"
            >
              {revistaInfo.year}
            </motion.div>
          </motion.div>

          {/* Main Title */}
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            {revistaInfo.title}
            <motion.span
              variants={itemVariants}
              className="block mt-2 text-4xl sm:text-5xl lg:text-6xl text-yellow-400"
            >
              {revistaInfo.subtitle}
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            50 años de historia, memoria y hermandad
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
          >
            {[
              { value: "50", label: "Años" },
              { value: "98", label: "Páginas" },
              { value: "91", label: "Estudiantes" },
              { value: "2", label: "Cursos" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={statsVariants}
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 cursor-pointer"
              >
                <div className="text-4xl font-bold text-yellow-400">{stat.value}</div>
                <div className="text-sm text-blue-100 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="mt-12">
            <motion.a
              href="#editorial"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl"
            >
              Explorar la Revista
            </motion.a>
          </motion.div>

          {/* School Name */}
          <motion.p variants={itemVariants} className="text-blue-200 text-lg mt-8">
            {revistaInfo.school}
          </motion.p>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
