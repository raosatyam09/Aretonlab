import { motion } from "framer-motion";


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-40 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
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

          <motion.p variants={fadeUp} className="mt-8 text-[var(--white-soft)] text-lg leading-relaxed">
            We exist to accelerate the translation of breakthrough ideas into real-world technology. Our north star: build things that matter, at the speed of curiosity.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 space-y-6">
            <p className="text-[var(--muted)] leading-relaxed">
              Areton Labs is a product company focused on building AI-powered solutions for the future. We create intelligent, user-centric products that solve meaningful problems, simplify complexity, and deliver better experiences through technology.
            </p>
            <p className="text-[var(--muted)] leading-relaxed">
              By combining AI, machine learning, and thoughtful product design, we aim to build systems that are not only powerful, but genuinely useful in the real world.
            </p>
          </motion.div>
        </motion.div>

        {/* Earth is rendered as a sticky element via StickyEarth in the route */}
        <div className="hidden lg:block" aria-hidden />
      </div>
    </section>
  );
}

