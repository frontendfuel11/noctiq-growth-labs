import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center glow-primary">
            <span className="glow-text font-display font-bold text-lg">N</span>
          </div>
          <span className="font-display font-semibold text-lg tracking-wider text-foreground">
            NOCTIQ <span className="text-muted-foreground font-normal text-sm tracking-[0.2em]">LABS</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Process</a>
          <a href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Work</a>
          <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
        </div>

        <Button variant="hero" size="sm">
          Start a Project
        </Button>
      </div>
    </nav>
  );
}
