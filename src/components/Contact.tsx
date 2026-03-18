import { motion } from "framer-motion";
import { ChevronRight, Loader2, CheckCircle2 } from "lucide-react";
import React, { useState } from "react";

const transition = { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const };

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const accessKey = "111cbae6-8160-416b-8b93-07471f0de856";

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          access_key: accessKey,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Name"
                  className="bg-transparent border-b border-border py-4 focus:outline-none focus:border-foreground transition-colors duration-300 w-full text-foreground placeholder:text-muted-foreground"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  className="bg-transparent border-b border-border py-4 focus:outline-none focus:border-foreground transition-colors duration-300 w-full text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Message"
                rows={4}
                className="bg-transparent border-b border-border py-4 focus:outline-none focus:border-foreground transition-colors duration-300 w-full resize-none text-foreground placeholder:text-muted-foreground"
              />
              <div className="flex items-center gap-4 pt-4">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 group text-lg font-medium text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      Sending...
                      <Loader2 className="animate-spin" size={20} />
                    </>
                  ) : (
                    <>
                      Send Message
                      <ChevronRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                    </>
                  )}
                </button>
                {status === "success" && (
                  <span className="flex items-center gap-2 text-green-500 animate-in fade-in slide-in-from-bottom-2">
                    <CheckCircle2 size={20} />
                    Message sent successfully!
                  </span>
                )}
                {status === "error" && (
                  <span className="text-red-500 animate-in fade-in slide-in-from-bottom-2">
                    Failed to send message. Please try again.
                  </span>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
