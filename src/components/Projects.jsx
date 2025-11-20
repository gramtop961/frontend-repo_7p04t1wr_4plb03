import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'Interactive Launch Site',
    tags: ['React', 'GSAP', 'WebGL'],
    image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1600&auto=format&fit=crop',
    link: '#'
  },
  {
    title: '3D Product Story',
    tags: ['Three.js', 'Motion', 'Design'],
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'SaaS Dashboard',
    tags: ['React', 'Framer', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    link: '#'
  }
]

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Selected work</h2>
            <p className="mt-2 text-slate-300">A mix of brand experiences and product interfaces.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors">Get a quote</a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="project-card group rounded-2xl overflow-hidden border border-white/10 bg-slate-900/60">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <p className="text-xs text-slate-400 mt-1">{p.tags.join(' • ')}</p>
                </div>
                <ExternalLink size={18} className="text-slate-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
