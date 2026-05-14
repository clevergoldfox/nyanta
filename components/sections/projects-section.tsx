"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Code, Globe, Layers, Smartphone, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SectionHeading } from "@/components/section-heading"

type Project = {
  title: string
  description: string
  image: string
  category: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: "AI搭載顧客管理システム",
    description:
      "AIを活用した顧客分析と予測機能を備えた次世代CRMシステム。顧客行動パターンを分析し、最適なアプローチを提案します。",
    image: "/1.png",
    category: "system",
    tags: ["React", "Node.js", "TensorFlow", "PostgreSQL"],
  },
  {
    title: "クラウドベース予約システム",
    description:
      "多業種に対応可能なスケーリング可能な予約システム。リアルタイム通知と自動リマインダー機能を実装しています。",
    image: "/2.png",
    category: "web",
    tags: ["Vue.js", "Firebase", "Cloud Functions", "Stripe"],
  },
  {
    title: "フィンテック分析ツール",
    description:
      "株式・FX・仮想通貨のリアルタイムデータ分析と自動取引機能を備えたツール。高度なアルゴリズムで市場予測を行います。",
    image: "/3.png",
    category: "ai",
    tags: ["Python", "Django", "TensorFlow", "PostgreSQL"],
  },
  {
    title: "スマートホーム管理アプリ",
    description:
      "IoTデバイスと連携し、家庭内のあらゆる機器をスマートフォンから一元管理できるアプリケーション。",
    image: "/4.png",
    category: "mobile",
    tags: ["React Native", "Node.js", "MQTT", "AWS IoT"],
  },
  {
    title: "メタバース展示会プラットフォーム",
    description:
      "バーチャル空間で展示会やイベントを開催できるプラットフォーム。リアルタイムコミュニケーション機能を実装。",
    image: "/5.png",
    category: "web",
    tags: ["Three.js", "WebGL", "WebRTC", "Node.js"],
  },
  {
    title: "AI搭載チャットボット",
    description:
      "自然言語処理を活用した多言語対応チャットボット。顧客サポートの自動化と効率化を実現しました。",
    image: "/6.png",
    category: "ai",
    tags: ["Python", "NLP", "FastAPI", "Docker"],
  },
]

const filters = [
  { id: "all", label: "すべて", icon: Layers },
  { id: "web", label: "Web開発", icon: Globe },
  { id: "system", label: "システム開発", icon: Code },
  { id: "mobile", label: "モバイル", icon: Smartphone },
  { id: "ai", label: "AI・機械学習", icon: Sparkles },
]

function ProjectGrid({ items }: { items: Project[] }) {
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
          <Card className="group flex h-full cursor-pointer flex-col overflow-hidden border-slate-700/50 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10">
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
              >
                詳細を見る
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
  return (
    <section id="projects" className="relative py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="プロジェクト実績"
          description="これまでに手がけた代表的なプロジェクトをご紹介します。 多様な業界と技術スタックでの開発経験があります。 各プロジェクトをクリックすると詳細をご覧いただけます。"
        />

        <Tabs defaultValue="all" className="w-full">
          <div className="mb-8 flex justify-center overflow-x-auto pb-2 scrollbar-hide">
            <TabsList className="inline-flex h-10 items-center justify-center rounded-full border border-slate-700/50 bg-slate-800/50 p-1">
              {filters.map((filter) => {
                const Icon = filter.icon
                return (
                  <TabsTrigger
                    key={filter.id}
                    value={filter.id}
                    className="rounded-full px-4 py-2 data-[state=active]:bg-cyan-900/50 data-[state=active]:text-cyan-400"
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {filter.label}
                  </TabsTrigger>
                )
              })}
            </TabsList>
          </div>

          {filters.map((filter) => (
            <TabsContent key={filter.id} value={filter.id} className="mt-0">
              <ProjectGrid
                items={
                  filter.id === "all"
                    ? projects
                    : projects.filter((p) => p.category === filter.id)
                }
              />
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <Button className="transform bg-gradient-to-r from-cyan-600 to-blue-600 transition-all duration-300 hover:scale-105 hover:from-cyan-500 hover:to-blue-500">
            すべてのプロジェクトを見る
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
    </section>
  )
}
