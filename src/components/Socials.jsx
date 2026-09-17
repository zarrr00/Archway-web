import { motion } from 'framer-motion'
import { FaWhatsapp, FaTelegram, FaGlobe, FaFacebook } from 'react-icons/fa'
import { socialLinks } from '../data/links'

const ICON_MAP = { FaWhatsapp, FaTelegram, FaGlobe, FaFacebook, }

export default function Socials() {
  return (
    <motion.div
      className="flex gap-3 mb-7"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.36, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {socialLinks.map((s, i) => {
        const Icon = ICON_MAP[s.icon]
        return (
          <motion.a
            key={s.id}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            title={s.label}
            className="flex flex-col items-center gap-1"
            style={{ textDecoration: 'none' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36 + i * 0.07, duration: 0.45 }}
          >
            <motion.div
              className="flex items-center justify-center"
              style={{
                width: 44, height: 44, borderRadius: '50%',
                background: 'rgba(1,13,31,0.55)',
                border: '1.5px solid rgba(255,255,255,0.22)',
                color: 'rgba(220,235,255,0.9)',
                backdropFilter: 'blur(10px)',
              }}
              whileHover={{
                scale: 1.15,
                y: -4,
                borderColor: 'rgba(255,255,255,0.75)',
                boxShadow: '0 0 20px rgba(255,255,255,0.28), 0 6px 20px rgba(0,0,0,0.4)',
                background: 'rgba(255,255,255,0.16)',
                color: '#ffffff',
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 340, damping: 20 }}
            >
              {Icon && <Icon size={18} />}
            </motion.div>
            <span
              className="font-rajdhani font-semibold"
              style={{ fontSize: '0.58rem', color: 'rgba(180,210,240,0.45)', letterSpacing: '0.05em' }}
            >
              {s.label.split(' ')[0]}
            </span>
          </motion.a>
        )
      })}
    </motion.div>
  )
}
