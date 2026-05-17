"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import {
  ArrowRight,
  Code,
  ExternalLink,
  Globe,
  Layers,
  Smartphone,
  Sparkles,
  X,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SectionHeading } from "@/components/section-heading"
import { useT } from "@/components/locale-provider"
import type { Translation } from "@/lib/i18n"

type ProjectMeta = {
  image: string
  category: string
  tags: string[]
  tech: string[]
  liveUrl?: string
}

const projectMeta: ProjectMeta[] = [
  {
    image: "/1.png",
    category: "system",
    tags: ["React", "Node.js", "TensorFlow", "PostgreSQL"],
    tech: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "TensorFlow",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
    ],
    liveUrl: "https://sikiapi.com/",
  },
  {
    image: "/2.png",
    category: "web",
    tags: ["Vue.js", "Firebase", "Cloud Functions", "Stripe"],
    tech: [
      "Vue.js",
      "Vuetify",
      "Firebase (Firestore, Auth, Functions)",
      "PWA",
      "Node.js",
      "Twilio API",
    ],
    liveUrl: "https://repittebeauty.cnctor.jp/",
  },
  {
    image: "/3.png",
    category: "ai",
    tags: ["Python", "Django", "TensorFlow", "PostgreSQL"],
    tech: [
      "Python",
      "Django",
      "FastAPI",
      "TensorFlow",
      "PostgreSQL",
      "ClickHouse",
      "Kafka",
      "AWS",
    ],
    liveUrl: "https://jp.dotdata.com/",
  },
  {
    image: "/4.png",
    category: "mobile",
    tags: ["React Native", "Node.js", "MQTT", "AWS IoT"],
    tech: [
      "React Native",
      "TypeScript",
      "Node.js",
      "MQTT",
      "AWS IoT Core",
      "DynamoDB",
      "Firebase Cloud Messaging",
    ],
    liveUrl: "https://linkjapan.co.jp/",
  },
  {
    image: "/5.png",
    category: "web",
    tags: ["Three.js", "WebGL", "WebRTC", "Node.js"],
    tech: [
      "Three.js",
      "React",
      "WebGL",
      "WebRTC",
      "Node.js",
      "Socket.IO",
      "Redis",
      "AWS",
    ],
    liveUrl: "https://ziku.inc/",
  },
  {
    image: "/6.png",
    category: "ai",
    tags: ["Python", "NLP", "FastAPI", "Docker"],
    tech: [
      "Python",
      "FastAPI",
      "LangChain",
      "OpenAI API",
      "Pinecone",
      "PostgreSQL",
      "Docker",
      "AWS",
    ],
    liveUrl: "https://first-contact.jp/",
  },
]

type Project = ProjectMeta & Translation["projects"]["items"][number]

const filterMeta: { id: string; icon: typeof Globe }[] = [
  { id: "all", icon: Layers },
  { id: "web", icon: Globe },
  { id: "system", icon: Code },
  { id: "mobile", icon: Smartphone },
  { id: "ai", icon: Sparkles },
]

function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const t = useT()

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onEsc)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onEsc)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm md:p-8"
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="my-4 w-full max-w-4xl overflow-hidden rounded-lg border border-slate-700/50 bg-slate-900 shadow-2xl"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-700/50 bg-slate-900/95 px-6 py-4 backdrop-blur-md">
          <h3 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-xl font-bold text-transparent md:text-2xl">
            {project.title}
          </h3>
          <button
            onClick={onClose}
            aria-label={t.projects.modal.close}
            className="rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-6 p-6">
          <div className="relative aspect-video overflow-hidden rounded-lg border border-slate-700/50">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 border-b border-slate-700/50 pb-6 md:grid-cols-3">
            <div>
              <div className="text-sm text-slate-500">{t.projects.modal.client}</div>
              <div className="mt-1 text-slate-100">{project.client}</div>
            </div>
            <div>
              <div className="text-sm text-slate-500">{t.projects.modal.duration}</div>
              <div className="mt-1 text-slate-100">{project.duration}</div>
            </div>
            <div>
              <div className="text-sm text-slate-500">{t.projects.modal.role}</div>
              <div className="mt-1 text-slate-100">{project.role}</div>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-lg font-bold text-slate-100">
              {t.projects.modal.overview}
            </h4>
            <p className="leading-relaxed text-slate-300">{project.overview}</p>
          </div>

          <div>
            <h4 className="mb-3 text-lg font-bold text-slate-100">
              {t.projects.modal.tech}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <Badge
                  key={tag}
                  className="border-cyan-500/50 bg-slate-800/50 text-cyan-400 hover:bg-slate-800/50"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-3 text-lg font-bold text-slate-100">
                {t.projects.modal.challenges}
              </h4>
              <ul className="space-y-2">
                {project.challenges.map((c, i) => (
                  <li key={i} className="flex text-slate-300">
                    <span className="mr-2 mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-lg font-bold text-slate-100">
                {t.projects.modal.solutions}
              </h4>
              <ul className="space-y-2">
                {project.solutions.map((s, i) => (
                  <li key={i} className="flex text-slate-300">
                    <span className="mr-2 mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-lg font-bold text-slate-100">
              {t.projects.modal.results}
            </h4>
            <ul className="space-y-2">
              {project.results.map((r, i) => (
                <li key={i} className="flex text-slate-300">
                  <span className="mr-2 mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-green-400" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.liveUrl && (
            <div className="pt-2 text-center">
              <Button
                asChild
                className="bg-gradient-to-r from-cyan-600 to-blue-600 transition-all duration-300 hover:from-cyan-500 hover:to-blue-500"
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.projects.modal.viewLive}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>,
    document.body
  )
}

function ProjectGrid({
  items,
  onSelect,
  cardCta,
}: {
  items: Project[]
  onSelect: (p: Project) => void
  cardCta: string
}) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((project, i) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <Card
            onClick={() => onSelect(project)}
            className="group flex h-full cursor-pointer flex-col overflow-hidden border-slate-700/50 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
            </div>
            <CardContent className="flex-grow p-6">
              <h3 className="mb-2 text-xl font-bold text-slate-100">
                {project.title}
              </h3>
              <p className="mb-4 text-sm text-slate-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <Badge
                    key={tag}
                    className="border-cyan-500/50 bg-slate-800/50 text-cyan-400 hover:bg-slate-800/50"
                  >
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 3 && (
                  <Badge className="border-slate-700/50 bg-slate-800/50 text-slate-400 hover:bg-slate-800/50">
                    +{project.tags.length - 3}
                  </Badge>
                )}
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button
                variant="ghost"
                className="p-0 text-cyan-400 hover:bg-transparent hover:text-cyan-300"
                onClick={(e) => {
                  e.stopPropagation()
                  onSelect(project)
                }}
              >
                {cardCta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export function ProjectsSection() {
  const t = useT()
  const [selected, setSelected] = useState<Project | null>(null)

  const projects: Project[] = t.projects.items.map((item, i) => ({
    ...projectMeta[i],
    ...item,
  }))

  const filterLabels: Record<string, string> = {
    all: t.projects.filters.all,
    web: t.projects.filters.web,
    system: t.projects.filters.system,
    mobile: t.projects.filters.mobile,
    ai: t.projects.filters.ai,
  }

  return (
    <section id="projects" className="relative py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title={t.projects.title} description={t.projects.description} />

        <Tabs defaultValue="all" className="w-full">
          <div className="mb-8 flex justify-center overflow-x-auto pb-2 scrollbar-hide">
            <TabsList className="inline-flex h-10 items-center justify-center rounded-full border border-slate-700/50 bg-slate-800/50 p-1">
              {filterMeta.map((filter) => {
                const Icon = filter.icon
                return (
                  <TabsTrigger
                    key={filter.id}
                    value={filter.id}
                    className="rounded-full px-4 py-2 data-[state=active]:bg-cyan-900/50 data-[state=active]:text-cyan-400"
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {filterLabels[filter.id]}
                  </TabsTrigger>
                )
              })}
            </TabsList>
          </div>

          {filterMeta.map((filter) => (
            <TabsContent key={filter.id} value={filter.id} className="mt-0">
              <ProjectGrid
                items={
                  filter.id === "all"
                    ? projects
                    : projects.filter((p) => p.category === filter.id)
                }
                onSelect={setSelected}
                cardCta={t.projects.cardCta}
              />
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <Button className="transform bg-gradient-to-r from-cyan-600 to-blue-600 transition-all duration-300 hover:scale-105 hover:from-cyan-500 hover:to-blue-500">
            {t.projects.seeAll}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
