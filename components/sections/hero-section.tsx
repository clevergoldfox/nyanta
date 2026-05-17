"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, Code, Database, Globe, Smartphone, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLocale, useT } from "@/components/locale-provider"

function Typewriter() {
  const t = useT()
  const roles = t.hero.roles
  const [text, setText] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    setText("")
    setRoleIndex(0)
    setDeleting(false)
  }, [roles])

  useEffect(() => {
    const current = roles[roleIndex]
    if (!current) return

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), 1500)
      return () => clearTimeout(t)
    }

    if (deleting && text === "") {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
      return
    }

    const timer = setTimeout(
      () => {
        setText((prev) =>
          deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
        )
      },
      deleting ? 60 : 110
    )
    return () => clearTimeout(timer)
  }, [text, deleting, roleIndex, roles])

  return (
    <div className="inline-flex items-center text-xl md:text-2xl">
      <span>{text}</span>
      <span className="ml-1 inline-block h-5 w-[3px] animate-pulse bg-cyan-400 text-cyan-400" />
    </div>
  )
}

const heroImages = [
  { src: "/cartoon.jpg" },
  { src: "/uniform.png" },
  { src: "/working.png" },
]

const imageVariants = [
  {
    initial: { opacity: 0, scale: 0.7 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.15 },
  },
  {
    initial: { opacity: 0, rotateY: 90 },
    animate: { opacity: 1, rotateY: 0 },
    exit: { opacity: 0, rotateY: -90 },
  },
  {
    initial: { opacity: 0, x: 120 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -120 },
  },
]

function HeroVisual({ alt }: { alt: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [imageIndex, setImageIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setImageIndex((i) => (i + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let angle = 0
    const size = 520
    canvas.width = size
    canvas.height = size

    const draw = () => {
      ctx.clearRect(0, 0, size, size)
      const cx = size / 2
      const cy = size / 2

      for (let ring = 0; ring < 3; ring++) {
        const radius = 130 + ring * 52
        const dots = 12 + ring * 6
        for (let i = 0; i < dots; i++) {
          const a = (i / dots) * Math.PI * 2 + angle * (ring % 2 === 0 ? 1 : -1)
          const x = cx + Math.cos(a) * radius
          const y = cy + Math.sin(a) * radius
          ctx.beginPath()
          ctx.arc(x, y, 2.6, 0, Math.PI * 2)
          ctx.fillStyle =
            ring === 0
              ? "rgba(34, 211, 238, 0.8)"
              : ring === 1
                ? "rgba(59, 130, 246, 0.6)"
                : "rgba(168, 85, 247, 0.5)"
          ctx.fill()
        }
        ctx.beginPath()
        ctx.arc(cx, cy, radius, 0, Math.PI * 2)
        ctx.strokeStyle = "rgba(34, 211, 238, 0.1)"
        ctx.stroke()
      }

      angle += 0.005
      animationId = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animationId)
  }, [])

  const current = heroImages[imageIndex]
  const variant = imageVariants[imageIndex % imageVariants.length]

  return (
    <div className="relative mx-auto aspect-square w-full max-w-xl">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 flex items-center justify-center [perspective:1200px]">
        <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-cyan-500/30 shadow-xl shadow-cyan-500/20">
          <AnimatePresence>
            <motion.div
              key={imageIndex}
              initial={variant.initial}
              animate={variant.animate}
              exit={variant.exit}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={current.src}
                alt={alt}
                fill
                sizes="256px"
                className="object-cover"
                priority={imageIndex === 0}
              />
            </motion.div>
          </AnimatePresence>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10" />
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  const t = useT()
  const locale = useLocale()
  const prefix = locale === "ja" ? "" : `/${locale}`

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <Badge className="border-cyan-500/50 bg-cyan-500/20 px-3 py-1 text-cyan-400 hover:bg-cyan-500/20">
                {t.hero.badge}
              </Badge>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {t.hero.name}
                </span>
              </h1>
              <div className="mt-2 h-10 text-xl text-slate-300 md:text-2xl">
                <Typewriter />
              </div>
            </div>
            <p className="max-w-xl text-lg text-slate-400">
              {t.hero.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge className="border-cyan-500/50 bg-slate-800/50 px-3 py-1 text-cyan-400 hover:bg-slate-800/50">
                <Code className="mr-1 h-4 w-4" />
                {t.hero.tags.system}
              </Badge>
              <Badge className="border-purple-500/50 bg-slate-800/50 px-3 py-1 text-purple-400 hover:bg-slate-800/50">
                <Database className="mr-1 h-4 w-4" />
                {t.hero.tags.aws}
              </Badge>
              <Badge className="border-blue-500/50 bg-slate-800/50 px-3 py-1 text-blue-400 hover:bg-slate-800/50">
                <Globe className="mr-1 h-4 w-4" />
                {t.hero.tags.web}
              </Badge>
              <Badge className="border-green-500/50 bg-slate-800/50 px-3 py-1 text-green-400 hover:bg-slate-800/50">
                <Smartphone className="mr-1 h-4 w-4" />
                {t.hero.tags.app}
              </Badge>
              <Badge className="border-amber-500/50 bg-slate-800/50 px-3 py-1 text-amber-400 hover:bg-slate-800/50">
                <Sparkles className="mr-1 h-4 w-4" />
                {t.hero.tags.ai}
              </Badge>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="transform bg-gradient-to-r from-cyan-600 to-blue-600 transition-all duration-300 hover:scale-105 hover:from-cyan-500 hover:to-blue-500"
                asChild
              >
                <a href={`${prefix}#contact`}>
                  {t.hero.ctaContact}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="transform border-cyan-500/50 text-cyan-400 transition-all duration-300 hover:scale-105 hover:bg-cyan-950/30"
                asChild
              >
                <a href={`${prefix}#projects`}>{t.hero.ctaProjects}</a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <HeroVisual alt={t.hero.name} />
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-slate-900 to-transparent" />
      <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-cyan-600/10 blur-3xl" />
      <div className="absolute -left-10 -top-10 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
    </section>
  )
}
