import { motion } from "framer-motion";

const items = [
  {
    role: "B.Tech in CS (AI & ML)",
    org: "B V Raju Institute of Technology",
    date: "2023 — 2027",
    details: "GPA: 8.01. Specializing in Neural Networks, Dimensionality Reduction, and Deep Learning.",
  },
  {
    role: "Intermediate",
    org: "Narayana Junior College",
    date: "2021 — 2023",
    details: "GPA: 9.10. Strong foundation in mathematics and sciences.",
  },
  {
    role: "1st Place — Promethean Treasure Hunt",
    org: "Competition",
    date: "2024",
    details: "Demonstrated exceptional problem-solving and teamwork under pressure.",
  },
  {
    role: "Head of Digital Media",
    org: "Enlightening Lives — BVRITN",
    date: "Present",
    details: "Leading social impact initiatives and digital storytelling for the student chapter.",
  },
];

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] };

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-main">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
          className="text-3xl font-semibold mb-12 tracking-tight text-foreground"
        >
          Timeline
        </motion.h3>
        <div className="space-y-0">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...transition, delay: i * 0.08 }}
              className="grid md:grid-cols-[1fr_2fr_1fr] border-b border-border py-8 items-baseline"
            >
              <span className="text-muted-foreground text-sm">{item.date}</span>
              <div className="flex flex-col">
                <span className="text-xl font-medium text-foreground">{item.role}</span>
                <span className="text-muted-foreground mt-2 max-w-md">{item.details}</span>
              </div>
              <span className="text-right text-sm font-medium text-foreground hidden md:block">{item.org}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
