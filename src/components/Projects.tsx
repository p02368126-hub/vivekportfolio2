import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Blur to Clarity",
    desc: "Dual-stage image restoration pipeline combining Wiener deconvolution and GAN-based super-resolution (Real-ESRGAN) for real-world applications.",
    tags: ["PyTorch", "OpenCV", "Deep Learning"],
    metrics: "CUDA-Accelerated",
  },
  {
    title: "Smart Document Contradiction Checker",
    desc: "NLP system using Sentence-BERT and RoBERTa to identify logical inconsistencies across large text documents with 96% reduction in comparisons.",
    tags: ["NLP", "Hugging Face", "RoBERTa"],
    metrics: "79.6% Accuracy",
  },
];

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] };

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
          className="flex justify-between items-end mb-12"
        >
          <h3 className="text-3xl font-semibold tracking-tight text-foreground">Selected Work</h3>
          <span className="text-muted-foreground text-sm">01 — 02</span>
        </motion.div>
        <div className="grid gap-0">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...transition, delay: i * 0.1 }}
              whileHover={{ x: 8 }}
              className="group border-t border-border py-12 flex flex-col md:flex-row justify-between items-start gap-8 cursor-pointer"
            >
              <div className="max-w-2xl">
                <div className="flex gap-3 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-3xl md:text-4xl font-medium mb-4 text-foreground group-hover:italic transition-all duration-300">
                  {project.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">{project.desc}</p>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <span className="text-sm font-mono text-muted-foreground">{project.metrics}</span>
                <div className="h-12 w-12 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
