import { useState } from "react";
import { Play, Search, Filter, Calendar, Clock } from "lucide-react";
import { Button } from "../components/ui/button"; // Apnar UI folder onujayi change korte paren

// Future-e dynamic korar jonno static object
const mediaData = [
  {
    id: 1,
    title: "How we scaled BanglaTech to 1M users",
    category: "Success Stories",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470&auto=format&fit=crop",
    duration: "12:45",
    date: "March 24, 2026",
    featured: true
  },
  {
    id: 2,
    title: "Modern UI/UX Design Trends in 2026",
    category: "Tutorials",
    thumbnail: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1416&auto=format&fit=crop",
    duration: "08:20",
    date: "April 02, 2026",
    featured: false
  },
  {
    id: 3,
    title: "Behind the scenes: Our Development Process",
    category: "Agency Life",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop",
    duration: "15:10",
    date: "January 15, 2026",
    featured: false
  },
  {
    id: 4,
    title: "Cloud Solutions for Growing Startups",
    category: "Webinars",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop",
    duration: "45:00",
    date: "Feb 10, 2026",
    featured: false
  },
  // Aro data add korle page ta "vora vora" lagbe
];

const categories = ["All", "Success Stories", "Tutorials", "Webinars", "Agency Life"];

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredMedia = activeTab === "All" 
    ? mediaData 
    : mediaData.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Media Library</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Explore our latest webinars, success stories, and technical tutorials 
            crafted to help you stay ahead in the digital world.
          </p>
        </div>

        {/* Featured Video (Rich Section) */}
        <div className="relative rounded-3xl overflow-hidden mb-20 group cursor-pointer shadow-2xl shadow-indigo-100 border border-slate-100">
          <img 
            src={mediaData[0].thumbnail} 
            alt="Featured" 
            className="w-full h-[400px] md:h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-8 md:p-12">
            <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">FEATURED VIDEO</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-2xl">{mediaData[0].title}</h2>
            <div className="flex items-center gap-6 text-slate-300 text-sm">
              <span className="flex items-center gap-2"><Calendar size={16}/> {mediaData[0].date}</span>
              <span className="flex items-center gap-2"><Clock size={16}/> {mediaData[0].duration}</span>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-indigo-600 transition-all duration-300 shadow-xl border border-white/30">
                <Play className="text-white fill-current ml-1" size={32} />
              </div>
            </div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                  activeTab === cat 
                  ? "bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-200" 
                  : "bg-white text-slate-500 border-slate-100 hover:border-indigo-200 hover:text-indigo-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18}/>
            <input 
              type="text" 
              placeholder="Search videos..." 
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-400 transition-all"
            />
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMedia.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 shadow-md border border-slate-100">
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Play className="text-indigo-600 fill-current ml-0.5" size={20} />
                   </div>
                </div>
                <span className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-md">
                  {item.duration}
                </span>
              </div>
              <div className="px-1">
                <span className="text-indigo-600 text-[12px] font-bold uppercase tracking-widest">{item.category}</span>
                <h3 className="text-lg font-bold text-slate-800 mt-2 leading-tight group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 mt-3 flex items-center gap-2">
                  <Calendar size={14}/> {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More (To make it look "Vora Vora") */}
        <div className="mt-20 text-center border-t border-slate-100 pt-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Want to see more content?</h3>
          <p className="text-slate-500 mb-8">Join 5,000+ subscribers who get our videos directly in their inbox.</p>
          <div className="max-w-md mx-auto flex gap-3">
             <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-indigo-50 shadow-sm" />
             <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 rounded-xl font-bold transition-all shadow-lg shadow-indigo-200">
               Subscribe
             </Button>
          </div>
        </div>

      </div>
    </div>
  );
}