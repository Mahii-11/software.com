import { Facebook, Twitter, Linkedin, Github, MapPin } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="mt-24 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        
        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-6">
          
          {/* 1. Brand Section */}
          <div className="flex-1 max-w-sm">
            <div className="flex items-center gap-2 mb-5">
           <Link
             to="/"
             className="relative z-[110] flex items-center gap-2 group cursor-pointer"
            >
            <img
            src="/images/logo.png"
            alt="BanglaTech Logo"
            className="w-auto h-8 md:h-10 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          </Link>
            </div>

            <p className="text-[15px] text-slate-500 leading-relaxed mb-6">
              Crafting premium digital experiences through innovative design and 
              cutting-edge technology. Your vision, our execution.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Github].map((Icon, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-full bg-white border border-slate-100 text-slate-400 hover:text-indigo-600 hover:border-indigo-100 hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* 2. Links & Location Group - Balanced Gapping */}
          <div className="flex-[2] flex flex-wrap justify-between gap-4 md:gap-6">
            
            {/* Company Column */}
            <div className="min-w-[120px]">
              <h4 className="text-[14px] font-bold text-slate-900 mb-5 uppercase tracking-widest">
                Company
              </h4>
              <ul className="space-y-3 text-[14px] text-slate-500">
                <li className="hover:text-indigo-600 cursor-pointer transition-colors duration-200">About Us</li>
                <li className="hover:text-indigo-600 cursor-pointer transition-colors duration-200">Our Careers</li>
                <li className="hover:text-indigo-600 cursor-pointer transition-colors duration-200">Latest Blog</li>
                <li className="hover:text-indigo-600 cursor-pointer transition-colors duration-200">Contact</li>
              </ul>
            </div>

            {/* Services Column */}
            <div className="min-w-[140px]">
              <h4 className="text-[14px] font-bold text-slate-900 mb-5 uppercase tracking-widest">
                Services
              </h4>
              <ul className="space-y-3 text-[14px] text-slate-500">
                <li className="hover:text-indigo-600 cursor-pointer transition-colors duration-200">Web Solution</li>
                <li className="hover:text-indigo-600 cursor-pointer transition-colors duration-200">Mobile Apps</li>
                <li className="hover:text-indigo-600 cursor-pointer transition-colors duration-200">UI/UX Design</li>
                <li className="hover:text-indigo-600 cursor-pointer transition-colors duration-200">Cloud Hosting</li>
              </ul>
            </div>

            {/* Location Column */}
            <div className="min-w-[220px] mt-4 sm:mt-0">
              <h4 className="text-[14px] font-bold text-slate-900 mb-5 uppercase tracking-widest">
                Our Presence
              </h4>
              <div className="space-y-5 text-[14px] text-slate-500">
                <div className="flex gap-3 group cursor-default">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0 transition-colors group-hover:bg-indigo-100">
                    <MapPin size={16} className="text-indigo-600" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block mb-0.5">Bangladesh</span>
                    <p className="leading-snug text-slate-500">Suite 402, Mirpur DOHS,<br/>Dhaka 1216</p>
                  </div>
                </div>
                
                <div className="flex gap-3 group cursor-default">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0 transition-colors group-hover:bg-indigo-100">
                    <MapPin size={16} className="text-indigo-600" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block mb-0.5">USA</span>
                    <p className="leading-snug text-slate-500">1200 Ave of the Americas,<br/>New York, NY 10036</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Newsletter Section */}
          <div className="flex-1 max-w-xs ml-5 sm:ml-0">
            <h4 className="text-[14px] font-bold text-slate-900 mb-5 uppercase tracking-widest">
              Newsletter
            </h4>
            <p className="text-[14px] text-slate-500 mb-5 leading-relaxed">
              Get the latest tech insights directly in your inbox.
            </p>
            <div className="relative group">
              <div className="flex items-center bg-white border border-slate-200 rounded-2xl p-1.5 focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-50 transition-all duration-300">
                <input
                  type="email"
                  placeholder="Email address"
                  className="pl-3 py-2 text-sm w-full outline-none bg-transparent text-slate-600"
                />
                <button className="bg-slate-900 text-white px-5 py-2 text-[13px] font-bold rounded-xl hover:bg-indigo-600 transition-all shadow-sm active:scale-95">
                  Join
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[13px] text-slate-400">
            © {new Date().getFullYear()} <span className="font-bold text-slate-600">BanglaTech</span>. All rights reserved.
          </p>

          <div className="flex gap-8 text-[13px] font-semibold text-slate-400">
            <span className="hover:text-indigo-600 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-indigo-600 cursor-pointer transition-colors">Terms of Use</span>
            <span className="hover:text-indigo-600 cursor-pointer transition-colors">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}