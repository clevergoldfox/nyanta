"use client"

import { useEffect, useRef } from "react"

export function EarthBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = Math.min(2, window.devicePixelRatio || 1)
    let raf = 0
    let W = window.innerWidth
    let H = window.innerHeight
    let cx = 0
    let cy = 0
    let R = 0

    // Pseudo-continents: fixed (lat, lon, size) positions on the sphere.
    const continents = Array.from({ length: 70 }, () => ({
      lon: Math.random() * Math.PI * 2,
      lat: (Math.random() - 0.5) * Math.PI * 0.9,
      size: 3 + Math.random() * 10,
    }))

    // Background star specks
    const stars = Array.from({ length: 140 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.4 + Math.random() * 1.4,
      tw: Math.random() * Math.PI * 2,
    }))

    // Satellites — tilted circular orbits projected as ellipses.
    const satellites = [
      { rRatio: 1.18, tilt: 0.45, speed: 0.6, phase: 0.0 },
      { rRatio: 1.32, tilt: -0.7, speed: 0.45, phase: 1.7 },
      { rRatio: 1.5, tilt: 1.0, speed: 0.32, phase: 3.4 },
      { rRatio: 1.25, tilt: -1.25, speed: 0.55, phase: 5.0 },
    ]

    // Radio wave emitters anchored to Earth surface (rotate with it).
    const emitters = [
      { lon: 0.5, lat: 0.4 },
      { lon: -1.8, lat: -0.3 },
      { lon: 2.7, lat: 0.6 },
      { lon: 4.5, lat: -0.7 },
    ]
    type Wave = { x: number; y: number; t: number; max: number }
    const waves: Wave[] = []
    let waveTimer = 0

    const resize = () => {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width = Math.round(W * dpr)
      canvas.height = Math.round(H * dpr)
      canvas.style.width = `${W}px`
      canvas.style.height = `${H}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      R = W * 0.4 // diameter = 80% of screen width
      cx = W / 2
      cy = H / 2
    }

    let rotation = 0
    let lastT = performance.now()

    const drawSatellite = (
      x: number,
      y: number,
      bright: boolean
    ) => {
      ctx.save()
      ctx.shadowColor = "rgba(125, 211, 252, 0.95)"
      ctx.shadowBlur = bright ? 14 : 6
      ctx.fillStyle = bright
        ? "rgba(186, 230, 253, 1)"
        : "rgba(125, 211, 252, 0.7)"
      ctx.beginPath()
      ctx.arc(cx + x, cy + y, bright ? 4 : 2.6, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }

    const draw = (now: number) => {
      const dt = Math.min(50, now - lastT)
      lastT = now

      // Deep space background (dark blackish-blue, slightly visible)
      ctx.fillStyle = "#020a1a"
      ctx.fillRect(0, 0, W, H)

      // Twinkling stars
      for (const s of stars) {
        s.tw += dt * 0.002
        const a = 0.3 + 0.4 * (0.5 + 0.5 * Math.sin(s.tw))
        ctx.fillStyle = `rgba(186, 230, 253, ${a})`
        ctx.beginPath()
        ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2)
        ctx.fill()
      }

      // Soft outer halo around Earth
      const halo = ctx.createRadialGradient(
        cx,
        cy,
        R * 0.95,
        cx,
        cy,
        R * 1.4
      )
      halo.addColorStop(0, "rgba(56, 189, 248, 0.22)")
      halo.addColorStop(1, "rgba(56, 189, 248, 0)")
      ctx.fillStyle = halo
      ctx.beginPath()
      ctx.arc(cx, cy, R * 1.4, 0, Math.PI * 2)
      ctx.fill()

      // Orbit paths (drawn before Earth; back portions get covered by Earth)
      ctx.strokeStyle = "rgba(56, 189, 248, 0.18)"
      ctx.lineWidth = 1
      for (const s of satellites) {
        const orbitR = R * s.rRatio
        const minor = Math.max(2, orbitR * Math.abs(Math.sin(s.tilt)))
        ctx.beginPath()
        ctx.ellipse(cx, cy, orbitR, minor, 0, 0, Math.PI * 2)
        ctx.stroke()
      }

      // Compute current satellite positions (3D → projected 2D)
      const satPositions = satellites.map((s) => {
        const angle = now * 0.0001 * s.speed + s.phase
        const orbitR = R * s.rRatio
        const x = Math.cos(angle) * orbitR
        const y = -Math.sin(angle) * orbitR * Math.sin(s.tilt)
        const z = Math.sin(angle) * orbitR * Math.cos(s.tilt)
        return { x, y, z }
      })

      // Far-side satellites first (Earth will cover them where occluded)
      for (const p of satPositions) {
        if (p.z <= 0) drawSatellite(p.x, p.y, false)
      }

      // ===== Earth =====
      const earthG = ctx.createRadialGradient(
        cx - R * 0.35,
        cy - R * 0.35,
        R * 0.1,
        cx,
        cy,
        R
      )
      earthG.addColorStop(0, "#10406d")
      earthG.addColorStop(0.55, "#082143")
      earthG.addColorStop(1, "#030c1f")
      ctx.fillStyle = earthG
      ctx.beginPath()
      ctx.arc(cx, cy, R, 0, Math.PI * 2)
      ctx.fill()

      // Earth limb
      ctx.strokeStyle = "rgba(56, 189, 248, 0.45)"
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.arc(cx, cy, R, 0, Math.PI * 2)
      ctx.stroke()

      // Latitude lines (foreshortened ellipses)
      ctx.strokeStyle = "rgba(59, 130, 246, 0.22)"
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.ellipse(cx, cy, R, R * 0.18, 0, 0, Math.PI * 2)
      ctx.stroke()
      for (let i = 1; i <= 3; i++) {
        const lat = (i / 4) * (Math.PI / 2)
        const rr = Math.cos(lat) * R
        for (const sign of [-1, 1]) {
          const y = cy + sign * Math.sin(lat) * R
          ctx.beginPath()
          ctx.ellipse(cx, y, rr, rr * 0.18, 0, 0, Math.PI * 2)
          ctx.stroke()
        }
      }

      // Meridian (longitude) lines — rotating, projected as half-ellipses
      for (let i = 0; i < 12; i++) {
        const lon = (i / 12) * Math.PI * 2 + rotation
        const w = Math.cos(lon) * R
        const aw = Math.abs(w)
        if (aw < 2) continue
        ctx.beginPath()
        ctx.ellipse(cx, cy, aw, R, 0, -Math.PI / 2, Math.PI / 2)
        ctx.stroke()
      }

      // Continent specks on the front hemisphere
      for (const c of continents) {
        const lon = c.lon + rotation
        const cosLat = Math.cos(c.lat)
        const x = Math.cos(lon) * cosLat
        const z = Math.sin(lon) * cosLat
        if (z <= 0) continue
        const sx = cx + x * R
        const sy = cy - Math.sin(c.lat) * R
        const alpha = Math.min(1, z * 1.2 + 0.15)
        ctx.fillStyle = `rgba(56, 189, 248, ${alpha * 0.55})`
        ctx.beginPath()
        ctx.arc(sx, sy, c.size * (0.4 + z * 0.6), 0, Math.PI * 2)
        ctx.fill()
      }

      // Emit a new radio wave from a visible emitter
      waveTimer += dt
      if (waveTimer > 650) {
        waveTimer = 0
        const visible: { x: number; y: number }[] = []
        for (const e of emitters) {
          const lon = e.lon + rotation
          const cosLat = Math.cos(e.lat)
          const x = Math.cos(lon) * cosLat
          const z = Math.sin(lon) * cosLat
          if (z > 0.15) {
            visible.push({
              x: cx + x * R,
              y: cy - Math.sin(e.lat) * R,
            })
          }
        }
        if (visible.length) {
          const e = visible[Math.floor(Math.random() * visible.length)]
          waves.push({ x: e.x, y: e.y, t: 0, max: 3000 })
        }
      }

      // Render & update radio waves (drawn above Earth, propagating outward)
      for (let i = waves.length - 1; i >= 0; i--) {
        const w = waves[i]
        w.t += dt
        if (w.t >= w.max) {
          waves.splice(i, 1)
          continue
        }
        const k = w.t / w.max
        const radius = k * R * 1.4
        const alpha = (1 - k) * 0.7
        ctx.strokeStyle = `rgba(165, 243, 252, ${alpha})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(w.x, w.y, radius, 0, Math.PI * 2)
        ctx.stroke()
        ctx.strokeStyle = `rgba(125, 211, 252, ${alpha * 0.35})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(w.x, w.y, radius * 0.7, 0, Math.PI * 2)
        ctx.stroke()
        // Bright origin pulse
        ctx.fillStyle = `rgba(186, 230, 253, ${alpha * 0.9})`
        ctx.beginPath()
        ctx.arc(w.x, w.y, 2.5, 0, Math.PI * 2)
        ctx.fill()
      }

      // Near-side satellites on top of Earth
      for (const p of satPositions) {
        if (p.z > 0) drawSatellite(p.x, p.y, true)
      }

      rotation += dt * 0.00015
      raf = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener("resize", resize)
    raf = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  )
}
