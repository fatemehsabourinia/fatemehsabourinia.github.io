import { useEffect, useRef } from 'react'

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let raf = 0
    const pointer = { x: -9999, y: -9999 }
    const count = window.innerWidth < 700 ? 20 : 42
    const dots = Array.from({ length: count }, () => ({ x: Math.random(), y: Math.random(), vx: (Math.random() - .5) * .0001, vy: (Math.random() - .5) * .0001 }))

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio, 2)
      width = window.innerWidth; height = window.innerHeight
      canvas.width = width * ratio; canvas.height = height * ratio
      canvas.style.width = `${width}px`; canvas.style.height = `${height}px`
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    }
    const move = (e: PointerEvent) => { pointer.x = e.clientX; pointer.y = e.clientY }
    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      dots.forEach((dot, index) => {
        if (!reduceMotion) { dot.x = (dot.x + dot.vx + 1) % 1; dot.y = (dot.y + dot.vy + 1) % 1 }
        const x = dot.x * width; const y = dot.y * height
        for (let j = index + 1; j < dots.length; j++) {
          const ox = dots[j].x * width; const oy = dots[j].y * height
          const distance = Math.hypot(x - ox, y - oy)
          if (distance < 150) {
            ctx.strokeStyle = `rgba(125, 87, 232, ${.12 * (1 - distance / 150)})`
            ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(ox, oy); ctx.stroke()
          }
        }
        const proximity = Math.max(0, 1 - Math.hypot(x - pointer.x, y - pointer.y) / 180)
        ctx.fillStyle = proximity ? `rgba(76, 177, 255, ${.45 + proximity * .35})` : 'rgba(159, 114, 255, .32)'
        ctx.beginPath(); ctx.arc(x, y, 1.3 + proximity * 1.7, 0, Math.PI * 2); ctx.fill()
      })
      if (!reduceMotion) raf = requestAnimationFrame(draw)
    }
    resize(); draw()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', move, { passive: true })
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); window.removeEventListener('pointermove', move) }
  }, [])

  return <canvas ref={canvasRef} className="neural-canvas" aria-hidden="true" />
}
