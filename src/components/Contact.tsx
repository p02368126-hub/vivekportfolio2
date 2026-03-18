import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
          className="bg-secondary border border-border rounded-3xl p-8 md:p-16"
        >
          <div className="max-w-2xl">
            <h3 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8 text-foreground">
              Let's build something intelligent.
            </h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-transparent border-b border-border py-4 focus:outline-none focus:border-foreground transition-colors duration-300 w-full text-foreground placeholder:text-muted-foreground"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent border-b border-border py-4 focus:outline-none focus:border-foreground transition-colors duration-300 w-full text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={4}
                className="bg-transparent border-b border-border py-4 focus:outline-none focus:border-foreground transition-colors duration-300 w-full resize-none text-foreground placeholder:text-muted-foreground"
              />
              <button className="flex items-center gap-2 group text-lg font-medium pt-4 text-foreground">
                Send Message
                <ChevronRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
