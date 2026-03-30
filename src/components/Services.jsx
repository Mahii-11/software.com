/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Palette,
  Bot,
  Cloud,
  Database,
} from "lucide-react";
import { useEffect, useState } from "react";
import { getOurExpertise } from "../services/api";
import ServicesSkeleton from "../loading/ServicesSkeleton";

const serviceConfig = [
  {
    icon: Monitor,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: Smartphone,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    icon: Palette,
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
  {
    icon: Bot,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
  {
    icon: Cloud,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
  {
    icon: Database,
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
];





export function Services() {
  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const data = await getOurExpertise();
        setServicesData(data);
      } catch (err) {
        console.error("Error fetching services data:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchServices();
  },[]);


  const normalizedServices = servicesData.map((item, index) => ({
  title: item.title,
  description: item.short_description,

  // static design part
  icon: serviceConfig[index % serviceConfig.length].icon,
  color: serviceConfig[index % serviceConfig.length].color,
  bg: serviceConfig[index % serviceConfig.length].bg,
}));


    if (loading) return <ServicesSkeleton/>;







  return (
    <section id="services" className="py-24 relative bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-slate-900 text-3xl md:text-4xl mb-4">
            Our <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We provide comprehensive digital solutions tailored to your unique
            business challenges.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-slate-600">
            {normalizedServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-8 rounded-2xl group hover:border-white/20 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
