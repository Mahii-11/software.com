import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Staff Augmentation",
    description:
      "Instantly scale your team with vetted AI/cloud experts when you need them.",
    image: "/images/hero-main.jpg",
  },
  {
    title: "Managed Services",
    description:
      "End-to-end support so your team can focus on innovation.",
    image: "/images/hero-1.jpg",
  },
  {
    title: "MVP Development",
    description:
      "Launch market-ready MVPs in 8–12 weeks with faster iterations.",
    image: "/images/hero-2.jpg",
  },
];

export default function CoreCapabilities() {
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
              Drive Growth With <br /> Strategic Technology Solutions
            </h2>

            <p className="text-gray-600 text-lg mb-8">
              We help ambitious companies scale faster, innovate smarter,
              and build future-ready digital platforms.
            </p>

            <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-7 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition">
              Explore All Services
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="/images/team.jpg"
              alt="Team Working"
              className="rounded-3xl shadow-2xl object-cover w-full h-[400px]"
            />
            <div className="absolute inset-0 rounded-3xl bg-blue-600/10"></div>
          </div>
        </div>

        {/* Services Image Cards */}
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
                  {service.description}
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
    </section>
  );
}