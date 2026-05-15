"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"

const testimonials = [
  {
    name: "杉山 拓弘",
    role: "COO",
    company: "Tres Innovation株式会社",
    initial: "杉",
    rating: 5,
    text: "山本さんには当社のECサイトのフルリニューアルを担当していただきました。技術力はもちろん、ビジネス視点からの提案力も高く、結果として売上が40%向上しました。また機会があればぜひお願いしたいと思います。",
  },
  {
    name: "田中 美咲",
    role: "代表取締役",
    company: "株式会社ミライテック",
    initial: "田",
    rating: 5,
    text: "業務システムの開発をお願いしました。要件のヒアリングが丁寧で、こちらの曖昧な要望も的確に汲み取っていただきました。納期も品質も期待以上で、社内の業務効率が大幅に改善しました。",
  },
  {
    name: "佐藤 健一",
    role: "事業部長",
    company: "グローバルソリューションズ株式会社",
    initial: "佐",
    rating: 5,
    text: "AIを活用した分析ツールの開発を依頼しました。最新技術への深い理解と、それをビジネスに落とし込む力に感銘を受けました。プロジェクト全体を通してコミュニケーションも円滑でした。",
  },
  {
    name: "鈴木 由香",
    role: "マーケティング責任者",
    company: "株式会社クリエイトワークス",
    initial: "鈴",
    rating: 5,
    text: "モバイルアプリの開発でお世話になりました。UI/UXへのこだわりが素晴らしく、ユーザーからの評価も非常に高いです。リリース後のサポートも手厚く、安心してお任せできました。",
  },
]

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [])

  const t = testimonials[index]

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="クライアントの声"
          description="これまでにご依頼いただいたクライアント様からのフィードバックをご紹介します。 お客様の成功が私の成功です。"
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute -left-10 -top-10 h-20 w-20 text-cyan-500/20">
            <Quote className="h-full w-full" />
          </div>

          <div className="relative h-[300px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="absolute w-full"
              >
                <Card className="border-cyan-500/30 bg-slate-900/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="mb-6 flex flex-col items-start gap-4 md:flex-row md:items-center">
                      <Avatar className="h-16 w-16 border-2 border-cyan-500/30">
                        <AvatarFallback className="bg-cyan-900/50 text-cyan-400">
                          {t.initial}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-bold text-slate-100">
                          {t.name}
                        </h3>
                        <p className="text-slate-400">
                          {t.role}, {t.company}
                        </p>
                        <div className="mt-1 flex">
                          {Array.from({ length: t.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-lg italic text-slate-300">{t.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="h-10 w-10 rounded-full border-cyan-500/50 text-cyan-400 hover:bg-cyan-950/30"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    i === index ? "bg-cyan-500" : "bg-slate-600"
                  }`}
                  aria-label={`testimonial ${i + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="h-10 w-10 rounded-full border-cyan-500/50 text-cyan-400 hover:bg-cyan-950/30"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-600/10 blur-3xl" />
    </section>
  )
}
