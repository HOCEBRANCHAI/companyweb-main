import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ioztpmluibvrvkvywvnp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvenRwbWx1aWJ2cnZrdnl3dm5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxMzY0OTQsImV4cCI6MjA2MjcxMjQ5NH0.E3ktAWoXBGSpb1NIEaj070ZY6LfngvLUXhZ3iNsH-eg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
