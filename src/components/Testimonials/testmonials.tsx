"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [rating, setRating] = useState(2);

  useEffect(() => {
    // Modified to generate ratings between 3 and 4
    const randomRating = Math.floor(Math.random() * 2) + 3;
    setRating(randomRating);
  }, [currentTestimonial]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial(
        (prevTestimonial) => (prevTestimonial + 1) % testimonials.length
      );
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handlePrevious = () => {
    setCurrentTestimonial((prevTestimonial) =>
      prevTestimonial === 0 ? testimonials.length - 1 : prevTestimonial - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonial(
      (prevTestimonial) => (prevTestimonial + 1) % testimonials.length
    );
  };

  const { description, name } = testimonials[currentTestimonial];

  const variants = {
    initial: { opacity: 0, y: "100%", scale: 0.1 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: "100%", scale: 0.1 },
  };

  const dotVariants = {
    active: { scale: 1.2, backgroundColor: "#3f3f46" },
    inactive: { scale: 1, backgroundColor: "#D1D5DB" },
  };

  return (
    <section className="relative py-12 md:py-16">
      <div className="mb-8 text-center">
        <h2 className=" text-3xl font-bold text-primary sm:text-4xl">
          What Our Community Says
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Hear from the women whose lives have been transformed by ECO-MAMA
        </p>
      </div>
      <div className="w-full">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentTestimonial}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            className="flex w-full flex-col items-center justify-center space-y-4"
            transition={{
              duration: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 15,
                stiffness: 150,
                restDelta: 0.001,
              },
            }}
          >
            <p className="m-0 max-w-xl text-gray-500 text-center text-sm font-normal tracking-tight">
              {description}
            </p>
            <div className="flex flex-col text-primary items-center justify-center space-x-3">
              <div className="text-base font-medium text-primary dark:text-gray-300">
                {name}
              </div>
            </div>
            <div className="flex">
              {Array.from({ length: 4 }, (_, index) => (
                <Star key={index} filled={index < rating} />
              ))}
            </div>
          </motion.div>
          <div className="mt-6 flex justify-center">
            {testimonials.map((_, index) => (
              <motion.div
                key={index}
                className="mx-1 h-1 w-1 cursor-pointer rounded-full"
                variants={dotVariants}
                animate={index === currentTestimonial ? "active" : "inactive"}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </AnimatePresence>
      </div>
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 transform p-2"
        onClick={handlePrevious}
        aria-label="Previous Testimonial"
      >
        <ArrowLeft />
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 transform p-2"
        onClick={handleNext}
        aria-label="Next Testimonial"
      >
        <ArrowRight />
      </button>
    </section>
  );
};

interface StarProps {
  filled: boolean;
}

const Star: React.FC<StarProps> = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={filled ? "#1E3A8A" : "none"}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={filled ? "#1E3A8A" : "#E5E7EB"}
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 17.25L6.516 20.06a.75.75 0 01-1.09-.79l.82-4.773-3.467-3.393a.75.75 0 01.417-1.28l4.794-.697L11.24 4.3a.75.75 0 011.352 0l2.144 4.918 4.794.697a.75.75 0 01.417 1.28l-3.467 3.393.82 4.773a.75.75 0 01-1.09.79L12 17.25z"
    />
  </svg>
);

const testimonials = [
  {
    name: "Ayingeneye Jeanine",
    description:
      "My name is Ayingeneye Jeanine, a 38 years old, Rwandan female. I attended the Women Warriors program by ECO-MAMA and gained a deep understanding of climate change's psychological impact. I am proud to be a Women Warriors graduate, empowered with knowledge and resilience to face challenges with strength.",
  },
  {
    name: "Mutoni Alice",
    description:
      "My name is Mutoni Alice, 25 years old. I joined ECO-MAMA when stress from severe erosion overwhelmed me. Through their AI chatbot, I received instant mental health support and learned valuable skills to manage my challenges. Today, I feel empowered, safe, and grateful for ECO-MAMA's life-changing impact.",
  },
  {
    name: "Uzamukunda Félicité",
    description:
      "My name is Uzamukunda Félicité, 46 years old. ECO-MAMA helped me overcome the overwhelming stress caused by poor crop production and caregiving pressures. Through virtual counseling and valuable resources, I regained my mental health and confidence. Today, I am safe and resilient, thanks to their life-changing support.",
  },
];

export default Testimonial;