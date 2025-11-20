import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-elt', {
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
    <section id="contact" ref={sectionRef} className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="contact-elt mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s build something</h2>
          <p className="mt-2 text-slate-300 max-w-2xl">Have a project in mind? I’m available for freelance and collaboration.</p>
        </div>

        <form className="grid md:grid-cols-2 gap-6">
          <input placeholder="Name" className="contact-elt rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
          <input placeholder="Email" type="email" className="contact-elt rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
          <textarea placeholder="Tell me about your project" rows="5" className="contact-elt md:col-span-2 rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
          <button type="button" className="contact-elt inline-flex justify-center rounded-xl bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white px-5 py-3 shadow-lg shadow-fuchsia-500/20">
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}
