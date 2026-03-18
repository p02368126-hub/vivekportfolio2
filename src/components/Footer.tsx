import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container-main flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex gap-6">
          <a href="https://github.com/vivekabhiram09" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/vivekabhiram" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            <Linkedin size={20} />
          </a>
          <a href="mailto:vivekabhiram18@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            <Mail size={20} />
          </a>
        </div>
        <p className="text-muted-foreground text-sm">© 2024 Saraf Vivek Abhiram. Built with precision.</p>
      </div>
    </footer>
  );
}
