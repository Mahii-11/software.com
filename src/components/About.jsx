/* eslint-disable no-unused-vars */
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { title: "Agile Development Methodology" },
  { title: "User-Centric Design" },
  { title: "Scalable Architecture" },
  { title: "24/7 Support & Maintenance" },
];

function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-slate-900 text-3xl md:text-4xl mb-6">
              Who <span className="text-gradient">We Are</span>
            </h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              We are a collective of designers, developers, and strategists
              passionate about building the future of the web. Founded in 2024,
              NovaTech was born from a desire to create digital products that
              are not just functional, but exceptional.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our mission is simple: To empower businesses with technology that
              scales, inspires, and performs. We don't just write code; we solve
              problems.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-700" />
                  <span className="font-medium text-black">{item.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Abstract visual representation of "Team" or "Code" */}
            <div className="relative aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0  border border-white/10 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Our Team"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0  to-transparent flex items-end p-8">
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">
                      Our Studio
                    </div>
                    <p className="text-white/80">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
