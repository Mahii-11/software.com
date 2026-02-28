import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import "swiper/css";

const techs = [
  { logo: "/images/amazon.png", name: "Amazon" },
  { logo: "/images/bjit.png", name: "BJIT" },
  { logo: "/images/data-soft.png", name: "DataSoft Systems" },
  { logo: "/images/google.png", name: "Google" },
  { logo: "/images/Grameenphone.png", name: "Grameenphone IT Limited" },
  { logo: "/images/meta.png", name: "Meta Platforms" },
  { logo: "/images/microsoft.png", name: "Microsoft" },
  { logo: "/images/Robi.png", name: "Robi Axiata Ltd" },
];

export function Technologies() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center">

        <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-gray-900 uppercase mb-14">
          Trusted by leading companies
        </p>

        {/* MOBILE GRID */}
        {!isDesktop && (
          <div className="grid grid-cols-2 gap-6">
            {techs.map((tech) => (
              <LogoCard key={tech.name} tech={tech} />
            ))}
          </div>
        )}

        {/* DESKTOP AUTO SLIDE */}
        {isDesktop && (
          <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={30}
            loop={true}
            speed={4000}
            allowTouchMove={false}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
          >
            {[...techs, ...techs].map((tech, i) => (
              <SwiperSlide key={i}>
                <LogoCard tech={tech} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}

function LogoCard({ tech }) {
  return (
    <div className="group flex items-center justify-center h-28 md:h-32 rounded-2xl border border-gray-200 bg-white backdrop-blur-md shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      
      <img
        src={tech.logo}
        alt={tech.name}  
        className="h-20 w-20 md:w-24 md:h-24 object-contain transition-all duration-300 group-hover:scale-110"
      />
      
    </div>
  );
}