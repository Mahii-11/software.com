import { Users, UserCheck, Sparkles, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { getOurTeam } from "../services/api";
import TeamSkeleton from "../loading/TeamSkeleton";


const colors = [
  "bg-blue-100",
  "bg-violet-100",
  "bg-emerald-100",
  "bg-rose-100",
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
              <div className={`relative h-[320px] ${member.color} overflow-hidden 
              transition duration-300 group-hover:shadow-xl`}>

                {/* Curve Shape */}
                <div className="absolute bottom-0 left-0 w-full">
                  <svg viewBox="0 0 500 150" className="w-full">
                    <path
                      d="M0,0 C150,150 350,150 500,0 L500,150 L0,150 Z"
                      fill="white"
                    />
                  </svg>
                </div>

                {/* Image */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                  <img
                    src={member.img}
                    className="h-[300px] object-contain transition group-hover:scale-105"
                  />
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
        <TrustFeatures/>
        <div className="text-center mt-16">
          <h1 className="text-gray-800 mb-10 text-2xl">Crafting <span className="text-gradient">Your Dream </span>  Squad.</h1>
          <Button 
            size="lg"
            variant="outline"
            className="text-white bg-indigo-600">
            Hire The Best Team
          </Button>
        </div>
    </section>
  );
}





 function TrustFeatures() {

  const features = [
    {
      id: 1,
      icon: Users,
      title: "Professional Developers",
      description:
        "We have professional software developers with expertise in 100+ technologies.",
      color: "bg-pink-100 text-pink-600",
    },
    {
      id: 2,
      icon: UserCheck,
      title: "Dedicated Account Specialists",
      description:
        "Tailored solutions for every key account.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 3,
      icon: Sparkles,
      title: "Flexible Strategy",
      description:
        "Innovative & flexible strategy suitable for any changing requirements.",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      id: 4,
      icon: Clock,
      title: "On-time Delivery",
      description:
        "Delivering ahead of schedule, every time.",
      color: "bg-violet-100 text-violet-600",
    },
  ];

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