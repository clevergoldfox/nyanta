"use client"

import { motion } from "framer-motion"
import { Award, Briefcase, GraduationCap } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { useT } from "@/components/locale-provider"

const timelineMeta = [
  { icon: Briefcase, color: "cyan" },
  { icon: Briefcase, color: "blue" },
  { icon: Briefcase, color: "purple" },
  { icon: Award, color: "amber" },
  { icon: Briefcase, color: "green" },
  { icon: GraduationCap, color: "red" },
]

const colorMap: Record<
  string,
  { bg: string; border: string; text: string; cardBorder: string }
> = {
  cyan: {
    bg: "bg-cyan-500/20",
    border: "border-cyan-500",
    text: "text-cyan-400",
    cardBorder: "border-cyan-500/30",
  },
  blue: {
    bg: "bg-blue-500/20",
    border: "border-blue-500",
    text: "text-blue-400",
    cardBorder: "border-blue-500/30",
  },
  purple: {
    bg: "bg-purple-500/20",
    border: "border-purple-500",
    text: "text-purple-400",
    cardBorder: "border-purple-500/30",
  },
  amber: {
    bg: "bg-amber-500/20",
    border: "border-amber-500",
    text: "text-amber-400",
    cardBorder: "border-amber-500/30",
  },
  green: {
    bg: "bg-green-500/20",
    border: "border-green-500",
    text: "text-green-400",
    cardBorder: "border-green-500/30",
  },
  red: {
    bg: "bg-red-500/20",
    border: "border-red-500",
    text: "text-red-400",
    cardBorder: "border-red-500/30",
  },
}

export function TimelineSection() {
  const t = useT()

  return (
    <section id="timeline" className="relative py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title={t.timeline.title} description={t.timeline.description} />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-0 h-full w-1 transform bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 md:left-1/2 md:-translate-x-1/2" />

          {t.timeline.items.map((item, i) => {
            const meta = timelineMeta[i]
            const c = colorMap[meta.color]
            const Icon = meta.icon
            const isReverse = i % 2 === 0
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative mb-12 flex flex-col items-center md:flex-row ${
                  isReverse ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-0 z-10 -translate-x-1/2 transform md:left-1/2">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full border-2 ${c.bg} ${c.border}`}
                  >
                    <Icon className={`h-5 w-5 ${c.text}`} />
                  </div>
                </div>
                <div
                  className={`ml-12 w-full pl-4 md:ml-0 md:w-[calc(50%-2rem)] md:pl-0 ${
                    isReverse ? "md:pl-8" : "md:pr-8"
                  }`}
                >
                  <div
                    className={`rounded-lg border bg-slate-900/50 p-4 backdrop-blur-sm ${c.cardBorder}`}
                  >
                    <div className={`mb-1 font-mono text-sm ${c.text}`}>
                      {item.period}
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-slate-100">
                      {item.title}
                    </h3>
                    <p className="text-slate-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />
    </section>
  )
}
