import React, { useState } from 'react';
import { MessageSquareIcon, SendIcon, FileTextIcon, PaperclipIcon, DownloadIcon, CheckIcon, XIcon, ArrowRightIcon, BrainIcon } from 'lucide-react';
export function AITaxAgent() {
  const [messages, setMessages] = useState([{
    id: 1,
    sender: 'ai',
    content: "Hello! I'm your AI Tax Agent. How can I assist you with your Dutch tax matters today?",
    timestamp: new Date().toISOString()
  }]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      content: newMessage,
      timestamp: new Date().toISOString()
    };
    setMessages([...messages, userMessage]);
    setNewMessage('');
    setIsTyping(true);
    // Simulate AI response
    setTimeout(() => {
      let aiResponse;
      if (newMessage.toLowerCase().includes('vat') || newMessage.toLowerCase().includes('btw')) {
        aiResponse = {
          id: messages.length + 2,
          sender: 'ai',
          content: 'Based on your financial data, your Q1 2023 VAT return is due in 5 days. The estimated VAT payable is €2,450. Would you like me to help you prepare this return or explain any specific aspects of it?',
          timestamp: new Date().toISOString()
        };
      } else if (newMessage.toLowerCase().includes('objection') || newMessage.toLowerCase().includes('letter')) {
        aiResponse = {
          id: messages.length + 2,
          sender: 'ai',
          content: 'I can help you draft an objection letter to the tax authorities. Could you please provide more details about the assessment or decision you wish to contest? This will help me generate the most effective arguments based on Dutch tax law.',
          timestamp: new Date().toISOString()
        };
      } else if (newMessage.toLowerCase().includes('deduction') || newMessage.toLowerCase().includes('expense')) {
        aiResponse = {
          id: messages.length + 2,
          sender: 'ai',
          content: "I've analyzed your expenses and found several items that may qualify for additional deductions:\n\n1. Business travel expenses (€1,250)\n2. Home office expenses (€850)\n3. Professional development costs (€1,200)\n\nWould you like me to explain the documentation requirements for these deductions?",
          timestamp: new Date().toISOString()
        };
      } else {
        aiResponse = {
          id: messages.length + 2,
          sender: 'ai',
          content: "I'd be happy to help with that. Based on your company's financial data, I can provide insights on this tax matter. Would you like me to analyze your specific situation or provide general guidance on Dutch tax regulations?",
          timestamp: new Date().toISOString()
        };
      }
      setMessages(prevMessages => [...prevMessages, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };
  const handleKeyPress = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  return <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl border border-indigo-500/30 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="p-2 bg-[#EA3A70]/20 rounded-full mr-3">
            <BrainIcon className="h-6 w-6 text-[#EA3A70]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">AI Tax Agent</h3>
            <p className="text-indigo-300 text-sm">
              24/7 tax assistance powered by AI
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-indigo-900/50 border border-indigo-500/30 text-white rounded-lg hover:bg-indigo-800/50 transition-colors text-sm flex items-center">
            <FileTextIcon className="h-4 w-4 mr-2" />
            New Objection Letter
          </button>
        </div>
      </div>
      <div className="bg-indigo-900/20 backdrop-blur-sm rounded-xl border border-indigo-500/20 p-4 mb-4 h-96 overflow-y-auto">
        <div className="space-y-4">
          {messages.map(message => <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-3/4 rounded-lg p-3 ${message.sender === 'user' ? 'bg-[#EA3A70] text-white' : 'bg-indigo-800/50 border border-indigo-500/30 text-white'}`}>
                <p className="whitespace-pre-line">{message.content}</p>
                <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-pink-200' : 'text-indigo-300'}`}>
                  {new Date(message.timestamp).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
              })}
                </p>
              </div>
            </div>)}
          {isTyping && <div className="flex justify-start">
              <div className="bg-indigo-800/50 border border-indigo-500/30 rounded-lg p-3">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 bg-indigo-300 rounded-full animate-bounce"></div>
                  <div className="h-2 w-2 bg-indigo-300 rounded-full animate-bounce" style={{
                animationDelay: '0.2s'
              }}></div>
                  <div className="h-2 w-2 bg-indigo-300 rounded-full animate-bounce" style={{
                animationDelay: '0.4s'
              }}></div>
                </div>
              </div>
            </div>}
        </div>
      </div>
      <div className="flex items-end">
        <div className="flex-1 relative">
          <textarea value={newMessage} onChange={e => setNewMessage(e.target.value)} onKeyPress={handleKeyPress} placeholder="Ask a tax question..." className="w-full bg-indigo-900/30 border border-indigo-500/30 rounded-lg px-4 py-3 text-white placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-[#EA3A70] resize-none" rows={2} />
          <button className="absolute bottom-2 right-2 p-1.5 bg-indigo-800/50 rounded-md hover:bg-indigo-700/50 transition-colors">
            <PaperclipIcon className="h-4 w-4 text-indigo-300" />
          </button>
        </div>
        <button onClick={handleSendMessage} className="ml-3 p-3 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/90 transition-colors flex-shrink-0">
          <SendIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="mt-6">
        <h4 className="text-white font-medium mb-3">Suggested Questions</h4>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setNewMessage('How do I qualify for the 30% ruling?')} className="px-3 py-1.5 bg-indigo-800/40 text-indigo-200 rounded-lg hover:bg-indigo-700/40 text-sm">
            How do I qualify for the 30% ruling?
          </button>
          <button onClick={() => setNewMessage("What's the deadline for my VAT return?")} className="px-3 py-1.5 bg-indigo-800/40 text-indigo-200 rounded-lg hover:bg-indigo-700/40 text-sm">
            What's the deadline for my VAT return?
          </button>
          <button onClick={() => setNewMessage('Can you help me draft an objection letter?')} className="px-3 py-1.5 bg-indigo-800/40 text-indigo-200 rounded-lg hover:bg-indigo-700/40 text-sm">
            Can you help me draft an objection letter?
          </button>
          <button onClick={() => setNewMessage('What business expenses are tax deductible?')} className="px-3 py-1.5 bg-indigo-800/40 text-indigo-200 rounded-lg hover:bg-indigo-700/40 text-sm">
            What business expenses are tax deductible?
          </button>
        </div>
      </div>
    </div>;
}