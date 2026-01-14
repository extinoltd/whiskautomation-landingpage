import { Layers, Download, MousePointer2, LayoutGrid, RefreshCcw, FileImage, Sparkles } from 'lucide-react';

export type Language = 'en' | 'zh' | 'es' | 'ar' | 'pt' | 'de' | 'ja' | 'ko' | 'nl' | 'vi' | 'tr' | 'bn' | 'th' | 'pl' | 'ru';

export const translations = {
  en: {
    meta: {
      title: "Whisk Automation - Bulk Generate & Download Images",
      description: "The ultimate Google Whisk auto downloader. Automate prompts and batch process images."
    },
    nav: {
      home: "Home",
      features: "Features",
      pricing: "Pricing",
      docs: "Docs",
      blog: "Blog",
      support: "Support",
      about: "About Us",
      privacy: "Privacy",
      install: "Install Extension"
    },
    hero: {
      badge: "WhiskAutomator Alternative v2.0",
      titlePrefix: "How to Bulk Generate",
      titleMiddle: "Images in",
      titleSuffix: "Google Whisk.",
      subtitle: "Automate Google Whisk prompts and download all images instantly. The comprehensive Google Whisk workflow automation tool for professionals.",
      ctaPrimary: "Add to Chrome",
      ctaSecondary: "Watch Workflow"
    },
    comparison: {
      title: "Free Tools vs",
      manual: "MANUAL PROCESS",
      automated: "WHISK AUTOMATION",
      manualEffort: "High Stress + 6h/day",
      autoEffort: "0 Interaction + 5m Setup"
    },
    pricing: {
      title: "Simple Pricing",
      monthly: "Monthly",
      yearly: "Yearly",
      lifetime: "Lifetime",
      mostPopular: "Most Popular",
      save: "Save an extra 20%",
      oneTime: "One-time payment"
    },
    faq: {
      title: "Google Whisk FAQ",
      items: [
        { q: "How to bulk generate images?", a: "Simply upload a CSV of your prompts, set your persona, and click start." },
        { q: "Why is Google Whisk slow?", a: "Whisk Automation manages the queue for you, ensuring the fastest generation times." },
        { q: "Is there an auto downloader?", a: "Yes! Every generated image is automatically downloaded to your folder." },
        { q: "Does it handle rate limits?", a: "Our 'Human-Flow' system manages pacing to prevent bans." }
      ]
    },
    cta: {
      title: "Start Bulk Generation Today.",
      subtitle: "Join thousands who use us for Google Whisk workflow automation."
    }
  },
  zh: {
    meta: {
      title: "Whisk Automation - 批量生成和下载 Google Whisk 图片",
      description: "终极 Google Whisk 自动下载器。自动执行提示词，批量处理 AI 图片。"
    },
    nav: {
      home: "首页",
      features: "功能",
      pricing: "价格",
      docs: "文档",
      blog: "博客",
      support: "支持",
      about: "关于我们",
      privacy: "隐私",
      install: "安装扩展"
    },
    hero: {
      badge: "WhiskAutomator 替代方案 v2.0",
      titlePrefix: "如何在",
      titleMiddle: "Google Whisk 中",
      titleSuffix: "批量生成图片。",
      subtitle: "自动执行 Google Whisk 提示词并立即下载所有图片。专为专业人士打造的 Google Whisk 工作流自动化工具。",
      ctaPrimary: "添加到 Chrome",
      ctaSecondary: "观看演示"
    },
    comparison: {
      title: "免费工具 vs",
      manual: "手动流程",
      automated: "WHISK 自动化",
      manualEffort: "高压力 + 每天6小时",
      autoEffort: "0 交互 + 5分钟设置"
    },
    pricing: {
      title: "简单定价",
      monthly: "月付",
      yearly: "年付",
      lifetime: "终身版",
      mostPopular: "最受欢迎",
      save: "额外节省 20%",
      oneTime: "一次性付款"
    },
    faq: {
      title: "常见问题",
      items: [
        { q: "如何批量生成图片？", a: "只需上传提示词 CSV 文件，设置角色，然后点击开始。" },
        { q: "为什么 Google Whisk 这么慢？", a: "Whisk Automation 为您管理队列，确保最快的生成速度。" },
        { q: "有自动下载器吗？", a: "有！每张生成的图片都会自动下载到您的文件夹。" },
        { q: "如何处理速率限制？", a: "我们的 'Human-Flow' 系统管理节奏以防止封号。" }
      ]
    },
    cta: {
      title: "今天开始批量生成。",
      subtitle: "加入成千上万使用我们进行 Google Whisk 工作流自动化的用户。"
    }
  },
  es: {
    meta: {
      title: "Whisk Automation - Generación y Descarga Masiva en Google Whisk",
      description: "El descargador automático definitivo para Google Whisk. Automatiza prompts y procesa imágenes por lotes."
    },
    nav: {
      home: "Inicio",
      features: "Características",
      pricing: "Precios",
      docs: "Docs",
      blog: "Blog",
      support: "Soporte",
      about: "Nosotros",
      privacy: "Privacidad",
      install: "Instalar Extensión"
    },
    hero: {
      badge: "Alternativa WhiskAutomator v2.0",
      titlePrefix: "Cómo Generar",
      titleMiddle: "Imágenes Masivas en",
      titleSuffix: "Google Whisk.",
      subtitle: "Automatiza los prompts de Google Whisk y descarga todas las imágenes al instante. La herramienta profesional de automatización.",
      ctaPrimary: "Añadir a Chrome",
      ctaSecondary: "Ver Flujo"
    },
    comparison: {
      title: "Herramientas Gratuitas vs",
      manual: "PROCESO MANUAL",
      automated: "WHISK AUTOMATION",
      manualEffort: "Alto Estrés + 6h/día",
      autoEffort: "0 Interacción + 5m Config"
    },
    pricing: {
      title: "Precios Simples",
      monthly: "Mensual",
      yearly: "Anual",
      lifetime: "De por vida",
      mostPopular: "Más Popular",
      save: "Ahorra un 20% extra",
      oneTime: "Pago único"
    },
    faq: {
      title: "Preguntas Frecuentes",
      items: [
        { q: "¿Cómo generar imágenes masivamente?", a: "Sube un CSV con tus prompts, configura tu persona y haz clic en iniciar." },
        { q: "¿Por qué es lento Google Whisk?", a: "Whisk Automation gestiona la cola por ti, asegurando tiempos rápidos." },
        { q: "¿Incluye descarga automática?", a: "¡Sí! Cada imagen generada se descarga automáticamente." },
        { q: "¿Maneja los límites de tasa?", a: "Nuestro sistema 'Human-Flow' gestiona el ritmo para evitar bloqueos." }
      ]
    },
    cta: {
      title: "Empieza a Generar Hoy.",
      subtitle: "Únete a miles que automatizan su flujo de trabajo en Google Whisk."
    }
  },
  de: {
    meta: {
      title: "Whisk Automation - Massengenerierung & Download in Google Whisk",
      description: "Der ultimative Google Whisk Auto-Downloader. Automatisieren Sie Prompts und verarbeiten Sie Bilder im Batch."
    },
    nav: {
      home: "Startseite",
      features: "Funktionen",
      pricing: "Preise",
      docs: "Doku",
      blog: "Blog",
      support: "Hilfe",
      about: "Über Uns",
      privacy: "Datenschutz",
      install: "Erweiterung installieren"
    },
    hero: {
      badge: "WhiskAutomator Alternative v2.0",
      titlePrefix: "So generieren Sie",
      titleMiddle: "Massenbilder in",
      titleSuffix: "Google Whisk.",
      subtitle: "Automatisieren Sie Google Whisk Prompts und laden Sie alle Bilder sofort herunter. Das professionelle Tool zur Workflow-Automatisierung.",
      ctaPrimary: "Zu Chrome hinzufügen",
      ctaSecondary: "Workflow ansehen"
    },
    comparison: {
      title: "Kostenlose Tools vs",
      manual: "MANUELLER PROZESS",
      automated: "WHISK AUTOMATION",
      manualEffort: "Hoher Stress + 6h/Tag",
      autoEffort: "0 Interaktion + 5m Setup"
    },
    pricing: {
      title: "Einfache Preise",
      monthly: "Monatlich",
      yearly: "Jährlich",
      lifetime: "Lebenslang",
      mostPopular: "Beliebteste",
      save: "Sparen Sie extra 20%",
      oneTime: "Einmalige Zahlung"
    },
    faq: {
      title: "Häufige Fragen",
      items: [
        { q: "Wie generiere ich Massenbilder?", a: "Laden Sie einfach eine CSV Ihrer Prompts hoch und klicken Sie auf Start." },
        { q: "Warum ist Google Whisk langsam?", a: "Whisk Automation verwaltet die Warteschlange für maximale Geschwindigkeit." },
        { q: "Gibt es einen Auto-Downloader?", a: "Ja! Jedes generierte Bild wird automatisch heruntergeladen." },
        { q: "Was ist mit Ratenbegrenzungen?", a: "Unser 'Human-Flow'-System steuert das Tempo, um Sperren zu vermeiden." }
      ]
    },
    cta: {
      title: "Starten Sie heute.",
      subtitle: "Schließen Sie sich Tausenden an, die ihren Google Whisk Workflow automatisieren."
    }
  },
  pt: {
    meta: {
      title: "Whisk Automation - Geração e Download em Massa no Google Whisk",
      description: "O downloader automático definitivo para Google Whisk. Automatize prompts e processe imagens em lote."
    },
    nav: {
      home: "Início",
      features: "Recursos",
      pricing: "Preços",
      docs: "Docs",
      blog: "Blog",
      support: "Suporte",
      about: "Sobre",
      privacy: "Privacidade",
      install: "Instalar Extensão"
    },
    hero: {
      badge: "Alternativa WhiskAutomator v2.0",
      titlePrefix: "Como Gerar",
      titleMiddle: "Imagens em Massa no",
      titleSuffix: "Google Whisk.",
      subtitle: "Automatize prompts do Google Whisk e baixe todas as imagens instantaneamente. Ferramenta profissional de automação.",
      ctaPrimary: "Adicionar ao Chrome",
      ctaSecondary: "Ver Workflow"
    },
    comparison: {
      title: "Ferramentas Grátis vs",
      manual: "PROCESSO MANUAL",
      automated: "WHISK AUTOMATION",
      manualEffort: "Alto Estresse + 6h/dia",
      autoEffort: "0 Interação + 5m Setup"
    },
    pricing: {
      title: "Preços Simples",
      monthly: "Mensal",
      yearly: "Anual",
      lifetime: "Vitalício",
      mostPopular: "Mais Popular",
      save: "Economize 20% extra",
      oneTime: "Pagamento único"
    },
    faq: {
      title: "Perguntas Frequentes",
      items: [
        { q: "Como gerar imagens em massa?", a: "Basta enviar um CSV dos seus prompts e clicar em iniciar." },
        { q: "Por que o Google Whisk é lento?", a: "O Whisk Automation gerencia a fila para você, garantindo rapidez." },
        { q: "Existe um downloader automático?", a: "Sim! Cada imagem gerada é baixada automaticamente." },
        { q: "Lida com limites de taxa?", a: "Nosso sistema 'Human-Flow' gerencia o ritmo para evitar banimentos." }
      ]
    },
    cta: {
      title: "Comece a Gerar Hoje.",
      subtitle: "Junte-se a milhares que usam nossa automação de fluxo de trabalho."
    }
  },
  ar: {
    meta: {
      title: "Whisk Automation - إنشاء وتحميل الصور بالجملة في Google Whisk",
      description: "أداة التحميل التلقائي النهائية لـ Google Whisk. أتمتة المطالبات ومعالجة الصور بالذكاء الاصطناعي."
    },
    nav: {
      home: "الرئيسية",
      features: "الميزات",
      pricing: "الأسعار",
      docs: "وثائق",
      blog: "مدونة",
      support: "دعم",
      about: "معلومات عنا",
      privacy: "خصوصية",
      install: "تثبيت الإضافة"
    },
    hero: {
      badge: "بديل WhiskAutomator v2.0",
      titlePrefix: "كيفية إنشاء",
      titleMiddle: "صور بالجملة في",
      titleSuffix: "Google Whisk.",
      subtitle: "أتمتة مطالبات Google Whisk وتحميل جميع الصور فوراً. أداة أتمتة سير العمل الشاملة للمحترفين.",
      ctaPrimary: "إضافة إلى Chrome",
      ctaSecondary: "شاهد سير العمل"
    },
    comparison: {
      title: "أدوات مجانية مقابل",
      manual: "عملية يدوية",
      automated: "أتمتة WHISK",
      manualEffort: "جهد عالي + 6 ساعات/يوم",
      autoEffort: "0 تفاعل + 5 دقائق إعداد"
    },
    pricing: {
      title: "أسعار بسيطة",
      monthly: "شهري",
      yearly: "سنوي",
      lifetime: "مدى الحياة",
      mostPopular: "الأكثر شعبية",
      save: "وفر 20% إضافية",
      oneTime: "دفع لمرة واحدة"
    },
    faq: {
      title: "الأسئلة الشائعة",
      items: [
        { q: "كيفية إنشاء الصور بالجملة؟", a: "بساطة قم بتحميل ملف CSV لمطالباتك، وحدد الشخصية، واضغط ابدأ." },
        { q: "لماذا Google Whisk بطيء؟", a: "تدير Whisk Automation قائمة الانتظار لك لضمان أسرع وقت." },
        { q: "هل يوجد تحميل تلقائي؟", a: "نعم! يتم تحميل كل صورة تم إنشاؤها تلقائياً." },
        { q: "كيف تتعامل مع حدود السرعة؟", a: "يدير نظام 'Human-Flow' الوتيرة لمنع الحظر." }
      ]
    },
    cta: {
      title: "ابدأ التوليد بالجملة اليوم.",
      subtitle: "انضم إلى الآلاف الذين يستخدمون أتمتة سير العمل لدينا."
    }
  },
  ja: {
    meta: {
      title: "Whisk Automation - Google Whisk 画像の一括生成とダウンロード",
      description: "究極の Google Whisk 自動ダウンローダー。プロンプトを自動化し、画像をバッチ処理します。"
    },
    nav: {
      home: "ホーム",
      features: "機能",
      pricing: "価格",
      docs: "ドキュメント",
      blog: "ブログ",
      support: "サポート",
      about: "私たちについて",
      privacy: "プライバシー",
      install: "拡張機能をインストール"
    },
    hero: {
      badge: "WhiskAutomator 代替 v2.0",
      titlePrefix: "一括生成する方法",
      titleMiddle: "画像生成",
      titleSuffix: "Google Whisk。",
      subtitle: "Google Whisk プロンプトを自動化し、すべての画像を即座にダウンロードします。プロフェッショナル向け Google Whisk ワークフロー自動化ツール。",
      ctaPrimary: "Chromeに追加",
      ctaSecondary: "デモを見る"
    },
    comparison: {
      title: "無料ツール vs",
      manual: "手動プロセス",
      automated: "WHISK 自動化",
      manualEffort: "高ストレス + 1日6時間",
      autoEffort: "0 操作 + 5分設定"
    },
    pricing: {
      title: "シンプルな価格",
      monthly: "月額",
      yearly: "年額",
      lifetime: "ライフタイム",
      mostPopular: "一番人気",
      save: "さらに20%節約",
      oneTime: "一回払い"
    },
    faq: {
      title: "よくある質問",
      items: [
        { q: "画像を一括生成するには？", a: "プロンプトのCSVをアップロードし、ペルソナを設定して開始をクリックするだけです。" },
        { q: "なぜ Google Whisk は遅いのですか？", a: "Whisk Automation がキューを管理し、最速の生成時間を保証します。" },
        { q: "自動ダウンローダーはありますか？", a: "はい！生成されたすべての画像は自動的にフォルダにダウンロードされます。" },
        { q: "レート制限は処理されますか？", a: "私たちの 'Human-Flow' システムは、禁止を防ぐためにペースを管理します。" }
      ]
    },
    cta: {
      title: "今日から一括生成を開始。",
      subtitle: "Google Whisk ワークフロー自動化を使用している数千人のユーザーに参加しましょう。"
    }
  },
  ko: {
    meta: {
      title: "Whisk Automation - Google Whisk 이미지 대량 생성 및 다운로드",
      description: "최고의 Google Whisk 자동 다운로더. 프롬프트를 자동화하고 이미지를 일괄 처리하세요."
    },
    nav: {
      home: "홈",
      features: "기능",
      pricing: "가격",
      docs: "문서",
      blog: "블로그",
      support: "지원",
      about: "회사 소개",
      privacy: "개인정보 보호",
      install: "확장 프로그램 설치"
    },
    hero: {
      badge: "WhiskAutomator 대안 v2.0",
      titlePrefix: "대량 생성 방법",
      titleMiddle: "이미지 생성",
      titleSuffix: "Google Whisk.",
      subtitle: "Google Whisk 프롬프트를 자동화하고 모든 이미지를 즉시 다운로드하세요. 전문가를 위한 포괄적인 Google Whisk 워크플로우 자동화 도구입니다.",
      ctaPrimary: "Chrome에 추가",
      ctaSecondary: "데모 보기"
    },
    comparison: {
      title: "무료 도구 vs",
      manual: "수동 프로세스",
      automated: "WHISK 자동화",
      manualEffort: "높은 스트레스 + 하루 6시간",
      autoEffort: "0 상호작용 + 5분 설정"
    },
    pricing: {
      title: "간단한 가격",
      monthly: "월간",
      yearly: "연간",
      lifetime: "평생",
      mostPopular: "가장 인기",
      save: "추가 20% 절약",
      oneTime: "일회성 결제"
    },
    faq: {
      title: "자주 묻는 질문",
      items: [
        { q: "이미지를 대량 생성하려면?", a: "프롬프트 CSV를 업로드하고 페르소나를 설정한 후 시작을 클릭하세요." },
        { q: "Google Whisk가 왜 느린가요?", a: "Whisk Automation이 대기열을 관리하여 가장 빠른 생성 시간을 보장합니다." },
        { q: "자동 다운로더가 있나요?", a: "네! 생성된 모든 이미지는 자동으로 폴더에 다운로드됩니다." },
        { q: "속도 제한을 처리하나요?", a: "'Human-Flow' 시스템이 차단을 방지하기 위해 속도를 관리합니다." }
      ]
    },
    cta: {
      title: "오늘 대량 생성을 시작하세요.",
      subtitle: "Google Whisk 워크플로우 자동화를 사용하는 수천 명의 사용자와 함께하세요."
    }
  },
  nl: {
    meta: {
      title: "Whisk Automation - Bulk afbeeldingen genereren en downloaden in Google Whisk",
      description: "De ultieme Google Whisk auto-downloader. Automatiseer prompts en verwerk afbeeldingen in batch."
    },
    nav: {
      home: "Home",
      features: "Functies",
      pricing: "Prijzen",
      docs: "Docs",
      blog: "Blog",
      support: "Support",
      about: "Over ons",
      privacy: "Privacy",
      install: "Extensie installeren"
    },
    hero: {
      badge: "WhiskAutomator Alternatief v2.0",
      titlePrefix: "Hoe Bulk Genereren",
      titleMiddle: "Afbeeldingen in",
      titleSuffix: "Google Whisk.",
      subtitle: "Automatiseer Google Whisk prompts en download alle afbeeldingen direct. De uitgebreide Google Whisk workflow automatiseringstool voor professionals.",
      ctaPrimary: "Toevoegen aan Chrome",
      ctaSecondary: "Bekijk Workflow"
    },
    comparison: {
      title: "Gratis Tools vs",
      manual: "HANDMATIG PROCES",
      automated: "WHISK AUTOMATISERING",
      manualEffort: "Hoge Stress + 6u/dag",
      autoEffort: "0 Interactie + 5m Setup"
    },
    pricing: {
      title: "Eenvoudige Prijzen",
      monthly: "Maandelijks",
      yearly: "Jaarlijks",
      lifetime: "Levenslang",
      mostPopular: "Meest Populair",
      save: "Bespaar extra 20%",
      oneTime: "Eenmalige betaling"
    },
    faq: {
      title: "Veelgestelde Vragen",
      items: [
        { q: "Hoe bulk afbeeldingen genereren?", a: "Upload simpelweg een CSV van je prompts, stel je persona in en klik op start." },
        { q: "Waarom is Google Whisk traag?", a: "Whisk Automation beheert de wachtrij voor je, wat zorgt voor de snelste generatietijden." },
        { q: "Is er een auto-downloader?", a: "Ja! Elke gegenereerde afbeelding wordt automatisch gedownload naar je map." },
        { q: "Handelt het snelheidslimieten af?", a: "Ons 'Human-Flow' systeem beheert het tempo om bans te voorkomen." }
      ]
    },
    cta: {
      title: "Begin Vandaag met Bulk Genereren.",
      subtitle: "Sluit je aan bij duizenden die ons gebruiken voor Google Whisk workflow automatisering."
    }
  },
  vi: {
    meta: {
      title: "Whisk Automation - Tạo và Tải xuống Hàng loạt Hình ảnh trên Google Whisk",
      description: "Trình tải xuống tự động Google Whisk tối ưu. Tự động hóa lời nhắc và xử lý hàng loạt hình ảnh."
    },
    nav: {
      home: "Trang chủ",
      features: "Tính năng",
      pricing: "Bảng giá",
      docs: "Tài liệu",
      blog: "Blog",
      support: "Hỗ trợ",
      about: "Về chúng tôi",
      privacy: "Riêng tư",
      install: "Cài đặt tiện ích"
    },
    hero: {
      badge: "Thay thế WhiskAutomator v2.0",
      titlePrefix: "Cách tạo hàng loạt",
      titleMiddle: "Hình ảnh trong",
      titleSuffix: "Google Whisk.",
      subtitle: "Tự động hóa các lời nhắc Google Whisk và tải xuống tất cả hình ảnh ngay lập tức. Công cụ tự động hóa quy trình làm việc Google Whisk toàn diện cho các chuyên gia.",
      ctaPrimary: "Thêm vào Chrome",
      ctaSecondary: "Xem quy trình"
    },
    comparison: {
      title: "Công cụ miễn phí vs",
      manual: "QUY TRÌNH THỦ CÔNG",
      automated: "TỰ ĐỘNG HÓA WHISK",
      manualEffort: "Căng thẳng cao + 6h/ngày",
      autoEffort: "0 Tương tác + 5p Cài đặt"
    },
    pricing: {
      title: "Giá đơn giản",
      monthly: "Hàng tháng",
      yearly: "Hàng năm",
      lifetime: "Trọn đời",
      mostPopular: "Phổ biến nhất",
      save: "Tiết kiệm thêm 20%",
      oneTime: "Thanh toán một lần"
    },
    faq: {
      title: "Câu hỏi thường gặp",
      items: [
        { q: "Làm thế nào để tạo hình ảnh hàng loạt?", a: "Chỉ cần tải lên tệp CSV các lời nhắc của bạn, đặt tính cách và nhấp bắt đầu." },
        { q: "Tại sao Google Whisk chậm?", a: "Whisk Automation quản lý hàng đợi cho bạn, đảm bảo thời gian tạo nhanh nhất." },
        { q: "Có trình tải xuống tự động không?", a: "Có! Mọi hình ảnh được tạo đều được tự động tải xuống thư mục của bạn." },
        { q: "Nó có xử lý giới hạn tốc độ không?", a: "Hệ thống 'Human-Flow' của chúng tôi quản lý tốc độ để ngăn chặn lệnh cấm." }
      ]
    },
    cta: {
      title: "Bắt đầu tạo hàng loạt ngay hôm nay.",
      subtitle: "Tham gia cùng hàng ngàn người sử dụng chúng tôi để tự động hóa quy trình làm việc Google Whisk."
    }
  },
  tr: {
    meta: {
      title: "Whisk Automation - Google Whisk'te Toplu Görüntü Oluşturma ve İndirme",
      description: "Nihai Google Whisk otomatik indiricisi. İstemleri otomatikleştirin ve görüntüleri toplu işleyin."
    },
    nav: {
      home: "Ana Sayfa",
      features: "Özellikler",
      pricing: "Fiyatlandırma",
      docs: "Dokümanlar",
      blog: "Blog",
      support: "Destek",
      about: "Hakkımızda",
      privacy: "Gizlilik",
      install: "Uzantıyı Yükle"
    },
    hero: {
      badge: "WhiskAutomator Alternatifi v2.0",
      titlePrefix: "Toplu Oluşturma",
      titleMiddle: "Resimleri",
      titleSuffix: "Google Whisk'te.",
      subtitle: "Google Whisk istemlerini otomatikleştirin ve tüm görüntüleri anında indirin. Profesyoneller için kapsamlı Google Whisk iş akışı otomasyon aracı.",
      ctaPrimary: "Chrome'a Ekle",
      ctaSecondary: "İş Akışını İzle"
    },
    comparison: {
      title: "Ücretsiz Araçlar vs",
      manual: "MANUEL SÜREÇ",
      automated: "WHISK OTOMASYONU",
      manualEffort: "Yüksek Stres + 6s/gün",
      autoEffort: "0 Etkileşim + 5dk Kurulum"
    },
    pricing: {
      title: "Basit Fiyatlandırma",
      monthly: "Aylık",
      yearly: "Yıllık",
      lifetime: "Ömür Boyu",
      mostPopular: "En Popüler",
      save: "Ekstra %20 tasarruf et",
      oneTime: "Tek seferlik ödeme"
    },
    faq: {
      title: "Sıkça Sorulan Sorular",
      items: [
        { q: "Toplu görüntü nasıl oluşturulur?", a: "İstemlerinizin bir CSV dosyasını yükleyin, personanızı ayarlayın ve başlata tıklayın." },
        { q: "Google Whisk neden yavaş?", a: "Whisk Automation kuyruğu sizin için yönetir, en hızlı oluşturma sürelerini sağlar." },
        { q: "Otomatik indirici var mı?", a: "Evet! Oluşturulan her görüntü otomatik olarak klasörünüze indirilir." },
        { q: "Hız sınırlarını hallediyor mu?", a: "'Human-Flow' sistemimiz yasaklanmaları önlemek için tempoyu yönetir." }
      ]
    },
    cta: {
      title: "Bugün Toplu Oluşturmaya Başlayın.",
      subtitle: "Google Whisk iş akışı otomasyonu için bizi kullanan binlerce kişiye katılın."
    }
  },
  bn: {
    meta: {
      title: "Whisk Automation - Google Whisk-এ বাল্ক ইমেজ জেনারেশন এবং ডাউনলোড",
      description: "চূড়ান্ত Google Whisk অটো ডাউনলোডার। প্রম্পট স্বয়ংক্রিয় করুন এবং ব্যাচ প্রসেস ইমেজ।"
    },
    nav: {
      home: "হোম",
      features: "বৈশিষ্ট্য",
      pricing: "মূল্য",
      docs: "ডক্স",
      blog: "ব্লগ",
      support: "সমর্থন",
      about: "আমাদের সম্পর্কে",
      privacy: "গোপনীয়তা",
      install: "এক্সটেনশন ইনস্টল করুন"
    },
    hero: {
      badge: "WhiskAutomator বিকল্প v2.0",
      titlePrefix: "কিভাবে বাল্ক তৈরি করবেন",
      titleMiddle: "ছবি",
      titleSuffix: "Google Whisk-এ।",
      subtitle: "Google Whisk প্রম্পট স্বয়ংক্রিয় করুন এবং অবিলম্বে সমস্ত ছবি ডাউনলোড করুন। পেশাদারদের জন্য ব্যাপক Google Whisk ওয়ার্কফ্লো অটোমেশন টুল।",
      ctaPrimary: "Chrome-এ যোগ করুন",
      ctaSecondary: "ওয়ার্কফ্লো দেখুন"
    },
    comparison: {
      title: "ফ্রি টুলস বনাম",
      manual: "ম্যানুয়াল প্রক্রিয়া",
      automated: "WHISK অটোমেশন",
      manualEffort: "উচ্চ চাপ + ৬ ঘণ্টা/দিন",
      autoEffort: "০ মিথস্ক্রিয়া + ৫ মিনিট সেটআপ"
    },
    pricing: {
      title: "সহজ মূল্য",
      monthly: "মাসিক",
      yearly: "বার্ষিক",
      lifetime: "আজীবন",
      mostPopular: "সবচেয়ে জনপ্রিয়",
      save: "অতিরিক্ত ২০% সংরক্ষণ করুন",
      oneTime: "এককালীন পেমেন্ট"
    },
    faq: {
      title: "সচরাচর জিজ্ঞাসিত প্রশ্ন",
      items: [
        { q: "কিভাবে বাল্ক ইমেজ তৈরি করবেন?", a: "সহজভাবে আপনার প্রম্পটের একটি CSV আপলোড করুন, আপনার ব্যক্তিত্ব সেট করুন, এবং শুরু ক্লিক করুন।" },
        { q: "কেন Google Whisk ধীর?", a: "Whisk Automation আপনার জন্য কিউ পরিচালনা করে, দ্রুততম জেনারেশন সময় নিশ্চিত করে।" },
        { q: "কোন অটো ডাউনলোডার আছে?", a: "হ্যাঁ! প্রতিটি জেনারেট করা ইমেজ স্বয়ংক্রিয়ভাবে আপনার ফোল্ডারে ডাউনলোড হয়।" },
        { q: "এটি কি রেট লিমিট হ্যান্ডেল করে?", a: "আমাদের 'Human-Flow' সিস্টেম নিষেধাজ্ঞা প্রতিরোধ করতে গতি পরিচালনা করে।" }
      ]
    },
    cta: {
      title: "আজই বাল্ক জেনারেশন শুরু করুন।",
      subtitle: "হাজার হাজার মানুষের সাথে যোগ দিন যারা Google Whisk ওয়ার্কফ্লো অটোমেশনের জন্য আমাদের ব্যবহার করেন।"
    }
  },
  th: {
    meta: {
      title: "Whisk Automation - สร้างและดาวน์โหลดรูปภาพจำนวนมากใน Google Whisk",
      description: "เครื่องมือดาวน์โหลดอัตโนมัติ Google Whisk ที่ดีที่สุด ทำงานอัตโนมัติและประมวลผลรูปภาพแบบกลุ่ม"
    },
    nav: {
      home: "หน้าแรก",
      features: "คุณสมบัติ",
      pricing: "ราคา",
      docs: "เอกสาร",
      blog: "บล็อก",
      support: "สนับสนุน",
      about: "เกี่ยวกับเรา",
      privacy: "ความเป็นส่วนตัว",
      install: "ติดตั้งส่วนขยาย"
    },
    hero: {
      badge: "ทางเลือก WhiskAutomator v2.0",
      titlePrefix: "วิธีสร้างจำนวนมาก",
      titleMiddle: "รูปภาพใน",
      titleSuffix: "Google Whisk.",
      subtitle: "ทำงาน Google Whisk prompts อัตโนมัติและดาวน์โหลดรูปภาพทั้งหมดทันที เครื่องมืออัตโนมัติเวิร์กโฟลว์ Google Whisk ที่ครอบคลุมสำหรับมืออาชีพ",
      ctaPrimary: "เพิ่มใน Chrome",
      ctaSecondary: "ดูเวิร์กโฟลว์"
    },
    comparison: {
      title: "เครื่องมือฟรี vs",
      manual: "กระบวนการด้วยตนเอง",
      automated: "WHISK อัตโนมัติ",
      manualEffort: "ความเครียดสูง + 6 ชม./วัน",
      autoEffort: "0 การโต้ตอบ + ตั้งค่า 5 นาที"
    },
    pricing: {
      title: "ราคาง่ายๆ",
      monthly: "รายเดือน",
      yearly: "รายปี",
      lifetime: "ตลอดชีพ",
      mostPopular: "ยอดนิยมที่สุด",
      save: "ประหยัดเพิ่ม 20%",
      oneTime: "ชำระครั้งเดียว"
    },
    faq: {
      title: "คำถามที่พบบ่อย",
      items: [
        { q: "จะสร้างรูปภาพจำนวนมากได้อย่างไร?", a: "เพียงอัปโหลด CSV ของ prompts ของคุณ ตั้งค่า persona และคลิกเริ่ม" },
        { q: "ทำไม Google Whisk ถึงช้า?", a: "Whisk Automation จัดการคิวให้คุณ รับประกันเวลาสร้างที่เร็วที่สุด" },
        { q: "มีตัวดาวน์โหลดอัตโนมัติไหม?", a: "มี! ทุกรูปภาพที่สร้างขึ้นจะถูกดาวน์โหลดลงในโฟลเดอร์ของคุณโดยอัตโนมัติ" },
        { q: "มันจัดการขีดจำกัดอัตราไหม?", a: "ระบบ 'Human-Flow' ของเราจัดการจังหวะเพื่อป้องกันการถูกแบน" }
      ]
    },
    cta: {
      title: "เริ่มสร้างจำนวนมากวันนี้",
      subtitle: "เข้าร่วมกับผู้คนนับพันที่ใช้เราเพื่อการทำงานอัตโนมัติ Google Whisk"
    }
  },
  pl: {
    meta: {
      title: "Whisk Automation - Masowe generowanie i pobieranie obrazów w Google Whisk",
      description: "Najlepszy automatyczny downloader Google Whisk. Automatyzuj podpowiedzi i przetwarzaj obrazy wsadowo."
    },
    nav: {
      home: "Strona główna",
      features: "Funkcje",
      pricing: "Cennik",
      docs: "Dokumentacja",
      blog: "Blog",
      support: "Wsparcie",
      about: "O nas",
      privacy: "Prywatność",
      install: "Zainstaluj rozszerzenie"
    },
    hero: {
      badge: "Alternatywa WhiskAutomator v2.0",
      titlePrefix: "Jak masowo generować",
      titleMiddle: "Obrazy w",
      titleSuffix: "Google Whisk.",
      subtitle: "Automatyzuj podpowiedzi Google Whisk i natychmiast pobieraj wszystkie obrazy. Kompleksowe narzędzie do automatyzacji pracy w Google Whisk dla profesjonalistów.",
      ctaPrimary: "Dodaj do Chrome",
      ctaSecondary: "Zobacz Workflow"
    },
    comparison: {
      title: "Darmowe narzędzia vs",
      manual: "PROCES RĘCZNY",
      automated: "AUTOMATYZACJA WHISK",
      manualEffort: "Wysoki stres + 6h/dzień",
      autoEffort: "0 Interakcji + 5m Konfiguracji"
    },
    pricing: {
      title: "Prosty cennik",
      monthly: "Miesięczny",
      yearly: "Roczny",
      lifetime: "Dożywotni",
      mostPopular: "Najpopularniejszy",
      save: "Zaoszczędź dodatkowe 20%",
      oneTime: "Jednorazowa płatność"
    },
    faq: {
      title: "Często zadawane pytania",
      items: [
        { q: "Jak masowo generować obrazy?", a: "Po prostu prześlij CSV ze swoimi podpowiedziami, ustaw personę i kliknij start." },
        { q: "Dlaczego Google Whisk jest wolny?", a: "Whisk Automation zarządza kolejką za Ciebie, zapewniając najszybszy czas generowania." },
        { q: "Czy jest automatyczny downloader?", a: "Tak! Każdy wygenerowany obraz jest automatycznie pobierany do Twojego folderu." },
        { q: "Czy obsługuje limity szybkości?", a: "Nasz system 'Human-Flow' zarządza tempem, aby zapobiec blokadom." }
      ]
    },
    cta: {
      title: "Rozpocznij masowe generowanie już dziś.",
      subtitle: "Dołącz do tysięcy osób, które używają nas do automatyzacji pracy w Google Whisk."
    }
  },
  ru: {
    meta: {
      title: "Whisk Automation - Массовая генерация и скачивание изображений в Google Whisk",
      description: "Лучший автозагрузчик для Google Whisk. Автоматизируйте промпты и пакетную обработку изображений."
    },
    nav: {
      home: "Главная",
      features: "Функции",
      pricing: "Цены",
      docs: "Документация",
      blog: "Блог",
      support: "Поддержка",
      about: "О нас",
      privacy: "Конфиденциальность",
      install: "Установить расширение"
    },
    hero: {
      badge: "Альтернатива WhiskAutomator v2.0",
      titlePrefix: "Как массово создавать",
      titleMiddle: "Изображения в",
      titleSuffix: "Google Whisk.",
      subtitle: "Автоматизируйте промпты Google Whisk и мгновенно скачивайте все изображения. Комплексный инструмент автоматизации рабочего процесса Google Whisk для профессионалов.",
      ctaPrimary: "Добавить в Chrome",
      ctaSecondary: "Смотреть рабочий процесс"
    },
    comparison: {
      title: "Бесплатные инструменты vs",
      manual: "РУЧНОЙ ПРОЦЕСС",
      automated: "WHISK АВТОМАТИЗАЦИЯ",
      manualEffort: "Высокий стресс + 6ч/день",
      autoEffort: "0 Взаимодействия + 5м Настройка"
    },
    pricing: {
      title: "Простые цены",
      monthly: "Ежемесячно",
      yearly: "Ежегодно",
      lifetime: "Пожизненно",
      mostPopular: "Самый популярный",
      save: "Сэкономьте дополнительно 20%",
      oneTime: "Разовый платеж"
    },
    faq: {
      title: "Часто задаваемые вопросы",
      items: [
        { q: "Как массово генерировать изображения?", a: "Просто загрузите CSV с вашими промптами, настройте персону и нажмите старт." },
        { q: "Почему Google Whisk медленный?", a: "Whisk Automation управляет очередью за вас, обеспечивая самое быстрое время генерации." },
        { q: "Есть ли автозагрузчик?", a: "Да! Каждое сгенерированное изображение автоматически скачивается в вашу папку." },
        { q: "Обрабатывает ли он лимиты скорости?", a: "Наша система 'Human-Flow' управляет темпом, чтобы предотвратить баны." }
      ]
    },
    cta: {
      title: "Начните массовую генерацию сегодня.",
      subtitle: "Присоединяйтесь к тысячам, кто использует нас для автоматизации рабочего процесса Google Whisk."
    }
  }
};

export const FEATURE_LIST = [
  { icon: Layers, title: "Whisk AI Batch Processing", desc: "Upload thousands of prompts at once. The ultimate answer to how to bulk generate images in Google Whisk." },
  { icon: Download, title: "Google Whisk Auto Downloader", desc: "Automatically detects and downloads every generated image. Export Whisk AI images in bulk instantly." },
  { icon: MousePointer2, title: "Automate Google Whisk Prompts", desc: "Natural timing patterns prevent rate limits. Truly streamline Google Labs Whisk workflows." },
  { icon: LayoutGrid, title: "Real-Time Queue Dashboard", desc: "Monitor progress, remaining prompts, and success rates live." },
  { icon: RefreshCcw, title: "Background Auto-Recovery", desc: "Automatically resumes if interrupted — perfect for Google Whisk workflow automation." },
  { icon: FileImage, title: "Multi-Format Image Export", desc: "Save as PNG, JPG, or WebP. The best way to export Whisk AI images in bulk." },
  { icon: Sparkles, title: "Whisk AI for Power Users", desc: "Smart compression and tagging. Designed for high-volume studios and agencies." },
];