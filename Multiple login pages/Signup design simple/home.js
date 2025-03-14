const supabaseUrl = 'https://saqsepgxtvpgiigybsvd.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhcXNlcGd4dHZwZ2lpZ3lic3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYwMTkzMzAsImV4cCI6MjA1MTU5NTMzMH0.lc9v_HyA9XkC_JoHNjpa4kIqts2hrkq_L6zJXfYNyQo"
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey)

const logout = document.getElementById("logout")

logout.addEventListener("click" , async ()=>{
    const { error } = await supabaseClient.auth.signOut()
     window.location.href = 'login.html'
})