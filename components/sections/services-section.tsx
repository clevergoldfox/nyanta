"use client"

import { motion } from "framer-motion"
import { Code, Gamepad2, Globe, Server, Smartphone, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"

const services = [
  {
    icon: Globe,
    title: "Web開発",
    description: "モダンで高性能なWebアプリケーションの設計・開発",
    color: "cyan",
  },
  {
    icon: Code,
    title: "システム開発",
    description: "ビジネスニーズに合わせたカスタムシステムの構築",
    color: "blue",
  },
  {
    icon: Server,
    title: "クラウド構築",
    description: "スケーラブルで安全なクラウドインフラの設計と実装",
    color: "purple",
  },
  {
    icon: Sparkles,
    title: "AI・機械学習",
    description: "データを活用したインテリジェントなソリューション開発",
    color: "amber",
  },
  {
    icon: Smartphone,
    title: "モバイルアプリ開発",
    description: "iOS/Android向けの高品質なモバイルアプリケーション開発",
    color: "green",
  },
  {
    icon: Gamepad2,
    title: "ゲーム開発",
    description: "エンゲージメントの高いゲームアプリケーションの開発",
    color: "red",
  },
]

const colorMap: Record<
  string,
  { border: string; bg: string; text: string; textHover: string }
> = {
  cyan: {
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/20",
    text: "text-cyan-400",
    textHover: "hover:text-cyan-300",
  },
  blue: {
    border: "border-blue-500/30",
    bg: "bg-blue-500/20",
    text: "text-blue-400",
    textHover: "hover:text-blue-300",
  },
  purple: {
    border: "border-purple-500/30",
    bg: "bg-purple-500/20",
    text: "text-purple-400",
    textHover: "hover:text-purple-300",
  },
  amber: {
    border: "border-amber-500/30",
    bg: "bg-amber-500/20",
    text: "text-amber-400",
    textHover: "hover:text-amber-300",
  },
  green: {
    border: "border-green-500/30",
    bg: "bg-green-500/20",
    text: "text-green-400",
    textHover: "hover:text-green-300",
  },
  red: {
    border: "border-red-500/30",
    bg: "bg-red-500/20",
    text: "text-red-400",
    textHover: "hover:text-red-300",
  },
}

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="提供サービス"
          description="ビジネス課題を解決するための包括的なITサービスを提供しています。 最新技術と豊富な経験を活かし、クライアント様のニーズに最適なソリューションを実現します。"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const c = colorMap[service.color]
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card
                  className={`h-full cursor-pointer overflow-hidden border ${c.border} bg-slate-900/50 backdrop-blur-sm transition-all duration-300`}
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
                  <CardFooter className="pt-4">
                    <Button
                      variant="ghost"
                      className={`p-0 ${c.text} ${c.textHover} hover:bg-transparent`}
                    >
                      詳細を見る
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
