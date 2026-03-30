/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function ServicesSkeleton() {
  return (
    <section className="py-24 relative bg-white">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header Skeleton */}
        <div className="text-center mb-16 space-y-4">
          <div className="h-10 w-56 mx-auto bg-gray-300 rounded-full animate-pulse"></div>
          <div className="h-5 w-80 mx-auto bg-gray-300 rounded-lg animate-pulse"></div>
        </div>

        {/* Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              className="p-8 rounded-2xl bg-gray-100"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gray-300 mb-6 animate-pulse"></div>

              {/* Title */}
              <div className="h-6 w-40 bg-gray-300 rounded mb-3 animate-pulse"></div>

              {/* Description */}
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-300 rounded animate-pulse"></div>
                <div className="h-4 w-5/6 bg-gray-300 rounded animate-pulse"></div>
                <div className="h-4 w-4/6 bg-gray-300 rounded animate-pulse"></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}