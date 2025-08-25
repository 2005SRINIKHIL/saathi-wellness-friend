import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Smile, Meh, Frown, Heart, Sun, Cloud, CloudRain } from "lucide-react";

const moodOptions = [
  { icon: Smile, label: "Great", color: "text-wellness-joy", bg: "bg-wellness-joy/20" },
  { icon: Sun, label: "Good", color: "text-primary", bg: "bg-primary/20" },
  { icon: Meh, label: "Okay", color: "text-muted-foreground", bg: "bg-muted" },
  { icon: Cloud, label: "Low", color: "text-wellness-calm", bg: "bg-wellness-calm/30" },
  { icon: CloudRain, label: "Difficult", color: "text-accent", bg: "bg-accent/20" },
];

const MoodCheckIn = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selectedMood !== null) {
      setSubmitted(true);
      // Here you would typically save to your backend
    }
  };

  if (submitted) {
    return (
      <Card className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl animate-fade-in">
        <div className="text-center">
          <Heart className="w-16 h-16 text-accent mx-auto mb-4 animate-gentle-pulse" />
          <h3 className="text-2xl font-bold mb-4 text-foreground">Thank you for checking in! 💙</h3>
          <p className="text-foreground/70 mb-6">
            Your feelings are valid, and I'm here to support you on your wellness journey.
          </p>
          <Button variant="wellness" onClick={() => setSubmitted(false)}>
            Check in Again
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          How are you feeling today?
        </h3>
        <p className="text-foreground/70">
          Take a moment to check in with yourself 🌸
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {moodOptions.map((mood, index) => {
          const Icon = mood.icon;
          const isSelected = selectedMood === index;
          
          return (
            <button
              key={mood.label}
              onClick={() => setSelectedMood(index)}
              className={`
                p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105
                ${isSelected 
                  ? `border-primary ${mood.bg} shadow-lg` 
                  : 'border-border hover:border-primary/50 bg-white/50'
                }
              `}
            >
              <Icon className={`w-8 h-8 mx-auto mb-3 ${isSelected ? mood.color : 'text-muted-foreground'}`} />
              <p className={`font-medium ${isSelected ? 'text-foreground' : 'text-muted-foreground'}`}>
                {mood.label}
              </p>
            </button>
          );
        })}
      </div>

      <div className="text-center">
        <Button 
          variant="wellness" 
          size="lg"
          onClick={handleSubmit}
          disabled={selectedMood === null}
          className="px-8"
        >
          Submit Check-in
        </Button>
      </div>
    </Card>
  );
};

export default MoodCheckIn;