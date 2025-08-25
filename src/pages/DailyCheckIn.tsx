import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mic, 
  MicOff, 
  Send, 
  Music, 
  Heart, 
  Brain, 
  Volume2, 
  Play,
  ArrowLeft 
} from "lucide-react";
import { Link } from "react-router-dom";

interface SentimentAnalysis {
  emotion: string;
  confidence: number;
  sentiment: "positive" | "negative" | "neutral";
}

interface MusicSuggestion {
  title: string;
  artist: string;
  mood: string;
  reason: string;
}

const DailyCheckIn = () => {
  const [message, setMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [sentiment, setSentiment] = useState<SentimentAnalysis | null>(null);
  const [musicSuggestions, setMusicSuggestions] = useState<MusicSuggestion[]>([]);
  const [checkInComplete, setCheckInComplete] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Mock sentiment analysis (replace with real API)
  const analyzeSentiment = async (text: string): Promise<SentimentAnalysis> => {
    setIsAnalyzing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const emotions = ["joy", "calm", "anxious", "sad", "excited", "peaceful"];
    const sentiments: ("positive" | "negative" | "neutral")[] = ["positive", "negative", "neutral"];
    
    const result = {
      emotion: emotions[Math.floor(Math.random() * emotions.length)],
      confidence: Math.random() * 0.4 + 0.6, // 60-100%
      sentiment: sentiments[Math.floor(Math.random() * sentiments.length)]
    };
    
    setIsAnalyzing(false);
    return result;
  };

  // Mock music suggestions based on sentiment
  const getMusicSuggestions = (sentiment: SentimentAnalysis): MusicSuggestion[] => {
    const suggestions: Record<string, MusicSuggestion[]> = {
      joy: [
        { title: "Good 4 U", artist: "Olivia Rodrigo", mood: "Upbeat", reason: "Matches your joyful energy" },
        { title: "Sunshine", artist: "Harry Styles", mood: "Happy", reason: "Perfect for celebrating good vibes" }
      ],
      calm: [
        { title: "Weightless", artist: "Marconi Union", mood: "Peaceful", reason: "Scientifically designed to reduce anxiety" },
        { title: "Aqueous Transmission", artist: "Incubus", mood: "Serene", reason: "Gentle sounds to maintain your calm" }
      ],
      anxious: [
        { title: "Breathe Me", artist: "Sia", mood: "Grounding", reason: "Helps process difficult emotions" },
        { title: "Mad World", artist: "Gary Jules", mood: "Reflective", reason: "Validates your feelings while soothing" }
      ],
      sad: [
        { title: "The Night We Met", artist: "Lord Huron", mood: "Melancholic", reason: "It's okay to sit with sadness" },
        { title: "Hurt", artist: "Johnny Cash", mood: "Cathartic", reason: "Sometimes we need to feel to heal" }
      ]
    };
    
    return suggestions[sentiment.emotion] || suggestions.calm;
  };

  const handleSubmit = async () => {
    if (!message.trim()) return;
    
    const analysis = await analyzeSentiment(message);
    setSentiment(analysis);
    
    const suggestions = getMusicSuggestions(analysis);
    setMusicSuggestions(suggestions);
    setCheckInComplete(true);
  };

  const startRecording = () => {
    setIsRecording(true);
    // Implement speech-to-text here
    setTimeout(() => {
      setIsRecording(false);
      setMessage("I'm feeling a bit overwhelmed today but trying to stay positive...");
    }, 3000);
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive": return "bg-wellness-joy text-wellness-joy";
      case "negative": return "bg-accent/20 text-accent";
      default: return "bg-wellness-calm text-wellness-calm";
    }
  };

  const getEmotionIcon = (emotion: string) => {
    switch (emotion) {
      case "joy": return "😊";
      case "calm": return "😌";
      case "anxious": return "😰";
      case "sad": return "😢";
      case "excited": return "🤩";
      case "peaceful": return "🧘";
      default: return "😐";
    }
  };

  if (checkInComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-wellness-calm/30 to-wellness-peace/40 p-4">
        <div className="container mx-auto max-w-4xl py-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary-glow mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="space-y-8">
            {/* Check-in Complete */}
            <Card className="bg-white/90 dark:bg-card/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl text-center">
              <Heart className="w-16 h-16 text-accent mx-auto mb-4 animate-gentle-pulse" />
              <h2 className="text-3xl font-bold mb-4 text-foreground">Daily Check-in Complete! 💙</h2>
              <p className="text-foreground/70 mb-6">
                Thank you for taking time to connect with yourself today.
              </p>
            </Card>

            {/* Sentiment Analysis Results */}
            {sentiment && (
              <Card className="bg-white/90 dark:bg-card/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <Brain className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Emotional Analysis</h3>
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{getEmotionIcon(sentiment.emotion)}</span>
                  <div>
                    <p className="text-xl font-semibold text-foreground capitalize">
                      Primary Emotion: {sentiment.emotion}
                    </p>
                    <Badge className={getSentimentColor(sentiment.sentiment)}>
                      {sentiment.sentiment} ({Math.round(sentiment.confidence * 100)}% confident)
                    </Badge>
                  </div>
                </div>
                
                <p className="text-foreground/70">
                  Your feelings are completely valid. I'm here to support you through whatever you're experiencing. 🌸
                </p>
              </Card>
            )}

            {/* Music Suggestions */}
            {musicSuggestions.length > 0 && (
              <Card className="bg-white/90 dark:bg-card/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <Music className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Music for Your Mood</h3>
                </div>
                
                <div className="grid gap-4">
                  {musicSuggestions.map((song, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-wellness-calm/20 rounded-2xl">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{song.title}</h4>
                        <p className="text-foreground/70">{song.artist}</p>
                        <p className="text-sm text-foreground/60 mt-1">{song.reason}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{song.mood}</Badge>
                        <Button size="icon" variant="ghost" className="text-primary">
                          <Play className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            <div className="text-center">
              <Button 
                onClick={() => setCheckInComplete(false)}
                variant="wellness"
                size="lg"
              >
                Start New Check-in
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-wellness-calm/30 to-wellness-peace/40 p-4">
      <div className="container mx-auto max-w-4xl py-8">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary-glow mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <Card className="bg-white/90 dark:bg-card/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Daily Check-in with Saathi
            </h1>
            <p className="text-xl text-foreground/70">
              Share how you're feeling today. I'll analyze your emotions and suggest music to match your mood. 🎵
            </p>
          </div>

          <div className="space-y-6">
            {/* Text Input */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                How are you feeling today?
              </label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share what's on your mind... I'm here to listen and understand."
                className="min-h-[120px] bg-white/70 dark:bg-input border-primary/20 focus:border-primary rounded-xl"
              />
            </div>

            {/* Voice Input */}
            <div className="flex items-center gap-4">
              <Button
                onClick={startRecording}
                variant={isRecording ? "destructive" : "wellness"}
                size="lg"
                className="flex items-center gap-2"
              >
                {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                {isRecording ? "Recording..." : "Voice Check-in"}
              </Button>
              
              {isRecording && (
                <div className="flex items-center gap-2 text-accent">
                  <Volume2 className="w-5 h-5 animate-pulse" />
                  <span className="text-sm">Listening to your voice...</span>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <Button
                onClick={handleSubmit}
                disabled={!message.trim() || isAnalyzing}
                variant="wellness"
                size="lg"
                className="px-8"
              >
                {isAnalyzing ? (
                  <>
                    <Brain className="w-5 h-5 mr-2 animate-pulse" />
                    Analyzing Your Emotions...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Analyze & Get Music
                  </>
                )}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DailyCheckIn;