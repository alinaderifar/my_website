/**
 * Translations Module
 */

import { announce } from './accessibility.js';

const translations = {
  en: {
    nav_brand: "Ali Naderifar",
    nav_build: "What I Build",
    nav_services: "Services",
    nav_projects: "Projects",
    nav_workflow: "Process",
    nav_proof: "Proof",
    nav_contact: "Contact",

    hero_eyebrow: "Ali Naderifar",
    hero_headline: "AI Automation & Full-Stack Developer for Startups and Businesses",
    hero_subheadline: "I build AI-powered systems, SaaS platforms, automations, and rapid MVPs using Laravel, APIs, and modern web technologies.",
    hero_btn_primary: "View Projects",
    hero_btn_secondary: "Book a Call",

    build_title: "What I Build",
    build_subtitle: "Production systems that save time, reduce manual work, and scale with your business.",
    build_1: "AI Automation Systems",
    build_2: "Startup MVPs",
    build_3: "Internal Dashboards",
    build_4: "SaaS Platforms",
    build_5: "API Integrations",
    build_6: "Telegram / WhatsApp Automations",
    build_7: "Crypto Payment Integrations",

    services_title: "Services",
    services_subtitle: "Clear offerings for founders and operators who need reliable execution.",
    services_startup_title: "For Startups",
    services_startup_1: "Rapid MVP Development",
    services_startup_2: "AI Integrations",
    services_startup_3: "SaaS Development",
    services_startup_4: "API Systems",
    services_business_title: "For Businesses",
    services_business_1: "AI Customer Automation",
    services_business_2: "Workflow Automation",
    services_business_3: "Booking Systems",
    services_business_4: "CRM & Dashboard Systems",

    projects_title: "Selected Work",
    projects_subtitle: "Shipped products with measurable outcomes — not concept mockups.",
    project_1_title: "Lotfi Piano",
    project_1_outcome: "E-commerce and service-request portal for a piano retailer with product catalog and support workflows.",
    project_1_value: "Centralizes sales, technical support, and customer requests in one branded web experience.",
    project_2_title: "Gomgashteh Platform",
    project_2_outcome: "Community platform for posting and recovering lost items with user matching and notifications.",
    project_2_value: "Helps people reunite with belongings faster while keeping operations lightweight for a non-profit model.",
    project_3_title: "Pelak Haft CRM",
    project_3_outcome: "Customer and event management system for a wedding services company with scheduling and client records.",
    project_3_value: "Replaces scattered spreadsheets with one system staff use daily for bookings and follow-ups.",
    project_4_title: "Khabam Miad",
    project_4_outcome: "Mobile app for sleep tracking, guided meditation, and habit-building around better rest.",
    project_4_value: "Gives users daily insights and routines to improve sleep quality over time.",
    project_5_title: "Mask Detection App",
    project_5_outcome: "On-device AI app for mask detection and face recognition with real-time camera feedback.",
    project_5_value: "Supports compliance and safety checks without sending video to external servers.",
    project_6_title: "Farisam Commerce App",
    project_6_outcome: "Mobile storefront for browsing catalog, placing orders, and managing product content.",
    project_6_value: "Extends the brand’s reach with a native shopping experience tied to backend inventory.",
    project_7_title: "AI Object Detection App",
    project_7_outcome: "Real-time object detection and pose estimation with selectable on-device models (MobileNet, YOLOv2, PoseNet).",
    project_7_value: "Demonstrates production-ready mobile ML pipelines for vision-based product ideas.",
    project_8_title: "Shadi Avaran",
    project_8_outcome: "Promotional site with raffle flows and automated discount-code distribution for customers.",
    project_8_value: "Drives engagement and repeat purchases without manual code management.",
    project_preview_coming_soon: "Coming soon",
    project_demo_soon: "Demo coming soon",
    project_live_demo: "Live Demo",

    workflow_title: "How I Work",
    workflow_subtitle: "A straightforward process built for speed and clarity.",
    workflow_1_title: "Understand the problem",
    workflow_1_desc: "Align on goals, users, constraints, and what success looks like.",
    workflow_2_title: "Build a fast prototype",
    workflow_2_desc: "Ship something testable early so feedback informs the real build.",
    workflow_3_title: "Iterate quickly",
    workflow_3_desc: "Short cycles, clear communication, and focused scope per sprint.",
    workflow_4_title: "Deploy and maintain",
    workflow_4_desc: "Production deployment, monitoring, and ongoing improvements.",

    proof_title: "Proof of Execution",
    proof_subtitle: "Shipped software matters more than promises.",
    proof_stat_projects: "Products shipped",
    proof_stat_years: "Years building",
    proof_stat_ai: "On-device & API ML",
    proof_stat_stack: "Mobile + web + backend",
    proof_github: "View GitHub activity",
    proof_screenshots: "Browse project screenshots",

    contact_title: "Start a Project",
    contact_subtitle: "Tell me what you are building. I reply within 24 hours on business days.",
    contact_email: "Email",
    contact_telegram: "Telegram",
    contact_telegram_btn: "Message on Telegram",
    contact_github: "GitHub",
    contact_name_label: "Name",
    contact_email_label: "Email",
    contact_message_label: "Message",
    contact_name_placeholder: "Your name",
    contact_email_placeholder: "you@company.com",
    contact_message_placeholder: "Briefly describe your project, timeline, and budget range.",
    contact_btn: "Send message",

    footer_text: "© Ali Naderifar — AI Automation & Full-Stack Development",
    form_sending: "Sending...",
    form_success: "Message sent successfully!",
    form_error: "Failed to send message. Please try again."
  },

  fa: {
    nav_brand: "علی نادری‌فر",
    nav_build: "چه می‌سازم",
    nav_services: "خدمات",
    nav_projects: "پروژه‌ها",
    nav_workflow: "فرایند",
    nav_proof: "اثبات کار",
    nav_contact: "تماس",

    hero_eyebrow: "علی نادری‌فر",
    hero_headline: "توسعه‌دهنده اتوماسیون هوش مصنوعی و فول‌استک برای استارتاپ‌ها و کسب‌وکارها",
    hero_subheadline: "سیستم‌های مبتنی بر هوش مصنوعی، پلتفرم‌های SaaS، اتوماسیون و MVP سریع با Laravel، API و فناوری‌های وب مدرن می‌سازم.",
    hero_btn_primary: "مشاهده پروژه‌ها",
    hero_btn_secondary: "رزرو تماس",

    build_title: "چه می‌سازم",
    build_subtitle: "سیستم‌های production که زمان را ذخیره می‌کنند، کار دستی را کم می‌کنند و با کسب‌وکار شما مقیاس می‌گیرند.",
    build_1: "سیستم‌های اتوماسیون هوش مصنوعی",
    build_2: "MVP استارتاپی",
    build_3: "داشبوردهای داخلی",
    build_4: "پلتفرم‌های SaaS",
    build_5: "یکپارچه‌سازی API",
    build_6: "اتوماسیون تلگرام / واتساپ",
    build_7: "یکپارچه‌سازی پرداخت رمزارز",

    services_title: "خدمات",
    services_subtitle: "پیشنهادهای شفاف برای بنیان‌گذاران و کسب‌وکارهایی که به اجرای قابل اعتماد نیاز دارند.",
    services_startup_title: "برای استارتاپ‌ها",
    services_startup_1: "توسعه سریع MVP",
    services_startup_2: "یکپارچه‌سازی هوش مصنوعی",
    services_startup_3: "توسعه SaaS",
    services_startup_4: "سیستم‌های API",
    services_business_title: "برای کسب‌وکارها",
    services_business_1: "اتوماسیون مشتری با هوش مصنوعی",
    services_business_2: "اتوماسیون گردش کار",
    services_business_3: "سیستم‌های رزرو",
    services_business_4: "CRM و داشبورد",

    projects_title: "کارهای منتخب",
    projects_subtitle: "محصولات تحویل‌شده با نتیجه قابل اندازه‌گیری — نه ماکاپ مفهومی.",
    project_1_title: "لطفی پیانو",
    project_1_outcome: "پورتال فروش و درخواست سرویس برای فروشگاه پیانو با کاتالوگ و پشتیبانی.",
    project_1_value: "فروش، پشتیبانی فنی و درخواست مشتری در یک تجربه وب یکپارچه.",
    project_2_title: "پلتفرم گم‌گشته",
    project_2_outcome: "پلتفرم جامعه‌محور برای آگهی و بازیابی اشیای گم‌شده با اعلان و تطبیق کاربر.",
    project_2_value: "بازگرداندن سریع‌تر اشیاء با عملیات سبک برای مدل غیرانتفاعی.",
    project_3_title: "CRM پلاک هفت",
    project_3_outcome: "مدیریت مشتری و رویداد برای خدمات عروسی با زمان‌بندی و پرونده.",
    project_3_value: "جایگزین صفحات گسترده با یک سیستم روزانه برای رزرو و پیگیری.",
    project_4_title: "خوابم میاد",
    project_4_outcome: "اپ موبایل ردیابی خواب، مدیتیشن و عادت‌های بهبود استراحت.",
    project_4_value: "بینش و روال روزانه برای کیفیت خواب بهتر.",
    project_5_title: "اپ تشخیص ماسک",
    project_5_outcome: "هوش مصنوعی روی دستگاه برای تشخیص ماسک و چهره با بازخورد لحظه‌ای.",
    project_5_value: "کنترل ایمنی بدون ارسال ویدیو به سرورهای خارجی.",
    project_6_title: "اپ فروش فریسام",
    project_6_outcome: "فروشگاه موبایل برای مرور، سفارش و مدیریت محصول.",
    project_6_value: "تجربه خرید بومی متصل به موجودی پشتیبان.",
    project_7_title: "اپ تشخیص اجسام",
    project_7_outcome: "تشخیص اجسام و pose در لحظه با مدل‌های MobileNet، YOLOv2، PoseNet.",
    project_7_value: "خط لوله ML موبایل آماده production برای ایده‌های بینایی.",
    project_8_title: "شادی‌آوران",
    project_8_outcome: "سایت پروموشن با قرعه‌کشی و توزیع خودکار کد تخفیف.",
    project_8_value: "تعامل و خرید تکراری بدون مدیریت دستی کد.",
    project_preview_coming_soon: "به‌زودی",
    project_demo_soon: "دمو به‌زودی",
    project_live_demo: "دمو زنده",

    workflow_title: "نحوه کار من",
    workflow_subtitle: "فرایندی ساده برای سرعت و شفافیت.",
    workflow_1_title: "درک مسئله",
    workflow_1_desc: "هم‌راستایی اهداف، کاربران، محدودیت‌ها و تعریف موفقیت.",
    workflow_2_title: "نمونه اولیه سریع",
    workflow_2_desc: "تحویل زودهنگام برای هدایت ساخت نهایی با بازخورد واقعی.",
    workflow_3_title: "تکرار سریع",
    workflow_3_desc: "چرخه‌های کوتاه، ارتباط شفاف و دامنه متمرکز.",
    workflow_4_title: "استقرار و نگهداری",
    workflow_4_desc: "استقرار production، پایش و بهبود مستمر.",

    proof_title: "اثبات اجرا",
    proof_subtitle: "نرم‌افزار تحویل‌شده مهم‌تر از وعده است.",
    proof_stat_projects: "محصول تحویل‌شده",
    proof_stat_years: "سال تجربه",
    proof_stat_ai: "ML روی دستگاه و API",
    proof_stat_stack: "موبایل + وب + بک‌اند",
    proof_github: "فعالیت گیت‌هاب",
    proof_screenshots: "مشاهده اسکرین‌شات پروژه‌ها",

    contact_title: "شروع پروژه",
    contact_subtitle: "بگویید چه می‌سازید. در روزهای کاری ظرف ۲۴ ساعت پاسخ می‌دهم.",
    contact_email: "ایمیل",
    contact_telegram: "تلگرام",
    contact_telegram_btn: "پیام در تلگرام",
    contact_github: "گیت‌هاب",
    contact_name_label: "نام",
    contact_email_label: "ایمیل",
    contact_message_label: "پیام",
    contact_name_placeholder: "نام شما",
    contact_email_placeholder: "you@company.com",
    contact_message_placeholder: "پروژه، زمان‌بندی و بودجه را کوتاه توضیح دهید.",
    contact_btn: "ارسال پیام",

    footer_text: "© علی نادری‌فر — اتوماسیون هوش مصنوعی و توسعه فول‌استک",
    form_sending: "در حال ارسال...",
    form_success: "پیام با موفقیت ارسال شد!",
    form_error: "ارسال ناموفق بود. دوباره تلاش کنید."
  },

  ar: {
    nav_brand: "علي نادري فر",
    nav_build: "ما أبنيه",
    nav_services: "الخدمات",
    nav_projects: "المشاريع",
    nav_workflow: "العملية",
    nav_proof: "الإثبات",
    nav_contact: "اتصل",

    hero_eyebrow: "علي نادري فر",
    hero_headline: "مطور أتمتة الذكاء الاصطناعي وفول ستاك للشركات الناشئة والأعمال",
    hero_subheadline: "أبني أنظمة مدعومة بالذكاء الاصطناعي ومنصات SaaS وأتمتة وMVP سريعة باستخدام Laravel وواجهات برمجة التطبيقات والتقنيات الحديثة.",
    hero_btn_primary: "عرض المشاريع",
    hero_btn_secondary: "حجز مكالمة",

    build_title: "ما أبنيه",
    build_subtitle: "أنظمة إنتاجية توفر الوقت وتقلل العمل اليدوي وتتوسع مع عملك.",
    build_1: "أنظمة أتمتة الذكاء الاصطناعي",
    build_2: "MVP للشركات الناشئة",
    build_3: "لوحات تحكم داخلية",
    build_4: "منصات SaaS",
    build_5: "تكامل واجهات API",
    build_6: "أتمتة تيليجرام / واتساب",
    build_7: "تكامل مدفوعات العملات الرقمية",

    services_title: "الخدمات",
    services_subtitle: "عروض واضحة للمؤسسين والمشغلين الذين يحتاجون تنفيذاً موثوقاً.",
    services_startup_title: "للشركات الناشئة",
    services_startup_1: "تطوير MVP سريع",
    services_startup_2: "تكامل الذكاء الاصطناعي",
    services_startup_3: "تطوير SaaS",
    services_startup_4: "أنظمة API",
    services_business_title: "للأعمال",
    services_business_1: "أتمتة العملاء بالذكاء الاصطناعي",
    services_business_2: "أتمتة سير العمل",
    services_business_3: "أنظمة الحجز",
    services_business_4: "CRM وأنظمة لوحات التحكم",

    projects_title: "أعمال مختارة",
    projects_subtitle: "منتجات مُسلّمة بنتائج قابلة للقياس — وليست نماذج مفاهيمية.",
    project_1_title: "لطفي بيانو",
    project_1_outcome: "بوابة تجارة إلكترونية وطلبات خدمة لمتجر بيانو مع كتالوج ودعم.",
    project_1_value: "مركزية المبيعات والدعم الفني وطلبات العملاء في تجربة ويب واحدة.",
    project_2_title: "منصة گم‌گشته",
    project_2_outcome: "منصة مجتمعية للإعلان عن المفقودات والموجودات مع إشعارات ومطابقة.",
    project_2_value: "إعادة الأشياء أسرع مع عمليات خفيفة لنموذج غير ربحي.",
    project_3_title: "CRM پلاک هفت",
    project_3_outcome: "إدارة العملاء والفعاليات لخدمات الأعراس مع الجدولة والسجلات.",
    project_3_value: "استبدال جداول متفرقة بنظام يومي للحجوزات والمتابعة.",
    project_4_title: "خوابم میاد",
    project_4_outcome: "تطبيق للنوم والتأمل وبناء عادات راحة أفضل.",
    project_4_value: "رؤى وروتين يومي لتحسين جودة النوم.",
    project_5_title: "تطبيق كشف الكمامة",
    project_5_outcome: "ذكاء اصطناعي على الجهاز لكشف الكمامة والوجه مع تغذية راجعة فورية.",
    project_5_value: "فحوصات السلامة دون إرسال الفيديو لخوادم خارجية.",
    project_6_title: "تطبيق فریسام",
    project_6_outcome: "متجر موبايل للتصفح والطلب وإدارة المنتجات.",
    project_6_value: "تجربة تسوق أصلية مرتبطة بالمخزون الخلفي.",
    project_7_title: "تطبيق كشف الأجسام",
    project_7_outcome: "كشف الأجسام والوضعية في الوقت الفعلي مع MobileNet وYOLOv2 وPoseNet.",
    project_7_value: "خط أنابيب ML جاهز للإنتاج لأفكار الرؤية الحاسوبية.",
    project_8_title: "شادي آوران",
    project_8_outcome: "موقع ترويجي مع سحوبات وتوزيع تلقائي لأكواد الخصم.",
    project_8_value: "تفاعل وشراء متكرر دون إدارة يدوية للأكواد.",
    project_preview_coming_soon: "قريباً",
    project_demo_soon: "العرض قريباً",
    project_live_demo: "عرض مباشر",

    workflow_title: "كيف أعمل",
    workflow_subtitle: "عملية مباشرة للسرعة والوضوح.",
    workflow_1_title: "فهم المشكلة",
    workflow_1_desc: "التوافق على الأهداف والمستخدمين والقيود وتعريف النجاح.",
    workflow_2_title: "نموذج أولي سريع",
    workflow_2_desc: "تسليم مبكر قابل للاختبار لتوجيه البناء الحقيقي.",
    workflow_3_title: "تكرار سريع",
    workflow_3_desc: "دورات قصيرة وتواصل واضح ونطاق مركز.",
    workflow_4_title: "النشر والصيانة",
    workflow_4_desc: "نشر الإنتاج والمراقبة والتحسين المستمر.",

    proof_title: "إثبات التنفيذ",
    proof_subtitle: "البرمجيات المُسلّمة أهم من الوعود.",
    proof_stat_projects: "منتجات مُسلّمة",
    proof_stat_years: "سنوات البناء",
    proof_stat_ai: "ML على الجهاز وAPI",
    proof_stat_stack: "موبايل + ويب + خلفية",
    proof_github: "نشاط GitHub",
    proof_screenshots: "تصفح لقطات المشاريع",

    contact_title: "ابدأ مشروعاً",
    contact_subtitle: "أخبرني بما تبنيه. أرد خلال 24 ساعة في أيام العمل.",
    contact_email: "البريد",
    contact_telegram: "تيليجرام",
    contact_telegram_btn: "راسلني على تيليجرام",
    contact_github: "GitHub",
    contact_name_label: "الاسم",
    contact_email_label: "البريد",
    contact_message_label: "الرسالة",
    contact_name_placeholder: "اسمك",
    contact_email_placeholder: "you@company.com",
    contact_message_placeholder: "صف المشروع والجدول الزمني والميزانية بإيجاز.",
    contact_btn: "إرسال الرسالة",

    footer_text: "© علي نادري فر — أتمتة الذكاء الاصطناعي وتطوير فول ستاك",
    form_sending: "جاري الإرسال...",
    form_success: "تم إرسال الرسالة بنجاح!",
    form_error: "فشل الإرسال. حاول مرة أخرى."
  }
};

let currentLang = 'en';

export function initTranslations() {
  const savedLang = localStorage.getItem('portfolio-lang');
  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
  }
  applyLanguage(currentLang);
  setupLanguageSwitcher();
}

export function switchLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('portfolio-lang', lang);
  applyLanguage(lang);
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  const messages = {
    en: 'Language changed to English',
    fa: 'زبان به فارسی تغییر کرد',
    ar: 'تم تغيير اللغة إلى العربية'
  };
  announce(messages[lang] || messages.en);
  window.dispatchEvent(new CustomEvent('language:changed', { detail: { language: lang } }));
}

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  const isRTL = lang === 'ar' || lang === 'fa';
  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.dir = isRTL ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key]) el.placeholder = t[key];
  });

  updateProjects(t);
  updateContact(t);
}

function updateProjects(t) {
  const section = document.getElementById('projects');
  if (!section) return;
  const cards = section.querySelectorAll('.project-showcase-card');
  cards.forEach((card) => {
    const n = card.dataset.projectNum;
    if (!n) return;
    const h3 = card.querySelector('h3');
    const outcome = card.querySelector('.project-outcome');
    const value = card.querySelector('.project-value');
    if (h3 && t[`project_${n}_title`]) h3.textContent = t[`project_${n}_title`];
    if (outcome && t[`project_${n}_outcome`]) outcome.textContent = t[`project_${n}_outcome`];
    if (value && t[`project_${n}_value`]) value.textContent = t[`project_${n}_value`];
  });
}

function updateContact(t) {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const nameInput = form.querySelector('#name');
  const emailInput = form.querySelector('#email');
  const messageInput = form.querySelector('#message');
  const submitBtn = form.querySelector('.btn-primary');
  if (nameInput) nameInput.placeholder = t.contact_name_placeholder;
  if (emailInput) emailInput.placeholder = t.contact_email_placeholder;
  if (messageInput) messageInput.placeholder = t.contact_message_placeholder;
  if (submitBtn) submitBtn.textContent = t.contact_btn;
}

function setupLanguageSwitcher() {
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang) switchLanguage(lang);
    });
  });
}

export function getCurrentLanguage() {
  return currentLang;
}

export function setLanguage(lang) {
  switchLanguage(lang);
}
