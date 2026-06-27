import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Sparkles, Play } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

function AreteVisual() {
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0D0D14, #111120)",
        border: "1px solid rgba(123,94,248,0.25)",
        boxShadow: "0 30px 80px -30px rgba(123,94,248,0.4)",
      }}>
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(circle at 70% 30%, rgba(123,94,248,0.25), transparent 60%)" }} />
      <div className="absolute inset-6 rounded-xl border border-[rgba(123,94,248,0.2)] bg-[rgba(5,5,8,0.6)] backdrop-blur-sm flex flex-col">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[rgba(123,94,248,0.12)]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#555568]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#555568]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#555568]" />
          <div className="ml-3 font-mono text-[10px] text-[var(--dust)]">arete.ai</div>
        </div>
        <div className="p-5 flex-1 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[var(--violet-light)]" />
            <span className="font-mono text-[10px] text-[var(--violet-light)] uppercase tracking-wider">Reasoning</span>
          </div>
          <motion.div initial={{ width: 0 }} whileInView={{ width: "85%" }} viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeOut" }} className="h-2 rounded-full violet-gradient" />
          <motion.div initial={{ width: 0 }} whileInView={{ width: "60%" }} viewport={{ once: true }}
            transition={{ duration: 1.6, delay: 0.2, ease: "easeOut" }} className="h-2 rounded-full bg-[rgba(159,110,255,0.4)]" />
          <motion.div initial={{ width: 0 }} whileInView={{ width: "92%" }} viewport={{ once: true }}
            transition={{ duration: 1.6, delay: 0.4, ease: "easeOut" }} className="h-2 rounded-full bg-[rgba(159,110,255,0.25)]" />
          <div className="mt-auto grid grid-cols-3 gap-2">
            {["Reason", "Plan", "Execute"].map((t, i) => (
              <motion.div key={t} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.6 + i * 0.1 }}
                className="rounded-lg border border-[rgba(123,94,248,0.18)] bg-[rgba(17,17,32,0.6)] py-2 text-center font-mono text-[10px] text-[var(--muted)]">
                {t}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Slow-flapping SVG butterfly used in the Englingen card */
function FlappingButterfly() {
  return (
    <div className="relative w-full aspect-[4/3] flex items-center justify-center">
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(123,94,248,0.18), transparent 70%)" }} />
      <motion.svg
        viewBox="-120 -110 240 220"
        className="w-2/3 h-2/3"
        style={{ transformOrigin: "center" }}
      >
        <defs>
          <radialGradient id="wingU" cx="0.5" cy="0.4" r="0.7">
            <stop offset="0%" stopColor="#9F6EFF" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#7B5EF8" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#3a2680" stopOpacity="0.7" />
          </radialGradient>
          <radialGradient id="wingL" cx="0.5" cy="0.6" r="0.7">
            <stop offset="0%" stopColor="#7B5EF8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2d1f70" stopOpacity="0.6" />
          </radialGradient>
        </defs>

        {/* Left wing group (flapping) */}
        <motion.g
          animate={{ scaleX: [-1, -0.35, -1] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "0px 0px" }}
        >
          <path d="M0,0 C-12,-22 -55,-50 -78,-34 C-105,-18 -100,22 -68,46 C-40,62 -12,34 0,12 Z"
            fill="url(#wingU)" stroke="rgba(28,20,55,0.7)" strokeWidth="1.2" />
          <path d="M0,10 C-10,24 -45,62 -62,68 C-84,74 -82,46 -60,24 C-44,12 -16,14 0,10 Z"
            fill="url(#wingL)" stroke="rgba(28,20,55,0.7)" strokeWidth="1.2" />
        </motion.g>

        {/* Right wing group (flapping) */}
        <motion.g
          animate={{ scaleX: [1, 0.35, 1] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "0px 0px" }}
        >
          <path d="M0,0 C-12,-22 -55,-50 -78,-34 C-105,-18 -100,22 -68,46 C-40,62 -12,34 0,12 Z"
            fill="url(#wingU)" stroke="rgba(28,20,55,0.7)" strokeWidth="1.2" />
          <path d="M0,10 C-10,24 -45,62 -62,68 C-84,74 -82,46 -60,24 C-44,12 -16,14 0,10 Z"
            fill="url(#wingL)" stroke="rgba(28,20,55,0.7)" strokeWidth="1.2" />
        </motion.g>

        {/* Body */}
        <ellipse cx="0" cy="12" rx="4.5" ry="50" fill="#3a2c52" />
        <circle cx="0" cy="-38" r="6" fill="#3a2c52" />
        <path d="M-2,-42 Q-22,-72 -18,-84" stroke="#3a2c52" strokeWidth="1.2" fill="none" />
        <path d="M2,-42 Q22,-72 18,-84" stroke="#3a2c52" strokeWidth="1.2" fill="none" />
        <circle cx="-18" cy="-84" r="2.6" fill="#3a2c52" />
        <circle cx="18" cy="-84" r="2.6" fill="#3a2c52" />
      </motion.svg>
    </div>
  );
}

function WaitlistForm() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  if (submitted) {
    return (
      <div className="mt-8 rounded-2xl border border-[rgba(123,94,248,0.25)] bg-[rgba(123,94,248,0.06)] px-5 py-4 max-w-md">
        <p className="text-[var(--white-soft)]">We'll notify you when we launch.</p>
      </div>
    );
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="btn-violet mt-8"
      >
        Join the Waitlist <ArrowRight className="w-4 h-4" />
      </button>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md"
    >
      <input
        autoFocus
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@domain.com"
        className="flex-1 bg-[rgba(13,13,20,0.6)] border border-[rgba(123,94,248,0.25)] rounded-full px-5 py-3 text-[var(--white-soft)] placeholder:text-[var(--dust)] outline-none focus:border-[var(--violet)] focus:ring-2 focus:ring-[rgba(123,94,248,0.25)] transition-all"
      />
      <button type="submit" className="btn-violet justify-center">
        Submit <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}

export function Products() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section id="products" className="relative py-32 md:py-40 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="max-w-3xl mb-20"
        >
          <motion.div variants={fadeUp} className="font-mono-eyebrow text-[var(--violet-light)]">
            [ PRODUCTS ]
          </motion.div>
          <motion.h2 variants={fadeUp}
            className="font-display mt-5 font-medium tracking-tight leading-[1.05]"
            style={{ fontSize: "clamp(34px, 5vw, 56px)" }}>
            What we've launched into orbit.
          </motion.h2>
        </motion.div>

        {/* Arete AI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" as const }}
          whileHover={{ y: -4 }}
          className="glass-panel rounded-3xl p-8 md:p-14 relative overflow-hidden group"
          style={{ boxShadow: "0 40px 120px -40px rgba(123,94,248,0.45)" }}
        >
          <div className="absolute top-6 right-6 flex items-center gap-2 rounded-full border border-[rgba(34,217,126,0.3)] bg-[rgba(34,217,126,0.08)] px-3 py-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-[var(--success)] animate-ping opacity-70" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--success)]" />
            </span>
            <span className="font-mono text-[10px] tracking-wider text-[var(--success)]">LIVE</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="font-mono-eyebrow text-[var(--violet-light)]">[ ARETE AI ]</div>
              <h3 className="font-display mt-4 font-medium tracking-tight leading-[1.05] text-[var(--white-soft)]"
                style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
                AI that understands where you can thrive.
              </h3>
              <p className="mt-6 text-[var(--muted)] leading-relaxed max-w-lg">
                Arete AI is an intelligent engine built to help students navigate the future with clarity and confidence. Using AI-driven insights, personalized assessments, and data-backed recommendations, Arete AI helps undergraduate and postgraduate students explore the right career paths, academic opportunities, and growth directions aligned with who they are and where they can thrive.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {["Personalized Assessments", "Career Pathways", "Data-Backed Insights"].map((c) => (
                  <span key={c}
                    className="px-3 py-1.5 rounded-full border border-[rgba(123,94,248,0.25)] bg-[rgba(123,94,248,0.06)] font-mono text-[11px] text-[var(--muted)]">
                    {c}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="btn-violet">
                  Try Arete <ArrowRight className="w-4 h-4" />
                </a>
                <button onClick={() => setDemoOpen(true)} className="btn-ghost">
                  <Play className="w-4 h-4" /> See how it works
                </button>
              </div>
            </div>
            <AreteVisual />
          </div>
        </motion.div>

        {/* Englingen */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" as const }}
          className="glass-panel rounded-3xl p-8 md:p-14 mt-10 relative overflow-hidden"
          style={{ borderColor: "rgba(123,94,248,0.1)" }}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="font-mono-eyebrow text-[var(--dust)]">[ ENGLINGEN ]</div>
              <h3 className="font-display mt-4 font-medium tracking-tight leading-[1.05] text-[var(--white-soft)]"
                style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
                Something is brewing.
              </h3>
              <div className="font-mono-eyebrow mt-4 text-[var(--violet-light)]">COMING SOON</div>
              <p className="mt-5 text-[var(--muted)] italic leading-relaxed max-w-lg">
                The next frontier in engineering intelligence — arriving soon.
              </p>
              <WaitlistForm />
            </div>
            <FlappingButterfly />
          </div>
        </motion.div>
      </div>

      {/* Demo video modal */}
      <AnimatePresence>
        {demoOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setDemoOpen(false)}
            className="fixed inset-0 z-[80] bg-[rgba(5,5,8,0.85)] backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-[rgba(123,94,248,0.3)]"
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Arete AI — See how it works"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
