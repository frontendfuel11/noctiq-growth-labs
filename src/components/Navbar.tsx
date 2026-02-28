import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Work" },
  { href: "#testimonials", label: "Testimonials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
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
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button variant="hero" size="sm" className="hidden sm:inline-flex">
              Start a Project
            </Button>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile sidebar overlay */}
      {open && (
        <div className="fixed inset-0 z-[60]" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
        </div>
      )}

      {/* Mobile sidebar */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-72 border-l border-border/30 bg-card/70 backdrop-blur-2xl transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border/30">
          <span className="font-display font-semibold text-foreground tracking-wider">Menu</span>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="p-4 mt-auto">
          <Button variant="hero" size="sm" className="w-full" onClick={() => setOpen(false)}>
            Start a Project
          </Button>
        </div>
      </div>
    </>
  );
}
