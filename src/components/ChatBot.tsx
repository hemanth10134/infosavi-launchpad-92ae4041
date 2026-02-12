"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, X, Send, User, Bot } from "lucide-react";

interface Message {
    id: number;
    text: string;
    sender: "user" | "bot";
}

export function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Hi there! 👋 How can we help you today?", sender: "bot" }
    ]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const toggleChat = () => setIsOpen(!isOpen);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        const newUserMessage: Message = {
            id: Date.now(),
            text: inputValue,
            sender: "user",
        };

        setMessages((prev) => [...prev, newUserMessage]);
        setInputValue("");

        // Simulate bot response
        setTimeout(() => {
            const botResponse: Message = {
                id: Date.now() + 1,
                text: "Thanks for reaching out! Our team is currently offline, but we'll get back to you as soon as possible. In the meantime, feel free to check out our services page.",
                sender: "bot",
            };
            setMessages((prev) => [...prev, botResponse]);
        }, 1000);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Chat Window */}
            {isOpen && (
                <div className="absolute bottom-16 right-0 w-80 md:w-96 bg-background border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col animate-fade-in-up">
                    {/* Header */}
                    <div className="bg-brand-purple p-4 flex justify-between items-center text-white">
                        <div className="flex items-center gap-2">
                            <Bot className="h-5 w-5" />
                            <span className="font-semibold">infoSavi Support</span>
                        </div>
                        <button onClick={toggleChat} className="hover:bg-white/20 p-1 rounded-full transition-colors">
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 h-80 overflow-y-auto p-4 space-y-4 bg-muted/30">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === "user"
                                        ? "bg-brand-purple text-white rounded-br-none"
                                        : "bg-white border border-border text-foreground rounded-bl-none shadow-sm"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-3 bg-background border-t border-border flex gap-2">
                        <Input
                            placeholder="Type a message..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="flex-1 focus-visible:ring-brand-purple"
                        />
                        <Button
                            size="icon"
                            onClick={handleSendMessage}
                            className="bg-brand-purple hover:bg-brand-purple/90 text-white"
                            disabled={!inputValue.trim()}
                        >
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            )}

            {/* Floating Toggle Button */}
            <Button
                size="lg"
                className="h-14 w-14 rounded-full shadow-lg bg-brand-purple hover:bg-brand-purple/90 text-white transition-transform hover:scale-105"
                onClick={toggleChat}
            >
                {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
            </Button>
        </div>
    );
}