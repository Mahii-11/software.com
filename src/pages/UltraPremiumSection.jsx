/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Cloud,
  Code2,
  Compass,
  Cpu,
  Database,
  Globe2,
  Layers3,
  MessageSquareText,
  Palette,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UploadCloud,
  WandSparkles,
  Workflow,
  Zap,
} from "lucide-react";

const stats = [
  { value: "120+", label: "Projects completed" },
  { value: "96%", label: "Happy clients" },
  { value: "24", label: "Countries served" },
  { value: "4.9/5", label: "Client satisfaction" },
  { value: "9+", label: "Years of experience" },
];

const reasons = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Security-first delivery",
    text: "Enterprise-grade architecture with thoughtful governance from day one.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Fast-moving execution",
    text: "A lean process that keeps design, engineering, and launch tightly aligned.",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Premium interface craft",
    text: "Elegant, conversion-ready experiences that feel unmistakably modern.",
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "AI-native thinking",
    text: "We blend product strategy with smart automation to future-proof your launch.",
  },
  {
    icon: <Globe2 className="h-6 w-6" />,
    title: "Global collaboration",
    text: "Remote-first execution with clear communication across every time zone.",
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "Scalable product systems",
    text: "Thoughtfully built foundations that support growth without friction.",
  },
];

const process = ["Discovery", "Planning", "UI/UX Design", "Development", "Testing", "Deployment", "Support"];

const technologies = [
  { icon: <Code2 className="h-6 w-6" />, name: "React" },
  { icon: <Workflow className="h-6 w-6" />, name: "Next.js" },
  { icon: <Cpu className="h-6 w-6" />, name: "Node.js" },
  { icon: <Code2 className="h-6 w-6" />, name: "Laravel" },
  { icon: <Workflow className="h-6 w-6" />, name: "Express" },
  { icon: <Database className="h-6 w-6" />, name: "MongoDB" },
  { icon: <Database className="h-6 w-6" />, name: "PostgreSQL" },
  { icon: <Cloud className="h-6 w-6" />, name: "AWS" },
  { icon: <Smartphone className="h-6 w-6" />, name: "Flutter" },
  { icon: <Smartphone className="h-6 w-6" />, name: "React Native" },
  { icon: <BrainCircuit className="h-6 w-6" />, name: "Python" },
  { icon: <WandSparkles className="h-6 w-6" />, name: "AI" },
];



const testimonials = [
  {
    quote: "Bangla Tech gave our launch an unmistakable sense of authority. The experience feels as premium as the product itself.",
    name: "Mina Rahman",
    role: "Product Director, Northstar",
    country: "Bangladesh",
  },
  {
    quote: "Every interaction felt intentional, polished, and fast. Our investor demo instantly looked world-class.",
    name: "Daniel Cruz",
    role: "Founder, Lumen Health",
    country: "Canada",
  },
  {
    quote: "They translated our complex product into something simple, beautiful, and deeply believable.",
    name: "Alicia Brooks",
    role: "Head of Growth, Aster",
    country: "UK",
  },
];

const faqs = [
  {
    question: "What kind of projects do you take on?",
    answer: "We partner with startups, established brands, and ambitious teams building web, mobile, AI, and digital product experiences.",
  },
  {
    question: "How quickly can we start?",
    answer: "Most new engagements begin within one to two weeks after a discovery conversation and scope alignment.",
  },
  {
    question: "Do you support ongoing product growth?",
    answer: "Yes. We can support launch, iteration, and long-term product evolution through flexible retainers and dedicated delivery.",
  },
];

export default function UltraPremiumSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.12),_transparent_24%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_52%,_#f8fbff_100%)] px-4 py-20 text-slate-900 sm:px-6 lg:px-8 lg:py-16 ">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-[-10%] h-56 w-56 rounded-full bg-violet-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-[-10%] h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:54px_54px] opacity-70" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 lg:gap-12 mt-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-10 rounded-[32px] border border-slate-200 bg-white/90 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr] lg:p-10"
        >
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700">
              <Sparkles className="h-4 w-4" />
              Available for new product engagements
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Launch a premium digital experience with
              <span className="mt-2 block bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 bg-clip-text text-transparent">
                Bangla Tech.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              We design and build thoughtful software products for ambitious startups and global brands who want clarity, beauty, and speed from day one.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
            
              <button
                   onClick={() =>
                   document.getElementById("start-project")?.scrollIntoView({
                   behavior: "smooth",
                     })
                    }
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800">
                Start your project <ArrowRight className="h-4 w-4" />
              </button>
              
             
              <button
                    onClick={() =>
                       document.getElementById("our-process")?.scrollIntoView({
                    behavior: "smooth",
               })
              }
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                View our process
              </button>
            
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-500">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">Strategy</span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">Design systems</span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">AI integration</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-violet-200/70 via-fuchsia-100/50 to-cyan-100/70 blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-4 shadow-2xl">
              <img src="/images/hero-main.jpg" alt="Premium product showcase" className="h-[420px] w-full rounded-[22px] object-cover" />
              <div className="absolute left-8 top-8 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Launch readiness</p>
                <p className="mt-1 text-xl font-semibold text-slate-900">98.4% polished</p>
              </div>
              <div className="absolute bottom-8 right-8 rounded-2xl border border-cyan-200 bg-cyan-50 px-4 py-3 shadow-sm">
                <p className="text-sm text-cyan-700">Global delivery</p>
                <p className="text-2xl font-semibold text-slate-900">24 countries</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="grid gap-3 rounded-[28px] border border-slate-200 bg-white/90 p-4 shadow-[0_16px_45px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-5"
        >
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center sm:text-left">
              <p className="text-3xl font-bold tracking-tight text-slate-950">{item.value}</p>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">{item.label}</p>
            </div>
          ))}
        </motion.div>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.06)] lg:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-violet-50 p-3 text-violet-600">
                <Compass className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Why choose Bangla Tech</p>
                <h2 className="text-2xl font-semibold text-slate-950">Elegant execution, grounded in clarity.</h2>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((item) => (
                <motion.article
                  key={item.title}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="mb-3 inline-flex rounded-xl bg-white p-2 text-violet-600 shadow-sm">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.06)] lg:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-50 p-3 text-cyan-600">
                <Layers3 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Our process</p>
                <h2 className="text-2xl font-semibold text-slate-950">A premium path from vision to launch.</h2>
              </div>
            </div>
            <div className="space-y-4">
              {process.map((step, index) => (
                <div key={step} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900">{step}</p>
                    <p className="text-sm text-slate-500">Thoughtful collaboration at every milestone.</p>
                  </div>
                  <div className="text-slate-400">{index < process.length - 1 ? "↗" : "✓"}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section  id="start-project" className="grid gap-8 rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.06)] lg:grid-cols-[1.05fr_0.95fr] lg:p-8">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm text-violet-700">
              <MessageSquareText className="h-4 w-4" />
              Static project inquiry
            </div>
            <h2 className="text-3xl font-semibold text-slate-950">Tell us what you are building.</h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">
              This experience is intentionally presentation-only, styled to feel like a real premium intake experience for your next launch.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Project type</p>
                <p className="mt-1 text-lg font-semibold text-slate-900">Product design + build</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Budget range</p>
                <p className="mt-1 text-lg font-semibold text-slate-900">$25k – $150k+</p>
              </div>
            </div>
          </div>

          <form className="space-y-4 rounded-[24px] border border-slate-200 bg-slate-50 p-8 sm:p-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-slate-700">
                <span className="mb-2 block">Name</span>
                <input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400" placeholder="Alicia Patel" />
              </label>
              <label className="text-sm text-slate-700">
                <span className="mb-2 block">Company</span>
                <input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400" placeholder="Northstar Labs" />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-slate-700">
                <span className="mb-2 block">Email</span>
                <input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400" placeholder="team@northstar.com" />
              </label>
              <label className="text-sm text-slate-700">
                <span className="mb-2 block">Phone</span>
                <input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400" placeholder="+1 555 0123" />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-slate-700">
                <span className="mb-2 block">Project type</span>
                <select className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none">
                  <option>Product design</option>
                  <option>Web app</option>
                  <option>Mobile app</option>
                  <option>AI experience</option>
                </select>
              </label>
              <label className="text-sm text-slate-700">
                <span className="mb-2 block">Budget</span>
                <select className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none">
                  <option>$25k – $50k</option>
                  <option>$50k – $100k</option>
                  <option>$100k+</option>
                </select>
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-slate-700">
                <span className="mb-2 block">Timeline</span>
                <input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400" placeholder="6-8 weeks" />
              </label>
              <label className="text-sm text-slate-700">
                <span className="mb-2 block">Preferred communication</span>
                <select className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none">
                  <option>Email</option>
                  <option>Video call</option>
                  <option>Slack</option>
                </select>
              </label>
            </div>
            <label className="block text-sm text-slate-700">
              <span className="mb-2 block">Project description</span>
              <textarea className="min-h-24 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400" placeholder="Share your vision, audience, and goals." />
            </label>
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-4 text-sm text-slate-500">
              <div className="mb-3 flex items-center gap-3 text-slate-700">
                <UploadCloud className="h-5 w-5" />
                Upload brief or references
              </div>
              <p className="text-sm">PNG, Figma, PDF, or a simple note — this field is purely visual.</p>
            </div>
            <label className="block text-sm text-slate-700">
              <span className="mb-2 block">Figma link</span>
              <input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400" placeholder="https://figma.com/your-concept" />
            </label>
            <label className="block text-sm text-slate-700">
              <span className="mb-2 block">Additional notes</span>
              <input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400" placeholder="Any special requests or launch dates" />
            </label>
            <div className="flex flex-wrap gap-3 rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-700">
              <label className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2">
                <input type="checkbox" className="rounded border-slate-300 bg-transparent" />
                Discovery session
              </label>
              <label className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2">
                <input type="checkbox" className="rounded border-slate-300 bg-transparent" />
                MVP scope
              </label>
              <label className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2">
                <input type="radio" name="contact" className="accent-violet-600" />
                Email me
              </label>
            </div>
            <button className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Request a consultation <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </section>

        <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.06)] lg:p-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Technologies we use</p>
              <h2 className="text-2xl font-semibold text-slate-950">Modern tools for premium delivery.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600">A curated stack for performant products, polished interfaces, and efficient product teams.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -4, scale: 1.01 }}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center sm:text-left"
              >
                <div className="mb-3 inline-flex rounded-xl bg-white p-2 text-violet-600 shadow-sm">{item.icon}</div>
                <p className="font-semibold text-slate-900">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

       

        <section  id="our-process" className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.06)] lg:p-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Client testimonials</p>
              <h2 className="text-2xl font-semibold text-slate-950">Trusted by founders and operators.</h2>
            </div>
            <div className="flex items-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <Sparkles key={index} className="h-4 w-4" />
              ))}
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <motion.div key={item.name} whileHover={{ y: -4, scale: 1.01 }} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm leading-7 text-slate-600">“{item.quote}”</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 font-semibold text-white">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{item.name}</p>
                    <p className="text-sm text-slate-500">{item.role}</p>
                    <p className="text-sm text-slate-400">{item.country}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.06)] lg:p-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">FAQ</p>
              <h2 className="text-2xl font-semibold text-slate-950">Common questions, thoughtfully answered.</h2>
            </div>
          </div>
          <div className="space-y-3">
            {faqs.map((item) => (
              <details key={item.question} className="group rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-slate-900">
                  <span className="font-medium">{item.question}</span>
                  <span className="text-xl text-slate-400 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}


{/*




   <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.06)] lg:p-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Featured projects</p>
              <h2 className="text-2xl font-semibold text-slate-950">Selected work with lasting impact.</h2>
            </div>
            <button className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-100">Browse all work</button>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.article key={project.title} whileHover={{ y: -6, scale: 1.01 }} className="overflow-hidden rounded-[24px] border border-slate-200 bg-white">
                <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-950">{project.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{project.description}</p>
                  <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-700">
                    View project <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
  
  
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[32px] border border-violet-200 bg-gradient-to-r from-violet-50 via-white to-cyan-50 p-8 text-center shadow-[0_16px_45px_rgba(15,23,42,0.06)] lg:p-12"
        >
          <div className="mb-4 inline-flex rounded-full border border-violet-200 bg-white p-2 text-violet-600">
            <Rocket className="h-5 w-5" />
          </div>
          <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">Ready to shape something exceptional?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Let’s create a digital experience that feels premium, clear, and built for the future.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800">
              Start your project <ArrowRight className="h-4 w-4" />
            </button>
            <button className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
              Book a discovery call
            </button>
          </div>
        </motion.div>







        const projects = [
  {
    title: "Northstar Finance",
    description: "A premium analytics platform with a cinematic onboarding experience.",
    image: "/images/hero-main.jpg",
    tags: ["Fintech", "React", "AI"],
  },
  {
    title: "Lumen Health",
    description: "A calm, trust-first patient portal designed for high clarity and speed.",
    image: "/images/team2.jpg",
    tags: ["Healthtech", "Next.js", "UX"],
  },
  {
    title: "Aster Commerce",
    description: "A composable storefront crafted to elevate high-end retail experiences.",
    image: "/images/team3.png",
    tags: ["Ecommerce", "Node.js", "Tailwind"],
  },
];
  */}
