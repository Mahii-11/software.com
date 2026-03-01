import { ArrowRight } from "lucide-react";

export default function UltraPremiumSection() {
  return (
    <section className="relative overflow-hidden bg-white py-28 px-6">
      


      <div className="relative max-w-7xl mx-auto">
        
        {/* Hero Part */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Left Content */}
          <div>
            <span className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
              🚀 Available for new projects
            </span>

            <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
              Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500">Future</span> With Us
            </h2>

            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              We craft scalable digital experiences powered by modern engineering,
              premium design, and AI innovation.
            </p>

            <div className="flex gap-4">
              <button className="px-7 py-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-xl shadow-lg hover:shadow-xl transition">
                Start Project
              </button>

              <button className="px-7 py-3 border border-purple-500 text-purple-600 rounded-xl hover:bg-purple-50 transition">
                View Work
              </button>
            </div>
          </div>

          {/* Right Images + Stats */}
          <div className="relative">
            
            <img
              src="/images/team2.jpg"
              className="rounded-3xl shadow-2xl w-full h-[420px] object-cover"
            />

            {/* Floating Card 1 */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold text-gray-900">850+</h3>
              <p className="text-gray-500 text-sm">Tech Professionals</p>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold text-gray-900">30+</h3>
              <p className="text-gray-500 text-sm">Countries Served</p>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Our Expertise
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {[
            "Web Development",
            "Mobile Apps",
            "UI/UX Design",
            "AI Automation",
            "Cloud Solutions",
            "Backend Systems",
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-500"
            >
              <div className="w-14 h-14 mb-6 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xl group-hover:bg-purple-600 group-hover:text-white transition">
                {index + 1}
              </div>

              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                {item}
              </h4>

              <p className="text-gray-600 mb-6">
                High-performance scalable solutions engineered with modern
                technologies and best practices.
              </p>

              <div className="flex items-center text-purple-600 font-medium gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}