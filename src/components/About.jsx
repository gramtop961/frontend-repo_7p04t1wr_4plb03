import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-card', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
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
    <section id="about" ref={sectionRef} className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">About</h2>
          <p className="mt-2 text-slate-300 max-w-2xl">A frontend engineer focused on motion design and performance. I blend React, GSAP, and WebGL to build branded experiences and product UIs.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Animation', desc: 'Fluid choreographies with GSAP and Framer Motion for delightful micro-interactions.' },
            { title: 'WebGL', desc: 'Real-time 3D scenes with Spline/Three.js that stay performant and accessible.' },
            { title: 'Frontend', desc: 'Clean, scalable React architectures with attention to a11y, DX, and design systems.' }
          ].map((item) => (
            <div key={item.title} className="about-card rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              <p className="text-slate-300 mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
