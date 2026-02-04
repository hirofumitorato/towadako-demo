"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&q=80"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>

      {/* Content - Always Visible Center Text */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="backdrop-blur-[1px] py-8"
        >
          {/* Main Logo Image */}
          <div className="mb-6 md:mb-8">
            <img
              src="/hero-logo.png"
              alt="賑山亭 SHINZANTEI"
              className="w-40 md:w-56 lg:w-72 mx-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
            />
          </div>

          {/* Name Readings (Romaji) */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-white text-xl md:text-2xl font-serif tracking-[0.3em] font-medium drop-shadow-md">
              SHINZANTEI
            </p>
          </div>

          {/* Catchphrase / Tagline */}
          <div className="text-center">
            <p className="text-white font-serif text-xl md:text-3xl lg:text-4xl font-medium tracking-[0.15em] drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] leading-relaxed mb-4">
              十和田湖畔の静寂に佇む、和の癒し宿
            </p>
            <p className="text-white/90 font-serif text-sm md:text-lg tracking-[0.1em] font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              A healing Japanese inn nestled in the silence of Lake Towada
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
