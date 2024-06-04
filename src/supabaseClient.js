import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fyrwbllmxskjyufwgzjg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5cndibGxteHNranl1ZndnempnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0MzE4MjksImV4cCI6MjAzMzAwNzgyOX0.R56vgeem82DEDZbq1fmczFCINHhDvoCOpTkqcdPYBtc";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
