import { useRef, useEffect, useState } from "react";
import { getLeadingCompanies } from "../services/api";
import TrustedBySkeleton from "../loading/TrustedBySkeleton";


const cardGradients = [
  "from-blue-500/10 to-indigo-500/10 border-blue-200/60",
  "from-violet-500/10 to-purple-500/10 border-violet-200/60",
  "from-cyan-500/10 to-blue-500/10 border-cyan-200/60",
  "from-emerald-500/10 to-teal-500/10 border-emerald-200/60",
  "from-fuchsia-500/10 to-pink-500/10 border-fuchsia-200/60",
  "from-orange-500/10 to-amber-500/10 border-orange-200/60",
  "from-rose-500/10 to-red-500/10 border-rose-200/60",
  "from-sky-500/10 to-cyan-500/10 border-sky-200/60",
];

const badgeColors = [
  "from-blue-500 to-indigo-500 text-white",
  "from-violet-500 to-purple-500 text-white",
  "from-cyan-500 to-blue-500 text-white",
  "from-emerald-500 to-teal-500 text-white",
  "from-fuchsia-500 to-pink-500 text-white",
  "from-orange-500 to-amber-500 text-white",
  "from-rose-500 to-red-500 text-white",
  "from-sky-500 to-cyan-500 text-white",
];

function LogoCard({ tech, index }) {

  const colorIdx = index % cardGradients.length;
  return (
    <div className={`group flex flex-col items-center justify-center gap-3 mx-3 px-8 py-6 rounded-2xl border bg-gradient-to-br ${cardGradients[colorIdx]} hover:scale-105 hover:shadow-xl transition-all duration-300 min-w-[160px] flex-shrink-0 cursor-default select-none`}>
      <div className="h-8 w-24 flex items-center justify-center">
        <img
          src={tech.image}
          alt={tech.name}
          className="h-full w-full object-contain  transition-all duration-300"
          onError={(e) => {
            const img = e.currentTarget;
            img.style.display = "none";
            const fb = img.nextElementSibling;
            if (fb) fb.style.display = "flex";
          }}
        />
        <div className={`hidden w-10 h-10 rounded-xl bg-gradient-to-br ${badgeColors[colorIdx]} items-center justify-center font-bold text-sm`}>
          {tech.name.slice(0, 2).toUpperCase()}
        </div>
      </div>
      <span className="text-[11px] font-bold text-gray-800 text-center whitespace-nowrap transition-colors duration-300 tracking-widest uppercase">
        {tech.name}
      </span>
    </div>
  );
}

function Marquee({techs}) {
  const trackRef = useRef(null);
  const posRef = useRef(0);
  const rafRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const SPEED = 1.2; 

    const animate = () => {
      posRef.current += SPEED;
      const halfWidth = track.scrollWidth / 2;
      if (posRef.current >= halfWidth) {
        posRef.current -= halfWidth;
      }
      track.style.transform = `translate3d(-${posRef.current}px, 0, 0)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div ref={trackRef} className="flex items-stretch" style={{ willChange: "transform" }}>
      {techs.map((tech, i) => <LogoCard key={`a-${i}`} tech={tech} index={i} />)}
      {techs.map((tech, i) => <LogoCard key={`b-${i}`} tech={tech} index={i} />)}
    </div>
  );
}

export default function TrustedBySection() {

  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const loadTech = async () => {
      try {
        setLoading(true);
        const data = await getLeadingCompanies()
        setTechs(data);
      } catch (error) {
        console.error("Error fetching leading companies:", error);
      } finally {
        setLoading(false);
      }
    }

    loadTech();
  }, [])

  if (loading) {
    return <TrustedBySkeleton />
  }

  return (
    <section className="w-full bg-white py-4 px-0 overflow-hidden">
      <div className="text-center px-6 mb-10">
        <p className="text-xs font-semibold tracking-[0.2em] text-blue-500 uppercase mb-2">
          Our Partners
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Trusted by{" "}
          <span className="text-gradient">
            leading companies
          </span>
        </h2>
        <p className="mt-3 text-gray-400 text-sm max-w-sm mx-auto">
          Partnering with the world's most innovative organizations.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 z-10 bg-gradient-to-l from-white to-transparent" />
        <Marquee techs={techs} />
      </div>
    </section>
  );
}