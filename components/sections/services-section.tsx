"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  ChevronDown,
  Code,
  Gamepad2,
  Globe,
  Server,
  Smartphone,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"

type Service = {
  icon: typeof Globe
  title: string
  description: string
  color: string
  details: string[]
}

const services: Service[] = [
  {
    icon: Globe,
    title: "Web開発",
    description: "モダンで高性能なWebアプリケーションの設計・開発",
    color: "cyan",
    details: [
      "レスポンシブWebデザイン",
      "SPAアプリケーション開発",
      "ECサイト構築",
      "CMS実装",
      "Webパフォーマンス最適化",
    ],
  },
  {
    icon: Code,
    title: "システム開発",
    description: "ビジネスニーズに合わせたカスタムシステムの構築",
    color: "blue",
    details: [
      "業務システム開発",
      "API設計・開発",
      "データベース設計",
      "既存システム連携",
      "保守・運用サポート",
    ],
  },
  {
    icon: Server,
    title: "クラウド構築",
    description: "スケーラブルで安全なクラウドインフラの設計と実装",
    color: "purple",
    details: [
      "AWS / GCP / Azure構築",
      "インフラ設計・運用",
      "CI/CDパイプライン構築",
      "コンテナオーケストレーション",
      "セキュリティ強化",
    ],
  },
  {
    icon: Sparkles,
    title: "AI・機械学習",
    description: "データを活用したインテリジェントなソリューション開発",
    color: "amber",
    details: [
      "機械学習モデル開発",
      "自然言語処理",
      "画像認識・解析",
      "レコメンデーションエンジン",
      "データ分析・可視化",
    ],
  },
  {
    icon: Smartphone,
    title: "モバイルアプリ開発",
    description: "iOS/Android向けの高品質なモバイルアプリケーション開発",
    color: "green",
    details: [
      "iOSネイティブアプリ開発",
      "Androidネイティブアプリ開発",
      "クロスプラットフォーム開発",
      "アプリストアリリース対応",
      "プッシュ通知・分析の実装",
    ],
  },
  {
    icon: Gamepad2,
    title: "ゲーム開発",
    description: "エンゲージメントの高いゲームアプリケーションの開発",
    color: "red",
    details: [
      "Unity / Unreal Engine開発",
      "2D / 3Dゲーム開発",
      "マルチプレイヤー機能",
      "ゲームAI実装",
      "ゲーム内課金・収益化",
    ],
  },
]

const colorMap: Record<
  string,
  { border: string; bg: string; text: string; textHover: string; dot: string }
> = {
  cyan: {
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/20",
    text: "text-cyan-400",
    textHover: "hover:text-cyan-300",
    dot: "bg-cyan-400",
  },
  blue: {
    border: "border-blue-500/30",
    bg: "bg-blue-500/20",
    text: "text-blue-400",
    textHover: "hover:text-blue-300",
    dot: "bg-blue-400",
  },
  purple: {
    border: "border-purple-500/30",
    bg: "bg-purple-500/20",
    text: "text-purple-400",
    textHover: "hover:text-purple-300",
    dot: "bg-purple-400",
  },
  amber: {
    border: "border-amber-500/30",
    bg: "bg-amber-500/20",
    text: "text-amber-400",
    textHover: "hover:text-amber-300",
    dot: "bg-amber-400",
  },
  green: {
    border: "border-green-500/30",
    bg: "bg-green-500/20",
    text: "text-green-400",
    textHover: "hover:text-green-300",
    dot: "bg-green-400",
  },
  red: {
    border: "border-red-500/30",
    bg: "bg-red-500/20",
    text: "text-red-400",
    textHover: "hover:text-red-300",
    dot: "bg-red-400",
  },
}

export function ServicesSection() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set())

  const toggle = (index: number) => {
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  return (
    <section id="services" className="relative py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="提供サービス"
          description="ビジネス課題を解決するための包括的なITサービスを提供しています。 最新技術と豊富な経験を活かし、クライアント様のニーズに最適なソリューションを実現します。"
        />

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const c = colorMap[service.color]
            const Icon = service.icon
            const isOpen = expanded.has(i)
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card
                  className={`overflow-hidden border ${c.border} bg-slate-900/50 backdrop-blur-sm transition-all duration-300`}
                >
                  <CardHeader className="pb-2">
                    <div
                      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${c.bg}`}
                    >
                      <Icon className={`h-6 w-6 ${c.text}`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-100">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-slate-400">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="details"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <CardContent className="pb-0 pt-2">
                          <ul className="space-y-2">
                            {service.details.map((detail, di) => (
                              <motion.li
                                key={detail}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.25,
                                  delay: 0.1 + di * 0.05,
                                }}
                                className="flex items-center text-sm font-medium text-slate-200"
                              >
                                <span
                                  className={`mr-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full ${c.dot}`}
                                />
                                {detail}
                              </motion.li>
                            ))}
                          </ul>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <CardFooter className="pt-4">
                    <Button
                      variant="ghost"
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      className={`group p-0 ${c.text} ${c.textHover} hover:bg-transparent`}
                    >
                      {isOpen ? "詳細を閉じる" : "詳細を見る"}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
    </section>
  )
}
