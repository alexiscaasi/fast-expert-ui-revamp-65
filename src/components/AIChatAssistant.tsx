import { MessageCircle, X, Send, AlertCircle, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";
import { useState } from "react";

interface Lead {
  id: string;
  name: string;
  lastUpdated: number; // days ago
  lastContacted?: number; // days ago
  emailOpened?: boolean;
  hasClicks?: boolean;
  hasReplies?: boolean;
  status: "hot" | "warm" | "cold";
}

const sampleLeads: Lead[] = [
  { id: "1", name: "Jane Smith", lastUpdated: 9, status: "cold" },
  { id: "2", name: "John Doe", lastUpdated: 3, status: "warm" },
  { id: "3", name: "Maria Lopez", lastUpdated: 11, status: "cold" },
  { id: "4", name: "Sarah Kim", lastContacted: 5, lastUpdated: 5, status: "warm" },
  { id: "5", name: "Mike Johnson", lastContacted: 8, lastUpdated: 8, status: "cold" },
  { id: "6", name: "Emily Nguyen", lastContacted: 10, lastUpdated: 10, emailOpened: true, hasClicks: false, hasReplies: false, status: "cold" },
];

const AIChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUseCase, setCurrentUseCase] = useState<"detect" | "update" | "follow-up" | null>(null);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<{ role: "user" | "ai"; content: string; leads?: Lead[] }[]>([]);

  const handleUseCaseClick = (useCase: "detect" | "update" | "follow-up") => {
    setCurrentUseCase(useCase);
    let aiResponse = "";
    let relevantLeads: Lead[] = [];

    switch (useCase) {
      case "detect":
        relevantLeads = sampleLeads.filter(lead => lead.lastUpdated > 7);
        aiResponse = `🔍 I found ${relevantLeads.length} leads that need updates (haven't been updated in 7+ days):`;
        break;
      case "update":
        relevantLeads = sampleLeads.filter(lead => lead.lastContacted && lead.lastContacted > 4);
        aiResponse = `📋 Here are leads that need follow-up (last contacted 5+ days ago):`;
        break;
      case "follow-up":
        relevantLeads = sampleLeads.filter(lead => lead.emailOpened && !lead.hasReplies);
        aiResponse = `💡 Smart follow-up suggestions for leads with engagement but no response:`;
        break;
    }

    setChatHistory([{ role: "ai", content: aiResponse, leads: relevantLeads }]);
  };

  const sendMessage = () => {
    if (!message.trim()) return;
    
    setChatHistory(prev => [...prev, { role: "user", content: message }]);
    
    // Simulate AI response
    setTimeout(() => {
      setChatHistory(prev => [...prev, { 
        role: "ai", 
        content: "I can help you with lead management! Try one of the use cases above or ask me about specific leads." 
      }]);
    }, 1000);
    
    setMessage("");
  };

  const LeadCard = ({ lead }: { lead: Lead }) => (
    <Card className="mb-2">
      <CardContent className="p-3">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-medium">{lead.name}</h4>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
              {lead.lastUpdated && (
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  Updated {lead.lastUpdated} days ago
                </span>
              )}
              {lead.lastContacted && (
                <span className="flex items-center gap-1">
                  <Mail className="h-3 w-3" />
                  Contacted {lead.lastContacted} days ago
                </span>
              )}
            </div>
            {lead.emailOpened && (
              <div className="text-xs text-muted-foreground mt-1">
                Email opened • No clicks • No replies
              </div>
            )}
          </div>
          <Badge variant={lead.status === "hot" ? "default" : lead.status === "warm" ? "secondary" : "outline"}>
            {lead.status}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        {/* AI Label */}
        <div className="absolute -top-2 -left-6">
          <Badge className="bg-accent text-accent-foreground text-xs animate-pulse flex items-center gap-1 px-2 py-1">
            <Sparkles className="w-3 h-3 text-foreground" />
            EstraAI
          </Badge>
        </div>
        
        {/* Chat Button */}
        <Button
          size="lg"
          className="h-14 w-14 rounded-full bg-gradient-primary shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-110"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Open AI chat</span>
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96">
      <Card className="shadow-2xl border-0 bg-background/95 backdrop-blur">
        <CardHeader className="flex flex-row items-center justify-between p-4 bg-gradient-primary text-white rounded-t-lg">
          <CardTitle className="text-lg">🤖 Lead AI Assistant</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20 h-6 w-6 p-0"
            onClick={() => {
              setIsOpen(false);
              setCurrentUseCase(null);
              setChatHistory([]);
            }}
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="p-4 space-y-4">
          {/* Use Case Buttons */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Choose a use case:</h3>
            <div className="grid gap-2">
              <Button
                variant="outline"
                className="justify-start text-left h-auto p-3"
                onClick={() => handleUseCaseClick("detect")}
              >
                <AlertCircle className="h-4 w-4 mr-2 text-black" />
                <div>
                  <div className="font-medium">Auto-Detect Leads Needing Updates</div>
                  <div className="text-xs text-muted-foreground">Find leads not updated in 7+ days</div>
                </div>
              </Button>
              
              <Button
                variant="outline"
                className="justify-start text-left h-auto p-3"
                onClick={() => handleUseCaseClick("update")}
              >
                <Clock className="h-4 w-4 mr-2 text-black" />
                <div>
                  <div className="font-medium">"Update My Leads" Assistant</div>
                  <div className="text-xs text-muted-foreground">Leads needing follow-up</div>
                </div>
              </Button>
              
              <Button
                variant="outline"
                className="justify-start text-left h-auto p-3"
                onClick={() => handleUseCaseClick("follow-up")}
              >
                <Mail className="h-4 w-4 mr-2 text-black" />
                <div>
                  <div className="font-medium">Smart Follow-Up Suggestions</div>
                  <div className="text-xs text-muted-foreground">Engaged but no response</div>
                </div>
              </Button>
            </div>
          </div>

          {/* Chat History */}
          <div className="max-h-64 overflow-y-auto space-y-3">
            {chatHistory.map((msg, idx) => (
              <div key={idx} className={`${msg.role === "user" ? "text-right" : "text-left"}`}>
                <div className={`inline-block p-3 rounded-lg max-w-[80%] ${
                  msg.role === "user" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted"
                }`}>
                  {msg.content}
                </div>
                {msg.leads && msg.leads.length > 0 && (
                  <div className="mt-2 space-y-2">
                    {msg.leads.map(lead => (
                      <LeadCard key={lead.id} lead={lead} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about your leads..."
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1"
            />
            <Button size="sm" onClick={sendMessage} disabled={!message.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIChatAssistant;