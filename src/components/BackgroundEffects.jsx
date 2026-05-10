import { useEffect, useRef } from 'react'
import bgVideo from '../assets/videos/video.webm'

// ─────────────────────────────────────────
//  BackgroundEffects
//  Color palette tuned to match logo:
//  Deep navy (#010d1f / #001a50), white stars,
//  blue aurora — no cyan shift
// ─────────────────────────────────────────
export default function BackgroundEffects() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const cx = canvas.getContext('2d')
    let W, H, pts = [], animId

    const resize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // ── Star particle ──
    class Star {
      constructor(init) {
        this.x    = Math.random() * window.innerWidth
        this.y    = init ? Math.random() * window.innerHeight : window.innerHeight + 4
        this.r    = Math.random() * 1.2 + 0.25
        this.vy   = -(Math.random() * 0.28 + 0.06)
        this.vx   = (Math.random() - 0.5) * 0.13
        this.base = Math.random() * 0.6 + 0.15
        this.tw   = Math.random() * Math.PI * 2
        this.ts   = Math.random() * 0.02 + 0.008
      }
      tick() {
        this.x  += this.vx
        this.y  += this.vy
        this.tw += this.ts
        if (this.y < -4) { this.x = Math.random() * W; this.y = H + 4 }
      }
      draw() {
        // white stars — matching logo palette
        const a = this.base * (0.55 + 0.45 * Math.sin(this.tw))
        cx.beginPath()
        cx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        cx.fillStyle = `rgba(210,230,255,${a})`
        cx.fill()
      }
    }

    // ── Shooting star ──
    class ShootingStar {
      constructor() { this.init() }
      init() {
        this.x     = Math.random() * W * 0.65
        this.y     = Math.random() * H * 0.35
        this.len   = Math.random() * 90 + 40
        this.spd   = Math.random() * 4 + 3
        this.ang   = Math.PI / 5 + Math.random() * 0.25
        this.a     = 0
        this.phase = 'in'
        this.life  = 0
        this.max   = Math.random() * 45 + 28
        this.delay = Math.random() * 340 + 80
        this.timer = 0
      }
      tick() {
        this.timer++
        if (this.timer < this.delay) return
        this.life++
        if (this.phase === 'in')    { this.a += 0.11; if (this.life >= 10) this.phase = 'trail' }
        if (this.phase === 'trail') {
          this.x += Math.cos(this.ang) * this.spd
          this.y += Math.sin(this.ang) * this.spd
          if (this.life > this.max) this.phase = 'out'
        }
        if (this.phase === 'out')   { this.a -= 0.09; if (this.a <= 0) this.init() }
      }
      draw() {
        if (this.timer < this.delay || this.a <= 0) return
        const g = cx.createLinearGradient(
          this.x, this.y,
          this.x - Math.cos(this.ang) * this.len,
          this.y - Math.sin(this.ang) * this.len
        )
        // white shooting star — matches logo
        g.addColorStop(0, `rgba(230,240,255,${this.a})`)
        g.addColorStop(1, 'rgba(230,240,255,0)')
        cx.beginPath()
        cx.moveTo(this.x, this.y)
        cx.lineTo(this.x - Math.cos(this.ang) * this.len, this.y - Math.sin(this.ang) * this.len)
        cx.strokeStyle = g
        cx.lineWidth   = 1.4
        cx.stroke()
      }
    }

    for (let i = 0; i < 55; i++) pts.push(new Star(true))
    const shoots = [new ShootingStar(), new ShootingStar(), new ShootingStar()]

    const frame = () => {
      cx.clearRect(0, 0, W, H)
      // connect nearby stars with white-blue lines
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < 100) {
            cx.beginPath()
            cx.moveTo(pts[i].x, pts[i].y)
            cx.lineTo(pts[j].x, pts[j].y)
            cx.strokeStyle = `rgba(180,210,255,${(1 - d / 100) * 0.06})`
            cx.lineWidth = 0.5
            cx.stroke()
          }
        }
      }
      pts.forEach(p  => { p.tick(); p.draw() })
      shoots.forEach(s => { s.tick(); s.draw() })
      animId = requestAnimationFrame(frame)
    }
    frame()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <>
      {/* ── Video background ── */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay muted loop playsInline src={bgVideo}
        />
        {/* dark navy overlay matching logo background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(1,13,31,0.60) 0%, rgba(0,10,28,0.45) 50%, rgba(1,13,31,0.65) 100%)',
          }}
        />
      </div>

      {/* ── Aurora — deep navy + royal blue, no cyan ── */}
      <div
        className="fixed inset-0 z-0 pointer-events-none anim-aurora"
        style={{
          background: `
            radial-gradient(ellipse 90% 55% at 50% -5%,  rgba(0,30,120,0.55) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 5%  90%,  rgba(0,20,100,0.40) 0%, transparent 55%),
            radial-gradient(ellipse 55% 45% at 95% 70%,  rgba(0,10, 80,0.35) 0%, transparent 55%)
          `,
        }}
      />



      {/* ── Vignette ── */}
      <div
        className="fixed inset-0 z-0 pointer-events-none anim-vignette"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 50%, rgba(0,5,18,0.70) 100%)',
        }}
      />

      {/* ── Particle canvas ── */}
      <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
    </>
  )
}
