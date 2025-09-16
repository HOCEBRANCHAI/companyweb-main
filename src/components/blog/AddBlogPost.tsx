import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ioztpmluibvrvkvywvnp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvenRwbWx1aWJ2cnZrdnl3dm5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxMzY0OTQsImV4cCI6MjA2MjcxMjQ5NH0.E3ktAWoXBGSpb1NIEaj070ZY6LfngvLUXhZ3iNsH-eg';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export function AddBlogPost() {
  const [isAdding, setIsAdding] = useState(false);
  const [message, setMessage] = useState('');

  const cleanHTMLContent = (content) => {
    // Remove html, body, and article wrapper tags
    let cleaned = content
      .replace(/<html[^>]*>/gi, '')
      .replace(/<\/html>/gi, '')
      .replace(/<body[^>]*>/gi, '')
      .replace(/<\/body>/gi, '')
      .replace(/<article[^>]*>/gi, '')
      .replace(/<\/article>/gi, '')
      .replace(/<div[^>]*class="card-content"[^>]*>/gi, '')
      .replace(/<\/div>/gi, '')
      .trim();
    
    return cleaned;
  };

  const addRemoteWorkBlogPost = async () => {
    setIsAdding(true);
    setMessage('');

                   const rawContent = `<h1>The Future of Remote Work: Opportunities and Challenges</h1><h2>Introduction</h2><p>As we step into a new era of work, the concept of remote employment is evolving at an unprecedented pace. The future of remote work not only presents exciting opportunities for flexibility and autonomy but also introduces significant challenges that require our attention. With advances in technology enabling seamless collaboration and communication, companies are reimagining their workplace dynamics. However, the shift also raises critical questions regarding work-life balance, employee engagement, and the potential for isolation. In this article, we will dive into the dual essence of remote work, exploring both the advantages it offers for businesses and individuals alike, and the obstacles that must be navigated to create a sustainable future. Join us as we dissect the trends shaping this new working world and identify how to leverage its benefits while addressing its complexities.</p><h2>Country/Service Context</h2><p>Remote work, often referred to as telecommuting or teleworking, involves executing professional duties away from the traditional office setting. This concept has gained immense momentum in recent years, driven by technological advancements and shifts in organizational culture. At its core, remote work allows employees to perform their tasks from virtually anywhere, provided they have access to the necessary tools and a stable internet connection. This flexibility offers a refreshing departure from the 9-to-5 office routine, enabling workers to tailor their environments to their personal productivity peaks.</p><p>The trend towards remote work is not confined to any particular industry. From tech giants to smaller startups, companies across various sectors are embracing flexible work arrangements. This shift is not only a response to employee demand but also a strategic move to enhance productivity, reduce costs, and foster a more inclusive workplace.</p><h2>Key Considerations</h2><p>The opportunities presented by remote work are vast and varied, offering significant advantages to both employers and employees. For businesses, a compelling benefit is access to a global talent pool. With geographical barriers removed, companies can recruit skilled professionals from different parts of the world, enhancing workforce diversity. This can be particularly advantageous in industries facing skill shortages.</p><p>For employees, remote work offers unparalleled flexibility, allowing for schedules that accommodate personal commitments. This autonomy can lead to increased job satisfaction and productivity. Additionally, the elimination of daily commutes reduces stress and contributes to a better work-life balance!</p><h2>Common Challenges</h2><p>Despite numerous advantages, remote work poses challenges such as potential feelings of isolation and disconnection from colleagues. Employees may also struggle to build strong relationships with their team members, leading to decreased morale. Communication and collaboration require effective strategies and digital tools to ensure productivity. Technical challenges, such as unreliable internet connections and cybersecurity threats, are also concerns that need addressing.</p><h2>Portal Solution Integration</h2><p>Our portal simplifies remote work management by offering tools that streamline communication and task management, ensuring that teams remain productive and engaged. By leveraging our solutions, companies can address remote work challenges effectively and efficiently.</p><h2>Next Steps</h2><p>Awareness: Download our complete guide to remote work. Embrace the transition to remote work confidently by understanding both opportunities and challenges.</p>`;

          const blogPost = {
        title: "The Future of Remote Work: Opportunities and Challenges",
        country: "Global",
        blog_content: cleanHTMLContent(rawContent),
      image_url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      author: "Business Team",
      category: "Remote Work",
      read_time: 8,
      created_at: new Date().toISOString()
    };

    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .insert([blogPost])
        .select();

      if (error) {
        setMessage(`Error: ${error.message}`);
        return;
      }

      setMessage('Blog post added successfully!');
    } catch (error) {
      setMessage(`Error: ${error}`);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="p-6 bg-[#1B1537] rounded-lg border border-gray-700">
      <h3 className="text-xl font-bold text-white mb-4">Add Sample Blog Post</h3>
      <p className="text-gray-300 mb-4">
        Click the button below to add the "Future of Remote Work" blog post to your database.
      </p>
      <button
        onClick={addRemoteWorkBlogPost}
        disabled={isAdding}
        className="px-4 py-2 bg-[#EA3A70] text-white rounded-lg hover:bg-[#EA3A70]/80 disabled:opacity-50"
      >
        {isAdding ? 'Adding...' : 'Add Remote Work Blog Post'}
      </button>
      {message && (
        <p className={`mt-4 text-sm ${message.includes('Error') ? 'text-red-400' : 'text-green-400'}`}>
          {message}
        </p>
      )}
    </div>
  );
} 