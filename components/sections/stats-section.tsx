"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle, Clock, Code, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useT } from "@/components/locale-provider"

const statsMeta = [
  { icon: CheckCircle, value: 120, color: "cyan" },
  { icon: Users, value: 85, color: "blue" },
  { icon: Clock, value: 7, color: "purple" },
  { icon: Code, value: 20, color: "green" },
]

const colorMap: Record<
  string,
  { border: string; bg: string; text: string; bar: string }
> = {
  cyan: {
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/20",
    text: "text-cyan-400",
    bar: "from-cyan-500 to-cyan-400",
  },
  blue: {
    border: "border-blue-500/30",
    bg: "bg-blue-500/20",
    text: "text-blue-400",
    bar: "from-blue-500 to-blue-400",
  },
  purple: {
    border: "border-purple-500/30",
    bg: "bg-purple-500/20",
    text: "text-purple-400",
    bar: "from-purple-500 to-purple-400",
  },
  green: {
    border: "border-green-500/30",
    bg: "bg-green-500/20",
    text: "text-green-400",
    bar: "from-green-500 to-green-400",
  },
}

function Counter({ target, inView }: { target: number; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (target === 0) {
      setCount(0)
      return
    }
    let current = 0
    const step = Math.ceil(target / 40)
    const interval = setInterval(() => {
      current += step
      if (current >= target) {
        current = target
        clearInterval(interval)
      }
      setCount(current)
    }, 30)
    return () => clearInterval(interval)
  }, [target, inView])

  return <>{count}</>
}

export function StatsSection() {
  const t = useT()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const stats = statsMeta.map((meta, i) => ({ ...meta, label: t.stats[i] }))

  return (
    <section ref={ref} className="relative py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const c = colorMap[stat.color]
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card
                  className={`overflow-hidden border ${c.border} bg-slate-900/50 backdrop-blur-sm`}
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full ${c.bg}`}
                      >
                        <Icon className={`h-6 w-6 ${c.text}`} />
                      </div>
                      <div className={`text-3xl font-bold ${c.text}`}>
                        <Counter target={stat.value} inView={inView} />
                        <span className="text-lg">+</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-medium text-slate-200">
                      {stat.label}
                    </h3>
                    <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-slate-800">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${c.bar}`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${stat.value}%` } : {}}
                        transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
      <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />
    </section>
  )
}
