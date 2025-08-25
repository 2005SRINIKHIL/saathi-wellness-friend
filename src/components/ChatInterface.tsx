import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Send, Bot, User, Heart } from "lucide-react";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm Saathi, your wellness companion. I'm here to listen and support you. How are you feeling today? 🌸",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");

    // Simulate AI response (in real app, this would call your backend)
    setTimeout(() => {
      const responses = [
        "Thank you for sharing that with me. Your feelings are completely valid. 💙",
        "I hear you, and I want you to know that you're not alone in this journey. 🌟",
        "That sounds like it might be challenging. Would you like to explore some gentle coping strategies together?",
        "I'm here to listen without judgment. Take your time sharing whatever feels comfortable. 🌸"
      ];
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: responses[Math.floor(Math.random() * responses.length)],
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <Card className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden h-[600px] flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent p-6 text-white">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 animate-gentle-pulse" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Chat with Saathi</h3>
            <p className="text-white/80 text-sm">Your compassionate companion</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-6 overflow-y-auto space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}
          >
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
              ${message.isUser ? 'bg-accent' : 'bg-primary'}
            `}>
              {message.isUser ? (
                <User className="w-4 h-4 text-white" />
              ) : (
                <Bot className="w-4 h-4 text-white" />
              )}
            </div>
            <div className={`
              max-w-[70%] p-4 rounded-2xl
              ${message.isUser 
                ? 'bg-accent text-white rounded-br-md' 
                : 'bg-wellness-calm text-foreground rounded-bl-md'
              }
            `}>
              <p className="text-sm leading-relaxed">{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-6 border-t border-primary/10">
        <div className="flex gap-3">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Share what's on your mind..."
            className="flex-1 bg-white/70 border-primary/20 focus:border-primary rounded-xl"
          />
          <Button 
            onClick={sendMessage}
            variant="wellness"
            size="icon"
            className="rounded-xl"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ChatInterface;