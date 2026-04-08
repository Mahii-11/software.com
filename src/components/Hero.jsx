/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { getHeroSectionData } from "../services/api";
import HeroSkeleton from "../loading/HeroSkeleton";

const HeroTitleByPosition = ({ title, highlightIndex }) => {
  if (!title) return null;

  const words = title.split(" ");

  return (
    <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-[1.1] mb-6 text-slate-900">
      {words.map((word, index) =>
        index === highlightIndex ? (
          <span key={index} className="text-gradient">
            {word}{" "}
          </span>
        ) : (
          <span key={index}>{word} </span>
        )
      )}
    </h1>
  );
};






export function Hero() {
  const [heroData, setHeroData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchHerData = async () => {
      try {
        setLoading(true);
        const data = await getHeroSectionData();
        setHeroData(data);

      } catch (error) {
        console.error("Error fetching hero section data:", error);
      } finally {
        setLoading(false)
      }
    };
    fetchHerData();
  }, []);

   if (loading) return <HeroSkeleton />;



  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-28 md:pt-24 lg:pt-20 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">


      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-[1440px] pt-12 pb-32 min-h-[80vh] relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-gray-200 text-sm font-medium text-indigo-600 shadow-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new projects
          </div>

          <HeroTitleByPosition
            title={heroData[0]?.title}
            highlightIndex={2} 
           />

          <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
            {heroData[0]?.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-slate-900 hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
              onClick={scrollToContact}
            >
              Start Project <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-12 border-indigo-200 text-indigo-700 text-base  hover:bg-indigo-50 hover:border-indigo-300
             hover:text-indigo-800
              transition-all duration-300 backdrop-blur-sm"
              onClick={() =>
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Work
            </Button>
          </div>
        </motion.div>



           <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
             >
            <div className="relative grid grid-cols-2 gap-4 items-start w-full mt-10 px-4">
            
            {/* Top Left Image Area */}
            <div className="flex flex-col gap-10">
              <motion.div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden shadow-xl border border-gray-100 bg-white p-1.5"
               animate={{ y: [0, -12, 0] }}
               transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              >
                <img 
                  src={heroData[0]?.image_one}
                  alt="Tech Professional" 
                  className="w-full h-full object-cover rounded-[20px]
                  shadow-[0_40px_100px_rgba(0,0,0,0.15)] z-10"
                 
                />
              </motion.div>
              
              {/* Stat: 30+ Countries (Below top left image, centered with it) */}
              <div className="text-center py-4">
                <div className="text-[40px] font-bold text-slate-900 leading-none">{heroData[0]?.stat_two_count}+</div>
                <div className="text-slate-500 text-[16px] font-semibold mt-2">{heroData[0]?.stat_two_text}</div>
              </div>
            </div>

            {/* Top Right Area (Stat first) */}
            <div className="flex flex-col gap-8 pt-12">
              {/* Stat: 850+ Tech Pros */}
              <div className="text-center py-4">
                <div className="text-[40px] font-bold text-[#1E293B] leading-none">{heroData[0]?.stat_one_count}+</div>
                <div className="text-[#64748B] text-[16px] font-semibold mt-2">{heroData[0]?.stat_one_text}</div>
              </div>

              {/* Bottom Right Image */}
              <motion.div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden shadow-2xl bg-white p-1.5"
               animate={{ y: [0, -20, 0] }}
               transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              
              
              >
                <img 
                  src={heroData[0]?.image_two}
                  alt="Team Collaboration" 
                  className="w-full h-full object-cover rounded-[20px]
                  shadow-[0_40px_100px_rgba(0,0,0,0.15)] z-10"
                />
              </motion.div>
            </div>          
        </div>
    </motion.div>  
      </div>
               <div className="absolute -bottom-52 sm:-bottom-48 left-1/2 -translate-x-1/2 
                w-[140%] h-60 
                bg-gradient-to-b from-white to-transparent
                rounded-[100%]
                shadow-[0_-20px_60px_rgba(0,0,0,0.06)]
                pointer-events-none"></div>
 </section>
  );
}
















 
        
