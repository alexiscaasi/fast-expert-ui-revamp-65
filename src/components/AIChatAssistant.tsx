import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles,
  Home,
  Calculator,
  MapPin,
  Users,
  Minimize2,
  Maximize2
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
  suggestions?: string[];
}

export const AIChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi! I'm your FastExpert assistant. I can help you find agents, loan officers, trusted vendors, calculate affordability, get market stats, and answer local real estate Q&A. How can I assist you today?",
      sender: "assistant",
      timestamp: new Date(),
      suggestions: [
        "Find agents near me",
        "Search loan officers",
        "Browse trusted vendors", 
        "Show market stats"
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message?: string) => {
    const messageText = message || inputValue.trim();
    if (!messageText) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      content: messageText,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const assistantResponse = generateResponse(messageText);
      setMessages(prev => [...prev, assistantResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase();
    
    let response = "";
    let suggestions: string[] = [];

    if (lowerMessage.includes("agent") || lowerMessage.includes("find")) {
      response = "I'd be happy to help you find the perfect agent! I can match you with top-rated agents in your area based on your specific needs. What's your location and what type of property are you looking for?";
      suggestions = ["Los Angeles agents", "First-time buyer specialist", "Luxury home expert", "Show me agent ratings"];
    } else if (lowerMessage.includes("budget") || lowerMessage.includes("afford")) {
      response = "Let me help you calculate your home buying budget! I'll need some information about your income, down payment, and monthly expenses. Would you like to use our AI affordability calculator?";
      suggestions = ["Start affordability calculator", "Typical down payment %", "Include HOA fees", "Factor in closing costs"];
    } else if (lowerMessage.includes("neighborhood") || lowerMessage.includes("area")) {
      response = "I can provide detailed neighborhood insights including safety ratings, school quality, walkability scores, and market trends. Which area would you like me to analyze?";
      suggestions = ["Downtown LA insights", "Family-friendly areas", "Best schools nearby", "Crime statistics"];
    } else if (lowerMessage.includes("sell") || lowerMessage.includes("selling")) {
      response = "Great! I can help you with selling your home. I'll connect you with top-performing listing agents and provide market analysis. What's your property type and location?";
      suggestions = ["Find listing agents", "Get home valuation", "Market timing advice", "Staging recommendations"];
    } else {
      response = "I understand you're looking for real estate assistance. I can help with finding agents, calculating budgets, neighborhood research, and much more. What specific area would you like help with?";
      suggestions = ["Find top agents", "Calculate budget", "Research neighborhoods", "Selling guidance"];
    }

    return {
      id: Date.now().toString(),
      content: response,
      sender: "assistant",
      timestamp: new Date(),
      suggestions
    };
  };

  const quickActions = [
    { icon: Users, label: "Find Agents", action: "Find agents near me" },
    { icon: Calculator, label: "Budget Calculator", action: "Calculate my home budget" },
    { icon: MapPin, label: "Neighborhoods", action: "Show me neighborhood insights" },
    { icon: Home, label: "Sell My Home", action: "Help me sell my home" }
  ];

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full shadow-xl bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-8 h-8 text-white" />
        </Button>
        
        {/* Floating Badge */}
        <div className="absolute -top-2 -left-2">
          <Badge className="bg-accent text-accent-foreground text-xs animate-pulse">
            <Sparkles className="w-3 h-3 mr-1" />
            AI
          </Badge>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-96 shadow-2xl transition-all duration-300 ${
        isMinimized ? 'h-16' : 'h-[600px]'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-primary text-white rounded-t-lg">
          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-white/20 text-white">
                <Bot className="w-4 h-4" />
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-sm">FastExpert Assistant</div>
              <div className="text-white/80 text-xs">Find agents, lenders & vendors</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white hover:bg-white/20 h-8 w-8 p-0"
            >
              {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 h-8 w-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Quick Actions */}
            <div className="p-4 bg-surface border-b border-border">
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSendMessage(action.action)}
                      className="flex items-center gap-2 text-xs"
                    >
                      <Icon className="w-4 h-4" />
                      {action.label}
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 h-80">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.sender === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className={
                      message.sender === 'user' 
                        ? "bg-primary/10 text-primary" 
                        : "bg-accent/10 text-accent"
                    }>
                      {message.sender === 'user' ? (
                        <User className="w-4 h-4" />
                      ) : (
                        <Bot className="w-4 h-4" />
                      )}
                    </AvatarFallback>
                  </Avatar>

                  <div className={`flex-1 max-w-[75%] ${
                    message.sender === 'user' ? 'text-right' : ''
                  }`}>
                    <Card className={`p-3 ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground ml-auto'
                        : 'bg-muted'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </Card>
                    
                    {/* Suggestions */}
                    {message.suggestions && (
                      <div className="mt-2 space-y-1">
                        {message.suggestions.map((suggestion, index) => (
                          <Button
                            key={index}
                            variant="ghost"
                            size="sm"
                            onClick={() => handleSendMessage(suggestion)}
                            className="text-xs h-7 text-primary hover:bg-primary/10"
                          >
                            {suggestion}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-accent/10 text-accent">
                      <Bot className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                  <Card className="p-3 bg-muted">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </Card>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything about real estate..."
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage();
                    }
                  }}
                  className="flex-1"
                />
                <Button 
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim()}
                  className="btn-primary"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};