import WellnessHeader from "@/components/WellnessHeader";
import WellnessHero from "@/components/WellnessHero";
import MoodCheckIn from "@/components/MoodCheckIn";
import ChatInterface from "@/components/ChatInterface";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-wellness-calm/30 to-wellness-peace/40">
      <WellnessHeader />
      
      <main>
        <WellnessHero />
        
        {/* Wellness Section */}
        <section id="wellness" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Check In With Yourself
              </h2>
              <p className="text-xl text-foreground/70">
                Take a moment to acknowledge how you're feeling right now
              </p>
            </div>
            <MoodCheckIn />
          </div>
        </section>

        {/* Chat Section */}
        <section id="chat" className="py-20 px-4 bg-white/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Start a Conversation
              </h2>
              <p className="text-xl text-foreground/70">
                Share what's on your mind in a safe, judgment-free space
              </p>
            </div>
            <ChatInterface />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
