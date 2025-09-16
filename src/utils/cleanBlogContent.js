import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ioztpmluibvrvkvywvnp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvenRwbWx1aWJ2cnZrdnl3dm5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxMzY0OTQsImV4cCI6MjA2MjcxMjQ5NH0.E3ktAWoXBGSpb1NIEaj070ZY6LfngvLUXhZ3iNsH-eg';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

function cleanHTMLContent(content) {
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
}

async function cleanAllBlogPosts() {
  try {
    console.log('Fetching all blog posts...');
    
    // Get all blog posts
    const { data: posts, error } = await supabase
      .from('blog_posts')
      .select('*');

    if (error) {
      console.error('Error fetching posts:', error);
      return;
    }

    console.log(`Found ${posts.length} blog posts`);

    // Clean and update each post
    for (const post of posts) {
      const cleanedContent = cleanHTMLContent(post.blog_content);
      
      if (cleanedContent !== post.blog_content) {
        console.log(`Cleaning post: ${post.title}`);
        
        const { error: updateError } = await supabase
          .from('blog_posts')
          .update({ blog_content: cleanedContent })
          .eq('id', post.id);

        if (updateError) {
          console.error(`Error updating post ${post.id}:`, updateError);
        } else {
          console.log(`Successfully cleaned post: ${post.title}`);
        }
      } else {
        console.log(`Post already clean: ${post.title}`);
      }
    }

    console.log('Finished cleaning all blog posts');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the cleaning function
cleanAllBlogPosts(); 