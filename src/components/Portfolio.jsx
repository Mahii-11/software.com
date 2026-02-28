/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "FinDash Analytics",
    category: "SaaS Dashboard",
    description:
      "A comprehensive financial analytics platform with real-time data visualization and reporting tools.",
    tags: ["React", "D3.js", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    title: "E-Commerce Luxe",
    category: "Mobile App",
    description:
      "Premium shopping experience for a luxury fashion brand featuring AR try-on capabilities.",
    tags: ["React Native", "Firebase", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80",
    gradient: "from-purple-600 to-pink-500",
  },
  {
    title: "HealthCore AI",
    category: "MedTech Platform",
    description:
      "AI-powered diagnostic assistant for healthcare professionals to streamline patient intake.",
    tags: ["Next.js", "Python", "OpenAI"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    gradient: "from-emerald-600 to-teal-500",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display font-bold text-slate-900 text-3xl md:text-4xl mb-4">
              Selected <span className="text-gradient">Works</span>
            </h2>
            <p className="text-slate-600">
              Explore some of our recent projects where design meets technology
              to solve real business problems.
            </p>
          </div>
          <Button variant="outline" 
           className="rounded-full border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:border-indigo-300"
          >
            View All Projects
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all border-none"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity z-10`}
                />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 relative z-20">
                <div className="text-xs font-bold text-indigo-600 mb-2 uppercase tracking-wide">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded bg-gray-50 border border-gray-200 text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-12 px-0 border border-gray-200 text-slate-700 hover:bg-gray-50"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
