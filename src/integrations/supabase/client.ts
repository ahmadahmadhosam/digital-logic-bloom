// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://heywjpfvqoeohaqmjzhb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhleXdqcGZ2cW9lb2hhcW1qemhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0MzAxNDgsImV4cCI6MjA2NTAwNjE0OH0.hKhFmELh1bYTPjdMO1EgVdr30fcFXxxcHGqOzZT1Z8Y";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);