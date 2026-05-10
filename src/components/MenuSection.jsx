import { motion } from 'framer-motion'
import { menuLinks } from '../data/links'
import MenuCard from './MenuCard'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.42 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.50, ease: [0.22, 1, 0.36, 1] },
  },
}

function SectionLabel({ label }) {
  return (
    <motion.div
      variants={itemVariants}
      className="flex items-center gap-3 w-full mt-3 mb-0.5 px-1"
    >
      <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
      <span
        className="font-rajdhani font-semibold uppercase whitespace-nowrap"
        style={{ fontSize: '0.60rem', letterSpacing: '0.26em', color: 'rgba(200,215,240,0.38)' }}
      >
        {label}
      </span>
      <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
    </motion.div>
  )
}

export default function MenuSection() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2.5 w-full max-w-[340px]"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {menuLinks.map((link) => (
        <motion.div key={link.id} variants={itemVariants} className="w-full">
          {link.section && <SectionLabel label={link.section} />}
          <MenuCard
            title={link.title}
            subtitle={link.subtitle}
            url={link.url}
            icon={link.icon}
            badge={link.badge}
            badgeColor={link.badgeColor}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}
