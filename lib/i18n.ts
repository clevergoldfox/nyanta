export type Locale = "ja" | "en" | "sp"

export const locales: Locale[] = ["ja", "en", "sp"]

const ja = {
  meta: {
    title: "山本 裕 - フリーランスITエンジニア",
    description:
      "システム開発・AI・アプリケーション開発のスペシャリスト。Web開発からAI、モバイルアプリまで幅広い分野で高品質なソリューションを提供しています。",
    keywords:
      "フリーランス, エンジニア, システム開発, Web開発, AI開発, アプリ開発, クラウド構築, 山本 裕",
  },
  loading: "読み込み中...",
  backToTop: "ページトップへ戻る",
  header: {
    name: "山本 裕",
    nav: {
      home: "ホーム",
      skills: "スキル",
      services: "サービス",
      projects: "プロジェクト",
      timeline: "経歴",
      blog: "ブログ",
    },
    contact: "お問い合わせ",
  },
  hero: {
    badge: "フリーランスITエンジニア",
    name: "山本 裕",
    roles: [
      "フルスタックエンジニア",
      "ウェブ開発エンジニア",
      "AIエンジニア",
      "IOSおよびモバイルアプリエンジニア",
      "インフラエンジニア",
    ],
    description:
      "フリーランスエンジニアとして、最先端の技術を駆使して クライアントのビジネス課題を解決します。 Web開発からAI、モバイルアプリまで幅広い分野で 高品質なソリューションを提供しています。",
    tags: {
      system: "システム開発",
      aws: "AWS構築",
      web: "Web開発",
      app: "アプリ開発",
      ai: "AI開発",
    },
    ctaContact: "お問い合わせ",
    ctaProjects: "プロジェクト実績を見る",
  },
  stats: [
    "完了プロジェクト",
    "クライアント数",
    "業界経験年数",
    "使用技術スタック",
  ],
  skills: {
    title: "専門スキル",
    description:
      "幅広い技術スタックと豊富な経験を活かして、あらゆる開発ニーズに対応します。 最新技術のトレンドを常に追求し、最適なソリューションを提供します。",
    tabs: {
      web: "Web開発",
      system: "システム開発",
      cloud: "クラウド",
      ai: "AI・機械学習",
      mobile: "モバイル開発",
      game: "ゲーム開発",
    },
    items: {
      web: [
        {
          name: "フロントエンド開発",
          description:
            "React、Next.js、Vue.jsなどを使用したモダンなフロントエンド開発。SPAやSSRアプリケーションの構築経験が豊富。",
        },
        {
          name: "バックエンド開発",
          description:
            "Node.js、Express、NestJS、Django、Laravelなどを使用したバックエンド開発。RESTful APIやGraphQLの設計と実装。",
        },
        {
          name: "レスポンシブデザイン",
          description:
            "あらゆるデバイスで最適に表示されるレスポンシブWebデザインの実装。モバイルファーストアプローチの採用。",
        },
        {
          name: "UI/UXデザイン",
          description:
            "ユーザー中心設計に基づいたインターフェース設計。Figmaを使用したプロトタイピングとデザインシステムの構築。",
        },
        {
          name: "Webパフォーマンス最適化",
          description:
            "ページ読み込み速度の最適化、コード分割、画像最適化、キャッシュ戦略の実装によるパフォーマンス向上。",
        },
      ],
      system: [
        {
          name: "アーキテクチャ設計",
          description:
            "拡張性と保守性を重視したシステムアーキテクチャの設計。マイクロサービスやモノリスの最適な選択。",
        },
        {
          name: "API設計・開発",
          description:
            "RESTful APIやGraphQLを用いた堅牢なAPIの設計と実装。OpenAPI仕様によるドキュメント化。",
        },
        {
          name: "データベース設計",
          description:
            "正規化とパフォーマンスを両立したデータベース設計。RDBMSとNoSQLの適切な使い分け。",
        },
        {
          name: "テスト自動化",
          description:
            "ユニットテスト、統合テスト、E2Eテストの導入による品質保証とリグレッション防止。",
        },
      ],
      cloud: [
        {
          name: "AWS構築・運用",
          description:
            "EC2、S3、Lambda、RDS、ECSなどを活用したスケーラブルなインフラ構築と運用。",
        },
        {
          name: "IaC（Infrastructure as Code）",
          description:
            "TerraformやCloudFormationを用いたインフラのコード化と再現性の高い環境構築。",
        },
        {
          name: "CI/CDパイプライン",
          description:
            "GitHub ActionsやGitLab CIを活用した自動ビルド・テスト・デプロイの構築。",
        },
        {
          name: "コンテナオーケストレーション",
          description:
            "DockerとKubernetesを用いたコンテナ化とオーケストレーションによる運用効率化。",
        },
      ],
      ai: [
        {
          name: "機械学習モデル開発",
          description:
            "TensorFlowやPyTorchを用いた分類・回帰・予測モデルの設計と学習。",
        },
        {
          name: "自然言語処理",
          description:
            "テキスト分類、感情分析、チャットボット開発などのNLPソリューションの実装。",
        },
        {
          name: "LLM活用・統合",
          description:
            "大規模言語モデルを活用したアプリケーション開発とRAGシステムの構築。",
        },
        {
          name: "データ分析・可視化",
          description:
            "Pandas、NumPyを用いたデータ前処理と分析、ダッシュボードによる可視化。",
        },
      ],
      mobile: [
        {
          name: "クロスプラットフォーム開発",
          description:
            "React NativeやFlutterを用いたiOS/Android両対応のアプリ開発。",
        },
        {
          name: "ネイティブアプリ開発",
          description:
            "SwiftやKotlinを用いたパフォーマンス重視のネイティブアプリ開発。",
        },
        {
          name: "モバイルUI/UX",
          description:
            "各プラットフォームのガイドラインに沿った直感的なモバイルインターフェース設計。",
        },
        {
          name: "アプリストア公開・運用",
          description:
            "App Store / Google Playへのリリース対応とアプリの継続的な改善。",
        },
      ],
      game: [
        {
          name: "ゲームエンジン開発",
          description: "UnityやUnreal Engineを用いた2D/3Dゲームの開発経験。",
        },
        {
          name: "WebGL / Three.js",
          description:
            "ブラウザ上で動作する3Dグラフィックスとインタラクティブ体験の実装。",
        },
        {
          name: "ゲームロジック設計",
          description:
            "ゲームメカニクスやステート管理など、ゲームロジックの設計と実装。",
        },
        {
          name: "マルチプレイヤー実装",
          description:
            "WebSocketやWebRTCを活用したリアルタイムマルチプレイヤー機能の実装。",
        },
      ],
    },
    techCategories: [
      {
        title: "プログラミング言語",
        items:
          "JavaScript, TypeScript, Python, Java, Swift, Kotlin, C#, PHP, Go, Rust",
      },
      {
        title: "フレームワーク",
        items:
          "React, Next.js, Vue, Angular, Express, Django, Laravel, Spring Boot, Flutter, Svelte",
      },
      {
        title: "データベース",
        items:
          "MySQL, PostgreSQL, MongoDB, Redis, Firebase, DynamoDB, Supabase, Cassandra",
      },
      {
        title: "開発ツール",
        items:
          "Git, Docker, Kubernetes, CI/CD, AWS, Azure, GCP, Jira, Figma, Terraform",
      },
    ],
  },
  services: {
    title: "提供サービス",
    description:
      "ビジネス課題を解決するための包括的なITサービスを提供しています。 最新技術と豊富な経験を活かし、クライアント様のニーズに最適なソリューションを実現します。",
    expand: "詳細を見る",
    collapse: "詳細を閉じる",
    items: [
      {
        title: "Web開発",
        description: "モダンで高性能なWebアプリケーションの設計・開発",
        details: [
          "レスポンシブWebデザイン",
          "SPAアプリケーション開発",
          "ECサイト構築",
          "CMS実装",
          "Webパフォーマンス最適化",
        ],
      },
      {
        title: "システム開発",
        description: "ビジネスニーズに合わせたカスタムシステムの構築",
        details: [
          "業務システム開発",
          "API設計・開発",
          "データベース設計",
          "既存システム連携",
          "保守・運用サポート",
        ],
      },
      {
        title: "クラウド構築",
        description: "スケーラブルで安全なクラウドインフラの設計と実装",
        details: [
          "AWS / GCP / Azure構築",
          "インフラ設計・運用",
          "CI/CDパイプライン構築",
          "コンテナオーケストレーション",
          "セキュリティ強化",
        ],
      },
      {
        title: "AI・機械学習",
        description: "データを活用したインテリジェントなソリューション開発",
        details: [
          "機械学習モデル開発",
          "自然言語処理",
          "画像認識・解析",
          "レコメンデーションエンジン",
          "データ分析・可視化",
        ],
      },
      {
        title: "モバイルアプリ開発",
        description: "iOS/Android向けの高品質なモバイルアプリケーション開発",
        details: [
          "iOSネイティブアプリ開発",
          "Androidネイティブアプリ開発",
          "クロスプラットフォーム開発",
          "アプリストアリリース対応",
          "プッシュ通知・分析の実装",
        ],
      },
      {
        title: "ゲーム開発",
        description: "エンゲージメントの高いゲームアプリケーションの開発",
        details: [
          "Unity / Unreal Engine開発",
          "2D / 3Dゲーム開発",
          "マルチプレイヤー機能",
          "ゲームAI実装",
          "ゲーム内課金・収益化",
        ],
      },
    ],
  },
  projects: {
    title: "プロジェクト実績",
    description:
      "これまでに手がけた代表的なプロジェクトをご紹介します。 多様な業界と技術スタックでの開発経験があります。 各プロジェクトをクリックすると詳細をご覧いただけます。",
    filters: {
      all: "すべて",
      web: "Web開発",
      system: "システム開発",
      mobile: "モバイル",
      ai: "AI・機械学習",
    },
    cardCta: "詳細を見る",
    seeAll: "すべてのプロジェクトを見る",
    modal: {
      client: "クライアント",
      duration: "期間",
      role: "役割",
      overview: "プロジェクト概要",
      tech: "使用技術",
      challenges: "課題",
      solutions: "解決策",
      results: "成果",
      viewLive: "プロジェクトを見る",
      close: "閉じる",
    },
    items: [
      {
        title: "AI搭載顧客管理システム",
        description:
          "AIを活用した顧客分析と予測機能を備えた次世代CRMシステム。顧客行動パターンを分析し、最適なアプローチを提案します。",
        client: "大手商社",
        duration: "8ヶ月",
        role: "テックリード / フルスタックエンジニア",
        overview:
          "AIを活用した顧客行動分析と離脱予測機能を備えた次世代CRMシステム。営業担当者がより効果的にアプローチできるよう、機械学習モデルが顧客ごとに最適な提案を提示します。営業活動の可視化と自動化により、属人化していた業務を標準化しました。",
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
      },
      {
        title: "クラウドベース予約システム",
        description:
          "多業種に対応可能なスケーリング可能な予約システム。リアルタイム通知と自動リマインダー機能を実装しています。",
        client: "テックスタートアップ",
        duration: "4ヶ月",
        role: "フルスタックエンジニア",
        overview:
          "美容院、レストラン、医療機関など様々な業種で利用できるクラウドベースの予約管理システムを開発しました。ユーザーはモバイルアプリやWebから簡単に予約を行え、事業者は直感的な管理画面から予約状況を一元管理できます。リアルタイム通知、自動リマインダー、キャンセル管理、スタッフスケジューリングなどの機能を実装し、業務効率化を実現しています。",
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
      },
      {
        title: "フィンテック分析ツール",
        description:
          "株式・FX・仮想通貨のリアルタイムデータ分析と自動取引機能を備えたツール。高度なアルゴリズムで市場予測を行います。",
        client: "投資ファンド",
        duration: "10ヶ月",
        role: "AIエンジニア / バックエンドエンジニア",
        overview:
          "株式・FX・暗号資産のリアルタイムマーケットデータを取り込み、機械学習による予測とアラート、戦略バックテスト機能を備えた分析プラットフォームを開発しました。トレーダーが直感的に戦略を組み立て、過去データで検証できるダッシュボードを提供します。",
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
      },
      {
        title: "スマートホーム管理アプリ",
        description:
          "IoTデバイスと連携し、家庭内のあらゆる機器をスマートフォンから一元管理できるアプリケーション。",
        client: "IoTスタートアップ",
        duration: "6ヶ月",
        role: "モバイルアプリエンジニア",
        overview:
          "スマート照明、エアコン、セキュリティカメラなどIoT機器を一元管理できるモバイルアプリ。音声制御、ジオフェンシングによる自動化、家族間の権限共有機能などを実装し、スマートホーム体験を直感的に提供します。",
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
      },
      {
        title: "メタバース展示会プラットフォーム",
        description:
          "バーチャル空間で展示会やイベントを開催できるプラットフォーム。リアルタイムコミュニケーション機能を実装。",
        client: "大手展示会主催企業",
        duration: "9ヶ月",
        role: "フロントエンドリード / 3Dエンジニア",
        overview:
          "3D空間に展示ブースを配置し、複数の参加者がアバターで自由に移動・交流できるオンライン展示会プラットフォーム。リアルタイム音声、テキストチャット、動画ストリーミングを統合し、対面イベントに近い体験を提供します。",
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
      },
      {
        title: "AI搭載チャットボット",
        description:
          "自然言語処理を活用した多言語対応チャットボット。顧客サポートの自動化と効率化を実現しました。",
        client: "ECサイト運営企業",
        duration: "5ヶ月",
        role: "AIエンジニア / バックエンドエンジニア",
        overview:
          "自然言語処理と大規模言語モデルを活用した多言語対応チャットボット。商品案内、注文確認、返品対応など顧客サポート業務を自動化し、24時間体制の応対を実現します。社内ナレッジを学習させ、コンテキストに応じた回答を提供します。",
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
      },
    ],
  },
  testimonials: {
    title: "クライアントの声",
    description:
      "これまでにご依頼いただいたクライアント様からのフィードバックをご紹介します。 お客様の成功が私の成功です。",
    items: [
      {
        name: "杉山 拓弘",
        role: "COO",
        company: "Tres Innovation株式会社",
        text: "山本さんには当社のECサイトのフルリニューアルを担当していただきました。技術力はもちろん、ビジネス視点からの提案力も高く、結果として売上が40%向上しました。また機会があればぜひお願いしたいと思います。",
      },
      {
        name: "田中 美咲",
        role: "代表取締役",
        company: "株式会社ミライテック",
        text: "業務システムの開発をお願いしました。要件のヒアリングが丁寧で、こちらの曖昧な要望も的確に汲み取っていただきました。納期も品質も期待以上で、社内の業務効率が大幅に改善しました。",
      },
      {
        name: "佐藤 健一",
        role: "事業部長",
        company: "グローバルソリューションズ株式会社",
        text: "AIを活用した分析ツールの開発を依頼しました。最新技術への深い理解と、それをビジネスに落とし込む力に感銘を受けました。プロジェクト全体を通してコミュニケーションも円滑でした。",
      },
      {
        name: "鈴木 由香",
        role: "マーケティング責任者",
        company: "株式会社クリエイトワークス",
        text: "モバイルアプリの開発でお世話になりました。UI/UXへのこだわりが素晴らしく、ユーザーからの評価も非常に高いです。リリース後のサポートも手厚く、安心してお任せできました。",
      },
    ],
  },
  timeline: {
    title: "経歴",
    description:
      "これまでのキャリアと主な実績をご紹介します。 多様な環境での経験が、現在の技術力と問題解決能力の基盤となっています。",
    present: "現在",
    items: [
      {
        period: "2025 - 現在",
        title: "フリーランスエンジニア",
        description:
          "独立して幅広いクライアントのプロジェクトを担当。Web開発、AI、モバイルアプリなど多岐にわたる分野で活動中。",
      },
      {
        period: "2023 - 2025",
        title: "シニアエンジニア",
        description:
          "大手IT企業にてプロジェクトリーダーとして複数のチームを統括。クラウドインフラ構築とAI開発を主導。",
      },
      {
        period: "2021 - 2023",
        title: "ソフトウェアエンジニア",
        description:
          "フィンテック企業にてバックエンド開発を担当。マイクロサービスアーキテクチャの設計と実装に従事。",
      },
      {
        period: "2020",
        title: "技術認定資格取得",
        description:
          "AWS認定ソリューションアーキテクト、Google Cloud認定プロフェッショナルエンジニア資格を取得。",
      },
      {
        period: "2019 - 2021",
        title: "Webアプリケーション開発者",
        description:
          "スタートアップ企業にてフロントエンド開発を担当。モダンなUIフレームワークを活用したSPA開発を経験。",
      },
      {
        period: "2018",
        title: "情報工学修士課程修了",
        description:
          "東京工科大学大学院にて情報工学の修士号を取得。機械学習と自然言語処理を専攻。",
      },
    ],
  },
  blog: {
    title: "技術ブログ",
    description:
      "最新の技術トレンドや開発のベストプラクティスについての記事をご紹介します。 定期的に更新していますので、ぜひチェックしてください。",
    readMore: "続きを読む",
    seeAll: "すべての記事を見る",
    readSuffix: "",
    items: [
      {
        title: "【2024年最新】Web開発トレンド2025年予測",
        category: "Web開発",
        date: "2024年10月15日",
        readTime: "5分",
        excerpt:
          "フロントエンド開発の最新トレンドと、今後のWeb開発の方向性について解説します。ReactやNext.jsの最新機能も紹介。",
        tags: ["React", "Next.js", "フロントエンド"],
      },
      {
        title: "AIを活用したビジネス変革",
        category: "AI",
        date: "2024年9月22日",
        readTime: "7分",
        excerpt:
          "企業がAIを活用してビジネスプロセスを最適化する方法と、実際の導入事例について詳しく解説します。",
        tags: ["機械学習", "ビジネス活用", "自動化"],
      },
      {
        title: "クラウドネイティブアーキテクチャ入門",
        category: "クラウド",
        date: "2024年8月10日",
        readTime: "8分",
        excerpt:
          "マイクロサービスとコンテナ技術を活用した、スケーラブルなクラウドネイティブアプリケーションの設計方法。",
        tags: ["AWS", "Kubernetes", "マイクロサービス"],
      },
    ],
  },
  contact: {
    title: "お問い合わせ",
    description:
      "プロジェクトのご相談やお見積もりのご依頼など、お気軽にお問い合わせください。 迅速にご返信いたします。",
    info: {
      heading: "連絡先情報",
      emailLabel: "メールアドレス",
      locationLabel: "所在地",
      location: "島根県浜田市治和町32-1 11棟402号",
      githubLabel: "GitHub",
      hoursHeading: "対応可能時間",
      weekday: "平日: 9:00 - 18:00",
      weekend: "土日祝: 要相談",
      areaHeading: "対応エリア",
      remote: "リモートワーク: 全国対応",
      onsite: "オンサイト: 東京、大阪、福岡",
    },
    form: {
      heading: "メッセージを送る",
      name: "お名前",
      namePlaceholder: "お名前を入力してください",
      email: "メールアドレス",
      emailPlaceholder: "メールアドレスを入力してください",
      subject: "件名",
      subjectPlaceholder: "件名を入力してください",
      message: "メッセージ",
      messagePlaceholder: "メッセージを入力してください",
      submit: "送信する",
      submitting: "送信中...",
      success: "メッセージを送信しました。ありがとうございます！",
    },
  },
  footer: {
    description:
      "フリーランスITエンジニアとして、最先端の技術を駆使してクライアントのビジネス課題を解決します。 Web開発からAI、モバイルアプリまで幅広い分野で高品質なソリューションを提供しています。",
    quickLinksHeading: "クイックリンク",
    newsletterHeading: "ニュースレター",
    newsletterDescription:
      "最新の技術情報やプロジェクト事例をお届けします。メールアドレスをご登録ください。",
    newsletterPlaceholder: "メールアドレス",
    newsletterSubmit: "登録",
    copyrightPrefix: "© 2026",
    copyrightName: "山本 裕",
    copyrightSuffix: ". All rights reserved. Made with",
    copyrightTail: "by ny@nta",
  },
}

export type Translation = typeof ja

const en: Translation = {
  meta: {
    title: "Yu Yamamoto - Freelance IT Engineer",
    description:
      "Specialist in system development, AI, and application development. Delivering high-quality solutions across web development, AI, and mobile apps.",
    keywords:
      "freelance, engineer, system development, web development, AI development, app development, cloud, Yu Yamamoto",
  },
  loading: "Loading...",
  backToTop: "Back to top",
  header: {
    name: "Yu Yamamoto",
    nav: {
      home: "Home",
      skills: "Skills",
      services: "Services",
      projects: "Projects",
      timeline: "Timeline",
      blog: "Blog",
    },
    contact: "Contact",
  },
  hero: {
    badge: "Freelance IT Engineer",
    name: "Yu Yamamoto",
    roles: [
      "Full-Stack Engineer",
      "Web Development Engineer",
      "AI Engineer",
      "iOS & Mobile App Engineer",
      "Infrastructure Engineer",
    ],
    description:
      "As a freelance engineer, I leverage cutting-edge technology to solve clients' business challenges. From web development to AI and mobile apps, I deliver high-quality solutions across a wide range of fields.",
    tags: {
      system: "System Dev",
      aws: "AWS",
      web: "Web Dev",
      app: "App Dev",
      ai: "AI Dev",
    },
    ctaContact: "Contact",
    ctaProjects: "View Projects",
  },
  stats: [
    "Completed Projects",
    "Clients",
    "Years of Experience",
    "Tech Stacks Used",
  ],
  skills: {
    title: "Expertise",
    description:
      "Drawing on a wide range of technologies and extensive experience, I can address virtually any development need — always tracking the latest trends to deliver the optimal solution.",
    tabs: {
      web: "Web",
      system: "Systems",
      cloud: "Cloud",
      ai: "AI / ML",
      mobile: "Mobile",
      game: "Games",
    },
    items: {
      web: [
        {
          name: "Frontend Development",
          description:
            "Modern frontend development with React, Next.js, and Vue.js. Extensive experience building SPAs and SSR applications.",
        },
        {
          name: "Backend Development",
          description:
            "Backend development with Node.js, Express, NestJS, Django, and Laravel. Designing and implementing RESTful APIs and GraphQL.",
        },
        {
          name: "Responsive Design",
          description:
            "Responsive web design that adapts beautifully to every device, with a mobile-first approach.",
        },
        {
          name: "UI / UX Design",
          description:
            "User-centered interface design, prototyping in Figma, and building reusable design systems.",
        },
        {
          name: "Web Performance",
          description:
            "Faster page loads through code splitting, image optimization, and caching strategies.",
        },
      ],
      system: [
        {
          name: "Architecture Design",
          description:
            "Scalable, maintainable system architectures — picking the right balance between microservices and monoliths.",
        },
        {
          name: "API Design & Development",
          description:
            "Robust APIs in REST and GraphQL, documented via OpenAPI.",
        },
        {
          name: "Database Design",
          description:
            "Database designs that balance normalization and performance, using RDBMS and NoSQL appropriately.",
        },
        {
          name: "Test Automation",
          description:
            "Unit, integration, and E2E testing to guarantee quality and prevent regressions.",
        },
      ],
      cloud: [
        {
          name: "AWS Engineering",
          description:
            "Scalable infrastructure using EC2, S3, Lambda, RDS, and ECS.",
        },
        {
          name: "Infrastructure as Code",
          description:
            "Codifying infrastructure with Terraform and CloudFormation for reproducible environments.",
        },
        {
          name: "CI / CD Pipelines",
          description:
            "Automated build, test, and deploy pipelines with GitHub Actions and GitLab CI.",
        },
        {
          name: "Container Orchestration",
          description:
            "Containerization and orchestration with Docker and Kubernetes.",
        },
      ],
      ai: [
        {
          name: "ML Model Development",
          description:
            "Designing and training classification, regression, and forecasting models with TensorFlow and PyTorch.",
        },
        {
          name: "Natural Language Processing",
          description:
            "NLP solutions including text classification, sentiment analysis, and chatbots.",
        },
        {
          name: "LLM Integration",
          description:
            "Applications powered by large language models and RAG systems.",
        },
        {
          name: "Data Analysis & Viz",
          description:
            "Preprocessing and analysis with Pandas and NumPy, plus dashboards for visualization.",
        },
      ],
      mobile: [
        {
          name: "Cross-Platform",
          description:
            "Cross-platform iOS / Android apps with React Native and Flutter.",
        },
        {
          name: "Native Development",
          description:
            "Performance-critical native apps in Swift and Kotlin.",
        },
        {
          name: "Mobile UI / UX",
          description:
            "Intuitive mobile interfaces aligned with each platform's guidelines.",
        },
        {
          name: "App Store Release",
          description:
            "App Store and Google Play release management and continuous improvement.",
        },
      ],
      game: [
        {
          name: "Game Engines",
          description:
            "2D and 3D game development with Unity and Unreal Engine.",
        },
        {
          name: "WebGL / Three.js",
          description:
            "Browser-based 3D graphics and interactive experiences.",
        },
        {
          name: "Game Logic",
          description:
            "Designing and implementing game mechanics and state management.",
        },
        {
          name: "Multiplayer",
          description:
            "Real-time multiplayer features using WebSocket and WebRTC.",
        },
      ],
    },
    techCategories: [
      {
        title: "Languages",
        items:
          "JavaScript, TypeScript, Python, Java, Swift, Kotlin, C#, PHP, Go, Rust",
      },
      {
        title: "Frameworks",
        items:
          "React, Next.js, Vue, Angular, Express, Django, Laravel, Spring Boot, Flutter, Svelte",
      },
      {
        title: "Databases",
        items:
          "MySQL, PostgreSQL, MongoDB, Redis, Firebase, DynamoDB, Supabase, Cassandra",
      },
      {
        title: "Tools",
        items:
          "Git, Docker, Kubernetes, CI/CD, AWS, Azure, GCP, Jira, Figma, Terraform",
      },
    ],
  },
  services: {
    title: "Services",
    description:
      "A comprehensive set of IT services to solve your business challenges — combining the latest technology with deep experience to match each client's needs.",
    expand: "View details",
    collapse: "Hide details",
    items: [
      {
        title: "Web Development",
        description: "Modern, high-performance web application design and development",
        details: [
          "Responsive web design",
          "SPA application development",
          "E-commerce site builds",
          "CMS implementation",
          "Web performance tuning",
        ],
      },
      {
        title: "System Development",
        description: "Custom systems built around your business needs",
        details: [
          "Business system development",
          "API design & development",
          "Database design",
          "Legacy system integration",
          "Maintenance & operations",
        ],
      },
      {
        title: "Cloud Engineering",
        description: "Scalable, secure cloud infrastructure design and implementation",
        details: [
          "AWS / GCP / Azure builds",
          "Infrastructure design & ops",
          "CI/CD pipelines",
          "Container orchestration",
          "Security hardening",
        ],
      },
      {
        title: "AI & Machine Learning",
        description: "Intelligent, data-driven solutions",
        details: [
          "ML model development",
          "Natural language processing",
          "Image recognition & analysis",
          "Recommendation engines",
          "Data analysis & visualization",
        ],
      },
      {
        title: "Mobile App Development",
        description: "High-quality iOS and Android applications",
        details: [
          "iOS native apps",
          "Android native apps",
          "Cross-platform development",
          "App store release management",
          "Push notifications & analytics",
        ],
      },
      {
        title: "Game Development",
        description: "Engaging game applications across platforms",
        details: [
          "Unity / Unreal Engine",
          "2D / 3D game development",
          "Multiplayer features",
          "Game AI implementation",
          "In-app purchases & monetization",
        ],
      },
    ],
  },
  projects: {
    title: "Project Highlights",
    description:
      "A selection of representative projects across diverse industries and tech stacks. Click any card to view the full case study.",
    filters: {
      all: "All",
      web: "Web",
      system: "Systems",
      mobile: "Mobile",
      ai: "AI / ML",
    },
    cardCta: "View details",
    seeAll: "View all projects",
    modal: {
      client: "Client",
      duration: "Duration",
      role: "Role",
      overview: "Project Overview",
      tech: "Technologies",
      challenges: "Challenges",
      solutions: "Solutions",
      results: "Results",
      viewLive: "Visit project",
      close: "Close",
    },
    items: [
      {
        title: "AI-Powered CRM",
        description:
          "A next-generation CRM with AI-driven customer analytics and predictions. Identifies behavioral patterns and proposes the best approach for each customer.",
        client: "Major trading company",
        duration: "8 months",
        role: "Tech Lead / Full-Stack Engineer",
        overview:
          "A next-generation CRM combining customer behavior analytics with churn prediction. Machine learning models surface the best proposal for each customer, helping sales teams act more effectively. Visualizing and automating sales activity standardized previously tribal workflows.",
        challenges: [
          "Real-time analytics over large datasets",
          "Integration with existing core systems",
          "Improving ML model accuracy",
          "Security and privacy compliance",
        ],
        solutions: [
          "Stream-processing pipeline for low-latency aggregation",
          "Unified interface via GraphQL gateway",
          "Continuous learning pipeline to keep accuracy improving",
          "Encryption and audit logs for strict access control",
        ],
        results: [
          "Sales productivity up 45%",
          "Customer churn reduced by 28%",
          "Proposal close rate tripled",
          "Adopted by 12 client companies",
        ],
      },
      {
        title: "Cloud-Based Reservation System",
        description:
          "A scalable reservation system adaptable to many industries — featuring real-time notifications and automated reminders.",
        client: "Tech startup",
        duration: "4 months",
        role: "Full-Stack Engineer",
        overview:
          "A cloud-based reservation management system serving salons, restaurants, clinics, and more. Customers book easily from mobile or web while businesses manage everything from an intuitive dashboard. Real-time notifications, automated reminders, cancellation handling, and staff scheduling streamline daily operations.",
        challenges: [
          "Flexible architecture for diverse industries",
          "Real-time data sync with conflict resolution",
          "Offline support and data synchronization",
          "Complex booking rules and constraints",
        ],
        solutions: [
          "Customizable, template-based architecture",
          "Firestore real-time listeners with transactions",
          "Offline-first approach using Service Worker",
          "Rule engine for flexible booking constraints",
        ],
        results: [
          "Reservation admin time cut by 70%",
          "No-show rate down 35%",
          "Customer satisfaction up 30%",
          "100+ businesses onboarded in 6 months",
        ],
      },
      {
        title: "FinTech Analytics Tool",
        description:
          "Real-time stock, FX, and crypto analysis with automated trading. Sophisticated algorithms forecast market movements.",
        client: "Investment fund",
        duration: "10 months",
        role: "AI Engineer / Backend Engineer",
        overview:
          "An analytics platform that ingests real-time market data for equities, FX, and crypto, then layers ML-driven predictions, alerts, and strategy backtesting on top. Traders build strategies intuitively and validate them against historical data via interactive dashboards.",
        challenges: [
          "Low-latency processing of massive data streams",
          "Maintaining prediction accuracy",
          "Integration with multiple exchange APIs",
          "Reproducibility of backtests",
        ],
        solutions: [
          "Kafka-based streaming foundation",
          "Ensemble of multiple models for stable predictions",
          "Connector abstraction layer for multi-exchange support",
          "Historical-data snapshots and deterministic simulation",
        ],
        results: [
          "Order decision time reduced by 80%",
          "Backtest speed 5× faster",
          "Monthly returns +12%",
          "In production at 3 investment funds",
        ],
      },
      {
        title: "Smart Home Management App",
        description:
          "An app that connects to IoT devices and centrally manages every appliance in the home from a smartphone.",
        client: "IoT startup",
        duration: "6 months",
        role: "Mobile App Engineer",
        overview:
          "A mobile app that centrally manages smart lighting, AC units, security cameras, and other IoT devices. Voice control, geofence-based automation, and family permission sharing make smart home life intuitive.",
        challenges: [
          "Supporting diverse IoT protocols",
          "Low-latency bidirectional communication",
          "Reliable background processing",
          "Secure device pairing",
        ],
        solutions: [
          "Protocol adapter layer for abstraction",
          "Real-time communication via MQTT over WebSocket",
          "OS-specific optimized background tasks",
          "Zero-touch pairing using public-key cryptography",
        ],
        results: [
          "App rating 4.7 (App Store / Google Play)",
          "20,000+ active users",
          "100,000+ devices registered",
          "Zero security incidents",
        ],
      },
      {
        title: "Metaverse Expo Platform",
        description:
          "A platform for hosting exhibitions and events in virtual space, with rich real-time communication features.",
        client: "Major expo organizer",
        duration: "9 months",
        role: "Frontend Lead / 3D Engineer",
        overview:
          "An online expo platform where exhibitors set up 3D booths and visitors explore as avatars. Real-time voice, text chat, and video streaming combine to deliver an experience close to a physical event.",
        challenges: [
          "Performance under massive concurrent connections",
          "Smooth navigation through 3D space",
          "Bandwidth optimization",
          "Easy content management",
        ],
        solutions: [
          "Spatial partitioning for render optimization",
          "Scalable media delivery via WebRTC SFU",
          "Adaptive bitrate streaming",
          "No-code CMS for booth updates",
        ],
        results: [
          "5,000 concurrent connections",
          "Attendance 3× year-over-year",
          "Average dwell time 28 minutes",
          "Operating cost down 40% for organizers",
        ],
      },
      {
        title: "AI-Powered Chatbot",
        description:
          "A multilingual chatbot powered by NLP, automating and streamlining customer support.",
        client: "E-commerce company",
        duration: "5 months",
        role: "AI Engineer / Backend Engineer",
        overview:
          "A multilingual chatbot built on NLP and large language models that automates product inquiries, order confirmations, and return support — providing 24-hour coverage. Trained on internal knowledge for context-aware responses.",
        challenges: [
          "Natural conversation quality across languages",
          "Accurate referencing of product information",
          "Seamless integration with existing systems",
          "Preventing inappropriate responses",
        ],
        solutions: [
          "Multilingual LLM with localized prompts",
          "Retrieval-augmented generation (RAG)",
          "Webhook-based integration with existing systems",
          "Output filters and guardrails",
        ],
        results: [
          "Inquiry response time down 60%",
          "Customer satisfaction up 25%",
          "24-hour coverage prevents lost opportunities",
          "Support costs reduced 45%",
        ],
      },
    ],
  },
  testimonials: {
    title: "What Clients Say",
    description:
      "A selection of feedback from clients I have worked with. Their success is my success.",
    items: [
      {
        name: "Takuhiro Sugiyama",
        role: "COO",
        company: "Tres Innovation Co., Ltd.",
        text: "Yu led the full renewal of our e-commerce site. His technical depth was paired with strong business insight, and as a result our sales increased by 40%. We will absolutely work with him again.",
      },
      {
        name: "Misaki Tanaka",
        role: "CEO",
        company: "Mirai Tech Inc.",
        text: "We engaged him to build our business system. He listened carefully and translated even our vaguer requirements into the right design. Delivery and quality both exceeded expectations, and our internal workflows are dramatically better.",
      },
      {
        name: "Kenichi Sato",
        role: "Division Head",
        company: "Global Solutions Co., Ltd.",
        text: "He delivered an AI-driven analytics tool for us. His deep understanding of cutting-edge technology — and his ability to translate it into business value — was impressive. Communication was smooth throughout the project.",
      },
      {
        name: "Yuka Suzuki",
        role: "Head of Marketing",
        company: "Create Works Inc.",
        text: "We worked together on a mobile app project. His attention to UI/UX is exceptional, and user reviews have been outstanding. Post-release support was generous and reassuring.",
      },
    ],
  },
  timeline: {
    title: "Career",
    description:
      "A chronological look at my career and key milestones. Experience across very different environments is the foundation of my technical and problem-solving skills today.",
    present: "Present",
    items: [
      {
        period: "2025 - Present",
        title: "Freelance Engineer",
        description:
          "Independently delivering projects for a broad range of clients — web development, AI, mobile apps, and more.",
      },
      {
        period: "2023 - 2025",
        title: "Senior Engineer",
        description:
          "Led multiple teams at a major IT company. Spearheaded cloud infrastructure and AI initiatives.",
      },
      {
        period: "2021 - 2023",
        title: "Software Engineer",
        description:
          "Backend development at a fintech company, focused on microservice architecture design and implementation.",
      },
      {
        period: "2020",
        title: "Professional Certifications",
        description:
          "AWS Certified Solutions Architect and Google Cloud Certified Professional Engineer.",
      },
      {
        period: "2019 - 2021",
        title: "Web Application Developer",
        description:
          "Frontend development at a startup, building SPAs with modern UI frameworks.",
      },
      {
        period: "2018",
        title: "Master's in Information Engineering",
        description:
          "Master's degree from Tokyo University of Technology, specializing in machine learning and NLP.",
      },
    ],
  },
  blog: {
    title: "Tech Blog",
    description:
      "Articles on the latest tech trends and development best practices. Updated regularly — drop by from time to time.",
    readMore: "Read more",
    seeAll: "All articles",
    readSuffix: " min read",
    items: [
      {
        title: "[2024] Web Development Trends for 2025",
        category: "Web",
        date: "Oct 15, 2024",
        readTime: "5",
        excerpt:
          "A look at the latest frontend trends and where web development is headed, including the newest features in React and Next.js.",
        tags: ["React", "Next.js", "Frontend"],
      },
      {
        title: "Transforming Business with AI",
        category: "AI",
        date: "Sep 22, 2024",
        readTime: "7",
        excerpt:
          "How companies are using AI to optimize business processes, with concrete adoption examples.",
        tags: ["Machine Learning", "Business", "Automation"],
      },
      {
        title: "Cloud-Native Architecture 101",
        category: "Cloud",
        date: "Aug 10, 2024",
        readTime: "8",
        excerpt:
          "Designing scalable cloud-native applications with microservices and container technology.",
        tags: ["AWS", "Kubernetes", "Microservices"],
      },
    ],
  },
  contact: {
    title: "Contact",
    description:
      "Feel free to reach out for project inquiries, quotes, or anything else. I'll get back to you quickly.",
    info: {
      heading: "Contact Info",
      emailLabel: "Email",
      locationLabel: "Location",
      location: "Hamada City, Shimane Prefecture, Japan",
      githubLabel: "GitHub",
      hoursHeading: "Hours",
      weekday: "Weekdays: 9:00 - 18:00",
      weekend: "Weekends & Holidays: By appointment",
      areaHeading: "Service Area",
      remote: "Remote: Anywhere",
      onsite: "On-site: Tokyo, Osaka, Fukuoka",
    },
    form: {
      heading: "Send a Message",
      name: "Name",
      namePlaceholder: "Enter your name",
      email: "Email",
      emailPlaceholder: "Enter your email",
      subject: "Subject",
      subjectPlaceholder: "Enter a subject",
      message: "Message",
      messagePlaceholder: "Enter your message",
      submit: "Send",
      submitting: "Sending...",
      success: "Your message has been sent. Thank you!",
    },
  },
  footer: {
    description:
      "As a freelance IT engineer, I leverage cutting-edge technology to solve clients' business challenges. From web development to AI and mobile apps, I deliver high-quality solutions across a wide range of fields.",
    quickLinksHeading: "Quick Links",
    newsletterHeading: "Newsletter",
    newsletterDescription:
      "Get the latest tech notes and project case studies delivered to your inbox.",
    newsletterPlaceholder: "Email address",
    newsletterSubmit: "Subscribe",
    copyrightPrefix: "© 2026",
    copyrightName: "Yu Yamamoto",
    copyrightSuffix: ". All rights reserved. Made with",
    copyrightTail: "by ny@nta",
  },
}

const sp: Translation = {
  meta: {
    title: "Yu Yamamoto - Ingeniero IT Freelance",
    description:
      "Especialista en desarrollo de sistemas, IA y aplicaciones. Soluciones de alta calidad en desarrollo web, IA y aplicaciones móviles.",
    keywords:
      "freelance, ingeniero, desarrollo de sistemas, desarrollo web, IA, desarrollo de apps, nube, Yu Yamamoto",
  },
  loading: "Cargando...",
  backToTop: "Volver arriba",
  header: {
    name: "Yu Yamamoto",
    nav: {
      home: "Inicio",
      skills: "Habilidades",
      services: "Servicios",
      projects: "Proyectos",
      timeline: "Trayectoria",
      blog: "Blog",
    },
    contact: "Contacto",
  },
  hero: {
    badge: "Ingeniero IT Freelance",
    name: "Yu Yamamoto",
    roles: [
      "Ingeniero Full-Stack",
      "Ingeniero de Desarrollo Web",
      "Ingeniero de IA",
      "Ingeniero iOS y Aplicaciones Móviles",
      "Ingeniero de Infraestructura",
    ],
    description:
      "Como ingeniero freelance, aplico tecnología de vanguardia para resolver los desafíos de negocio de mis clientes. Desde desarrollo web hasta IA y apps móviles, entrego soluciones de alta calidad en una amplia variedad de áreas.",
    tags: {
      system: "Sistemas",
      aws: "AWS",
      web: "Web",
      app: "Apps",
      ai: "IA",
    },
    ctaContact: "Contacto",
    ctaProjects: "Ver proyectos",
  },
  stats: [
    "Proyectos completados",
    "Clientes",
    "Años de experiencia",
    "Stacks tecnológicos",
  ],
  skills: {
    title: "Habilidades",
    description:
      "Aprovechando un amplio abanico tecnológico y experiencia, puedo cubrir prácticamente cualquier necesidad de desarrollo, siguiendo siempre las tendencias más recientes para entregar la solución óptima.",
    tabs: {
      web: "Web",
      system: "Sistemas",
      cloud: "Nube",
      ai: "IA / ML",
      mobile: "Móvil",
      game: "Juegos",
    },
    items: {
      web: [
        {
          name: "Desarrollo Frontend",
          description:
            "Desarrollo frontend moderno con React, Next.js y Vue.js. Amplia experiencia construyendo SPAs y aplicaciones con SSR.",
        },
        {
          name: "Desarrollo Backend",
          description:
            "Backend con Node.js, Express, NestJS, Django y Laravel. Diseño e implementación de APIs RESTful y GraphQL.",
        },
        {
          name: "Diseño Responsivo",
          description:
            "Diseño web responsivo que se adapta perfectamente a cualquier dispositivo, con enfoque mobile-first.",
        },
        {
          name: "Diseño UI / UX",
          description:
            "Interfaces centradas en el usuario, prototipado en Figma y construcción de sistemas de diseño reutilizables.",
        },
        {
          name: "Rendimiento Web",
          description:
            "Carga más rápida mediante code splitting, optimización de imágenes y estrategias de caché.",
        },
      ],
      system: [
        {
          name: "Diseño de Arquitectura",
          description:
            "Arquitecturas escalables y mantenibles, equilibrando microservicios y monolitos según el caso.",
        },
        {
          name: "Diseño y Desarrollo de APIs",
          description:
            "APIs robustas en REST y GraphQL, documentadas con OpenAPI.",
        },
        {
          name: "Diseño de Bases de Datos",
          description:
            "Diseños que equilibran normalización y rendimiento, usando RDBMS y NoSQL apropiadamente.",
        },
        {
          name: "Automatización de Pruebas",
          description:
            "Pruebas unitarias, de integración y E2E para asegurar calidad y prevenir regresiones.",
        },
      ],
      cloud: [
        {
          name: "Ingeniería en AWS",
          description:
            "Infraestructura escalable con EC2, S3, Lambda, RDS y ECS.",
        },
        {
          name: "Infrastructure as Code",
          description:
            "Codificación de infraestructura con Terraform y CloudFormation para entornos reproducibles.",
        },
        {
          name: "CI / CD",
          description:
            "Pipelines automatizados de build, pruebas y despliegue con GitHub Actions y GitLab CI.",
        },
        {
          name: "Orquestación de Contenedores",
          description:
            "Containerización y orquestación con Docker y Kubernetes.",
        },
      ],
      ai: [
        {
          name: "Modelos de ML",
          description:
            "Diseño y entrenamiento de modelos de clasificación, regresión y predicción con TensorFlow y PyTorch.",
        },
        {
          name: "Procesamiento de Lenguaje Natural",
          description:
            "Soluciones de NLP: clasificación de texto, análisis de sentimientos y chatbots.",
        },
        {
          name: "Integración de LLMs",
          description:
            "Aplicaciones basadas en grandes modelos de lenguaje y sistemas RAG.",
        },
        {
          name: "Análisis y Visualización",
          description:
            "Preprocesamiento y análisis con Pandas y NumPy, además de dashboards para visualización.",
        },
      ],
      mobile: [
        {
          name: "Multiplataforma",
          description:
            "Apps multiplataforma para iOS / Android con React Native y Flutter.",
        },
        {
          name: "Desarrollo Nativo",
          description:
            "Apps nativas críticas en rendimiento con Swift y Kotlin.",
        },
        {
          name: "UI / UX Móvil",
          description:
            "Interfaces móviles intuitivas alineadas con las guías de cada plataforma.",
        },
        {
          name: "Publicación en App Stores",
          description:
            "Lanzamiento en App Store y Google Play y mejora continua.",
        },
      ],
      game: [
        {
          name: "Motores de Juego",
          description:
            "Desarrollo 2D y 3D con Unity y Unreal Engine.",
        },
        {
          name: "WebGL / Three.js",
          description:
            "Gráficos 3D y experiencias interactivas en el navegador.",
        },
        {
          name: "Lógica de Juego",
          description:
            "Diseño e implementación de mecánicas y gestión de estado.",
        },
        {
          name: "Multijugador",
          description:
            "Funciones multijugador en tiempo real con WebSocket y WebRTC.",
        },
      ],
    },
    techCategories: [
      {
        title: "Lenguajes",
        items:
          "JavaScript, TypeScript, Python, Java, Swift, Kotlin, C#, PHP, Go, Rust",
      },
      {
        title: "Frameworks",
        items:
          "React, Next.js, Vue, Angular, Express, Django, Laravel, Spring Boot, Flutter, Svelte",
      },
      {
        title: "Bases de Datos",
        items:
          "MySQL, PostgreSQL, MongoDB, Redis, Firebase, DynamoDB, Supabase, Cassandra",
      },
      {
        title: "Herramientas",
        items:
          "Git, Docker, Kubernetes, CI/CD, AWS, Azure, GCP, Jira, Figma, Terraform",
      },
    ],
  },
  services: {
    title: "Servicios",
    description:
      "Un conjunto completo de servicios IT para resolver tus desafíos de negocio, combinando tecnología de vanguardia con experiencia profunda y adaptándose a las necesidades de cada cliente.",
    expand: "Ver detalles",
    collapse: "Ocultar detalles",
    items: [
      {
        title: "Desarrollo Web",
        description: "Diseño y desarrollo de aplicaciones web modernas y de alto rendimiento",
        details: [
          "Diseño web responsivo",
          "Desarrollo de SPA",
          "Construcción de e-commerce",
          "Implementación de CMS",
          "Optimización del rendimiento web",
        ],
      },
      {
        title: "Desarrollo de Sistemas",
        description: "Sistemas a medida construidos según las necesidades de tu negocio",
        details: [
          "Sistemas empresariales",
          "Diseño y desarrollo de APIs",
          "Diseño de bases de datos",
          "Integración con sistemas legados",
          "Mantenimiento y operación",
        ],
      },
      {
        title: "Ingeniería en la Nube",
        description: "Infraestructura cloud escalable y segura",
        details: [
          "Construcción en AWS / GCP / Azure",
          "Diseño y operación de infraestructura",
          "Pipelines CI/CD",
          "Orquestación de contenedores",
          "Refuerzo de seguridad",
        ],
      },
      {
        title: "IA y Machine Learning",
        description: "Soluciones inteligentes basadas en datos",
        details: [
          "Desarrollo de modelos ML",
          "Procesamiento de lenguaje natural",
          "Reconocimiento y análisis de imágenes",
          "Motores de recomendación",
          "Análisis y visualización de datos",
        ],
      },
      {
        title: "Aplicaciones Móviles",
        description: "Aplicaciones iOS y Android de alta calidad",
        details: [
          "Apps nativas iOS",
          "Apps nativas Android",
          "Desarrollo multiplataforma",
          "Gestión de publicación en stores",
          "Notificaciones push y analítica",
        ],
      },
      {
        title: "Desarrollo de Juegos",
        description: "Aplicaciones de juego atractivas multiplataforma",
        details: [
          "Unity / Unreal Engine",
          "Juegos 2D / 3D",
          "Funciones multijugador",
          "Implementación de IA para juegos",
          "Compras in-app y monetización",
        ],
      },
    ],
  },
  projects: {
    title: "Proyectos Destacados",
    description:
      "Una selección de proyectos representativos en distintas industrias y stacks tecnológicos. Haz clic en cualquier tarjeta para ver el caso completo.",
    filters: {
      all: "Todos",
      web: "Web",
      system: "Sistemas",
      mobile: "Móvil",
      ai: "IA / ML",
    },
    cardCta: "Ver detalles",
    seeAll: "Ver todos los proyectos",
    modal: {
      client: "Cliente",
      duration: "Duración",
      role: "Rol",
      overview: "Resumen del Proyecto",
      tech: "Tecnologías",
      challenges: "Retos",
      solutions: "Soluciones",
      results: "Resultados",
      viewLive: "Ver proyecto",
      close: "Cerrar",
    },
    items: [
      {
        title: "CRM con IA",
        description:
          "Un CRM de nueva generación con analítica y predicciones impulsadas por IA. Detecta patrones de comportamiento y propone la mejor aproximación para cada cliente.",
        client: "Gran empresa comercial",
        duration: "8 meses",
        role: "Tech Lead / Ingeniero Full-Stack",
        overview:
          "Un CRM de nueva generación que combina analítica de comportamiento con predicción de abandono. Los modelos de machine learning surfacean la mejor propuesta para cada cliente, ayudando al equipo comercial a actuar con mayor efectividad. La visualización y automatización estandariza procesos antes dependientes de personas concretas.",
        challenges: [
          "Analítica en tiempo real sobre grandes volúmenes de datos",
          "Integración con sistemas core existentes",
          "Mejorar la precisión de los modelos ML",
          "Cumplimiento de seguridad y privacidad",
        ],
        solutions: [
          "Pipeline de stream-processing para agregación de baja latencia",
          "Interfaz unificada vía GraphQL Gateway",
          "Pipeline de aprendizaje continuo para mejorar la precisión",
          "Cifrado y logs de auditoría para un control de acceso estricto",
        ],
        results: [
          "Productividad comercial +45%",
          "Tasa de abandono de clientes -28%",
          "Tasa de cierre triplicada",
          "Adoptado por 12 empresas cliente",
        ],
      },
      {
        title: "Sistema de Reservas en la Nube",
        description:
          "Un sistema de reservas escalable adaptable a múltiples sectores, con notificaciones en tiempo real y recordatorios automáticos.",
        client: "Startup tecnológica",
        duration: "4 meses",
        role: "Ingeniero Full-Stack",
        overview:
          "Un sistema de gestión de reservas en la nube para salones, restaurantes, clínicas y más. Los clientes reservan fácilmente desde móvil o web, mientras los negocios gestionan todo desde un panel intuitivo. Notificaciones en tiempo real, recordatorios, cancelaciones y planificación de personal optimizan el día a día.",
        challenges: [
          "Arquitectura flexible para distintos sectores",
          "Sincronización en tiempo real con resolución de conflictos",
          "Soporte offline y sincronización de datos",
          "Reglas y restricciones de reserva complejas",
        ],
        solutions: [
          "Arquitectura basada en plantillas personalizables",
          "Listeners en tiempo real con transacciones en Firestore",
          "Enfoque offline-first con Service Worker",
          "Motor de reglas para restricciones flexibles",
        ],
        results: [
          "Tiempo de gestión de reservas -70%",
          "Tasa de no-shows -35%",
          "Satisfacción del cliente +30%",
          "Más de 100 negocios incorporados en 6 meses",
        ],
      },
      {
        title: "Herramienta de Análisis FinTech",
        description:
          "Análisis en tiempo real de acciones, FX y cripto con trading automático. Algoritmos sofisticados predicen los movimientos del mercado.",
        client: "Fondo de inversión",
        duration: "10 meses",
        role: "Ingeniero de IA / Backend",
        overview:
          "Una plataforma analítica que ingiere datos de mercado en tiempo real para acciones, FX y cripto, añadiendo predicciones de ML, alertas y backtesting de estrategias. Los traders construyen estrategias de forma intuitiva y las validan con datos históricos.",
        challenges: [
          "Procesamiento de baja latencia para grandes flujos",
          "Mantener la precisión de las predicciones",
          "Integración con múltiples APIs de exchanges",
          "Reproducibilidad de los backtests",
        ],
        solutions: [
          "Infraestructura de streaming basada en Kafka",
          "Ensamble de modelos para predicciones estables",
          "Capa de conectores abstraída para multi-exchange",
          "Snapshots de datos históricos y simulación determinista",
        ],
        results: [
          "Tiempo de decisión de órdenes -80%",
          "Velocidad de backtest 5×",
          "Rendimiento mensual +12%",
          "En producción en 3 fondos de inversión",
        ],
      },
      {
        title: "App de Hogar Inteligente",
        description:
          "Una app conectada a dispositivos IoT que gestiona centralmente todos los electrodomésticos del hogar desde el móvil.",
        client: "Startup IoT",
        duration: "6 meses",
        role: "Ingeniero de Apps Móviles",
        overview:
          "Una app móvil para gestionar iluminación inteligente, aires acondicionados, cámaras y otros dispositivos IoT. Control por voz, automatización por geofencing y permisos compartidos en familia hacen la vida smart-home más intuitiva.",
        challenges: [
          "Soporte para diversos protocolos IoT",
          "Comunicación bidireccional de baja latencia",
          "Procesos en segundo plano fiables",
          "Emparejamiento seguro de dispositivos",
        ],
        solutions: [
          "Capa de adaptadores de protocolo",
          "Comunicación en tiempo real con MQTT sobre WebSocket",
          "Tareas en segundo plano optimizadas por SO",
          "Emparejamiento zero-touch con criptografía de clave pública",
        ],
        results: [
          "Valoración de la app 4.7 (App Store / Google Play)",
          "+20.000 usuarios activos",
          "+100.000 dispositivos registrados",
          "Cero incidentes de seguridad",
        ],
      },
      {
        title: "Plataforma de Eventos en Metaverso",
        description:
          "Una plataforma para organizar exposiciones y eventos en espacio virtual, con funciones de comunicación en tiempo real.",
        client: "Gran organizador de eventos",
        duration: "9 meses",
        role: "Frontend Lead / Ingeniero 3D",
        overview:
          "Una plataforma de eventos online donde los expositores instalan stands 3D y los visitantes exploran como avatares. Voz en tiempo real, chat de texto y streaming de vídeo se combinan para ofrecer una experiencia muy cercana a un evento presencial.",
        challenges: [
          "Rendimiento bajo gran número de conexiones simultáneas",
          "Navegación fluida en el espacio 3D",
          "Optimización del ancho de banda",
          "Gestión de contenido sencilla",
        ],
        solutions: [
          "Particionado espacial para optimizar el renderizado",
          "Distribución escalable de medios con WebRTC SFU",
          "Streaming con bitrate adaptativo",
          "CMS no-code para actualizar stands",
        ],
        results: [
          "5.000 conexiones simultáneas",
          "Asistencia 3× respecto al año anterior",
          "Tiempo medio de permanencia 28 min",
          "Costes operativos del organizador -40%",
        ],
      },
      {
        title: "Chatbot con IA",
        description:
          "Un chatbot multilingüe basado en NLP que automatiza y agiliza el soporte al cliente.",
        client: "Empresa de e-commerce",
        duration: "5 meses",
        role: "Ingeniero de IA / Backend",
        overview:
          "Un chatbot multilingüe basado en NLP y grandes modelos de lenguaje que automatiza consultas de productos, confirmación de pedidos y devoluciones, ofreciendo cobertura 24 horas. Entrenado con conocimiento interno para respuestas contextualizadas.",
        challenges: [
          "Conversación natural en varios idiomas",
          "Referenciar información de producto con precisión",
          "Integración fluida con sistemas existentes",
          "Evitar respuestas inapropiadas",
        ],
        solutions: [
          "LLM multilingüe con prompts localizados",
          "Generación aumentada por recuperación (RAG)",
          "Integración con sistemas existentes vía webhooks",
          "Filtros de salida y guardrails",
        ],
        results: [
          "Tiempo de respuesta -60%",
          "Satisfacción del cliente +25%",
          "Cobertura 24h evita pérdida de oportunidades",
          "Costes de soporte -45%",
        ],
      },
    ],
  },
  testimonials: {
    title: "Lo que dicen los clientes",
    description:
      "Una selección de comentarios de clientes con los que he trabajado. Su éxito es mi éxito.",
    items: [
      {
        name: "Takuhiro Sugiyama",
        role: "COO",
        company: "Tres Innovation, S.A.",
        text: "Yu lideró la renovación completa de nuestro e-commerce. Su profundidad técnica iba acompañada de una clara visión de negocio, y como resultado nuestras ventas aumentaron un 40%. Sin duda volveremos a trabajar con él.",
      },
      {
        name: "Misaki Tanaka",
        role: "CEO",
        company: "Mirai Tech, S.L.",
        text: "Le encargamos el desarrollo de nuestro sistema interno. Escuchó con atención y tradujo incluso los requisitos más imprecisos en el diseño adecuado. Plazo y calidad superaron expectativas, y nuestros procesos internos mejoraron notablemente.",
      },
      {
        name: "Kenichi Sato",
        role: "Director de División",
        company: "Global Solutions, S.A.",
        text: "Nos entregó una herramienta analítica con IA. Su entendimiento profundo de la tecnología más reciente y su capacidad para llevarla al plano de negocio fueron impresionantes. La comunicación fue fluida durante todo el proyecto.",
      },
      {
        name: "Yuka Suzuki",
        role: "Responsable de Marketing",
        company: "Create Works, S.L.",
        text: "Trabajamos juntos en un proyecto de app móvil. Su atención al UI/UX es excepcional y las reseñas de usuarios han sido excelentes. El soporte tras el lanzamiento fue generoso y tranquilizador.",
      },
    ],
  },
  timeline: {
    title: "Trayectoria",
    description:
      "Un recorrido cronológico por mi carrera y los hitos clave. La experiencia en entornos muy distintos es la base de mis habilidades técnicas y de resolución de problemas.",
    present: "Actualidad",
    items: [
      {
        period: "2025 - Actualidad",
        title: "Ingeniero Freelance",
        description:
          "Entrego proyectos de forma independiente para una amplia gama de clientes: desarrollo web, IA, apps móviles y más.",
      },
      {
        period: "2023 - 2025",
        title: "Ingeniero Senior",
        description:
          "Lideré varios equipos en una gran empresa de IT, impulsando iniciativas de infraestructura cloud e IA.",
      },
      {
        period: "2021 - 2023",
        title: "Ingeniero de Software",
        description:
          "Desarrollo backend en una empresa fintech, enfocado en diseño e implementación de arquitectura de microservicios.",
      },
      {
        period: "2020",
        title: "Certificaciones Profesionales",
        description:
          "AWS Certified Solutions Architect y Google Cloud Certified Professional Engineer.",
      },
      {
        period: "2019 - 2021",
        title: "Desarrollador de Aplicaciones Web",
        description:
          "Desarrollo frontend en una startup, construyendo SPAs con frameworks UI modernos.",
      },
      {
        period: "2018",
        title: "Máster en Ingeniería Informática",
        description:
          "Máster por la Universidad Tecnológica de Tokio, especializado en machine learning y NLP.",
      },
    ],
  },
  blog: {
    title: "Blog Técnico",
    description:
      "Artículos sobre las últimas tendencias tecnológicas y buenas prácticas de desarrollo. Se actualiza regularmente; pásate de vez en cuando.",
    readMore: "Leer más",
    seeAll: "Ver todos los artículos",
    readSuffix: " min de lectura",
    items: [
      {
        title: "[2024] Tendencias de Desarrollo Web para 2025",
        category: "Web",
        date: "15 oct 2024",
        readTime: "5",
        excerpt:
          "Un repaso a las últimas tendencias de frontend y hacia dónde se dirige el desarrollo web, incluyendo lo más nuevo de React y Next.js.",
        tags: ["React", "Next.js", "Frontend"],
      },
      {
        title: "Transformando el Negocio con IA",
        category: "IA",
        date: "22 sep 2024",
        readTime: "7",
        excerpt:
          "Cómo las empresas usan IA para optimizar procesos de negocio, con ejemplos concretos de adopción.",
        tags: ["Machine Learning", "Negocio", "Automatización"],
      },
      {
        title: "Arquitectura Cloud-Native 101",
        category: "Nube",
        date: "10 ago 2024",
        readTime: "8",
        excerpt:
          "Diseño de aplicaciones cloud-native escalables con microservicios y tecnología de contenedores.",
        tags: ["AWS", "Kubernetes", "Microservicios"],
      },
    ],
  },
  contact: {
    title: "Contacto",
    description:
      "Escríbeme sin compromiso para consultas de proyectos, presupuestos o cualquier otra cuestión. Respondo rápido.",
    info: {
      heading: "Información de Contacto",
      emailLabel: "Email",
      locationLabel: "Ubicación",
      location: "Hamada, Prefectura de Shimane, Japón",
      githubLabel: "GitHub",
      hoursHeading: "Horario",
      weekday: "Días laborables: 9:00 - 18:00",
      weekend: "Fines de semana y festivos: bajo cita",
      areaHeading: "Zona de Servicio",
      remote: "Remoto: Cualquier lugar",
      onsite: "Presencial: Tokio, Osaka, Fukuoka",
    },
    form: {
      heading: "Enviar un Mensaje",
      name: "Nombre",
      namePlaceholder: "Introduce tu nombre",
      email: "Email",
      emailPlaceholder: "Introduce tu email",
      subject: "Asunto",
      subjectPlaceholder: "Introduce un asunto",
      message: "Mensaje",
      messagePlaceholder: "Escribe tu mensaje",
      submit: "Enviar",
      submitting: "Enviando...",
      success: "Mensaje enviado. ¡Muchas gracias!",
    },
  },
  footer: {
    description:
      "Como ingeniero IT freelance, aplico tecnología de vanguardia para resolver los desafíos de negocio de mis clientes. Desde desarrollo web hasta IA y apps móviles, entrego soluciones de alta calidad en una amplia variedad de áreas.",
    quickLinksHeading: "Enlaces Rápidos",
    newsletterHeading: "Newsletter",
    newsletterDescription:
      "Recibe las últimas notas técnicas y casos de proyectos directamente en tu bandeja de entrada.",
    newsletterPlaceholder: "Dirección de email",
    newsletterSubmit: "Suscribirse",
    copyrightPrefix: "© 2026",
    copyrightName: "Yu Yamamoto",
    copyrightSuffix: ". Todos los derechos reservados. Hecho con",
    copyrightTail: "por ny@nta",
  },
}

export const translations: Record<Locale, Translation> = { ja, en, sp }
