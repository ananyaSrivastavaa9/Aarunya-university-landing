export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-white/85">
            JAGAN UNIVERSITY
          </p>
          <p className="mt-2 text-sm text-white/55">
            Premium education for ambitious students.
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-white/60">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#programs" className="transition hover:text-white">
            Programs
          </a>
          <a href="#testimonials" className="transition hover:text-white">
            Testimonials
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="text-center text-xs text-white/45">
          © 2026 Jagan University. All rights reserved.
        </p>
      </div>
    </footer>
  );
}