"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowLeftRight } from 'lucide-react';
import patient1Before from "@/public/patient1-before.jpeg";
import patient1After from "@/public/patient1-after.jpeg";
import patient2Before from "@/public/patient2-before.jpeg";
import patient2After from "@/public/patient2-after.jpeg";

interface BeforeAfterSliderProps {
  beforeImage: string | StaticImageData;
  afterImage: string | StaticImageData;
  beforeAlt: string;
  afterAlt: string;
  title: string;
  description: string;
}

function BeforeAfterSlider({ beforeImage, afterImage, beforeAlt, afterAlt, title, description }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const handleDrag = (clientX: number) => {
    if (containerRef.current) {
      const containerBounds = containerRef.current.getBoundingClientRect();
      const newPosition = ((clientX - containerBounds.left) / containerBounds.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, newPosition)));
    }
  };

  const handleMouseDown = () => {
    const handleMouseMove = (e: MouseEvent) => handleDrag(e.clientX);
    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = () => {
    const handleTouchMove = (e: TouchEvent) => handleDrag(e.touches[0].clientX);
    const handleTouchEnd = () => {
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };

    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
  };

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
      className="relative overflow-hidden rounded-2xl shadow-lg"
    >
      <div className="relative h-[400px] w-full overflow-hidden">
        <Image src={afterImage} alt={afterAlt} fill className="object-cover focus:outline-none" />
        <div
          className="absolute inset-0 transition-transform duration-500 ease-in-out"
          style={{
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
          }}
        >
          <Image src={beforeImage} alt={beforeAlt} fill className="object-cover focus:outline-none" />
        </div>
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <ArrowLeftRight className="w-4 h-4 text-blue-600" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
        <h3 className="text-white text-xl font-semibold mb-1">{title}</h3>
        <p className="text-white text-sm">{description}</p>
      </div>
    </motion.div>
  );
}

export function BeforeAfterSection() {
  const beforeAfterCases = [
     {
      title: "Smile Makeover",
      description: "Complete transformation with veneers and whitening",
      beforeImage: patient1Before,
      afterImage: patient1After,
    },
    {
      title: "Dental Implants",
      description: "Restoring missing teeth with natural-looking implants",
      beforeImage: patient2Before,
      afterImage: patient2After,
    },
    {
      title: "Orthodontic Treatment",
      description: "Straightening teeth for a perfect smile",
      beforeImage: "/placeholder.svg?height=400&width=600&text=Before+Orthodontic+Treatment",
      afterImage: "/placeholder.svg?height=400&width=600&text=After+Orthodontic+Treatment",
    },
  ];

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section ref={ref} className="bg-gradient-to-b from-white to-blue-50 py-20 dark:from-gray-900 dark:to-gray-800">
      <div className="lg:px-16 px-4 mx-auto">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
            Transforming <span className="text-blue-600">Smiles</span>, Changing Lives
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600 dark:text-gray-300 md:text-lg">
            Witness the remarkable results of our dental treatments. Drag the slider to explore the transformations and see the power of a beautiful smile.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {beforeAfterCases.map((caseItem, index) => (
            <BeforeAfterSlider
              key={index}
              beforeImage={caseItem.beforeImage}
              afterImage={caseItem.afterImage}
              beforeAlt={`${caseItem.title} Before`}
              afterAlt={`${caseItem.title} After`}
              title={caseItem.title}
              description={caseItem.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

