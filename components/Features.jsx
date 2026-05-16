"use client";

import { motion } from "framer-motion";

const programs = [
  { tag: "Engineering", title: "Computer Science & AI", desc: "Advanced curriculum focused on software, systems, and machine intelligence." },
  { tag: "Business", title: "MBA & Entrepreneurship", desc: "Build leadership, strategy, and startup execution capabilities." },
  { tag: "Design", title: "UI/UX & Product Design", desc: "Create polished digital products with real-world design thinking." },
  { tag: "Media", title: "Mass Communication", desc: "Storytelling, digital media, and public communication skills." },
  { tag: "Science", title: "Life Sciences", desc: "Research-oriented programs with modern lab exposure." },
  { tag: "Commerce", title: "Finance & Analytics", desc: "Data-informed business learning for modern roles." },
];

export default function Features() {
  return (
    <section id="programs" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-300/90">
            Programs
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Flexible academic tracks with a modern, career-first structure.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-white/60 md:text-right">
          The grid is designed like a modern SaaS feature showcase, making the
          university feel premium, organized, and easy to scan.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group rounded-3xl border border-white/10 bg-white/7 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/30 hover:bg-white/11 hover:shadow-[0_20px_60px_-20px_rgba(34,211,238,0.35)]"
          >
            <div className="inline-flex rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs font-medium text-white/70">
              {item.tag}
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/60">{item.desc}</p>
            <div className="mt-6 h-px w-full bg-gradient-to-r from-white/0 via-white/12 to-white/0" />
            <div className="mt-5 text-sm font-medium text-cyan-300 transition group-hover:translate-x-1">
              Learn more →
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}