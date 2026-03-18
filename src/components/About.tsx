import { motion } from "framer-motion";

const skills = [
  { category: "Intelligence", items: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "Pandas"] },
  { category: "Languages", items: ["Python", "Java", "C", "SQL", "HTML/CSS"] },
  { category: "Tools", items: ["GitHub", "MySQL", "VS Code", "CUDA"] },
];

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={transition}
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground">The Approach</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Based in Hyderabad, I specialize in Computer Science with a focus on AI and Machine Learning.
              My work bridges the gap between complex algorithmic research and implementable software solutions,
              from neural networks to efficient data structures.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...transition, delay: 0.1 }}
            className="space-y-8"
          >
            {skills.map((group) => (
              <div key={group.category}>
                <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">{group.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 border border-border rounded-full text-sm text-foreground hover:bg-secondary transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
