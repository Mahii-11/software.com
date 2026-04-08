import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import CoreCapabilitiesSkeleton from "../loading/CoreCapabilitiesSkeleton";
import { getCapabilityData, getServiceData } from "../services/api";



export default function CoreCapabilities() {
  const [capabilities, setCapabilities] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
     const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getCapabilityData();
        setCapabilities(data);
      } catch (error) {
        console.error("Error fetching capability data:", error);
      } finally {
        setLoading(false);
      }
     }
      fetchData();

  }, []);





  useEffect(() => {
      const fetchServices = async () => {
        try {
          setLoading(true);
          const data = await getServiceData();
          setServices(data);

        } catch (error) {
          console.error("Error fetching service data:", error);
        } finally {
          setLoading(false);
        }
      }
      fetchServices();

  }, []);
  
  
  if (loading) return <CoreCapabilitiesSkeleton />;

   const data = capabilities[0];




  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Content */}
          <div>
            <p className="text-blue-600 font-semibold uppercase tracking-wider mb-4">
              Our Core Capabilities
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {data?.title.split(" ").slice(0, 3).join(" ")} <br />
              {data?.title.split(" ").slice(3).join(" ")}
            </h2>

            <p className="text-gray-600 text-lg mb-8">
             {data?.short_description}
            </p>

            <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-7 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition">
              Explore All Services
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src={data?.image}
              alt="Team Working"
              className="rounded-3xl shadow-2xl object-cover w-full h-[400px]"
            />
            <div className="absolute inset-0 rounded-3xl bg-blue-600/10"></div>
          </div>
        </div>

        {/* Services Image Cards */}
        <div>
           <div className="text-center mb-16">
          <h2 className="font-display font-bold text-slate-900 text-3xl md:text-4xl mb-4">
            Our <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A journey of passion, innovation, and excellence in every project.
          </p>
        </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-sm mb-4 opacity-90">
                  {service.short_description}
                </p>
                <div className="flex items-center gap-2 text-blue-300 group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}