"use client"

import { Github, Heart, Hexagon, Linkedin, Mail, Twitter } from "lucide-react"

const quickLinks = [
  { label: "ホーム", href: "#home" },
  { label: "スキル", href: "#skills" },
  { label: "サービス", href: "#services" },
  { label: "プロジェクト", href: "#projects" },
  { label: "ブログ", href: "#blog" },
  { label: "お問い合わせ", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-800 bg-slate-900/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Hexagon className="h-6 w-6 text-cyan-500" />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-lg font-bold text-transparent">
                  山本 裕
                </span>
              </div>
              <p className="text-sm text-slate-400">
                フリーランスITエンジニアとして、最先端の技術を駆使してクライアントのビジネス課題を解決します。
                Web開発からAI、モバイルアプリまで幅広い分野で高品質なソリューションを提供しています。
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/bct-crypto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition-colors hover:text-cyan-400"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="mailto:clever.goldfox@gmail.com"
                  className="text-slate-400 transition-colors hover:text-cyan-400"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-slate-400 transition-colors hover:text-cyan-400"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-slate-400 transition-colors hover:text-cyan-400"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-slate-200">
                クイックリンク
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="flex items-center text-sm text-slate-400 transition-colors hover:text-cyan-400"
                    >
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-cyan-500" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-slate-200">
                ニュースレター
              </h3>
              <p className="text-sm text-slate-400">
                最新の技術情報やプロジェクト事例をお届けします。メールアドレスをご登録ください。
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="メールアドレス"
                  className="flex-1 rounded-l-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
                <button className="rounded-r-md bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:from-cyan-500 hover:to-blue-500">
                  登録
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between border-t border-slate-800 py-6 md:flex-row">
            <div className="mb-4 flex items-center text-center text-sm text-slate-500 md:mb-0 md:text-left">
              © 2025 山本 裕. All rights reserved. Made with
              <Heart className="mx-1 inline-block h-3 w-3 text-red-500" /> in
              Japan
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
