"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ananya Srivastava",
    role: "B.Tech Computer Science",
    quote:
      "The university feels modern and focused. The mentorship support helped me build a strong portfolio before placements.",
  },
  {
    name: "Priya Shukla",
    role: "MBA Student",
    quote:
      "I loved the professional environment. The learning experience is structured, polished, and truly career-oriented.",
  },
  {
    name: "Aarav Sharma",
    role: "Design Graduate",
    quote:
      "The campus culture is collaborative and inspiring. It gave me confidence to work on real product challenges.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300/90">
          Testimonials
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Students who joined for a degree and stayed for the experience.
        </h2>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            className="rounded-3xl border border-white/10 bg-white/7 p-6 shadow-lg shadow-black/10 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-400 text-sm font-semibold text-slate-950">
                {item.name
                  .split(" ")
                  .map((p) => p[0])
                  .join("")}
              </div>
              <div>
                <h3 className="font-semibold text-white">{item.name}</h3>
                <p className="text-sm text-white/55">{item.role}</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-white/68">“{item.quote}”</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}