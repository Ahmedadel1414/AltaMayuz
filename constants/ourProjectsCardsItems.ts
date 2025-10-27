export interface ProjectCard {
  id: number;
  image: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  category: string;
  categoryAr: string;
  year: string;
  client: string;
  clientAr: string;
}

export const projectsCards: ProjectCard[] = [
  {
    id: 1,
    image: "/logo.jpg",
    titleEn: "E-Commerce Platform Redesign",
    titleAr: "إعادة تصميم منصة التجارة الإلكترونية",
    descEn:
      "Complete redesign and development of a modern e-commerce platform with advanced features including real-time inventory management, AI-powered recommendations, and seamless checkout experience.",
    descAr:
      "إعادة تصميم وتطوير كاملة لمنصة تجارة إلكترونية حديثة مع ميزات متقدمة تشمل إدارة المخزون في الوقت الفعلي والتوصيات المدعومة بالذكاء الاصطناعي وتجربة دفع سلسة.",
    category: "E-Commerce",
    categoryAr: "التجارة الإلكترونية",
    year: "2024",
    client: "RetailCo",
    clientAr: "ريتيل كو",
  },
  {
    id: 2,
    image: "/logo.jpg",
    titleEn: "Healthcare Mobile App",
    titleAr: "تطبيق الرعاية الصحية للجوال",
    descEn:
      "Developed a comprehensive healthcare mobile application enabling patients to book appointments, access medical records, and consult with doctors remotely through secure video calls.",
    descAr:
      "طورنا تطبيق رعاية صحية شامل للجوال يمكّن المرضى من حجز المواعيد والوصول إلى السجلات الطبية والتشاور مع الأطباء عن بُعد من خلال مكالمات فيديو آمنة.",
    category: "Healthcare",
    categoryAr: "الرعاية الصحية",
    year: "2024",
    client: "MediCare Plus",
    clientAr: "ميدي كير بلس",
  },
  {
    id: 3,
    image: "/logo.jpg",
    titleEn: "Financial Dashboard System",
    titleAr: "نظام لوحة المعلومات المالية",
    descEn:
      "Built an enterprise-grade financial dashboard with real-time analytics, automated reporting, and advanced data visualization for better decision-making and financial insights.",
    descAr:
      "بنينا لوحة معلومات مالية على مستوى المؤسسات مع تحليلات في الوقت الفعلي وتقارير آلية وتصور بيانات متقدم لاتخاذ قرارات أفضل ورؤى مالية.",
    category: "Finance",
    categoryAr: "المالية",
    year: "2023",
    client: "FinTech Solutions",
    clientAr: "حلول التكنولوجيا المالية",
  },
  {
    id: 4,
    image: "/logo.jpg",
    titleEn: "Educational Learning Platform",
    titleAr: "منصة التعلم التعليمية",
    descEn:
      "Created an interactive learning platform with live classes, course management, progress tracking, and gamification features to enhance student engagement and learning outcomes.",
    descAr:
      "أنشأنا منصة تعليمية تفاعلية مع فصول مباشرة وإدارة الدورات وتتبع التقدم وميزات اللعب لتعزيز مشاركة الطلاب ونتائج التعلم.",
    category: "Education",
    categoryAr: "التعليم",
    year: "2024",
    client: "EduTech Academy",
    clientAr: "أكاديمية التعليم التقني",
  },
  {
    id: 5,
    image: "/logo.jpg",
    titleEn: "Real Estate Portal",
    titleAr: "بوابة العقارات",
    descEn:
      "Developed a comprehensive real estate portal with advanced search filters, virtual tours, mortgage calculators, and integrated CRM for property management and client relations.",
    descAr:
      "طورنا بوابة عقارية شاملة مع فلاتر بحث متقدمة وجولات افتراضية وحاسبات الرهن العقاري ونظام CRM متكامل لإدارة العقارات وعلاقات العملاء.",
    category: "Real Estate",
    categoryAr: "العقارات",
    year: "2023",
    client: "PropertyHub",
    clientAr: "مركز العقارات",
  },
  {
    id: 6,
    image: "/logo.jpg",
    titleEn: "Restaurant Management System",
    titleAr: "نظام إدارة المطاعم",
    descEn:
      "Built a complete restaurant management system with POS integration, online ordering, table reservations, inventory tracking, and customer loyalty programs.",
    descAr:
      "بنينا نظام إدارة مطاعم كامل مع تكامل نقاط البيع والطلب عبر الإنترنت وحجوزات الطاولات وتتبع المخزون وبرامج ولاء العملاء.",
    category: "Hospitality",
    categoryAr: "الضيافة",
    year: "2024",
    client: "Gourmet Restaurants",
    clientAr: "مطاعم جورميه",
  },
  {
    id: 7,
    image: "/logo.jpg",
    titleEn: "Logistics Tracking Platform",
    titleAr: "منصة تتبع اللوجستيات",
    descEn:
      "Developed a real-time logistics tracking platform with GPS integration, route optimization, delivery scheduling, and automated notifications for enhanced supply chain management.",
    descAr:
      "طورنا منصة تتبع لوجستية في الوقت الفعلي مع تكامل GPS وتحسين المسارات وجدولة التسليم والإشعارات الآلية لتحسين إدارة سلسلة التوريد.",
    category: "Logistics",
    categoryAr: "اللوجستيات",
    year: "2023",
    client: "FastShip Logistics",
    clientAr: "لوجستيات الشحن السريع",
  },
  {
    id: 8,
    image: "/logo.jpg",
    titleEn: "Social Media Analytics Tool",
    titleAr: "أداة تحليل وسائل التواصل الاجتماعي",
    descEn:
      "Created a powerful social media analytics tool with sentiment analysis, engagement metrics, competitor tracking, and automated reporting for data-driven marketing strategies.",
    descAr:
      "أنشأنا أداة تحليل قوية لوسائل التواصل الاجتماعي مع تحليل المشاعر ومقاييس المشاركة وتتبع المنافسين والتقارير الآلية لاستراتيجيات تسويق مبنية على البيانات.",
    category: "Marketing",
    categoryAr: "التسويق",
    year: "2024",
    client: "SocialMetrics",
    clientAr: "مقاييس التواصل الاجتماعي",
  },
  {
    id: 9,
    image: "/logo.jpg",
    titleEn: "Smart Home IoT System",
    titleAr: "نظام المنزل الذكي IoT",
    descEn:
      "Developed an integrated smart home IoT system with voice control, automated scheduling, energy monitoring, and security features for modern connected living.",
    descAr:
      "طورنا نظام منزل ذكي متكامل مع التحكم الصوتي والجدولة الآلية ومراقبة الطاقة وميزات الأمان للحياة المتصلة الحديثة.",
    category: "IoT",
    categoryAr: "إنترنت الأشياء",
    year: "2023",
    client: "SmartLiving Tech",
    clientAr: "تقنية الحياة الذكية",
  },
  {
    id: 10,
    image: "/logo.jpg",
    titleEn: "Corporate Website Redesign",
    titleAr: "إعادة تصميم موقع الشركة",
    descEn:
      "Complete redesign of corporate website with modern UI/UX, improved performance, SEO optimization, and integrated content management system for easy updates.",
    descAr:
      "إعادة تصميم كاملة لموقع الشركة مع واجهة مستخدم حديثة وأداء محسّن وتحسين SEO ونظام إدارة محتوى متكامل للتحديثات السهلة.",
    category: "Web Design",
    categoryAr: "تصميم الويب",
    year: "2024",
    client: "Global Enterprises",
    clientAr: "المؤسسات العالمية",
  },
  {
    id: 11,
    image: "/logo.jpg",
    titleEn: "Fitness Tracking App",
    titleAr: "تطبيق تتبع اللياقة البدنية",
    descEn:
      "Built a comprehensive fitness tracking app with workout plans, nutrition tracking, progress monitoring, and social features to motivate users and achieve fitness goals.",
    descAr:
      "بنينا تطبيق تتبع لياقة شامل مع خطط التمرين وتتبع التغذية ومراقبة التقدم والميزات الاجتماعية لتحفيز المستخدمين وتحقيق أهداف اللياقة.",
    category: "Health & Fitness",
    categoryAr: "الصحة واللياقة",
    year: "2024",
    client: "FitLife Pro",
    clientAr: "فيت لايف برو",
  },
  {
    id: 12,
    image: "/logo.jpg",
    titleEn: "Event Management Platform",
    titleAr: "منصة إدارة الفعاليات",
    descEn:
      "Created an all-in-one event management platform with ticketing, attendee management, live streaming, and analytics for successful event execution.",
    descAr:
      "أنشأنا منصة إدارة فعاليات شاملة مع التذاكر وإدارة الحضور والبث المباشر والتحليلات لتنفيذ فعاليات ناجحة.",
    category: "Events",
    categoryAr: "الفعاليات",
    year: "2023",
    client: "EventPro Solutions",
    clientAr: "حلول الفعاليات المحترفة",
  },
  {
    id: 13,
    image: "/logo.jpg",
    titleEn: "Banking Mobile App",
    titleAr: "تطبيق الخدمات المصرفية للجوال",
    descEn:
      "Developed a secure banking mobile app with biometric authentication, instant transfers, bill payments, and investment tracking for seamless financial management.",
    descAr:
      "طورنا تطبيق خدمات مصرفية آمن للجوال مع المصادقة البيومترية والتحويلات الفورية ودفع الفواتير وتتبع الاستثمارات لإدارة مالية سلسة.",
    category: "Banking",
    categoryAr: "الخدمات المصرفية",
    year: "2024",
    client: "National Bank",
    clientAr: "البنك الوطني",
  },
  {
    id: 14,
    image: "/logo.jpg",
    titleEn: "Travel Booking System",
    titleAr: "نظام حجز السفر",
    descEn:
      "Built a comprehensive travel booking system with flight search, hotel reservations, car rentals, and itinerary planning for seamless travel experiences.",
    descAr:
      "بنينا نظام حجز سفر شامل مع البحث عن الرحلات وحجوزات الفنادق وتأجير السيارات وتخطيط الرحلات لتجارب سفر سلسة.",
    category: "Travel",
    categoryAr: "السفر",
    year: "2023",
    client: "TravelEase",
    clientAr: "سهولة السفر",
  },
  {
    id: 15,
    image: "/logo.jpg",
    titleEn: "HR Management System",
    titleAr: "نظام إدارة الموارد البشرية",
    descEn:
      "Developed a complete HR management system with employee onboarding, payroll processing, performance reviews, and leave management for efficient workforce management.",
    descAr:
      "طورنا نظام إدارة موارد بشرية كامل مع تأهيل الموظفين ومعالجة الرواتب ومراجعات الأداء وإدارة الإجازات لإدارة فعالة للقوى العاملة.",
    category: "HR Tech",
    categoryAr: "تقنية الموارد البشرية",
    year: "2024",
    client: "WorkForce Pro",
    clientAr: "القوى العاملة المحترفة",
  },
  {
    id: 16,
    image: "/logo.jpg",
    titleEn: "Inventory Management System",
    titleAr: "نظام إدارة المخزون",
    descEn:
      "Created an advanced inventory management system with barcode scanning, stock alerts, supplier management, and automated reordering for optimal inventory control.",
    descAr:
      "أنشأنا نظام إدارة مخزون متقدم مع مسح الباركود وتنبيهات المخزون وإدارة الموردين وإعادة الطلب الآلي للتحكم الأمثل في المخزون.",
    category: "Supply Chain",
    categoryAr: "سلسلة التوريد",
    year: "2023",
    client: "StockMaster",
    clientAr: "ماستر المخزون",
  },
  {
    id: 17,
    image: "/logo.jpg",
    titleEn: "Video Streaming Platform",
    titleAr: "منصة بث الفيديو",
    descEn:
      "Built a scalable video streaming platform with adaptive bitrate streaming, content recommendations, user profiles, and subscription management for engaging content delivery.",
    descAr:
      "بنينا منصة بث فيديو قابلة للتوسع مع البث التكيفي للبت والتوصيات بالمحتوى وملفات المستخدمين وإدارة الاشتراكات لتقديم محتوى جذاب.",
    category: "Media",
    categoryAr: "الإعلام",
    year: "2024",
    client: "StreamNow",
    clientAr: "بث الآن",
  },
  {
    id: 18,
    image: "/logo.jpg",
    titleEn: "Appointment Scheduling System",
    titleAr: "نظام جدولة المواعيد",
    descEn:
      "Developed a flexible appointment scheduling system with calendar integration, automated reminders, online payments, and customer management for service businesses.",
    descAr:
      "طورنا نظام جدولة مواعيد مرن مع تكامل التقويم والتذكيرات الآلية والمدفوعات عبر الإنترنت وإدارة العملاء لأعمال الخدمات.",
    category: "Business Tools",
    categoryAr: "أدوات الأعمال",
    year: "2023",
    client: "BookEasy",
    clientAr: "الحجز السهل",
  },
  {
    id: 19,
    image: "/logo.jpg",
    titleEn: "Food Delivery App",
    titleAr: "تطبيق توصيل الطعام",
    descEn:
      "Created a comprehensive food delivery app with restaurant listings, real-time tracking, multiple payment options, and ratings system for convenient food ordering.",
    descAr:
      "أنشأنا تطبيق توصيل طعام شامل مع قوائم المطاعم والتتبع في الوقت الفعلي وخيارات دفع متعددة ونظام التقييمات لطلب طعام مريح.",
    category: "Food Tech",
    categoryAr: "تقنية الطعام",
    year: "2024",
    client: "QuickBite",
    clientAr: "اللقمة السريعة",
  },
  {
    id: 20,
    image: "/logo.jpg",
    titleEn: "Project Management Tool",
    titleAr: "أداة إدارة المشاريع",
    descEn:
      "Built a collaborative project management tool with task tracking, team communication, file sharing, and progress reporting for efficient project delivery.",
    descAr:
      "بنينا أداة إدارة مشاريع تعاونية مع تتبع المهام والتواصل الجماعي ومشاركة الملفات وتقارير التقدم لتسليم مشاريع فعال.",
    category: "Productivity",
    categoryAr: "الإنتاجية",
    year: "2023",
    client: "TeamFlow",
    clientAr: "تدفق الفريق",
  },
  {
    id: 21,
    image: "/logo.jpg",
    titleEn: "Online Marketplace Platform",
    titleAr: "منصة السوق الإلكتروني",
    descEn:
      "Developed a multi-vendor marketplace platform with seller dashboards, product management, secure payments, and dispute resolution for thriving online commerce.",
    descAr:
      "طورنا منصة سوق متعددة البائعين مع لوحات معلومات البائعين وإدارة المنتجات والمدفوعات الآمنة وحل النزاعات للتجارة الإلكترونية المزدهرة.",
    category: "Marketplace",
    categoryAr: "السوق الإلكتروني",
    year: "2024",
    client: "MarketHub",
    clientAr: "مركز السوق",
  },
  {
    id: 22,
    image: "/logo.jpg",
    titleEn: "Customer Support Portal",
    titleAr: "بوابة دعم العملاء",
    descEn:
      "Created a comprehensive customer support portal with ticketing system, knowledge base, live chat, and AI-powered chatbot for exceptional customer service.",
    descAr:
      "أنشأنا بوابة دعم عملاء شاملة مع نظام التذاكر وقاعدة المعرفة والدردشة المباشرة وروبوت الدردشة المدعوم بالذكاء الاصطناعي لخدمة عملاء استثنائية.",
    category: "Customer Service",
    categoryAr: "خدمة العملاء",
    year: "2023",
    client: "SupportDesk Pro",
    clientAr: "مكتب الدعم المحترف",
  },
  {
    id: 23,
    image: "/logo.jpg",
    titleEn: "Auction Platform",
    titleAr: "منصة المزادات",
    descEn:
      "Built a real-time auction platform with live bidding, automatic bid increments, payment processing, and seller verification for secure online auctions.",
    descAr:
      "بنينا منصة مزادات في الوقت الفعلي مع المزايدة المباشرة والزيادات التلقائية للمزايدة ومعالجة الدفع والتحقق من البائع للمزادات الإلكترونية الآمنة.",
    category: "Auction",
    categoryAr: "المزادات",
    year: "2024",
    client: "BidMaster",
    clientAr: "ماستر المزايدة",
  },
  {
    id: 24,
    image: "/logo.jpg",
    titleEn: "Subscription Management System",
    titleAr: "نظام إدارة الاشتراكات",
    descEn:
      "Developed a flexible subscription management system with recurring billing, plan customization, usage tracking, and automated renewals for SaaS businesses.",
    descAr:
      "طورنا نظام إدارة اشتراكات مرن مع الفوترة المتكررة وتخصيص الخطط وتتبع الاستخدام والتجديدات الآلية لأعمال SaaS.",
    category: "SaaS",
    categoryAr: "البرمجيات كخدمة",
    year: "2023",
    client: "SubsFlow",
    clientAr: "تدفق الاشتراكات",
  },
];
