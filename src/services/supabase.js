import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tzoacifvxbfhetqdbjsw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6b2FjaWZ2eGJmaGV0cWRianN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ3MzU1OTAsImV4cCI6MjEwMDMxMTU5MH0.JgggQQfTkaoaGshrmxbvl46Qa0uDxlt8UreH6KcF9Vc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
