/* eslint-disable no-unused-vars */
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getWhoWeAre } from "../services/api";
import AboutSkeleton from "../loading/AboutSkeleton";




function About() {
  const [aboutData, setAboutData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        setLoading(true);
        const data = await getWhoWeAre();
        setAboutData(data);
      } catch (err) {
        console.error("Error fetching about data:", err);

      } finally {
        setLoading(false);
      }
    }
    fetchAboutData();
  }, []);


  if (loading) return <AboutSkeleton />;

 const about = aboutData[0]; 


   const mediaUrl = about?.image || "";
   const isVideo = /\.(mp4|webm|ogg)$/i.test(
   mediaUrl.split("?")[0]
   );

   console.log(mediaUrl)
   console.log(isVideo)



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
               <div className="space-y-6 text-lg text-slate-700 leading-relaxed mb-7">
                 {about?.description?.split(/\n+/).map((para, idx) => (
                 <p key={idx}>{para}</p>
             ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {about?.items?.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-700" />
                  <span className="font-medium text-black">{item.trim()}</span>
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
  {isVideo ? (
    <div className="relative aspect-square max-w-[500px] mx-auto rounded-xl overflow-hidden shadow-xl">
      <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={mediaUrl} type="video/mp4" />
                </video>
    </div>
  ) : (
    <div className="relative aspect-square max-w-[500px] mx-auto">
      <div className="absolute inset-0 border border-white/10 rounded-xl overflow-hidden shadow-xl">
        <img
          src={mediaUrl}
          alt="Our Team"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
          <div>
            <div className="text-2xl font-bold text-white mb-1">
              Our Studio
            </div>
            <p className="text-white/80">San Francisco, CA</p>
          </div>
        </div>
      </div>
    </div>
  )}
</motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;






          