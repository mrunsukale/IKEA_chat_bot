import React, { useState } from "react";
import { Send } from "lucide-react";
import { ChatMessage } from "./components/ChatMessage";
import { Message } from "./types";
import { userAgent } from "./agents/userAgent";
import logo from "./images/logo.png";

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your IKEA assistant. How can I help you today?",
      sender: "bot",
      agentType: "user",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      agentType: "user",
      timestamp: new Date(),
    };

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: userAgent.getResponse(input),
      sender: "bot",
      agentType: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage, botResponse]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-[#f9ebb1]">
      <div className="max-w-3xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* IKEA Logo */}
          <div className="bg-white flex justify-center p-4">
            <img src={logo} alt="IKEA Logo" className="h-12" />
          </div>

          {/* Header */}
          <div className="bg-[#0051BA] p-4">
            <h1 className="text-white text-xl font-semibold">
              IKEA Customer Service
            </h1>
          </div>

          {/* Chat messages */}
          <div className="h-[500px] overflow-y-auto p-4 space-y-4 bg-[#f7f9fc]">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </div>

          {/* Input area */}
          <div className="border-t p-4 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#0051BA]"
              />
              <button
                onClick={handleSend}
                className="bg-[#0051BA] text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Send className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
