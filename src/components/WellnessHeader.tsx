import { Button } from "@/components/ui/button";
import { Heart, Moon, Sun, Menu } from "lucide-react";

const WellnessHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-primary animate-gentle-pulse" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Saathi
              </span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#chat" className="text-foreground/80 hover:text-primary transition-colors">
              Chat
            </a>
            <a href="#wellness" className="text-foreground/80 hover:text-primary transition-colors">
              Wellness Plan
            </a>
            <a href="#journal" className="text-foreground/80 hover:text-primary transition-colors">
              Journal
            </a>
            <a href="#resources" className="text-foreground/80 hover:text-primary transition-colors">
              Resources
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="peaceful" size="sm">
              Get Started
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WellnessHeader;