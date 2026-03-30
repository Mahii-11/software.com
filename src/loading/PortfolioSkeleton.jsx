/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function PortfolioSkeleton() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header Skeleton */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="h-10 w-64 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="h-5 w-full md:w-3/4 bg-gray-300 rounded-lg animate-pulse"></div>
          </div>
          <div className="h-10 w-40 bg-gray-300 rounded-full animate-pulse"></div>
        </div>

        {/* Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.1,
              }}
              className="rounded-2xl overflow-hidden bg-white shadow-sm"
            >
              {/* Image Skeleton */}
              <div className="h-64 bg-gray-300 animate-pulse"></div>

              {/* Content Skeleton */}
              <div className="p-6 space-y-4">
                <div className="h-4 w-24 bg-gray-300 rounded animate-pulse"></div>
                <div className="h-6 w-3/4 bg-gray-300 rounded animate-pulse"></div>
                <div className="h-4 w-full bg-gray-300 rounded animate-pulse"></div>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap">
                  <div className="h-6 w-14 bg-gray-300 rounded animate-pulse"></div>
                  <div className="h-6 w-16 bg-gray-300 rounded animate-pulse"></div>
                  <div className="h-6 w-12 bg-gray-300 rounded animate-pulse"></div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <div className="h-9 w-full bg-gray-300 rounded-lg animate-pulse"></div>
                  <div className="h-9 w-12 bg-gray-300 rounded-lg animate-pulse"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}