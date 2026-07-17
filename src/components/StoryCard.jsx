/* eslint-disable no-unused-vars */
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function StoryCard({ service }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className="group h-full flex flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100/60"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />

        {/* Badge */}
        <div className="absolute left-6 top-6">
          <span className="rounded-full border border-white/40 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-indigo-700 backdrop-blur-md">
            Our Stories
          </span>
        </div>

        {/* Floating Arrow */}
        <div className="absolute bottom-6 right-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-indigo-600 shadow-xl transition-all duration-500 group-hover:rotate-45 group-hover:bg-indigo-600 group-hover:text-white">
            <ArrowUpRight size={24} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Title */}
        <h3 className="text-lg md:text-xl font-extrabold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-indigo-600">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="mt-2 text-sm md:text-base font-medium leading-8 text-indigo-600">
          {service.short_description}
        </p>

        {/* Divider */}
        <div className="my-4 h-px w-full bg-gradient-to-r from-indigo-200 via-slate-200 to-transparent" />

        {/* Long Description */}
        <p className="text-[12px] leading-4 text-slate-600 ">
          {service.long_description}
        </p>

      </div>
    </motion.article>
  );
}