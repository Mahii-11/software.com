import React from 'react'
import AboutSpotless from "../assets/heroimage.jpg";
import About from "../components/About"

const directors = [
  {
    role: "Chairman",
    name: "Md. Abdul Karim",
    image: AboutSpotless,
    title: "Chairman of the Board of Directors",
    description: [
      "Mr. Md. Abdul Karim is the Chairman of the Board of Directors of EATL Innovation Hub Limited (EIHL). He is a former Principal Secretary to the Government of Bangladesh and Senior Adviser of BRAC.",
      "He served in the Ministries of Home Affairs, Commerce, Fisheries and Livestock, Communications (Bridge Division) and Finance (Internal Resource Division). He was also Chairman of Green Delta Insurance Co. Ltd and former Chairman of Eastern Refinery Limited.",
      "Mr. Karim is the Secretary General of the South East Asian Cooperation (SEACO) Foundation and a Paul Harris Fellow. He is the President of Bangladesh Scouts Foundation and the Bangladesh Chemical Society."
    ]
  },
  {
    role: "Managing Director",
    name: "Mr. M A Mubin Khan",
    image: AboutSpotless,
    title: "Managing Director of EATL",
    description: [
      "Mr. M A Mubin Khan founded Ethics Advance Technology Limited (EATL) in November 1999 with the vision of driving Bangladesh’s digital growth. Under his leadership, EATL has become a leading software and technology company in the country.",
      "He has contributed to ICT development in both government and private sectors, helping build the country’s digital footprint and encouraging the next generation of innovators.",
      "Mr. Khan also led the launch of the first mobile application store in Bangladesh, EATLapp, and has helped shape the mobile application industry nationwide."
    ]
  }
];

export default function AboutPage() {
  return (
    <div className="pt-16 md:pt-20 bg-slate-50">
     
      <Hero />
       <About />
      <BoardSection />
    </div>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[420px] w-full overflow-hidden bg-slate-950">
      <img
        src={AboutSpotless}
        alt="Spotless hero"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 z-10 bg-slate-950/75" />

      <div className="relative z-20 flex min-h-[420px] items-center justify-center px-4 text-center text-white">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.32em] text-indigo-300 mb-4">
            Board of Directors
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            Trusted leadership, thoughtful direction.
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Our board brings decades of experience in technology, governance, and business strategy to guide our mission and serve our community.
          </p>
        </div>
      </div>
    </section>
  )
}

function BoardSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-600 font-semibold">
            Leadership
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Meet the executive leaders shaping our future.
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600 leading-relaxed">
            Two seasoned leaders guide the business with deep institutional knowledge and a strong commitment to innovation, service, and sustainable growth.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {directors.map((director, index) => (
            <DirectorCard key={director.name} director={director} reverse={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function DirectorCard({ director, reverse }) {
  return (
    <article className="grid gap-10 lg:grid-cols-2 items-center rounded-[32px] border border-slate-200 bg-white p-6 md:p-10 shadow-xl">
      <div className={`${reverse ? 'lg:order-2' : ''} relative overflow-hidden rounded-[28px] bg-slate-100 shadow-[0_28px_80px_rgba(15,23,42,0.08)]`}>
        <img
          src={director.image}
          alt={director.name}
          className="w-full h-full min-h-[320px] object-cover"
        />
        <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-violet-200/40" />
      </div>

      <div className={`${reverse ? 'lg:order-1 lg:text-right' : 'lg:text-left'}`}>
        <div className="inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 mb-4">
          {director.role}
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">
          {director.name}
        </h3>
        <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-500 font-medium">
          {director.title}
        </p>

        <div className="mt-6 space-y-5 text-slate-600">
          {director.description.map((line, idx) => (
            <p key={idx} className="leading-relaxed">
              {line}
            </p>
          ))}
        </div>
      </div>
    </article>
  )
}

