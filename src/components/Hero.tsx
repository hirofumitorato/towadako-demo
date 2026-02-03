"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-[140px]"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>

      {/* Content - Always Visible Center Text */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="backdrop-blur-[2px]"
        >
          {/* Main Title */}
          <h1 className="text-white font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-4 tracking-wider drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            賑山亭
          </h1>
          
          {/* Subtitle */}
          <div className="mt-6 space-y-2">
            <p className="text-white/95 text-sm md:text-base tracking-[0.3em] font-light drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
              Towadako Shinzantei
            </p>
            <p className="text-white/90 text-base md:text-lg font-light leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] max-w-2xl mx-auto">
              十和田湖畔の静寂に佇む、和の癒し宿
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
