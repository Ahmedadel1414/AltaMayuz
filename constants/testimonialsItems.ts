export interface Testimonial {
  id: number;
  nameEn: string;
  nameAr: string;
  positionEn: string;
  positionAr: string;
  companyEn: string;
  companyAr: string;
  testimonialEn: string;
  testimonialAr: string;
  avatar: string;
  rating: number;
}

export const testimonialsItems: Testimonial[] = [
  {
    id: 1,
    nameEn: "Sarah Johnson",
    nameAr: "سارة جونسون",
    positionEn: "CEO",
    positionAr: "المدير التنفيذي",
    companyEn: "TechVision Inc.",
    companyAr: "شركة تك فيجن",
    testimonialEn: "Working with AltaMayuz was an absolute pleasure. They delivered our e-commerce platform ahead of schedule with exceptional quality. Their team's expertise and dedication transformed our digital presence completely.",
    testimonialAr: "كان العمل مع ألتامايوز متعة مطلقة. قاموا بتسليم منصة التجارة الإلكترونية الخاصة بنا قبل الموعد المحدد بجودة استثنائية. خبرة فريقهم وتفانيهم حولوا حضورنا الرقمي بشكل كامل.",
    avatar: "/avatar1.png",
    rating: 5,
  },
  {
    id: 2,
    nameEn: "Mohammed Al-Rashid",
    nameAr: "محمد الراشد",
    positionEn: "Founder",
    positionAr: "المؤسس",
    companyEn: "HealthCare Plus",
    companyAr: "هيلث كير بلس",
    testimonialEn: "The mobile app they developed for our healthcare platform exceeded all expectations. The user experience is seamless, and our patient engagement has increased by 300%. Highly recommended!",
    testimonialAr: "تطبيق الجوال الذي طوروه لمنصة الرعاية الصحية فاق كل التوقعات. تجربة المستخدم سلسة، وزادت مشاركة مرضانا بنسبة 300٪. أنصح بهم بشدة!",
    avatar: "/avatar1.png",
    rating: 5,
  },
  {
    id: 3,
    nameEn: "Emily Chen",
    nameAr: "إيميلي تشين",
    positionEn: "Marketing Director",
    positionAr: "مديرة التسويق",
    companyEn: "Global Retail Group",
    companyAr: "مجموعة التجزئة العالمية",
    testimonialEn: "AltaMayuz transformed our online presence with a stunning website and comprehensive digital strategy. Their attention to detail and creative approach set them apart. We've seen a 250% increase in online sales!",
    testimonialAr: "حوّل ألتامايوز حضورنا على الإنترنت بموقع ويب مذهل واستراتيجية رقمية شاملة. اهتمامهم بالتفاصيل ونهجهم الإبداعي يميزهم. شهدنا زيادة بنسبة 250٪ في المبيعات عبر الإنترنت!",
    avatar: "/avatar1.png",
    rating: 5,
  },
  {
    id: 4,
    nameEn: "Ahmed Hassan",
    nameAr: "أحمد حسن",
    positionEn: "CTO",
    positionAr: "مدير التكنولوجيا",
    companyEn: "FinTech Solutions",
    companyAr: "حلول التكنولوجيا المالية",
    testimonialEn: "Outstanding technical expertise and professionalism. They built our financial dashboard with cutting-edge technology and robust security. The project was delivered on time and within budget. Couldn't be happier!",
    testimonialAr: "خبرة تقنية متميزة واحترافية عالية. بنوا لوحة المعلومات المالية بتقنية متطورة وأمان قوي. تم تسليم المشروع في الوقت المحدد وضمن الميزانية. لا يمكن أن أكون أكثر سعادة!",
    avatar: "/avatar1.png",
    rating: 5,
  },
];
