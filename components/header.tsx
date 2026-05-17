"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Handshake } from "lucide-react"
import { useLocale, useT } from "@/components/locale-provider"

export function Header() {
  const t = useT()
  const locale = useLocale()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const prefix = locale === "ja" ? "" : `/${locale}`
  const hashLink = (hash: string) => `${prefix}${hash}`

  const navItems = [
    { label: t.header.nav.home, href: hashLink("#home") },
    { label: t.header.nav.skills, href: hashLink("#skills") },
    { label: t.header.nav.services, href: hashLink("#services") },
    { label: t.header.nav.projects, href: hashLink("#projects") },
    { label: t.header.nav.timeline, href: hashLink("#timeline") },
    { label: t.header.nav.blog, href: hashLink("#blog") },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/80 py-2 shadow-lg backdrop-blur-md"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Handshake className="h-8 w-8 text-cyan-500" />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-xl font-bold text-transparent">
            {t.header.name}
          </span>
        </div>
        <nav className="hidden items-center space-x-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-slate-300 transition-colors hover:text-cyan-400"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href={hashLink("#contact")}
            className="rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-5 py-2 text-sm font-medium text-white shadow-md shadow-cyan-500/20 transition-all duration-300 hover:from-cyan-500 hover:to-blue-500 hover:shadow-lg hover:shadow-cyan-500/40"
          >
            {t.header.contact}
          </a>
        </nav>
      </div>
    </motion.header>
  )
}
