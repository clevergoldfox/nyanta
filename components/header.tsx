"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Hexagon } from "lucide-react"

const navItems = [
  { label: "ホーム", href: "#home" },
  { label: "スキル", href: "#skills" },
  { label: "サービス", href: "#services" },
  { label: "プロジェクト", href: "#projects" },
  { label: "経歴", href: "#timeline" },
  { label: "ブログ", href: "#blog" },
  { label: "お問い合わせ", href: "#contact" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

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
          <Hexagon className="h-8 w-8 text-cyan-500" />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-xl font-bold text-transparent">
            中村邦彦
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
        </nav>
      </div>
    </motion.header>
  )
}
