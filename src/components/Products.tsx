import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
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
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "85%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="h-2 rounded-full violet-gradient" />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: 0.2, ease: "easeOut" }}
            className="h-2 rounded-full bg-[rgba(159,110,255,0.4)]" />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "92%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: 0.4, ease: "easeOut" }}
            className="h-2 rounded-full bg-[rgba(159,110,255,0.25)]" />

          <div className="mt-auto grid grid-cols-3 gap-2">
            {["Reason", "Plan", "Execute"].map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="rounded-lg border border-[rgba(123,94,248,0.18)] bg-[rgba(17,17,32,0.6)] py-2 text-center font-mono text-[10px] text-[var(--muted)]"
              >
                {t}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function EnglingenVisual() {
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #0D0D14, #0a0a12)",
        border: "1px solid rgba(123,94,248,0.12)",
      }}>
      <div className="absolute inset-0 opacity-40"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(123,94,248,0.15), transparent 70%)" }} />
      <motion.svg viewBox="0 0 200 200" className="w-2/3 h-2/3 opacity-40"
        animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
        <polygon points="100,20 180,80 150,170 50,170 20,80" fill="none" stroke="#9F6EFF" strokeWidth="0.6" />
        <polygon points="100,50 150,90 130,150 70,150 50,90" fill="none" stroke="#9F6EFF" strokeWidth="0.6" />
        <line x1="100" y1="20" x2="100" y2="170" stroke="#7B5EF8" strokeWidth="0.4" strokeOpacity="0.5" />
        <line x1="20" y1="80" x2="180" y2="80" stroke="#7B5EF8" strokeWidth="0.4" strokeOpacity="0.5" />
      </motion.svg>
    </div>
  );
}

export function Products() {
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
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
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
                Intelligence that thinks before you ask.
              </h3>
              <p className="mt-6 text-[var(--muted)] leading-relaxed max-w-lg">
                Arete AI is our flagship intelligence platform — engineered for adaptive reasoning, contextual understanding, and AI-native workflows that execute with precision. Built for teams that need automation without compromise.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {["Adaptive Reasoning", "Context-Aware", "Enterprise Ready"].map((c) => (
                  <span key={c}
                    className="px-3 py-1.5 rounded-full border border-[rgba(123,94,248,0.25)] bg-[rgba(123,94,248,0.06)] font-mono text-[11px] text-[var(--muted)]">
                    {c}
                  </span>
                ))}
              </div>
              <a href="#contact" className="btn-violet mt-8">
                Try Arete <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <AreteVisual />
          </div>
        </motion.div>

        {/* Englingen */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel rounded-3xl p-8 md:p-14 mt-10 opacity-80 hover:opacity-100 transition-opacity relative overflow-hidden"
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
              <button disabled
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-[rgba(232,232,240,0.1)] px-6 py-3 font-medium text-[var(--dust)] cursor-not-allowed">
                Join the Waitlist
              </button>
            </div>
            <EnglingenVisual />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
