
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://dyzskturdaanxkkmzjle.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5enNrdHVyZGFhbnhra216amxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwMDg5NTcsImV4cCI6MjA1NDU4NDk1N30.yDCZ1wfncJ-5JfOJIOT7Ry9mm3qAkwtAUl46X4QnI94";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
