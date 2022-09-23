import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://sgjdsfuxwunsjdjebgmq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNnamRzZnV4d3Vuc2pkamViZ21xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjI2OTY1ODIsImV4cCI6MTk3ODI3MjU4Mn0.XCYmo2nuqePIqiRxjA6WWSEbwfGytGF-BK4obovp9gc'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase