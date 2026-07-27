import { createClient } from '@supabase/supabase-js'

const PUBLIC_SUPABASE_URL = "https://tdnsixpaxjkqjnzwghbf.supabase.co"
const PUBLIC_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkbnNpeHBheGprcWpuendnaGJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI2MDM0MTgsImV4cCI6MjA5ODE3OTQxOH0.KanJWl3xX01STH0-jvKCwUa-kEjHh4xozWW5oQnfNUY";

const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
export default supabase;