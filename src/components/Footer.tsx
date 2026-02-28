export default function Footer() {
  return (
    <footer className="border-t border-border/30 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-primary/20 flex items-center justify-center">
            <span className="glow-text font-display font-bold text-sm">N</span>
          </div>
          <span className="font-display font-semibold text-sm tracking-wider text-foreground">
            NOCTIQ <span className="text-muted-foreground font-normal text-xs tracking-[0.2em]">LABS</span>
          </span>
        </div>

        <div className="flex items-center gap-8">
          <a href="#services" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#process" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Process</a>
          <a href="#work" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Work</a>
          <a href="#testimonials" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
        </div>

        <p className="text-xs text-muted-foreground">
          © 2026 Noctiq Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
