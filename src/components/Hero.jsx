import { motion } from 'framer-motion'
import profileImg from '../assets/images/profile.jpg'

export default function Hero() {
  return (
    <div className="flex flex-col items-center mb-6">

      {/* ── Profile photo ── */}
      <motion.div
        className="relative mb-5"
        style={{ width: 110, height: 110 }}
        initial={{ opacity: 0, scale: 0.65 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >

        {/* rotating outer ring */}
        <motion.div
          className="absolute"
          style={{
            inset: -7,
            zIndex: 1,
            borderRadius: '50%',
            border: '2.5px solid transparent',
            background:
              'linear-gradient(#010e22,#010e22) padding-box, conic-gradient(#ffffff, #0033aa, #4488ff, #ffffff) border-box',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        />

        {/* counter rotate ring */}
        <motion.div
          className="absolute"
          style={{
            inset: -13,
            zIndex: 0,
            borderRadius: '50%',
            border: '1px solid transparent',
            background:
              'linear-gradient(#010e22,#010e22) padding-box, conic-gradient(transparent 60%, rgba(255,255,255,0.22) 80%, transparent 100%) border-box',
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />

        {/* profile image */}
        <motion.div
          style={{
            width: 110,
            height: 110,
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2.5px solid rgba(255,255,255,0.45)',
            position: 'relative',
            zIndex: 5,
          }}
          animate={{
            boxShadow: [
              '0 0 0 3px rgba(255,255,255,0.08), 0 0 28px rgba(255,255,255,0.25), 0 0 60px rgba(100,160,255,0.15)',
              '0 0 0 5px rgba(255,255,255,0.14), 0 0 48px rgba(255,255,255,0.50), 0 0 90px rgba(100,160,255,0.28)',
              '0 0 0 3px rgba(255,255,255,0.08), 0 0 28px rgba(255,255,255,0.25), 0 0 60px rgba(100,160,255,0.15)',
            ],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img
            src={profileImg}
            alt="Archway Indonesia"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
        </motion.div>

      </motion.div>

      {/* handle */}
      <motion.h1
        className="font-orbitron text-base font-bold tracking-widest mb-1"
        style={{
          color: '#ffffff',
          textShadow:
            '0 0 14px rgba(255,255,255,0.55), 0 0 32px rgba(160,200,255,0.35)',
        }}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        @archwayid
      </motion.h1>

      {/* brand name */}
      <motion.p
        className="font-rajdhani text-xs font-semibold tracking-[0.36em] uppercase mb-2"
        style={{ color: 'rgba(180,210,240,0.65)' }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        Archway Indonesia
      </motion.p>

      {/* tagline */}
      <motion.p
        className="font-rajdhani text-xs text-center max-w-[240px] leading-relaxed"
        style={{ color: 'rgba(160,195,235,0.50)' }}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.32, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        Jasa Post · Stok Akun · Tampung Akun
      </motion.p>

    </div>
  )
}
