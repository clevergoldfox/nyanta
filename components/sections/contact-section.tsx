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
import { useT } from "@/components/locale-provider"

export function ContactSection() {
  const t = useT()
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
      toast.success(t.contact.form.success)
      setForm({ name: "", email: "", subject: "", message: "" })
      setSubmitting(false)
    }, 1000)
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title={t.contact.title}
          description={t.contact.description}
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
                  {t.contact.info.heading}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-cyan-500/20 p-3">
                      <Mail className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-medium text-slate-300">
                        {t.contact.info.emailLabel}
                      </h4>
                      <a
                        href="mailto:clever.goldfox@gmail.com"
                        className="text-slate-400 transition-colors hover:text-cyan-400"
                      >
                        clever.goldfox@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-cyan-500/20 p-3">
                      <MapPin className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-medium text-slate-300">
                        {t.contact.info.locationLabel}
                      </h4>
                      <p className="text-slate-400">{t.contact.info.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-cyan-500/20 p-3">
                      <Github className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-medium text-slate-300">
                        {t.contact.info.githubLabel}
                      </h4>
                      <a
                        href="https://github.com/bct-crypto"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 transition-colors hover:text-cyan-300"
                      >
                        github.com/bct-crypto
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-slate-700/50 pt-6">
                  <h4 className="mb-4 font-medium text-slate-300">
                    {t.contact.info.hoursHeading}
                  </h4>
                  <p className="mb-2 text-slate-400">{t.contact.info.weekday}</p>
                  <p className="text-slate-400">{t.contact.info.weekend}</p>
                </div>
                <div className="mt-8 border-t border-slate-700/50 pt-6">
                  <h4 className="mb-4 font-medium text-slate-300">
                    {t.contact.info.areaHeading}
                  </h4>
                  <p className="mb-2 text-slate-400">{t.contact.info.remote}</p>
                  <p className="text-slate-400">{t.contact.info.onsite}</p>
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
                  {t.contact.form.heading}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t.contact.form.name}</Label>
                      <Input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder={t.contact.form.namePlaceholder}
                        className="border-slate-700 bg-slate-800/50 focus:border-cyan-500 focus-visible:ring-cyan-500/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t.contact.form.email}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder={t.contact.form.emailPlaceholder}
                        className="border-slate-700 bg-slate-800/50 focus:border-cyan-500 focus-visible:ring-cyan-500/20"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">{t.contact.form.subject}</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder={t.contact.form.subjectPlaceholder}
                      className="border-slate-700 bg-slate-800/50 focus:border-cyan-500 focus-visible:ring-cyan-500/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t.contact.form.message}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      placeholder={t.contact.form.messagePlaceholder}
                      className="min-h-[150px] border-slate-700 bg-slate-800/50 focus:border-cyan-500 focus-visible:ring-cyan-500/20"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 transition-all duration-300 hover:from-cyan-500 hover:to-blue-500"
                  >
                    {submitting ? t.contact.form.submitting : t.contact.form.submit}
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
