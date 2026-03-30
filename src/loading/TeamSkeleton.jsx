/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function TeamFancySkeleton() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {[1, 2, 3, 4].map((_, i) => (
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
          className="group text-center"
        >
          {/* Card */}
          <div className="relative h-[320px] bg-gray-200 overflow-hidden animate-pulse">

            {/* Curve Shape */}
            <div className="absolute bottom-0 left-0 w-full">
              <svg viewBox="0 0 500 150" className="w-full">
                <path
                  d="M0,0 C150,150 350,150 500,0 L500,150 L0,150 Z"
                  fill="white"
                />
              </svg>
            </div>

            {/* Image Placeholder */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
              <div className="h-[300px] w-[180px] bg-gray-300 rounded-t-full animate-pulse"></div>
            </div>
          </div>

          {/* Info */}
          <div className="mt-6 space-y-2">
            <div className="h-5 w-32 mx-auto bg-gray-300 rounded animate-pulse"></div>
            <div className="h-4 w-24 mx-auto bg-gray-300 rounded animate-pulse"></div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}