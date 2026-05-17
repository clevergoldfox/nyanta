"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { useT } from "@/components/locale-provider"

const RATING = 5

export function TestimonialsSection() {
  const t = useT()
  const testimonials = t.testimonials.items
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [testimonials])

  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const current = testimonials[index]
  const initial = current.name.charAt(0)

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title={t.testimonials.title}
          description={t.testimonials.description}
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
                          {initial}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-bold text-slate-100">
                          {current.name}
                        </h3>
                        <p className="text-slate-400">
                          {current.role}, {current.company}
                        </p>
                        <div className="mt-1 flex">
                          {Array.from({ length: RATING }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-lg italic text-slate-300">
                      {current.text}
                    </p>
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
