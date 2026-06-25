import { motion } from "framer-motion";

function OrbitalSphere() {
  return (
    <div className="relative aspect-square w-full max-w-[500px] mx-auto">
      <div className="absolute inset-0 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(123,94,248,0.2), transparent 70%)", filter: "blur(40px)" }} />
      <motion.svg
        viewBox="0 0 400 400"
        className="relative w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, ease: "linear", repeat: Infinity }}
      >
        <defs>
          <radialGradient id="g1" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#9F6EFF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#7B5EF8" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="160" fill="url(#g1)" />
        {/* Latitudes */}
        {[...Array(9)].map((_, i) => {
          const ry = 20 + i * 18;
          return <ellipse key={`lat${i}`} cx="200" cy="200" rx="160" ry={ry} fill="none" stroke="#7B5EF8" strokeOpacity={0.25} strokeWidth="0.6" />;
        })}
        {/* Longitudes */}
        {[...Array(8)].map((_, i) => (
          <ellipse key={`lon${i}`} cx="200" cy="200" rx={160 - i * 18} ry="160" fill="none" stroke="#7B5EF8" strokeOpacity={0.25} strokeWidth="0.6" />
        ))}
        <circle cx="200" cy="200" r="160" fill="none" stroke="#9F6EFF" strokeOpacity="0.6" strokeWidth="1" />
        {/* Orbits */}
        <ellipse cx="200" cy="200" rx="190" ry="60" fill="none" stroke="#9F6EFF" strokeOpacity="0.4" strokeWidth="0.8" transform="rotate(20 200 200)" />
        <ellipse cx="200" cy="200" rx="190" ry="60" fill="none" stroke="#9F6EFF" strokeOpacity="0.3" strokeWidth="0.8" transform="rotate(-30 200 200)" />
      </motion.svg>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/2 left-0 w-2.5 h-2.5 rounded-full bg-[var(--violet-light)]"
          style={{ boxShadow: "0 0 20px rgba(159,110,255,0.8)" }} />
      </motion.div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-40 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div variants={fadeUp} className="font-mono-eyebrow text-[var(--violet-light)]">
            [ ABOUT ARETON LABS ]
          </motion.div>
          <motion.h2 variants={fadeUp}
            className="font-display mt-5 font-medium tracking-tight leading-[1.05] text-[var(--white-soft)]"
            style={{ fontSize: "clamp(34px, 5vw, 56px)" }}>
            Built to explore the edges of what's possible.
          </motion.h2>

          <motion.div variants={fadeUp} className="mt-10 space-y-8">
            <div>
              <div className="font-mono-eyebrow text-[var(--dust)] mb-2">Vision</div>
              <p className="text-[var(--white-soft)] text-lg leading-relaxed">
                A future where intelligence is engineered, not improvised.
              </p>
            </div>
            <div>
              <div className="font-mono-eyebrow text-[var(--dust)] mb-2">Mission</div>
              <p className="text-[var(--muted)] leading-relaxed">
                We build AI and deep-tech systems that translate breakthrough research into real-world products — bridging the gap between scientific possibility and human-scale impact.
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-6 md:p-8">
              <div className="font-mono-eyebrow text-[var(--violet-light)] mb-3">What We Do</div>
              <p className="text-[var(--muted)] leading-relaxed">
                From foundation models to orbital-grade infrastructure, we design systems that think, reason, and adapt. Our work spans AI-native products, autonomous workflows, and the quiet engineering that lets intelligent software scale with precision.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" as const }}
        >
          <OrbitalSphere />
        </motion.div>
      </div>
    </section>
  );
}
