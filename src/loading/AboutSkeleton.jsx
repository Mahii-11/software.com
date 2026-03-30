/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function AboutSkeleton() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Text Skeleton */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            className="space-y-6"
          >
            <div className="h-10 w-56 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="h-6 w-full md:w-3/4 bg-gray-300 rounded-lg animate-pulse"></div>
            <div className="h-6 w-full md:w-3/4 bg-gray-300 rounded-lg animate-pulse"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="h-8 w-full bg-gray-300 rounded-lg animate-pulse"></div>
              <div className="h-8 w-full bg-gray-300 rounded-lg animate-pulse"></div>
              <div className="h-8 w-full bg-gray-300 rounded-lg animate-pulse"></div>
              <div className="h-8 w-full bg-gray-300 rounded-lg animate-pulse"></div>
            </div>
          </motion.div>

          {/* Right Image Skeleton */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", delay: 0.2 }}
          >
            <div className="relative aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-gray-300 rounded-xl animate-pulse shadow-xl"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}