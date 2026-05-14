import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "中村邦彦 - フリーランスITエンジニア",
  description:
    "システム開発・AI・アプリケーション開発のスペシャリスト。Web開発からAI、モバイルアプリまで幅広い分野で高品質なソリューションを提供しています。",
  keywords:
    "フリーランス, エンジニア, システム開発, Web開発, AI開発, アプリ開発, クラウド構築, 中村邦彦",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
