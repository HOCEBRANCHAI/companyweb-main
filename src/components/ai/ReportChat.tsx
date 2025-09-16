import React, { useEffect, useState, useRef } from 'react';
import { SendIcon, SearchIcon, FileTextIcon, ArrowRightIcon } from 'lucide-react';
interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  attachments?: {
    type: 'invoice' | 'ledger' | 'document';
    name: string;
    preview?: string;
  }[];
}
export function ReportChat() {
  const [messages, setMessages] = useState<Message[]>([{
    id: '1',
    type: 'assistant',
    content: 'Hi! I can help you analyze the Annual Balance Sheet. What would you like to know?',
    timestamp: new Date()
  }]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: generateAIResponse(input),
        timestamp: new Date(),
        attachments: getRelevantAttachments(input)
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };
  const generateAIResponse = (query: string): string => {
    if (query.toLowerCase().includes('revenue')) {
      return 'The total revenue for 2023 was €2.5M, showing a 15% increase from 2022. Would you like to see the detailed breakdown?';
    }
    if (query.toLowerCase().includes('expense')) {
      return 'Operating expenses totaled €1.8M. The largest categories were: Personnel (45%), Office Space (25%), and Marketing (15%). I can show you specific invoices for any category.';
    }
    return 'I found some relevant information in the report. What specific aspects would you like to know more about?';
  };
  const getRelevantAttachments = (query: string) => {
    if (query.toLowerCase().includes('invoice')) {
      return [{
        type: 'invoice' as const,
        name: 'INV-2023-156.pdf',
        preview: 'Marketing Campaign Q4 2023'
      }];
    }
    if (query.toLowerCase().includes('ledger')) {
      return [{
        type: 'ledger' as const,
        name: 'Operating_Expenses_2023.xlsx',
        preview: 'Operating Expenses Ledger'
      }];
    }
    return [];
  };
  return <div className="h-[600px] flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(message => <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-lg p-3 ${message.type === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'}`}>
              <p className="text-sm">{message.content}</p>
              {message.attachments && message.attachments.length > 0 && <div className="mt-2 space-y-2">
                  {message.attachments.map((attachment, index) => <div key={index} className="flex items-center bg-white rounded p-2 text-sm text-gray-900">
                      <FileTextIcon className="h-4 w-4 mr-2 text-blue-600" />
                      <div>
                        <p className="font-medium">{attachment.name}</p>
                        {attachment.preview && <p className="text-xs text-gray-500">
                            {attachment.preview}
                          </p>}
                      </div>
                    </div>)}
                </div>}
              <span className="text-xs opacity-70 mt-1 block">
                {message.timestamp.toLocaleTimeString()}
              </span>
            </div>
          </div>)}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t border-gray-200">
        <div className="flex flex-wrap gap-2 mb-4">
          <button onClick={() => setInput('Show me the revenue breakdown for 2023')} className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200">
            Revenue Analysis
          </button>
          <button onClick={() => setInput('What were the major expenses in 2023?')} className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200">
            Expense Breakdown
          </button>
          <button onClick={() => setInput('Show profit margin trends')} className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200">
            Profit Margins
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSend()} placeholder="Ask about the report..." className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
          <button onClick={handleSend} disabled={!input.trim()} className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50">
            <SendIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>;
}