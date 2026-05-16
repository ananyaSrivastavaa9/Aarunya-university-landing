"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Industry-aligned learning",
    desc: "Curriculum shaped around practical outcomes, portfolio projects, and modern skills.",
  },
  {
    title: "Mentorship culture",
    desc: "Faculty and career mentors guide students from admission through placement.",
  },
  {
    title: "Student-first ecosystem",
    desc: "A supportive campus environment with clubs, events, labs, and growth opportunities.",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/90">
          About
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Built for ambitious students who want more than a degree.
        </h2>
        <p className="mt-4 text-base leading-7 text-white/65">
          This university landing page presents a premium academic brand with a
          strong focus on career growth, modern facilities, and an experience
          that feels both aspirational and trustworthy.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {cards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="rounded-3xl border border-white/10 bg-white/7 p-6 shadow-lg shadow-black/10 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/18 hover:bg-white/10"
          >
            <div className="mb-4 h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-400/30 via-cyan-400/20 to-fuchsia-400/30 ring-1 ring-white/10" />
            <h3 className="text-lg font-semibold text-white">{card.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/60">{card.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}