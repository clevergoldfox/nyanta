"use client"

import { useEffect, useState } from "react"

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 300)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="flex flex-col items-center">
        <div className="relative h-24 w-24">
          <div className="absolute inset-0 animate-ping rounded-full border-4 border-cyan-500/30" />
          <div className="absolute inset-2 animate-spin rounded-full border-4 border-l-transparent border-r-transparent border-b-transparent border-t-cyan-500" />
          <div className="absolute inset-4 animate-spin-slow rounded-full border-4 border-l-transparent border-t-transparent border-b-transparent border-r-purple-500" />
          <div className="absolute inset-6 animate-spin-slower rounded-full border-4 border-l-transparent border-r-transparent border-t-transparent border-b-blue-500" />
          <div className="absolute inset-8 animate-spin rounded-full border-4 border-r-transparent border-t-transparent border-b-transparent border-l-green-500" />
        </div>
        <div className="mt-4 font-mono text-sm tracking-wider text-cyan-500">
          読み込み中...
        </div>
        <div className="mt-4 h-1 w-48 overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
