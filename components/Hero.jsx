"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 py-20 md:px-6 lg:grid-cols-2 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-medium text-white/75 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Admissions open for the next cohort
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
            A premium university experience for the next generation.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/68 sm:text-lg">
            Discover industry-aligned programs, modern labs, mentorship-driven
            learning, and a campus ecosystem built for ambitious students.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-400 via-cyan-400 to-fuchsia-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Book an Admission Call
            </a>
            <a
              href="#programs"
              className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/6 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Programs
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {[
              ["120+", "Faculty mentors"],
              ["45+", "Programs"],
              ["95%", "Placement support"],
            ].map(([value, label]) => (
              <div key={label}>
                <div className="text-2xl font-semibold text-white">{value}</div>
                <div className="mt-1 text-sm text-white/55">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)] blur-2xl" />
          <div className="rounded-[2rem] border border-white/10 bg-white/8 p-4 shadow-2xl shadow-black/25 backdrop-blur-xl">
            <div className="rounded-[1.6rem] border border-white/10 bg-slate-950/60 p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white/60">Campus Preview</p>
                  <h3 className="mt-1 text-xl font-semibold text-white">
                    Future-ready learning hub
                  </h3>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  Live
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  ["AI Labs", "Build with modern tools and guided projects."],
                  ["Global Exposure", "Collaborations, internships, and industry visits."],
                  ["Smart Classrooms", "Hybrid learning powered by high-quality infrastructure."],
                  ["Career Support", "Portfolio building, interview prep, and placement cells."],
                ].map(([title, desc]) => (
                  <div
                    key={title}
                    className="rounded-3xl border border-white/10 bg-white/6 p-4 transition hover:-translate-y-1 hover:bg-white/8"
                  >
                    <div className="text-sm font-semibold text-white">{title}</div>
                    <p className="mt-2 text-sm leading-6 text-white/60">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(99,102,241,0.18),rgba(34,211,238,0.12),rgba(236,72,153,0.14))] p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white/75">Next intake</p>
                  <p className="text-sm font-semibold text-white">August 2026</p>
                </div>
                <div className="mt-3 h-2 rounded-full bg-white/10">
                  <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}