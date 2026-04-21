import { useEffect, useState } from "react";
import { Play, Search, Calendar } from "lucide-react";
import { Button } from "../components/ui/button";
import { getMedia } from "../services/api";
import MediaSkeleton from "../loading/MediaSkeleton";

const IMAGE_BASE = "https://backend.banglatechsolutionit.com/";

export default function MediaPage() {
  const [mediaData, setMediaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const loadMedia = async () => {
      try {
        const data = await getMedia();
        setMediaData(data || []);
      } catch (error) {
        console.error("Media fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadMedia();
  }, []);

  const categories = ["All", ...new Set(mediaData.map(item => item.category))];

  const filteredMedia =
    activeTab === "All"
      ? mediaData
      : mediaData.filter(item => item.category === activeTab);

  const featuredVideo = mediaData[0];

  if (loading) {
    return <MediaSkeleton />;
  }

  return (
    <div className="min-h-screen bg-white pt-24 md:pt-28 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4 md:mb-6">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Media Library
            </span>
          </h1>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed">
            Explore our latest webinars, success stories, and technical tutorials
            crafted to help you stay ahead in the digital world.
          </p>
        </div>

        {/* Featured */}
        {featuredVideo && (
          <div
            onClick={() => setSelectedVideo(featuredVideo)}
            className="relative rounded-2xl md:rounded-3xl overflow-hidden mb-14 md:mb-20 group cursor-pointer shadow-xl md:shadow-2xl shadow-indigo-100 border border-slate-100"
          >
            <img
              src={IMAGE_BASE + featuredVideo.thumbnail}
              alt="Featured"
              className="w-full h-[220px] sm:h-[300px] md:h-[450px] lg:h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-12">
              <span className="bg-indigo-600 text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full w-fit mb-3 md:mb-4">
                FEATURED VIDEO
              </span>

              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 max-w-2xl">
                {featuredVideo.title}
              </h2>

              <div className="flex items-center gap-4 text-slate-300 text-xs sm:text-sm">
                <span className="flex items-center gap-2">
                  <Calendar size={14} />
                  {featuredVideo.date}
                </span>
              </div>

              {/* Play button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-indigo-600 transition-all duration-300 shadow-xl border border-white/30">
                  <Play className="text-white fill-current ml-1" size={24} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 md:gap-6 mb-10 md:mb-12">
          
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 md:px-5 md:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 border ${
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
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search videos..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-400 transition-all"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredMedia.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden mb-3 md:mb-4 shadow-md border border-slate-100">
                <img
                  src={IMAGE_BASE + item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Play className="text-indigo-600 fill-current ml-0.5" size={18} />
                  </div>
                </div>
              </div>

              <div className="px-1">
                <span className="text-indigo-600 text-[11px] md:text-[12px] font-bold uppercase tracking-widest">
                  {item.category}
                </span>

                <h3 className="text-base md:text-lg font-bold text-slate-800 mt-1 md:mt-2 leading-tight group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs md:text-sm text-slate-400 mt-2 md:mt-3 flex items-center gap-2">
                  <Calendar size={12} /> {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe */}
        <div className="mt-16 md:mt-20 text-center border-t border-slate-100 pt-12 md:pt-16">
          <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 md:mb-4">
            Want to see more content?
          </h3>

          <p className="text-slate-500 mb-6 md:mb-8 text-sm md:text-base">
            Join 5,000+ subscribers who get our videos directly in their inbox.
          </p>

          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-indigo-50 shadow-sm"
            />
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 md:px-8 py-3 md:py-6 rounded-xl font-bold transition-all shadow-lg shadow-indigo-200">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-3 md:p-4">
          
          <div
            className="absolute inset-0"
            onClick={() => setSelectedVideo(null)}
          />

          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl md:rounded-2xl overflow-hidden z-10">
            
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-2 right-2 md:top-3 md:right-3 z-20 bg-white text-black px-2 py-1 md:px-3 md:py-1 rounded-lg text-xs md:text-sm font-bold"
            >
              ✕
            </button>

            <div
              className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full"
              dangerouslySetInnerHTML={{ __html: selectedVideo.video }}
            />
          </div>
        </div>
      )}
    </div>
  );
}