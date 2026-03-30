/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function HeroSkeleton() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 md:pt-24 lg:pt-20 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-[1440px] pt-12 pb-32 min-h-[80vh] relative z-20">
        
        {/* Left Text Skeleton */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="space-y-6"
        >
          <div className="h-6 w-48 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="h-14 w-96 md:w-3/4 bg-gray-300 rounded-lg animate-pulse"></div>
          <div className="h-6 w-64 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="flex gap-4">
            <div className="h-12 w-32 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="h-12 w-32 bg-gray-300 rounded-full animate-pulse"></div>
          </div>
        </motion.div>

        {/* Right Images & Stats Skeleton */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", delay: 0.2 }}
          className="relative grid grid-cols-2 gap-4 items-start w-full mt-10 px-4"
        >
          {/* Left Image Skeleton */}
          <div className="flex flex-col gap-10">
            <div className="w-full aspect-[4/3] bg-gray-300 rounded-[24px] animate-pulse"></div>
            <div className="h-20 w-full bg-gray-300 rounded-lg animate-pulse"></div>
          </div>

          {/* Right Image Skeleton */}
          <div className="flex flex-col gap-8 pt-12">
            <div className="h-20 w-full bg-gray-300 rounded-lg animate-pulse"></div>
            <div className="w-full aspect-[4/3] bg-gray-300 rounded-[24px] animate-pulse"></div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute -bottom-52 sm:-bottom-48 left-1/2 -translate-x-1/2 
        w-[140%] h-60 
        bg-gradient-to-b from-white to-transparent
        rounded-[100%]
        shadow-[0_-20px_60px_rgba(0,0,0,0.06)]
        pointer-events-none"></div>
    </section>
  );
}