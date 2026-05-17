"use client"

import { motion } from "framer-motion"
import {
  Braces,
  Code,
  Cpu,
  Database,
  Gamepad2,
  Globe,
  Layers,
  Server,
  Smartphone,
  Sparkles,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SectionHeading } from "@/components/section-heading"
import { useT } from "@/components/locale-provider"

const tabMeta = [
  { id: "web", icon: Globe, levels: [95, 90, 95, 85, 80] },
  { id: "system", icon: Code, levels: [90, 92, 88, 85] },
  { id: "cloud", icon: Server, levels: [90, 85, 88, 82] },
  { id: "ai", icon: Sparkles, levels: [85, 83, 88, 80] },
  { id: "mobile", icon: Smartphone, levels: [88, 80, 85, 82] },
  { id: "game", icon: Gamepad2, levels: [78, 82, 80, 75] },
] as const

const techIcons = [Braces, Layers, Database, Cpu]
const techColors = ["cyan", "blue", "purple", "green"] as const

const techColorMap: Record<string, { bg: string; text: string; hover: string }> = {
  cyan: {
    bg: "bg-cyan-500/20",
    text: "text-cyan-400",
    hover: "hover:border-cyan-500/30",
  },
  blue: {
    bg: "bg-blue-500/20",
    text: "text-blue-400",
    hover: "hover:border-blue-500/30",
  },
  purple: {
    bg: "bg-purple-500/20",
    text: "text-purple-400",
    hover: "hover:border-purple-500/30",
  },
  green: {
    bg: "bg-green-500/20",
    text: "text-green-400",
    hover: "hover:border-green-500/30",
  },
}

export function SkillsSection() {
  const t = useT()

  return (
    <section id="skills" className="relative py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title={t.skills.title} description={t.skills.description} />

        <Tabs defaultValue="web" className="w-full">
          <div className="mb-8 flex justify-center overflow-x-auto pb-2 scrollbar-hide">
            <TabsList className="inline-flex h-10 items-center justify-center rounded-full border border-slate-700/50 bg-slate-800/50 p-1">
              {tabMeta.map((tab) => {
                const Icon = tab.icon
                return (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="rounded-full px-4 py-2 data-[state=active]:bg-cyan-900/50 data-[state=active]:text-cyan-400"
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {t.skills.tabs[tab.id]}
                  </TabsTrigger>
                )
              })}
            </TabsList>
          </div>

          {tabMeta.map((tab) => {
            const items = t.skills.items[tab.id]
            return (
              <TabsContent key={tab.id} value={tab.id} className="mt-0">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {items.map((skill, i) => {
                    const level = tab.levels[i]
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <Card className="overflow-hidden border border-cyan-500/30 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                          <CardContent className="p-6">
                            <div className="mb-4 flex items-center justify-between">
                              <h3 className="text-lg font-medium text-slate-200">
                                {skill.name}
                              </h3>
                              <Badge className="border-cyan-500/50 bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20">
                                {level}%
                              </Badge>
                            </div>
                            <Progress
                              value={level}
                              className="mb-4 h-2 bg-slate-700"
                            />
                            <p className="text-sm text-slate-400">
                              {skill.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>
              </TabsContent>
            )
          })}
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {t.skills.techCategories.map((tech, i) => {
            const color = techColors[i]
            const c = techColorMap[color]
            const Icon = techIcons[i]
            return (
              <Card
                key={tech.title}
                className={`border-slate-700/50 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 ${c.hover}`}
              >
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div
                    className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${c.bg}`}
                  >
                    <Icon className={`h-8 w-8 ${c.text}`} />
                  </div>
                  <h3 className="mb-2 text-lg font-medium text-slate-200">
                    {tech.title}
                  </h3>
                  <p className="text-sm text-slate-400">{tech.items}</p>
                </CardContent>
              </Card>
            )
          })}
        </motion.div>
      </div>
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-600/10 blur-3xl" />
    </section>
  )
}
