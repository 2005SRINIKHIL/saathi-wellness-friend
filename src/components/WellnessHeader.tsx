import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const WellnessHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-card/80 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between relative">
          <Link to="/" className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-primary animate-gentle-pulse" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Saathi
            </span>
          </Link>
          
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-6 absolute md:relative top-full left-0 right-0 bg-white/95 dark:bg-card/95 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-6 md:p-0 shadow-lg md:shadow-none rounded-b-3xl md:rounded-none`}>
            <a href="#wellness" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Wellness
            </a>
            <Link to="/daily-checkin" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Daily Check-in
            </Link>
            <a href="#chat" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Chat
            </a>
            <a href="#resources" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Resources
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WellnessHeader;