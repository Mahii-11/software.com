export default function CurvedTeam() {
  const team = [
    {
      name: "Bhuiyan Mohammad Iklash",
      role: "Enterprise Architect",
      img: "/images/team1.png",
      color: "bg-blue-100",
    },
    {
      name: "Biplab Chandra Sarker",
      role: "Solution Architect",
      img: "/images/team2.png",
      color: "bg-violet-100",
    },
    {
      name: "Md. Imrul Hasan",
      role: "Staff Software Engineer",
      img: "/images/team3.png",
      color: "bg-emerald-100",
    },
    {
      name: "Md Abdul Mukit",
      role: "Solution Architect L-I",
      img: "/images/team4.png",
      color: "bg-rose-100",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-16">
          Meet The Experts Behind Our Success
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, i) => (
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
    </section>
  );
}