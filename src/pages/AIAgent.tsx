import React, { useEffect, useState, useRef } from 'react';
import { BrainCircuitIcon, MessageCircleIcon, ClipboardCheckIcon, FileTextIcon, ArrowRightIcon, LoaderIcon, SparklesIcon, CalendarIcon, GlobeIcon, BadgeCheckIcon, StarIcon, ClockIcon, ChevronDownIcon, ChevronUpIcon, InfoIcon } from 'lucide-react';
export function AIAgent() {
  const [messages, setMessages] = useState([{
    role: 'assistant',
    content: "Hello! I'm Emma, your AI business assistant. How can I help you today?"
  }]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  }, [messages]);
  const handleSendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, {
      role: 'user',
      content: input
    }]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      let response;
      const lowerInput = input.toLowerCase();
      if (lowerInput.includes('deadline') || lowerInput.includes('due date')) {
        response = "I've checked your compliance calendar. Your next VAT filing deadline is May 15, 2024. Would you like me to prepare the necessary documents?";
      } else if (lowerInput.includes('document') || lowerInput.includes('file')) {
        response = 'I can help you prepare and manage your business documents. What specific document do you need assistance with?';
      } else if (lowerInput.includes('tax') || lowerInput.includes('vat')) {
        response = "Based on your current business operations, I've analyzed several tax optimization opportunities that could save you approximately €4,200 annually. Would you like to see the detailed report?";
      } else if (lowerInput.includes('company') || lowerInput.includes('incorporation')) {
        response = 'I can help with your company incorporation process. Based on your business profile, I recommend setting up a Dutch BV. Would you like me to explain the benefits and requirements?';
      } else if (lowerInput.includes('help') || lowerInput.includes('assist')) {
        response = "I'm here to assist with various aspects of your business, including tax compliance, document preparation, regulatory updates, and strategic advice. What specific area do you need help with today?";
      } else if (lowerInput.includes('thank')) {
        response = "You're welcome! Is there anything else I can help you with today?";
      } else {
        response = "I understand you're asking about " + input.substring(0, 30) + (input.length > 30 ? '...' : '') + ' I can help with that. Would you like me to gather more information or take any specific actions?';
      }
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: response
      }]);
    }, 1500);
  };
  useEffect(() => {
    const handleKeyDown = e => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        if (document.activeElement === document.getElementById('chat-input')) {
          handleSendMessage();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [input]);
  const suggestedQueries = ['What are my upcoming tax deadlines?', 'Help me prepare a VAT return', 'What documents do I need for company incorporation?', 'How can I optimize my tax structure?'];
  const emmaProfile = {
    name: 'Emma',
    role: 'AI Business Assistant',
    profileImage: "/pasted-image.jpg",
    location: 'Digital Headquarters, House of Companies',
    status: 'Online',
    specialties: ['Tax Compliance', 'Document Preparation', 'Regulatory Updates', 'Business Strategy'],
    languages: ['English', 'Dutch', 'German', 'French'],
    responseTime: 'Instant',
    experience: 'Trained on millions of business documents and regulations',
    availability: '24/7/365'
  };
  return <div className="min-h-screen bg-[#0A0826] text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden border-2 border-[#EA3A70]/30 mr-3">
                <img src={emmaProfile.profileImage} alt="Emma AI Assistant" className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="flex items-center">
                  <h1 className="text-2xl font-bold text-white">
                    {emmaProfile.name}
                  </h1>
                  <BadgeCheckIcon className="h-5 w-5 text-[#EA3A70] ml-1" />
                  <div className="ml-3 inline-flex items-center px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 mr-1"></span>
                    {emmaProfile.status}
                  </div>
                </div>
                <p className="text-sm text-purple-200/70">{emmaProfile.role}</p>
              </div>
            </div>
            <button onClick={() => setShowProfile(!showProfile)} className="flex items-center text-sm text-purple-200/80 bg-[#1B1537] px-3 py-1.5 rounded-full hover:bg-[#2D2755] transition-colors">
              <InfoIcon className="h-4 w-4 mr-1.5" />
              Profile
              {showProfile ? <ChevronUpIcon className="h-4 w-4 ml-1.5" /> : <ChevronDownIcon className="h-4 w-4 ml-1.5" />}
            </button>
          </div>
          {showProfile && <div className="mt-4 bg-[#1B1537] rounded-xl border border-[#2D2755] p-5 transition-all duration-300 ease-in-out">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-sm font-semibold text-white mb-3">
                    About
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-purple-200/80">
                      <GlobeIcon className="h-4 w-4 text-[#EA3A70] mr-2" />
                      <span>{emmaProfile.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-purple-200/80">
                      <ClockIcon className="h-4 w-4 text-[#EA3A70] mr-2" />
                      <span>Response time: {emmaProfile.responseTime}</span>
                    </div>
                    <div className="flex items-center text-sm text-purple-200/80">
                      <CalendarIcon className="h-4 w-4 text-[#EA3A70] mr-2" />
                      <span>Availability: {emmaProfile.availability}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-3">
                    Specialties
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {emmaProfile.specialties.map((specialty, index) => <span key={index} className="bg-[#2D2755] text-xs rounded-full px-3 py-1 text-purple-200">
                        {specialty}
                      </span>)}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-3 mt-4">
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {emmaProfile.languages.map((language, index) => <span key={index} className="flex items-center bg-[#2D2755] text-xs rounded-full px-3 py-1 text-purple-200">
                        {language}
                      </span>)}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-3">
                    Client Satisfaction
                  </h3>
                  <div className="flex items-center mb-2">
                    {[1, 2, 3, 4, 5].map(star => <StarIcon key={star} className="h-5 w-5 text-[#EA3A70]" />)}
                    <span className="ml-2 text-sm text-purple-200">
                      5.0/5.0
                    </span>
                  </div>
                  <p className="text-xs text-purple-200/70">
                    Based on 1,250+ conversations
                  </p>
                </div>
              </div>
            </div>}
        </div>
        <div className="relative min-h-[70vh] mb-6">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#EA3A70]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 max-w-5xl mx-auto space-y-6 px-2">
            {messages.map((msg, index) => <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeInUp`} style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {msg.role === 'assistant' && <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden mr-3">
                    <img src={emmaProfile.profileImage} alt="Emma" className="h-full w-full object-cover" />
                  </div>}
                <div className={`max-w-[85%] md:max-w-[75%] rounded-2xl px-5 py-4 shadow-lg ${msg.role === 'user' ? 'bg-[#EA3A70] text-white' : 'bg-[#1B1537] border border-[#2D2755] text-white'}`}>
                  {msg.content}
                </div>
              </div>)}
            {isTyping && <div className="flex justify-start animate-fadeInUp">
                <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden mr-3">
                  <img src={emmaProfile.profileImage} alt="Emma" className="h-full w-full object-cover" />
                </div>
                <div className="max-w-[85%] md:max-w-[75%] rounded-2xl px-5 py-4 bg-[#1B1537] border border-[#2D2755] text-white shadow-lg">
                  <div className="flex items-center space-x-2">
                    <LoaderIcon className="h-4 w-4 text-[#EA3A70] animate-spin" />
                    <span className="text-purple-200/70">
                      Emma is typing...
                    </span>
                  </div>
                </div>
              </div>}
            {messages.length === 1 && <div className="pt-8 max-w-3xl mx-auto">
                <div className="flex items-center mb-4 text-[#EA3A70]">
                  <SparklesIcon className="h-5 w-5 mr-2" />
                  <p className="text-sm font-medium">Try asking Emma about:</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {suggestedQueries.map((query, index) => <button key={index} onClick={() => {
                setInput(query);
                document.getElementById('chat-input').focus();
              }} className="bg-[#1B1537] border border-[#2D2755] hover:border-[#EA3A70]/50 rounded-full px-4 py-2 text-sm text-purple-200 transition-colors shadow-md">
                      {query}
                    </button>)}
                </div>
              </div>}
            <div ref={messagesEndRef} />
          </div>
        </div>
        <div className="sticky bottom-4 z-20 max-w-4xl mx-auto">
          <div className="bg-[#1B1537]/80 backdrop-blur-sm border border-[#2D2755] rounded-2xl p-3 shadow-xl">
            <div className="flex items-center">
              <input id="chat-input" type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Ask Emma about your business..." className="flex-1 bg-[#0F0B1F] border border-[#2D2755] rounded-full px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[#EA3A70]" onKeyPress={e => {
              if (e.key === 'Enter') handleSendMessage();
            }} disabled={isTyping} />
              <button onClick={handleSendMessage} disabled={!input.trim() || isTyping} className="ml-3 bg-[#EA3A70] p-4 rounded-full text-white disabled:opacity-50 hover:bg-[#EA3A70]/80 transition-colors shadow-lg">
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="text-xs text-purple-200/50 mt-2 ml-4">
              Press Enter to send, or try one of the suggested queries above
            </div>
          </div>
        </div>
      </div>
    </div>;
}