"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import {
  ArrowRight,
  Code,
  ExternalLink,
  Globe,
  Layers,
  Smartphone,
  Sparkles,
  X,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SectionHeading } from "@/components/section-heading"

type Project = {
  title: string
  description: string
  image: string
  category: string
  tags: string[]
  client: string
  duration: string
  role: string
  overview: string
  tech: string[]
  challenges: string[]
  solutions: string[]
  results: string[]
  liveUrl?: string
}

const projects: Project[] = [
  {
    title: "AI搭載顧客管理システム",
    description:
      "AIを活用した顧客分析と予測機能を備えた次世代CRMシステム。顧客行動パターンを分析し、最適なアプローチを提案します。",
    image: "/1.png",
    category: "system",
    tags: ["React", "Node.js", "TensorFlow", "PostgreSQL"],
    client: "大手商社",
    duration: "8ヶ月",
    role: "テックリード / フルスタックエンジニア",
    overview:
      "AIを活用した顧客行動分析と離脱予測機能を備えた次世代CRMシステム。営業担当者がより効果的にアプローチできるよう、機械学習モデルが顧客ごとに最適な提案を提示します。営業活動の可視化と自動化により、属人化していた業務を標準化しました。",
    tech: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "TensorFlow",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
    ],
    challenges: [
      "大量データのリアルタイム分析",
      "既存基幹システムとの連携",
      "機械学習モデルの精度向上",
      "セキュリティとプライバシー対応",
    ],
    solutions: [
      "ストリーム処理基盤による低レイテンシ集計",
      "GraphQL Gatewayによる統合インターフェース",
      "継続学習パイプラインによるモデル精度の継続改善",
      "暗号化と監査ログによる強固なアクセス制御",
    ],
    results: [
      "営業生産性が45%向上",
      "顧客離脱率が28%減少",
      "提案成約率が3倍に向上",
      "導入企業数12社を達成",
    ],
    liveUrl: "#",
  },
  {
    title: "クラウドベース予約システム",
    description:
      "多業種に対応可能なスケーリング可能な予約システム。リアルタイム通知と自動リマインダー機能を実装しています。",
    image: "/2.png",
    category: "web",
    tags: ["Vue.js", "Firebase", "Cloud Functions", "Stripe"],
    client: "テックスタートアップ",
    duration: "4ヶ月",
    role: "フルスタックエンジニア",
    overview:
      "美容院、レストラン、医療機関など様々な業種で利用できるクラウドベースの予約管理システムを開発しました。ユーザーはモバイルアプリやWebから簡単に予約を行え、事業者は直感的な管理画面から予約状況を一元管理できます。リアルタイム通知、自動リマインダー、キャンセル管理、スタッフスケジューリングなどの機能を実装し、業務効率化を実現しています。",
    tech: [
      "Vue.js",
      "Vuetify",
      "Firebase (Firestore, Auth, Functions)",
      "PWA",
      "Node.js",
      "Twilio API",
    ],
    challenges: [
      "複数業種に対応する柔軟なシステム設計",
      "リアルタイムデータ同期と競合解決",
      "オフライン対応とデータ同期",
      "複雑な予約ルールと制約の実装",
    ],
    solutions: [
      "カスタマイズ可能なテンプレートベースのアーキテクチャ",
      "Firestoreのリアルタイムリスナーとトランザクション処理",
      "Service Workerを活用したオフラインファーストアプローチ",
      "ルールエンジンによる柔軟な予約制約の実装",
    ],
    results: [
      "導入企業の予約管理時間が70%削減",
      "予約のノーショー率が35%減少",
      "顧客満足度が30%向上",
      "6ヶ月で100社以上の導入実績",
    ],
    liveUrl: "#",
  },
  {
    title: "フィンテック分析ツール",
    description:
      "株式・FX・仮想通貨のリアルタイムデータ分析と自動取引機能を備えたツール。高度なアルゴリズムで市場予測を行います。",
    image: "/3.png",
    category: "ai",
    tags: ["Python", "Django", "TensorFlow", "PostgreSQL"],
    client: "投資ファンド",
    duration: "10ヶ月",
    role: "AIエンジニア / バックエンドエンジニア",
    overview:
      "株式・FX・暗号資産のリアルタイムマーケットデータを取り込み、機械学習による予測とアラート、戦略バックテスト機能を備えた分析プラットフォームを開発しました。トレーダーが直感的に戦略を組み立て、過去データで検証できるダッシュボードを提供します。",
    tech: [
      "Python",
      "Django",
      "FastAPI",
      "TensorFlow",
      "PostgreSQL",
      "ClickHouse",
      "Kafka",
      "AWS",
    ],
    challenges: [
      "低レイテンシでの大量データ処理",
      "予測モデルの精度確保",
      "複数取引所APIとの連携",
      "バックテストの再現性",
    ],
    solutions: [
      "Kafkaによるストリーミング基盤の構築",
      "複数モデルのアンサンブルによる安定した予測",
      "抽象化されたコネクタ層による多取引所対応",
      "履歴データのスナップショット管理と決定論的シミュレーション",
    ],
    results: [
      "注文判断時間を80%短縮",
      "バックテスト処理速度が5倍",
      "月次運用利回りが+12%",
      "ファンド3社で本番運用中",
    ],
    liveUrl: "#",
  },
  {
    title: "スマートホーム管理アプリ",
    description:
      "IoTデバイスと連携し、家庭内のあらゆる機器をスマートフォンから一元管理できるアプリケーション。",
    image: "/4.png",
    category: "mobile",
    tags: ["React Native", "Node.js", "MQTT", "AWS IoT"],
    client: "IoTスタートアップ",
    duration: "6ヶ月",
    role: "モバイルアプリエンジニア",
    overview:
      "スマート照明、エアコン、セキュリティカメラなどIoT機器を一元管理できるモバイルアプリ。音声制御、ジオフェンシングによる自動化、家族間の権限共有機能などを実装し、スマートホーム体験を直感的に提供します。",
    tech: [
      "React Native",
      "TypeScript",
      "Node.js",
      "MQTT",
      "AWS IoT Core",
      "DynamoDB",
      "Firebase Cloud Messaging",
    ],
    challenges: [
      "多様なIoTプロトコルへの対応",
      "低遅延の双方向通信",
      "バックグラウンド処理の安定性",
      "セキュアな機器ペアリング",
    ],
    solutions: [
      "プロトコルアダプタ層による抽象化",
      "MQTT over WebSocketによるリアルタイム通信",
      "OSごとに最適化したバックグラウンドタスク",
      "公開鍵暗号によるゼロタッチペアリング",
    ],
    results: [
      "アプリ評価4.7（App Store / Google Play）",
      "アクティブユーザー2万人を突破",
      "登録IoT機器数10万台超",
      "セキュリティインシデント0件",
    ],
    liveUrl: "#",
  },
  {
    title: "メタバース展示会プラットフォーム",
    description:
      "バーチャル空間で展示会やイベントを開催できるプラットフォーム。リアルタイムコミュニケーション機能を実装。",
    image: "/5.png",
    category: "web",
    tags: ["Three.js", "WebGL", "WebRTC", "Node.js"],
    client: "大手展示会主催企業",
    duration: "9ヶ月",
    role: "フロントエンドリード / 3Dエンジニア",
    overview:
      "3D空間に展示ブースを配置し、複数の参加者がアバターで自由に移動・交流できるオンライン展示会プラットフォーム。リアルタイム音声、テキストチャット、動画ストリーミングを統合し、対面イベントに近い体験を提供します。",
    tech: [
      "Three.js",
      "React",
      "WebGL",
      "WebRTC",
      "Node.js",
      "Socket.IO",
      "Redis",
      "AWS",
    ],
    challenges: [
      "大規模同時接続時のパフォーマンス",
      "3D空間でのスムーズな移動体験",
      "帯域の最適化",
      "コンテンツ管理の容易さ",
    ],
    solutions: [
      "空間分割（Spatial Partitioning）による描画最適化",
      "WebRTC SFUを用いたスケーラブルなメディア配信",
      "アダプティブビットレートストリーミング",
      "ノーコードCMSによるブース更新基盤",
    ],
    results: [
      "同時接続5,000人を達成",
      "来場者数が前年比3倍",
      "平均滞在時間28分",
      "主催企業の運営コスト40%削減",
    ],
    liveUrl: "#",
  },
  {
    title: "AI搭載チャットボット",
    description:
      "自然言語処理を活用した多言語対応チャットボット。顧客サポートの自動化と効率化を実現しました。",
    image: "/6.png",
    category: "ai",
    tags: ["Python", "NLP", "FastAPI", "Docker"],
    client: "ECサイト運営企業",
    duration: "5ヶ月",
    role: "AIエンジニア / バックエンドエンジニア",
    overview:
      "自然言語処理と大規模言語モデルを活用した多言語対応チャットボット。商品案内、注文確認、返品対応など顧客サポート業務を自動化し、24時間体制の応対を実現します。社内ナレッジを学習させ、コンテキストに応じた回答を提供します。",
    tech: [
      "Python",
      "FastAPI",
      "LangChain",
      "OpenAI API",
      "Pinecone",
      "PostgreSQL",
      "Docker",
      "AWS",
    ],
    challenges: [
      "多言語での自然な会話品質",
      "商品情報を正確に参照する仕組み",
      "既存システムとのシームレスな統合",
      "不適切な回答の防止",
    ],
    solutions: [
      "多言語LLMとローカライズされたプロンプト",
      "RAG（検索拡張生成）による正確な参照",
      "Webhook連携による既存システム統合",
      "出力フィルタとガードレールの設計",
    ],
    results: [
      "問い合わせ対応時間を60%短縮",
      "顧客満足度が25%向上",
      "24時間対応で機会損失を防止",
      "カスタマーサポートコスト45%削減",
    ],
    liveUrl: "#",
  },
]

const filters = [
  { id: "all", label: "すべて", icon: Layers },
  { id: "web", label: "Web開発", icon: Globe },
  { id: "system", label: "システム開発", icon: Code },
  { id: "mobile", label: "モバイル", icon: Smartphone },
  { id: "ai", label: "AI・機械学習", icon: Sparkles },
]

function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onEsc)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onEsc)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm md:p-8"
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="my-4 w-full max-w-4xl overflow-hidden rounded-lg border border-slate-700/50 bg-slate-900 shadow-2xl"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-700/50 bg-slate-900/95 px-6 py-4 backdrop-blur-md">
          <h3 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-xl font-bold text-transparent md:text-2xl">
            {project.title}
          </h3>
          <button
            onClick={onClose}
            aria-label="閉じる"
            className="rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-6 p-6">
          <div className="relative aspect-video overflow-hidden rounded-lg border border-slate-700/50">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 border-b border-slate-700/50 pb-6 md:grid-cols-3">
            <div>
              <div className="text-sm text-slate-500">クライアント</div>
              <div className="mt-1 text-slate-100">{project.client}</div>
            </div>
            <div>
              <div className="text-sm text-slate-500">期間</div>
              <div className="mt-1 text-slate-100">{project.duration}</div>
            </div>
            <div>
              <div className="text-sm text-slate-500">役割</div>
              <div className="mt-1 text-slate-100">{project.role}</div>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-lg font-bold text-slate-100">
              プロジェクト概要
            </h4>
            <p className="leading-relaxed text-slate-300">{project.overview}</p>
          </div>

          <div>
            <h4 className="mb-3 text-lg font-bold text-slate-100">使用技術</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Badge
                  key={t}
                  className="border-cyan-500/50 bg-slate-800/50 text-cyan-400 hover:bg-slate-800/50"
                >
                  {t}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-3 text-lg font-bold text-slate-100">課題</h4>
              <ul className="space-y-2">
                {project.challenges.map((c, i) => (
                  <li key={i} className="flex text-slate-300">
                    <span className="mr-2 mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-lg font-bold text-slate-100">解決策</h4>
              <ul className="space-y-2">
                {project.solutions.map((s, i) => (
                  <li key={i} className="flex text-slate-300">
                    <span className="mr-2 mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-lg font-bold text-slate-100">成果</h4>
            <ul className="space-y-2">
              {project.results.map((r, i) => (
                <li key={i} className="flex text-slate-300">
                  <span className="mr-2 mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-green-400" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.liveUrl && (
            <div className="pt-2 text-center">
              <Button
                asChild
                className="bg-gradient-to-r from-cyan-600 to-blue-600 transition-all duration-300 hover:from-cyan-500 hover:to-blue-500"
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  プロジェクトを見る
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>,
    document.body
  )
}

function ProjectGrid({
  items,
  onSelect,
}: {
  items: Project[]
  onSelect: (p: Project) => void
}) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((project, i) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <Card
            onClick={() => onSelect(project)}
            className="group flex h-full cursor-pointer flex-col overflow-hidden border-slate-700/50 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
            </div>
            <CardContent className="flex-grow p-6">
              <h3 className="mb-2 text-xl font-bold text-slate-100">
                {project.title}
              </h3>
              <p className="mb-4 text-sm text-slate-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <Badge
                    key={tag}
                    className="border-cyan-500/50 bg-slate-800/50 text-cyan-400 hover:bg-slate-800/50"
                  >
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 3 && (
                  <Badge className="border-slate-700/50 bg-slate-800/50 text-slate-400 hover:bg-slate-800/50">
                    +{project.tags.length - 3}
                  </Badge>
                )}
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button
                variant="ghost"
                className="p-0 text-cyan-400 hover:bg-transparent hover:text-cyan-300"
                onClick={(e) => {
                  e.stopPropagation()
                  onSelect(project)
                }}
              >
                詳細を見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="relative py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="プロジェクト実績"
          description="これまでに手がけた代表的なプロジェクトをご紹介します。 多様な業界と技術スタックでの開発経験があります。 各プロジェクトをクリックすると詳細をご覧いただけます。"
        />

        <Tabs defaultValue="all" className="w-full">
          <div className="mb-8 flex justify-center overflow-x-auto pb-2 scrollbar-hide">
            <TabsList className="inline-flex h-10 items-center justify-center rounded-full border border-slate-700/50 bg-slate-800/50 p-1">
              {filters.map((filter) => {
                const Icon = filter.icon
                return (
                  <TabsTrigger
                    key={filter.id}
                    value={filter.id}
                    className="rounded-full px-4 py-2 data-[state=active]:bg-cyan-900/50 data-[state=active]:text-cyan-400"
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {filter.label}
                  </TabsTrigger>
                )
              })}
            </TabsList>
          </div>

          {filters.map((filter) => (
            <TabsContent key={filter.id} value={filter.id} className="mt-0">
              <ProjectGrid
                items={
                  filter.id === "all"
                    ? projects
                    : projects.filter((p) => p.category === filter.id)
                }
                onSelect={setSelected}
              />
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <Button className="transform bg-gradient-to-r from-cyan-600 to-blue-600 transition-all duration-300 hover:scale-105 hover:from-cyan-500 hover:to-blue-500">
            すべてのプロジェクトを見る
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

      <AnimatePresence>
        {selected && (
          <ProjectModal
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
