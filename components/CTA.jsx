"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,#0f172a_0%,#111827_45%,#1e1b4b_100%)] p-8 shadow-2xl shadow-black/25 md:p-12"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.16),transparent_30%)]" />
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/90">
            Apply Now
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Start your journey with a university that feels built for the future.
          </h2>
          <p className="mt-5 text-base leading-7 text-white/68">
            Take the next step toward a campus experience designed around
            modern learning, strong outcomes, and premium student support.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#top"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-slate-100"
          >
            Get Admission Details
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/8 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/12"
          >
            Learn More
          </a>
        </div>
      </motion.div>
    </section>
  );
}