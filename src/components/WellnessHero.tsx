import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";

const WellnessHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-primary/10 to-accent/20" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-gentle-float">
        <Heart className="w-6 h-6 text-wellness-love opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-gentle-float delay-1000">
        <Sparkles className="w-8 h-8 text-primary opacity-40" />
      </div>
      <div className="absolute bottom-32 left-20 animate-gentle-float delay-2000">
        <Heart className="w-4 h-4 text-accent opacity-50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
            Meet Saathi
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-4 leading-relaxed">
            Your compassionate mental wellness companion
          </p>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A safe space to express yourself, track your mood, and find peace through guided support 🌸
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="wellness" size="lg" className="text-lg px-8 py-4">
            <MessageCircle className="w-5 h-5 mr-2" />
            Start Chatting
          </Button>
          <Button variant="peaceful" size="lg" className="text-lg px-8 py-4">
            Take Mood Check-in
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-wellness-calm rounded-full flex items-center justify-center mb-4 mx-auto">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">24/7 Chat Support</h3>
            <p className="text-foreground/60 text-sm">Always here to listen without judgment</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-wellness-peace rounded-full flex items-center justify-center mb-4 mx-auto">
              <Heart className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Mood Tracking</h3>
            <p className="text-foreground/60 text-sm">Understand your emotional patterns</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
            <div className="w-12 h-12 bg-wellness-joy rounded-full flex items-center justify-center mb-4 mx-auto">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Personal Wellness</h3>
            <p className="text-foreground/60 text-sm">Customized plans for your journey</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessHero;