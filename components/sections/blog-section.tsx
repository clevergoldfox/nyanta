"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"

const posts = [
  {
    title: "【2024年最新】Web開発トレンド2025年予測",
    image: "/blog1.png",
    category: "Web開発",
    date: "2024年10月15日",
    readTime: "5分",
    excerpt:
      "フロントエンド開発の最新トレンドと、今後のWeb開発の方向性について解説します。ReactやNext.jsの最新機能も紹介。",
    tags: ["React", "Next.js", "フロントエンド"],
  },
  {
    title: "AIを活用したビジネス変革",
    image: "/blog2.jpg",
    category: "AI",
    date: "2024年9月22日",
    readTime: "7分",
    excerpt:
      "企業がAIを活用してビジネスプロセスを最適化する方法と、実際の導入事例について詳しく解説します。",
    tags: ["機械学習", "ビジネス活用", "自動化"],
  },
  {
    title: "クラウドネイティブアーキテクチャ入門",
    image: "/blog3.png",
    category: "クラウド",
    date: "2024年8月10日",
    readTime: "8分",
    excerpt:
      "マイクロサービスとコンテナ技術を活用した、スケーラブルなクラウドネイティブアプリケーションの設計方法。",
    tags: ["AWS", "Kubernetes", "マイクロサービス"],
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="relative py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="技術ブログ"
          description="最新の技術トレンドや開発のベストプラクティスについての記事をご紹介します。 定期的に更新していますので、ぜひチェックしてください。"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="group flex h-full flex-col overflow-hidden border-slate-700/50 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                  <Badge className="absolute right-4 top-4 border-none bg-cyan-500/80 text-white">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader className="pb-2">
                  <h3 className="text-xl font-bold text-slate-100 transition-colors duration-300 group-hover:text-cyan-400">
                    {post.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-xs text-slate-400">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow py-2">
                  <p className="text-sm text-slate-400">{post.excerpt}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="border-slate-700/50 bg-slate-800/50 text-slate-300 hover:bg-slate-800/50"
                      >
                        <Tag className="mr-1 h-3 w-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button
                    variant="ghost"
                    className="p-0 text-cyan-400 hover:bg-transparent hover:text-cyan-300"
                  >
                    続きを読む
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500">
            すべての記事を見る
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />
    </section>
  )
}
