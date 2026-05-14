"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Mail, MapPin, Send } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SectionHeading } from "@/components/section-heading"

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      toast.success("メッセージを送信しました。ありがとうございます！")
      setForm({ name: "", email: "", subject: "", message: "" })
      setSubmitting(false)
    }, 1000)
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="お問い合わせ"
          description="プロジェクトのご相談やお見積もりのご依頼など、お気軽にお問い合わせください。 迅速にご返信いたします。"
        />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border-slate-700/50 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30">
              <CardContent className="p-6">
                <h3 className="mb-6 text-xl font-bold text-slate-100">
                  連絡先情報
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-cyan-500/20 p-3">
                      <Mail className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-medium text-slate-300">
                        メールアドレス
                      </h4>
                      <a
                        href="mailto:kcraftcode0212@gmail.com"
                        className="text-slate-400 transition-colors hover:text-cyan-400"
                      >
                        kcraftcode0212@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-cyan-500/20 p-3">
                      <MapPin className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-medium text-slate-300">所在地</h4>
                      <p className="text-slate-400">
                        島根県浜田市治和町32-1 11棟402号
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-cyan-500/20 p-3">
                      <Github className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-medium text-slate-300">GitHub</h4>
                      <a
                        href="https://github.com/kcraftcode"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 transition-colors hover:text-cyan-300"
                      >
                        github.com/kcraftcode
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-slate-700/50 pt-6">
                  <h4 className="mb-4 font-medium text-slate-300">
                    対応可能時間
                  </h4>
                  <p className="mb-2 text-slate-400">平日: 9:00 - 18:00</p>
                  <p className="text-slate-400">土日祝: 要相談</p>
                </div>
                <div className="mt-8 border-t border-slate-700/50 pt-6">
                  <h4 className="mb-4 font-medium text-slate-300">対応エリア</h4>
                  <p className="mb-2 text-slate-400">
                    リモートワーク: 全国対応
                  </p>
                  <p className="text-slate-400">
                    オンサイト: 東京、大阪、福岡（出張可）
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-slate-700/50 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30">
              <CardContent className="p-6">
                <h3 className="mb-6 text-xl font-bold text-slate-100">
                  メッセージを送る
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">お名前</Label>
                      <Input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="お名前を入力してください"
                        className="border-slate-700 bg-slate-800/50 focus:border-cyan-500 focus-visible:ring-cyan-500/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">メールアドレス</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="メールアドレスを入力してください"
                        className="border-slate-700 bg-slate-800/50 focus:border-cyan-500 focus-visible:ring-cyan-500/20"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">件名</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="件名を入力してください"
                      className="border-slate-700 bg-slate-800/50 focus:border-cyan-500 focus-visible:ring-cyan-500/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">メッセージ</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      placeholder="メッセージを入力してください"
                      className="min-h-[150px] border-slate-700 bg-slate-800/50 focus:border-cyan-500 focus-visible:ring-cyan-500/20"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 transition-all duration-300 hover:from-cyan-500 hover:to-blue-500"
                  >
                    {submitting ? "送信中..." : "送信する"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-600/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
    </section>
  )
}
