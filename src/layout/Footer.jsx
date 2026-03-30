import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        
        {/* Top Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              <h2 className="text-xl font-semibold text-gray-800">
                BanglaTech
              </h2>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed">
              We build scalable digital products with modern technologies.
              Focused on performance, design, and real-world impact.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-5">
              {[Facebook, Twitter, Linkedin, Github].map((Icon, i) => (
                <div
                  key={i}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-indigo-500 hover:text-white transition"
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="hover:text-indigo-600 cursor-pointer">About</li>
              <li className="hover:text-indigo-600 cursor-pointer">Careers</li>
              <li className="hover:text-indigo-600 cursor-pointer">Blog</li>
              <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-4">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="hover:text-indigo-600 cursor-pointer">
                Web Development
              </li>
              <li className="hover:text-indigo-600 cursor-pointer">
                Mobile Apps
              </li>
              <li className="hover:text-indigo-600 cursor-pointer">
                UI/UX Design
              </li>
              <li className="hover:text-indigo-600 cursor-pointer">
                Cloud Solutions
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-4">
              Stay Updated
            </h4>

            <p className="text-sm text-gray-500 mb-4">
              Subscribe to get latest updates and insights.
            </p>

            <div className="flex items-center bg-white border border-gray-200 rounded-xl overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 text-sm w-full outline-none"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 text-sm hover:bg-indigo-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-100 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} BanglaTech. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">
            <span className="hover:text-indigo-600 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-indigo-600 cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}