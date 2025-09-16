import React, { useState } from 'react';
import { FileTextIcon, ImageIcon, SendIcon, CalendarIcon, PencilIcon, RefreshCwIcon, EyeIcon } from 'lucide-react';
export function ContentGenerator() {
  const [contentType, setContentType] = useState<'post' | 'article'>('post');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate content generation
    setTimeout(() => {
      setGeneratedContent("Here's your AI-generated content about your business's latest achievements...");
      setIsGenerating(false);
    }, 1500);
  };
  return <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium text-gray-900">
            Content Generator
          </h2>
          <div className="flex space-x-2">
            <button onClick={() => setContentType('post')} className={`px-4 py-2 rounded-md text-sm font-medium ${contentType === 'post' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              Social Post
            </button>
            <button onClick={() => setContentType('article')} className={`px-4 py-2 rounded-md text-sm font-medium ${contentType === 'article' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              Article
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Topic
            </label>
            <input type="text" placeholder="Enter your content topic" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Key Points
            </label>
            <textarea rows={3} placeholder="Enter key points to include" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tone
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
              <option>Professional</option>
              <option>Casual</option>
              <option>Friendly</option>
              <option>Formal</option>
            </select>
          </div>
          <button onClick={handleGenerate} disabled={isGenerating} className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center justify-center">
            {isGenerating ? <>
                <RefreshCwIcon className="h-4 w-4 mr-2 animate-spin" />
                Generating...
              </> : <>
                <PencilIcon className="h-4 w-4 mr-2" />
                Generate Content
              </>}
          </button>
        </div>
        {generatedContent && <div className="mt-6 space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-900">
                  Generated Content
                </h3>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <EyeIcon className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <PencilIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-600">{generatedContent}</p>
            </div>
            <div className="flex space-x-3">
              <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm font-medium flex items-center justify-center">
                <CalendarIcon className="h-4 w-4 mr-2" />
                Schedule Post
              </button>
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center justify-center">
                <SendIcon className="h-4 w-4 mr-2" />
                Post Now
              </button>
            </div>
          </div>}
      </div>
    </div>;
}