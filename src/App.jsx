import { motion } from 'framer-motion'
import BackgroundEffects from './components/BackgroundEffects'
import Hero from './components/Hero'
import Socials from './components/Socials'
import MenuSection from './components/MenuSection'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-rajdhani text-white">

      {/* Layer 0 — background */}
      <BackgroundEffects />

      {/* Layer 1 — content */}
      <main className="relative z-10 flex flex-col items-center px-5 pt-14 pb-16">
        <Hero />
        <Socials />
        <MenuSection />

        {/* footer */}
        <motion.p
          className="mt-10 font-rajdhani text-xs tracking-widest"
          style={{ color: 'rgba(255,255,255,0.18)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          © 2025 <span style={{ color: 'rgba(255,255,255,0.35)' }}>Djelista
          Store</span>
        </motion.p>
      </main>
    </div>
  )
}
