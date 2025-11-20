import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(168,85,247,0.15),transparent_60%),radial-gradient(800px_400px_at_20%_10%,rgba(59,130,246,0.15),transparent_60%)]" />

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />

      <footer className="relative border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-6 py-10 flex items-center justify-between text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Your Name — All rights reserved.</p>
          <a href="#home" className="hover:text-white transition-colors">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App
