import React, { useEffect, useRef, useState } from "react";
import { Bot, Send, Sparkles, MessageSquare } from "lucide-react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const listRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    setTimeout(() => {
      el.scrollTop = el.scrollHeight;
    }, 50);
  }, [messages, isTyping]);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  }, [input]);

  const addLocalMessage = (role, content) => {
    setMessages((m) => [
      ...m,
      {
        id: Date.now() + Math.random(),
        role,
        content,
        time: Date.now(),
      },
    ]);
  };

  const sendMessageToServer = async (_sessionId, text) => {
    await new Promise((r) => setTimeout(r, 1200));
    return (
      "I'm here to help! You asked: \"" +
      text +
      '". This is a demo response showcasing the beautiful new interface.'
    );
  };

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || sending) return;

    addLocalMessage("user", trimmed);
    setInput("");
    setSending(true);
    setIsTyping(true);

    try {
      const reply = await sendMessageToServer(null, trimmed);
      addLocalMessage("assistant", reply);
    } catch (err) {
      console.error(err);
      addLocalMessage("assistant", "Sorry, something went wrong.");
    } finally {
      setSending(false);
      setIsTyping(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (ts) => {
    const d = new Date(ts);
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">
                AI Assistant
              </h1>
              <p className="text-xs text-gray-500">Online • Ready to help</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs font-medium text-indigo-700">
                Active
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-hidden flex flex-col">
        <div
          ref={listRef}
          className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-6"
        >
          <div className="max-w-4xl mx-auto">
            {messages.length === 0 && !isTyping ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center px-4">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-2xl shadow-indigo-500/40 mb-6">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Start a conversation
                </h2>
                <p className="text-gray-500 text-lg mb-8 max-w-md">
                  Ask me anything. I'm here to help with answers, ideas, and
                  creative solutions.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 w-full max-w-2xl">
                  {[
                    {
                      icon: "💡",
                      text: "Get creative ideas",
                      color: "from-amber-50 to-orange-50 border-amber-200",
                    },
                    {
                      icon: "📊",
                      text: "Analyze data",
                      color: "from-blue-50 to-cyan-50 border-blue-200",
                    },
                    {
                      icon: "✍️",
                      text: "Write content",
                      color: "from-purple-50 to-pink-50 border-purple-200",
                    },
                    {
                      icon: "🔍",
                      text: "Research topics",
                      color: "from-green-50 to-emerald-50 border-green-200",
                    },
                  ].map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setInput(item.text)}
                      className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} border hover:shadow-lg transition-all duration-200 hover:scale-105 text-left group`}
                    >
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <div className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                        {item.text}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex gap-4 ${
                      m.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {m.role === "assistant" && (
                      <div className="flex-shrink-0 w-9 h-9 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                    )}
                    <div
                      className={`flex flex-col max-w-[85%] sm:max-w-[70%] ${
                        m.role === "user" ? "items-end" : "items-start"
                      }`}
                    >
                      <div
                        className={`rounded-3xl px-5 py-3 shadow-sm ${
                          m.role === "user"
                            ? "bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-indigo-500/30"
                            : "bg-white text-gray-800 border border-gray-100"
                        }`}
                      >
                        <p className="text-[15px] leading-relaxed whitespace-pre-wrap break-words">
                          {m.content}
                        </p>
                      </div>
                      <span className="text-xs text-gray-400 mt-2 px-2">
                        {formatTime(m.time)}
                      </span>
                    </div>
                    {m.role === "user" && (
                      <div className="flex-shrink-0 w-9 h-9 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-semibold text-sm shadow-lg shadow-blue-500/30">
                        You
                      </div>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-4 justify-start">
                    <div className="flex-shrink-0 w-9 h-9 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-white rounded-3xl px-5 py-4 shadow-sm border border-gray-100">
                      <div className="flex gap-1.5">
                        <div
                          className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Input Bar */}
        <div className="bg-white/80 backdrop-blur-xl border-t border-gray-200/50 px-4 sm:px-6 py-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-end gap-3 bg-white rounded-3xl shadow-lg shadow-gray-200/50 border border-gray-200 p-2 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                rows={1}
                className="flex-1 resize-none bg-transparent px-4 py-3 focus:outline-none placeholder-gray-400 text-gray-900 max-h-32 min-h-[44px]"
                placeholder="Type your message..."
                aria-label="Message"
              />
              <button
                type="submit"
                disabled={sending || input.trim() === ""}
                className="flex-shrink-0 w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 flex items-center justify-center group"
              >
                {sending ? (
                  <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                ) : (
                  <Send className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                )}
              </button>
            </div>
            <p className="text-xs text-gray-400 text-center mt-3">
              Press{" "}
              <kbd className="px-1.5 py-0.5 rounded bg-gray-100 border border-gray-200 text-gray-600 font-mono">
                Enter
              </kbd>{" "}
              to send •{" "}
              <kbd className="px-1.5 py-0.5 rounded bg-gray-100 border border-gray-200 text-gray-600 font-mono">
                Shift + Enter
              </kbd>{" "}
              for new line
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
