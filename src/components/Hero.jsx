import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/60 to-slate-950/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-center py-24">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            >
              Crafting immersive web experiences
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-fuchsia-400 to-violet-400">with motion and 3D</span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="mt-6 text-lg text-slate-300 max-w-xl"
            >
              I build modern, performant interfaces that feel alive — blending animation, GSAP micro-interactions, and WebGL to tell compelling product stories.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-10 flex items-center gap-4"
            >
              <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-5 py-3 border border-white/15 transition-colors">
                View work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white px-5 py-3 shadow-lg shadow-fuchsia-500/20">
                Get in touch
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5" />
        </div>
      </div>
    </section>
  )
}
