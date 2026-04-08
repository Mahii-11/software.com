import { useCallback } from "react";
import { Users, UserCheck, Sparkles, Clock, Speaker } from "lucide-react";
import { Button } from "../components/ui/button";
import { useEffect, useState } from "react";
import { getFeatureData, getOurTeam } from "../services/api";
import TeamSkeleton from "../loading/TeamSkeleton";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import TrustFeaturesSkeleton from "../loading/TrustFeaturesSkeleton";


const colors = [
  "bg-blue-100",
  "bg-violet-100",
  "bg-emerald-100",
  "bg-rose-100",
];


const socialConfig = [
  {
    key: "facebook",
    icon: Facebook,
    bg: "bg-blue-100",
    hoverBg: "hover:bg-blue-600",
    color: "text-blue-600",
  },
  {
    key: "twitter",
    icon: Twitter,
    bg: "bg-sky-100",
    hoverBg: "hover:bg-sky-500",
    color: "text-sky-500",
  },
  {
    key: "instagram",
    icon: Instagram,
    bg: "bg-pink-100",
    hoverBg: "hover:bg-pink-500",
    color: "text-pink-500",
  },
  {
    key: "linkedin",
    icon: Linkedin,
    bg: "bg-blue-100",
    hoverBg: "hover:bg-blue-700",
    color: "text-blue-700",
  },
];

export default function CurvedTeam() {
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        setLoading(true);
        const data = await getOurTeam();
        setTeamData(data);
      } catch (error) {
        console.error("Error fetching team data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTeamData();
  }, []);

  const normalizedTeam = teamData.map((item, index) => ({
    name: item.name,
    role: item.designation,
    img: item.image,
    color: colors[index % colors.length],
     social: {
    facebook: "https://facebook.com/...",
    twitter: "https://twitter.com/...",
    instagram: "https://instagram.com/...",
    linkedin: "https://linkedin.com/..."
  }
  }));

   if (loading)  return <TeamSkeleton/>;
 


  return (
          <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-16">
          Meet The Experts Behind Our Success
        </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
  {normalizedTeam.map((member, i) => (
    <div key={i} className="group text-center">

      {/* Card */}
      <div className={`relative h-[360px] ${member.color} rounded-2xl overflow-hidden transition duration-300 group-hover:shadow-xl`}>

        {/* Image wrapper */}
        <div className="absolute bottom-0 w-full flex justify-center">
          <img
            src={member.img}
            className="h-[320px] object-contain transition duration-300 group-hover:scale-105"
          />
        </div>

        {/* Soft overlay for blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>

        {/* Social icons (BOTTOM SLIDE) */}
          {/* Social icons (BOTTOM SLIDE) */}
<div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition duration-500">
  <div className="bg-white/90 backdrop-blur-md py-3 flex justify-center gap-4 rounded-t-2xl">

    {socialConfig.map((item, idx) => {
      const Icon = item.icon;
      const link = member.social?.[item.key];

      // jodi link na thake → show korbena
      if (!link) return null;

      return (
        <a
          key={idx}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-9 h-9 rounded-full ${item.bg} flex items-center justify-center cursor-pointer ${item.hoverBg} transition`}
        >
          <Icon className={`w-5 h-5 ${item.color} hover:text-white`} />
        </a>
      );
    })}

  </div>
</div>

        {/* Bottom curve (clean, no clash) */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 500 120" className="w-full">
            <path
              d="M0,40 C150,120 350,120 500,40 L500,120 L0,120 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Info */}
      <div className="mt-6">
        <h4 className="font-semibold text-slate-800">
          {member.name}
        </h4>
        <p className="text-sm text-slate-500">{member.role}</p>
      </div>
    </div>
  ))}
          </div>
      </div>

      <TrustFeatures />

      <div className="text-center mt-16">
        <h1 className="text-gray-800 mb-10 text-2xl">
          Crafting <span className="text-gradient">Your Dream </span> Squad.
        </h1>
        <Button size="lg" variant="outline" className="text-white bg-indigo-600 hover:bg-indigo-700 transition">
          Hire The Best Team
        </Button>
      </div>
    </section>
  );
}

 




 function TrustFeatures() {
    const [features, setFeatures] = useState([]);
    const [loading, setLoading] = useState(true);

  const iconMap = {
  Developer: Users,
  Specialists: UserCheck,
  Strategy: Speaker,
  Delivery: Clock,
 }


  const colorMap = {
  Developer: "bg-pink-100 text-pink-600",
  Specialists: "bg-blue-100 text-blue-600",
  Strategy: "bg-emerald-100 text-emerald-600",
  Delivery: "bg-violet-100 text-violet-600",
};


 const normalizeFeatures = useCallback((apiData) => {
  return apiData.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    icon: iconMap[item.icon] || Users,
    color: colorMap[item.icon] || "bg-gray-100 text-gray-600",
  }));
}, []);

     useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getFeatureData();
        const normalized = normalizeFeatures(res.data.data);
        setFeatures(normalized);
      } catch (error) {
        console.error("Error fetching features:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [normalizeFeatures]);


  if (loading) return <TrustFeaturesSkeleton />;


  

  return (
    <section className=" max-w-7xl mx-auto mt-16 text-center">
          <h1  className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 leading-tight">Empowering Your Success Through Expertise & Reliability</h1>
          <div className="grid sm:grid-cols-2 gap-y-6 gap-x-64 mt-14 px-8 sm:px-10 lg:px-32 ">

      {features.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.id} className=" flex gap-x-4 items-start text-left">

            {/* Icon */}
            <div className={`p-3 rounded-xl h-fit ${item.color} shrink-0`}>
              <Icon size={20} />
            </div>

            {/* Text */}
            <div>
              <h4 className="font-semibold text-lg text-slate-800 leading-tight">
                {item.title}
              </h4>
              <p className="text-sm text-slate-500 mt-1">
                {item.description}
              </p>
            </div>

          </div>
        );
      })}

    </div>
    </section>
  );
}