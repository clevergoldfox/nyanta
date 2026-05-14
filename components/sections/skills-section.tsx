"use client"

import { motion } from "framer-motion"
import {
  Braces,
  Code,
  Cpu,
  Database,
  Gamepad2,
  Globe,
  Layers,
  Server,
  Smartphone,
  Sparkles,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SectionHeading } from "@/components/section-heading"

type Skill = { name: string; level: number; description: string }

const skillCategories: {
  id: string
  label: string
  icon: typeof Globe
  skills: Skill[]
}[] = [
  {
    id: "web",
    label: "Web開発",
    icon: Globe,
    skills: [
      {
        name: "フロントエンド開発",
        level: 95,
        description:
          "React、Next.js、Vue.jsなどを使用したモダンなフロントエンド開発。SPAやSSRアプリケーションの構築経験が豊富。",
      },
      {
        name: "バックエンド開発",
        level: 90,
        description:
          "Node.js、Express、NestJS、Django、Laravelなどを使用したバックエンド開発。RESTful APIやGraphQLの設計と実装。",
      },
      {
        name: "レスポンシブデザイン",
        level: 95,
        description:
          "あらゆるデバイスで最適に表示されるレスポンシブWebデザインの実装。モバイルファーストアプローチの採用。",
      },
      {
        name: "UI/UXデザイン",
        level: 85,
        description:
          "ユーザー中心設計に基づいたインターフェース設計。Figmaを使用したプロトタイピングとデザインシステムの構築。",
      },
      {
        name: "Webパフォーマンス最適化",
        level: 80,
        description:
          "ページ読み込み速度の最適化、コード分割、画像最適化、キャッシュ戦略の実装によるパフォーマンス向上。",
      },
    ],
  },
  {
    id: "system",
    label: "システム開発",
    icon: Code,
    skills: [
      {
        name: "アーキテクチャ設計",
        level: 90,
        description:
          "拡張性と保守性を重視したシステムアーキテクチャの設計。マイクロサービスやモノリスの最適な選択。",
      },
      {
        name: "API設計・開発",
        level: 92,
        description:
          "RESTful APIやGraphQLを用いた堅牢なAPIの設計と実装。OpenAPI仕様によるドキュメント化。",
      },
      {
        name: "データベース設計",
        level: 88,
        description:
          "正規化とパフォーマンスを両立したデータベース設計。RDBMSとNoSQLの適切な使い分け。",
      },
      {
        name: "テスト自動化",
        level: 85,
        description:
          "ユニットテスト、統合テスト、E2Eテストの導入による品質保証とリグレッション防止。",
      },
    ],
  },
  {
    id: "cloud",
    label: "クラウド",
    icon: Server,
    skills: [
      {
        name: "AWS構築・運用",
        level: 90,
        description:
          "EC2、S3、Lambda、RDS、ECSなどを活用したスケーラブルなインフラ構築と運用。",
      },
      {
        name: "IaC（Infrastructure as Code）",
        level: 85,
        description:
          "TerraformやCloudFormationを用いたインフラのコード化と再現性の高い環境構築。",
      },
      {
        name: "CI/CDパイプライン",
        level: 88,
        description:
          "GitHub ActionsやGitLab CIを活用した自動ビルド・テスト・デプロイの構築。",
      },
      {
        name: "コンテナオーケストレーション",
        level: 82,
        description:
          "DockerとKubernetesを用いたコンテナ化とオーケストレーションによる運用効率化。",
      },
    ],
  },
  {
    id: "ai",
    label: "AI・機械学習",
    icon: Sparkles,
    skills: [
      {
        name: "機械学習モデル開発",
        level: 85,
        description:
          "TensorFlowやPyTorchを用いた分類・回帰・予測モデルの設計と学習。",
      },
      {
        name: "自然言語処理",
        level: 83,
        description:
          "テキスト分類、感情分析、チャットボット開発などのNLPソリューションの実装。",
      },
      {
        name: "LLM活用・統合",
        level: 88,
        description:
          "大規模言語モデルを活用したアプリケーション開発とRAGシステムの構築。",
      },
      {
        name: "データ分析・可視化",
        level: 80,
        description:
          "Pandas、NumPyを用いたデータ前処理と分析、ダッシュボードによる可視化。",
      },
    ],
  },
  {
    id: "mobile",
    label: "モバイル開発",
    icon: Smartphone,
    skills: [
      {
        name: "クロスプラットフォーム開発",
        level: 88,
        description:
          "React NativeやFlutterを用いたiOS/Android両対応のアプリ開発。",
      },
      {
        name: "ネイティブアプリ開発",
        level: 80,
        description:
          "SwiftやKotlinを用いたパフォーマンス重視のネイティブアプリ開発。",
      },
      {
        name: "モバイルUI/UX",
        level: 85,
        description:
          "各プラットフォームのガイドラインに沿った直感的なモバイルインターフェース設計。",
      },
      {
        name: "アプリストア公開・運用",
        level: 82,
        description:
          "App Store / Google Playへのリリース対応とアプリの継続的な改善。",
      },
    ],
  },
  {
    id: "game",
    label: "ゲーム開発",
    icon: Gamepad2,
    skills: [
      {
        name: "ゲームエンジン開発",
        level: 78,
        description:
          "UnityやUnreal Engineを用いた2D/3Dゲームの開発経験。",
      },
      {
        name: "WebGL / Three.js",
        level: 82,
        description:
          "ブラウザ上で動作する3Dグラフィックスとインタラクティブ体験の実装。",
      },
      {
        name: "ゲームロジック設計",
        level: 80,
        description:
          "ゲームメカニクスやステート管理など、ゲームロジックの設計と実装。",
      },
      {
        name: "マルチプレイヤー実装",
        level: 75,
        description:
          "WebSocketやWebRTCを活用したリアルタイムマルチプレイヤー機能の実装。",
      },
    ],
  },
]

const techCategories = [
  {
    icon: Braces,
    title: "プログラミング言語",
    items:
      "JavaScript, TypeScript, Python, Java, Swift, Kotlin, C#, PHP, Go, Rust",
    color: "cyan",
  },
  {
    icon: Layers,
    title: "フレームワーク",
    items:
      "React, Next.js, Vue, Angular, Express, Django, Laravel, Spring Boot, Flutter, Svelte",
    color: "blue",
  },
  {
    icon: Database,
    title: "データベース",
    items:
      "MySQL, PostgreSQL, MongoDB, Redis, Firebase, DynamoDB, Supabase, Cassandra",
    color: "purple",
  },
  {
    icon: Cpu,
    title: "開発ツール",
    items: "Git, Docker, Kubernetes, CI/CD, AWS, Azure, GCP, Jira, Figma, Terraform",
    color: "green",
  },
]

const techColorMap: Record<string, { bg: string; text: string; hover: string }> =
  {
    cyan: {
      bg: "bg-cyan-500/20",
      text: "text-cyan-400",
      hover: "hover:border-cyan-500/30",
    },
    blue: {
      bg: "bg-blue-500/20",
      text: "text-blue-400",
      hover: "hover:border-blue-500/30",
    },
    purple: {
      bg: "bg-purple-500/20",
      text: "text-purple-400",
      hover: "hover:border-purple-500/30",
    },
    green: {
      bg: "bg-green-500/20",
      text: "text-green-400",
      hover: "hover:border-green-500/30",
    },
  }

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="専門スキル"
          description="幅広い技術スタックと豊富な経験を活かして、あらゆる開発ニーズに対応します。 最新技術のトレンドを常に追求し、最適なソリューションを提供します。"
        />

        <Tabs defaultValue="web" className="w-full">
          <div className="mb-8 flex justify-center overflow-x-auto pb-2 scrollbar-hide">
            <TabsList className="inline-flex h-10 items-center justify-center rounded-full border border-slate-700/50 bg-slate-800/50 p-1">
              {skillCategories.map((cat) => {
                const Icon = cat.icon
                return (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="rounded-full px-4 py-2 data-[state=active]:bg-cyan-900/50 data-[state=active]:text-cyan-400"
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {cat.label}
                  </TabsTrigger>
                )
              })}
            </TabsList>
          </div>

          {skillCategories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id} className="mt-0">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card className="overflow-hidden border border-cyan-500/30 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                      <CardContent className="p-6">
                        <div className="mb-4 flex items-center justify-between">
                          <h3 className="text-lg font-medium text-slate-200">
                            {skill.name}
                          </h3>
                          <Badge className="border-cyan-500/50 bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20">
                            {skill.level}%
                          </Badge>
                        </div>
                        <Progress
                          value={skill.level}
                          className="mb-4 h-2 bg-slate-700"
                        />
                        <p className="text-sm text-slate-400">
                          {skill.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {techCategories.map((tech) => {
            const c = techColorMap[tech.color]
            const Icon = tech.icon
            return (
              <Card
                key={tech.title}
                className={`border-slate-700/50 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 ${c.hover}`}
              >
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div
                    className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${c.bg}`}
                  >
                    <Icon className={`h-8 w-8 ${c.text}`} />
                  </div>
                  <h3 className="mb-2 text-lg font-medium text-slate-200">
                    {tech.title}
                  </h3>
                  <p className="text-sm text-slate-400">{tech.items}</p>
                </CardContent>
              </Card>
            )
          })}
        </motion.div>
      </div>
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-600/10 blur-3xl" />
    </section>
  )
}
