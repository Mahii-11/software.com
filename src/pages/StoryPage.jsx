/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  Sparkles,
  UserRound,
} from "lucide-react";
import { getSingleStory } from "../services/api";

export default function StoryPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [service, setService] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStory = async () => {
      try {
        setLoading(true);

        const data = await getSingleStory(id);

        setService(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadStory();
  }, [id]);

  if (loading) {
    return (
      <section className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(148,163,184,0.16),_transparent_35%),linear-gradient(135deg,_#ffffff_0%,_#f8fafc_45%,_#ffffff_100%)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl items-center justify-center rounded-[32px] border border-slate-200/70 bg-white/80 px-8 py-20 shadow-[0_25px_80px_-30px_rgba(15,23,42,0.25)] backdrop-blur">
          <div className="flex flex-col items-center">
            <div className="h-14 w-14 animate-spin rounded-full border-4 border-slate-900 border-t-transparent"></div>
            <p className="mt-5 text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
              Loading story
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (!service) {
    return (
      <section className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(148,163,184,0.16),_transparent_35%),linear-gradient(135deg,_#ffffff_0%,_#f8fafc_45%,_#ffffff_100%)] px-4 py-10 mt-24 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center rounded-[32px] border border-slate-200/70 bg-white/80 px-8 py-16 text-center shadow-[0_25px_80px_-30px_rgba(15,23,42,0.25)] backdrop-blur">
          <div className="rounded-full border border-slate-200 bg-slate-50 p-4">
            <Sparkles className="h-6 w-6 text-slate-700" />
          </div>
          <h2 className="mt-6 text-3xl font-semibold text-slate-900">
            Story unavailable
          </h2>
          <p className="mt-3 max-w-md text-base leading-7 text-slate-600">
            The story you are looking for could not be found. Please return to the services overview.
          </p>
          <button
            onClick={() => navigate("/services")}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <ArrowLeft size={16} />
            Return to services
          </button>
        </div>
      </section>
    );
  }

  const relatedServices = services.filter((item) => item.id !== service.id);

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(148,163,184,0.14),_transparent_32%),linear-gradient(135deg,_#ffffff_0%,_#f8fafc_45%,_#ffffff_100%)] px-4 py-8  sm:py-10 lg:py-12   pt-28
    pb-8
    sm:px-6
    sm:pt-32
    sm:pb-10
    lg:px-8
    lg:pt-28
    lg:pb-12">
      
      <div className="mx-auto max-w-6xl">
        <motion.button
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          onClick={() => navigate(-1)}
          className="group inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/90 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
        >
          <ArrowLeft
            size={16}
            className="transition group-hover:-translate-x-0.5"
          />
          Back
        </motion.button>

        <div className="mx-auto mt-8 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.45 }}
            className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            {service.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.4 }}
            className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-600"
          >
            <div className="flex items-center gap-2">
              <Clock3 size={16} className="text-slate-500" />
              <span>{service.read_time || "4 min read"}</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-slate-300" />
            <div className="flex items-center gap-2">
              <UserRound size={16} className="text-slate-500" />
              <span>{service.author || "Team"}</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.45, ease: "easeOut" }}
          className="mx-auto mt-8 max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-[28px] border border-slate-200/70 bg-white p-2 shadow-[0_24px_80px_-30px_rgba(15,23,42,0.24)] sm:p-3">
            <img
              src={service.image}
              alt={service.title}
              className="h-[260px] w-full rounded-[22px] object-cover sm:h-[340px] lg:h-[400px]"
            />
            <div className="absolute inset-0 rounded-[22px] bg-gradient-to-t from-slate-950/20 via-slate-950/5 to-transparent" />
          </div>
        </motion.div>

        <div className="mx-auto mt-10 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.4 }}
            className="text-lg leading-8 text-slate-600"
          >
            {service.short_description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.34, duration: 0.4 }}
            className="my-8 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.42 }}
            className="space-y-6 text-[17px] leading-8 text-slate-700"
          >
            <p>{service.long_description}</p>
          </motion.div>
        </div>

        {relatedServices.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.45 }}
            className="mx-auto mt-16 max-w-6xl border-t border-slate-200/70 pt-12"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Continue exploring
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  Related stories
                </h2>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {relatedServices.map((item) => (
                <motion.article
                  key={item.id}
                  whileHover={{
                    y: -4,
                    scale: 1.01,
                    boxShadow: "0 24px 60px -24px rgba(15, 23, 42, 0.24)",
                  }}
                  transition={{ duration: 0.25 }}
                  onClick={() => navigate(`/services/${item.id}`)}
                  className="group cursor-pointer overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-[0_16px_40px_-24px_rgba(15,23,42,0.2)]"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 line-clamp-2">
                      {item.short_description}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition group-hover:text-slate-900">
                      Read story
                      <ArrowRight
                        size={16}
                        className="transition group-hover:translate-x-0.5"
                      />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}