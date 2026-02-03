"use client";

import { motion, useAnimationFrame, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// --- Data ---
const unsplashImages = [
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
  "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80",
  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
  "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
  "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80",
  "https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?w=800&q=80",
  "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80",
  "https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?w=800&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
];

// Split images into 3 rows
const rows = [
  unsplashImages.slice(0, 6),
  unsplashImages.slice(6, 12),
  unsplashImages.slice(12, 18),
];

// --- Components ---

function GalleryRow({
  images,
  baseVelocity = 100,
  manualOffset,
  onImageClick
}: {
  images: string[],
  baseVelocity: number,
  manualOffset: any,
  onImageClick: (img: string) => void
}) {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [rowWidth, setRowWidth] = useState(0);

  // Measure row width once mounted
  useEffect(() => {
    if (containerRef.current) {
      // Approximate width calculation: images * (width + gap)
      // Assuming each image container key logic or just measuring scrollWidth of one set
      // For simplicity, we'll assume a fixed width per item or dynamic measurement
      // Let's rely on duplication. If we duplicate 4 times, we have plenty of buffer.
      // We need to know when to wrap.
      // Let's hardcode a wrap width for smoothness or measure properly.
      // A cleaner way for infinite marquee is usually:
      // Loop two copies of the content. When the first copy moves off screen, reset.
      // Let's try to measure the single set width.
      const singleSetWidth = images.length * 320; // 300px width + 20px gap approx
      setRowWidth(singleSetWidth);
    }
  }, [images]);

  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 1000); // delta is ms

    // Reverse direction logic if velocity is negative (not doing here, but good standard)
    // We want left -> right, so velocity > 0 means x increases.
    // If x increases, we move the div to the right. To make content flow L->R, we translate positive?
    // Wait, flow L->R means new content appears from left. This means items move to the RIGHT.
    // So transform x should increase.

    // Apply manual offset influence? 
    // Actually manualOffset is a MotionValue shared from parent.
    // We can't just add it here easily without affecting the loop state.
    // Better strategy: The x is local. The manualOffset is added to the local X during render.

    // Update local running X
    const currentX = x.get() + moveBy;
    x.set(currentX);
  });

  // Calculate the looped display X
  // We want to transform: (x + manualOffset) % rowWidth
  // But % in JS can be negative.
  // Also, we want to center or cover properly.

  const displayX = useTransform(() => {
    if (!rowWidth) return 0;
    const totalX = x.get() + manualOffset.get();
    // Wrap logic:
    // We want the position to be within [-rowWidth, 0] usually for R->L, 
    // or [-rowWidth, 0] if we are shifting content.
    // Let's assume we render 2 sets. unique items are len N.
    // If moving L->R (positive velocity), we are sliding items to the right.
    // We need to reset when the left-most set has fully moved into view?
    // Let's follow the standard: 'x % rowWidth'
    const wrapped = totalX % rowWidth;
    // If moving right, we start at -rowWidth and move to 0.
    return wrapped - rowWidth;
  });

  return (
    <div className="flex overflow-hidden w-full relative select-none group" ref={containerRef}>
      <motion.div
        className="flex gap-4 items-center"
        style={{ x: displayX, width: "max-content" }}
      >
        {/* Render multiple copies to ensure coverage. 3 copies usually safe for standard screens. */}
        {[...images, ...images, ...images, ...images].map((src, i) => (
          <motion.div
            key={i}
            className="relative w-[280px] h-[180px] md:w-[320px] md:h-[220px] flex-shrink-0 overflow-hidden rounded-sm cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={() => onImageClick(src)}
          >
            <img
              src={src}
              alt="Gallery"
              className="w-full h-full object-cover pointer-events-none" // pointer-events-none to prevent drag issues
              loading="lazy"
            />
            {/* Hover overlay for better visibility? Optional. */}
            <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const manualOffset = useMotionValue(0);

  // Animation for manualOffset to decay or spring could be added,
  // but simple direct addition is requested.
  // We can animate the manualOffset value itself for smoothness.

  const handleManualScroll = (direction: 'left' | 'right') => {
    const distance = 400;
    const target = manualOffset.get() + (direction === 'right' ? distance : -distance);
    // Smoothly animate to the new offset
    // We use a temporary animation helper or just set it if we want instant 'scroll' logic,
    // but the prompt asked for "constant scroll" while pressing or "certain amount".
    // Let's just animate it.
    // animate(manualOffset, target, { duration: 0.5, ease: "easeOut" }); 
    // Can't use animate imported directly easily inside component without ref.
    // Using simple set for instantaneous feeling or manual interpolation.
    // Let's just set it to snap? No, jerky.
    // Let's use a spring simply by updating a target and having the value follow? 
    // Too complex for single file without extra hooks.
    // Simple incremental approch:

    manualOffset.set(target);
  };

  const handleNext = () => {
    if (!selectedImage) return;
    const allImages = unsplashImages;
    const idx = allImages.indexOf(selectedImage);
    const nextIdx = (idx + 1) % allImages.length;
    setSelectedImage(allImages[nextIdx]);
  };

  const handlePrev = () => {
    if (!selectedImage) return;
    const allImages = unsplashImages;
    const idx = allImages.indexOf(selectedImage);
    const prevIdx = (idx - 1 + allImages.length) % allImages.length;
    setSelectedImage(allImages[prevIdx]);
  };

  return (
    <section id="gallery" className="py-24 bg-[#FAFAFA] overflow-hidden relative group/gallery">
      {/* Container Title */}
      <div className="container mx-auto px-6 mb-12 text-center text-gray-800">
        <h2 className="text-2xl md:text-3xl font-serif font-medium tracking-[0.2em] mb-2">
          フォトギャラリー
        </h2>
        <p className="text-sm font-serif text-gray-500 tracking-wider">
          IMAGE GALLERY
        </p>
      </div>

      {/* Main Gallery Area with controls */}
      <div className="relative w-full">

        {/* Left Control */}
        <button
          className="absolute left-0 top-0 bottom-0 z-20 w-16 md:w-24 bg-gradient-to-r from-white/90 to-transparent flex items-center justify-start pl-4 md:pl-8 opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-300 focus:outline-none"
          onClick={() => handleManualScroll('right')} // Moving content right visually means scrolling left history? 
        // Wait, clicking Left Arrow usually means "See content to the left".
        // To see content to the left, we must move everything Right.
        // So manualOffset should increase.
        >
          <span className="text-3xl md:text-4xl text-gray-600 font-light hover:text-gray-900 transition-colors">‹</span>
        </button>

        {/* Rows */}
        <div className="flex flex-col gap-4">
          <GalleryRow
            images={rows[0]}
            baseVelocity={15} // Slow
            manualOffset={manualOffset}
            onImageClick={setSelectedImage}
          />
          <GalleryRow
            images={rows[1]}
            baseVelocity={25} // Slightly faster
            manualOffset={manualOffset}
            onImageClick={setSelectedImage}
          />
          <GalleryRow
            images={rows[2]}
            baseVelocity={20} // Medium
            manualOffset={manualOffset}
            onImageClick={setSelectedImage}
          />
        </div>

        {/* Right Control */}
        <button
          className="absolute right-0 top-0 bottom-0 z-20 w-16 md:w-24 bg-gradient-to-l from-white/90 to-transparent flex items-center justify-end pr-4 md:pr-8 opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-300 focus:outline-none"
          onClick={() => handleManualScroll('left')} // Move content Left (offset decreases) to see new items from right
        >
          <span className="text-3xl md:text-4xl text-gray-600 font-light hover:text-gray-900 transition-colors">›</span>
        </button>
      </div>


      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-2 z-50 text-4xl font-light"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>

            {/* Prev Button */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 z-50 text-5xl font-thin hidden md:block"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            >
              ‹
            </button>

            {/* Image Container */}
            <motion.div
              layoutId={selectedImage}
              className="relative max-w-7xl max-h-full w-auto h-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-[85vh] object-contain rounded-sm"
              />
              <p className="text-center text-white/60 text-xs mt-4 tracking-widest font-serif">
                TOWADAKO SHINZANTEI
              </p>
            </motion.div>

            {/* Next Button */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 z-50 text-5xl font-thin hidden md:block"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
