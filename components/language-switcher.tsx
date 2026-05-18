"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import { useLocale } from "@/components/locale-provider"
import type { Locale } from "@/lib/i18n"

type Language = {
  code: Locale
  label: string
  href: string
  Flag: () => JSX.Element
}

function FlagJP() {
  return (
    <svg viewBox="0 0 30 20" className="h-3.5 w-5 shrink-0 rounded-sm" aria-hidden>
      <rect width="30" height="20" fill="#ffffff" />
      <circle cx="15" cy="10" r="6" fill="#bc002d" />
    </svg>
  )
}

function FlagUS() {
  return (
    <svg viewBox="0 0 30 20" className="h-3.5 w-5 shrink-0 rounded-sm" aria-hidden>
      <rect width="30" height="20" fill="#bf0a30" />
      <rect y="2" width="30" height="1.5" fill="#ffffff" />
      <rect y="5" width="30" height="1.5" fill="#ffffff" />
      <rect y="8" width="30" height="1.5" fill="#ffffff" />
      <rect y="11" width="30" height="1.5" fill="#ffffff" />
      <rect y="14" width="30" height="1.5" fill="#ffffff" />
      <rect y="17" width="30" height="1.5" fill="#ffffff" />
      <rect width="12" height="10.5" fill="#002868" />
    </svg>
  )
}

function FlagES() {
  return (
    <svg viewBox="0 0 30 20" className="h-3.5 w-5 shrink-0 rounded-sm" aria-hidden>
      <rect width="30" height="5" fill="#aa151b" />
      <rect y="5" width="30" height="10" fill="#f1bf00" />
      <rect y="15" width="30" height="5" fill="#aa151b" />
    </svg>
  )
}

const languages: Language[] = [
  { code: "en", label: "English", href: "/en", Flag: FlagUS },
  { code: "ja", label: "日本語", href: "/", Flag: FlagJP },
  { code: "sp", label: "Español", href: "/sp", Flag: FlagES },
]

export function LanguageSwitcher() {
  const locale = useLocale()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current =
    languages.find((l) => l.code === locale) ??
    languages.find((l) => l.code === "ja")!

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", onClick)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onClick)
      document.removeEventListener("keydown", onKey)
    }
  }, [])

  const switchTo = (href: string) => (e: React.MouseEvent) => {
    if (typeof window !== "undefined" && window.location.hash) {
      e.preventDefault()
      window.location.href = href + window.location.hash
    }
    setOpen(false)
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-800/50 px-3 py-1.5 text-sm text-slate-300 transition-colors hover:border-cyan-500/40 hover:text-cyan-400"
      >
        <current.Flag />
        <span className="hidden sm:inline">{current.label}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-md border border-slate-700/50 bg-slate-900/95 shadow-lg backdrop-blur-md"
        >
          {languages.map((lang) => {
            const isActive = lang.code === locale
            return (
              <a
                key={lang.code}
                href={lang.href}
                onClick={switchTo(lang.href)}
                role="option"
                aria-selected={isActive}
                className={`flex items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-slate-800 hover:text-cyan-400 ${
                  isActive ? "bg-slate-800/70 text-cyan-400" : "text-slate-300"
                }`}
              >
                <lang.Flag />
                <span>{lang.label}</span>
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}
