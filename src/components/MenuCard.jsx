import { motion } from 'framer-motion'
import {
  FaWhatsapp, FaTelegram, FaGlobe,
  FaUsers, FaShoppingBag, FaBullhorn, FaFacebook,
} from 'react-icons/fa'

// ── Static imports — Vite hanya bisa bundle import statis ──
import gbMarketImg from '../assets/images/gb-market.jpg'

const ICON_MAP = {
  FaWhatsapp, FaTelegram, FaGlobe,
  FaUsers, FaShoppingBag, FaBullhorn, FaFacebook,
}

// Map nama file → imported asset
const IMAGE_MAP = {
  'gb-market.jpg': gbMarketImg,
}

export default function MenuCard({ title, subtitle, url, icon, image, badge, badgeColor }) {
  const Icon = ICON_MAP[icon]
  const imgSrc = image ? IMAGE_MAP[image] : null

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center w-full cursor-pointer select-none"
      style={{
        borderRadius: 12,
        background: 'rgba(255, 255, 255, 0.06)',
        border: '1px solid rgba(255, 255, 255, 0.11)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        textDecoration: 'none',
        position: 'relative',
        overflow: 'hidden',
        minHeight: 62,
      }}
      whileHover={{
        background: 'rgba(255, 255, 255, 0.10)',
        borderColor: 'rgba(255, 255, 255, 0.22)',
        y: -2,
        boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
      }}
      whileTap={{ scale: 0.985, y: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {/* ── Left: gambar ATAU icon ── */}
      <div
        className="flex-shrink-0 flex items-center justify-center"
        style={{ width: 62, alignSelf: 'stretch' }}
      >
        {imgSrc ? (
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 9,
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.18)',
            }}
          >
            <img
              src={imgSrc}
              alt={title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
              }}
            />
          </div>
        ) : (
          <motion.div
            className="flex items-center justify-center"
            style={{
              width: 36,
              height: 36,
              borderRadius: 9,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.14)',
              color: 'rgba(220,235,255,0.75)',
            }}
            whileHover={{
              background: 'rgba(255,255,255,0.14)',
              color: '#ffffff',
              borderColor: 'rgba(255,255,255,0.30)',
            }}
            transition={{ duration: 0.18 }}
          >
            {Icon && <Icon size={16} />}
          </motion.div>
        )}
      </div>

      {/* divider */}
      <div style={{
        width: 1,
        alignSelf: 'stretch',
        background: 'rgba(255,255,255,0.07)',
        margin: '12px 0',
      }} />

      {/* ── Teks ── */}
      <div className="flex-1 flex flex-col justify-center px-4 py-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="font-rajdhani font-semibold"
            style={{
              color: 'rgba(235,242,255,0.92)',
              fontSize: '0.88rem',
              letterSpacing: '0.05em',
              lineHeight: 1.25,
            }}
          >
            {title}
          </span>
          {badge && (
            <span
              className="font-rajdhani font-bold"
              style={{
                fontSize: '0.52rem',
                letterSpacing: '0.14em',
                padding: '2px 6px',
                borderRadius: 4,
                background: badgeColor ? `${badgeColor}55` : 'rgba(255,255,255,0.12)',
                border: `1px solid ${badgeColor ? badgeColor + '88' : 'rgba(255,255,255,0.15)'}`,
                color: 'rgba(220,235,255,0.85)',
                whiteSpace: 'nowrap',
              }}
            >
              {badge}
            </span>
          )}
        </div>
        {subtitle && (
          <span
            className="font-rajdhani"
            style={{
              fontSize: '0.70rem',
              color: 'rgba(180,200,235,0.42)',
              marginTop: 2,
              letterSpacing: '0.01em',
            }}
          >
            {subtitle}
          </span>
        )}
      </div>

      {/* arrow */}
      <motion.span
        style={{
          flexShrink: 0,
          paddingRight: 18,
          color: 'rgba(255,255,255,0.22)',
          fontSize: '1rem',
          lineHeight: 1,
        }}
        whileHover={{ color: 'rgba(255,255,255,0.55)', x: 2 }}
        transition={{ duration: 0.18 }}
      >
        ›
      </motion.span>

      {/* shimmer */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(100deg, transparent 30%, rgba(255,255,255,0.04) 50%, transparent 70%)',
          x: '-120%',
        }}
        whileHover={{ x: '120%' }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      />
    </motion.a>
  )
}
