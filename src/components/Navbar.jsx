import { useEffect, useRef } from 'react'
import { Menu, Github, Linkedin, Mail } from 'lucide-react'
import gsap from 'gsap'

export default function Navbar() {
  const navRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.nav-item', {
        y: -20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: 'power3.out'
      })
    }, navRef)
    return () => ctx.revert()
  }, [])

  return (
    <header ref={navRef} className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl px-4 py-3">
          <a href="#home" className="nav-item text-white font-semibold tracking-tight text-lg">
            <span className="bg-gradient-to-r from-blue-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">/</span> portfolio
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#about" className="nav-item hover:text-white transition-colors">About</a>
            <a href="#projects" className="nav-item hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="nav-item hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="nav-item hidden md:flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#contact" className="p-2 rounded-lg border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-colors">
              <Mail size={18} />
            </a>
          </div>

          <button className="md:hidden nav-item p-2 rounded-lg border border-white/10 text-slate-300">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
