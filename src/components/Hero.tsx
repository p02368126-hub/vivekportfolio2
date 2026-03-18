import { motion } from "framer-motion";

const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

export default function Hero() {
  return (
    <section className="section-padding pt-[25vh]">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
        >
          <h2 className="text-sm uppercase tracking-[0.2em] mb-6 text-muted-foreground font-medium">
            Software Developer / AI & ML Specialist
          </h2>
          <h1 className="text-5xl md:text-8xl font-semibold tracking-tighter leading-[0.9] mb-8 text-foreground">
            Saraf Vivek<br />Abhiram.
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            Building intelligent systems through deep learning and architectural precision.
            Currently focused on image restoration and semantic contradiction detection.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="bg-foreground text-background px-8 py-4 rounded-full font-medium hover:opacity-90 transition-all duration-300 active:scale-[0.98]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-border px-8 py-4 rounded-full font-medium text-foreground hover:bg-secondary transition-all duration-300 active:scale-[0.98]"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
