/**
 * Translations Module
 * Handles multi-language support with lazy loading
 */

// Translation data - split by language for better performance
const translations = {
  en: {
    // Navigation
    nav_brand: "Portfolio",
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_contact: "Contact",
    
    // Hero Section
    hero_badge: "Available for Work",
    hero_name: "John Developer",
    hero_role: "Software Developer",
    hero_description: "Passionate developer specializing in Flutter mobile applications and Laravel backend systems. Building scalable, user-friendly solutions for modern businesses.",
    hero_btn_primary: "View My Work",
    hero_btn_secondary: "Get In Touch",
    hero_stat_years: "Years Experience",
    hero_stat_projects: "Projects Completed",
    hero_stat_clients: "Happy Clients",
    
    // About Section
    about_title: "About Me",
    about_subtitle: "Get to know more about my journey and expertise",
    about_text_1: "I'm a dedicated software developer with a passion for creating innovative digital solutions. With expertise in both frontend mobile development and robust backend systems, I bridge the gap between user experience and server-side functionality.",
    about_text_2: "My journey in software development has been driven by a commitment to continuous learning and delivering high-quality code that makes a real impact. I thrive on solving complex problems and turning ideas into reality.",
    about_highlight_1_title: "Full-Stack Expertise",
    about_highlight_1_desc: "End-to-end development capabilities",
    about_highlight_2_title: "Agile Methodology",
    about_highlight_2_desc: "Scrum and iterative development",
    about_highlight_3_title: "Team Collaboration",
    about_highlight_3_desc: "Effective communication and leadership",
    
    // Skills Section
    skills_title: "Skills & Technologies",
    skills_subtitle: "Interactive skill showcases and demonstrations",
    skills_flutter_title: "Flutter Development",
    skills_laravel_title: "Laravel Development",
    skill_dart: "Dart",
    skill_flutter: "Flutter Framework",
    skill_state: "State Management",
    skill_firebase: "Firebase Integration",
    skill_uiux: "UI/UX Design",
    skill_php: "PHP/Laravel",
    skill_api: "RESTful APIs",
    skill_database: "MySQL/PostgreSQL",
    skill_redis: "Redis/Caching",
    skill_testing: "Testing (PHPUnit)",
    skill_level_expert: "Expert",
    skill_level_advanced: "Advanced",
    
    // Experience Section
    experience_title: "Work Experience",
    experience_subtitle: "My professional journey",
    exp_1_title: "Senior Software Developer",
    exp_1_company: "Tech Solutions Inc.",
    exp_1_date: "2022 - Present",
    exp_1_desc_1: "Lead development of cross-platform mobile applications using Flutter",
    exp_1_desc_2: "Designed and implemented RESTful APIs with Laravel for mobile backend",
    exp_1_desc_3: "Mentored junior developers in best practices and code quality",
    exp_1_desc_4: "Improved app performance by 40% through optimization techniques",
    exp_2_title: "Full-Stack Developer",
    exp_2_company: "Digital Innovations Ltd.",
    exp_2_date: "2020 - 2022",
    exp_2_desc_1: "Developed 15+ mobile applications using Flutter framework",
    exp_2_desc_2: "Built scalable backend services with Laravel and MySQL",
    exp_2_desc_3: "Integrated third-party APIs and payment gateways",
    exp_2_desc_4: "Implemented CI/CD pipelines for automated testing and deployment",
    exp_3_title: "Software Developer",
    exp_3_company: "WebCraft Studios",
    exp_3_date: "2019 - 2020",
    exp_3_desc_1: "Developed web applications using Laravel framework",
    exp_3_desc_2: "Collaborated with UI/UX designers to implement responsive interfaces",
    exp_3_desc_3: "Wrote clean, maintainable code following SOLID principles",
    exp_3_desc_4: "Participated in code reviews and technical discussions",
    
    // Projects Section
    projects_title: "Featured Projects",
    projects_subtitle: "Interactive demos and live experiences",
    project_1_title: "E-Commerce Mobile App",
    project_1_desc: "A full-featured shopping application with real-time inventory, secure payments, and personalized recommendations.",
    project_2_title: "Task Management System",
    project_2_desc: "Enterprise-grade project management platform with team collaboration, file sharing, and progress tracking.",
    project_3_title: "Healthcare Portal",
    project_3_desc: "Secure patient management system with appointment scheduling, medical records, and telemedicine features.",
    
    // Contact Section
    contact_title: "Get In Touch",
    contact_subtitle: "Let's work together on your next project",
    contact_email: "Email",
    contact_email_value: "hello@johndev.com",
    contact_phone: "Phone",
    contact_phone_value: "+1 (555) 123-4567",
    contact_location: "Location",
    contact_location_value: "San Francisco, CA",
    contact_name_placeholder: "Your Name",
    contact_email_placeholder: "Your Email",
    contact_message_placeholder: "Your Message",
    contact_btn: "Send Message",
    
    // Footer
    footer_text: "© 2024 John Developer. All rights reserved.",
    
    // Form messages
    form_sending: "Sending...",
    form_success: "Message sent successfully!",
    form_error: "Failed to send message. Please try again."
  },
  
  fa: {
    // Navigation
    nav_brand: "پورتفولیو",
    nav_home: "خانه",
    nav_about: "درباره من",
    nav_skills: "مهارت‌ها",
    nav_experience: "تجربه",
    nav_projects: "پروژه‌ها",
    nav_contact: "تماس",
    
    // Hero Section
    hero_badge: "آماده کار",
    hero_name: "جان توسعه‌دهنده",
    hero_role: "توسعه‌دهنده نرم‌افزار",
    hero_description: "توسعه‌دهنده پرانرژی که به ایجاد راهکارهای دیجیتال نوین متعطش است. با تخصص در توسعه اپلیکیشن‌های موبایل با فلتر و سیستم‌های پشتیبان قدرتمند با لارفل، راهکارهای مقیاس‌پذیر و کاربرپسند برای کسب‌وکارهای مدرن ایجاد می‌کنم.",
    hero_btn_primary: "نمایش کارهای من",
    hero_btn_secondary: "تماس با من",
    hero_stat_years: "سال سابقه",
    hero_stat_projects: "پروژه‌های تکمیل شده",
    hero_stat_clients: "مشتریان راضی",
    
    // About Section
    about_title: "درباره من",
    about_subtitle: "بیشتر بدانید درباره مسیرم و تخصصم",
    about_text_1: "من یک توسعه‌دهنده نرم‌افزار متعطله‌ام که به ایجاد راهکارهای دیجیتال نوین پرانرژی متعطشم. با تخصص در توسعه موبایل و سیستم‌های پشتیبان قدرتمند، من فاصله بین تجربه کاربر و عملکرد سمت سرور را پر می‌کنم.",
    about_text_2: "مسیر من در توسعه نرم‌افزار توسط التزام به یادگیری مستمر و ارائه کد باکیفیت که تأثیر واقعی ایجاد می‌کند، هدایت شده است. من در حل مسائل پیچیده و تبدیل ایده‌ها به واقعیت می‌روزم.",
    about_highlight_1_title: "تخصص تمام‌پشتیب",
    about_highlight_1_desc: "توانایی‌های توسعه من الی انتها",
    about_highlight_2_title: "روش‌شناسی چابک",
    about_highlight_2_desc: "اسکرام و توسعه تکراری",
    about_highlight_3_title: "همکاری تیمی",
    about_highlight_3_desc: "ارتباط موثر و رهبری",
    
    // Skills Section
    skills_title: "مهارت‌ها و فناوری‌ها",
    skills_subtitle: "فناوری‌هایی که در آن تخصص دارم",
    skills_flutter_title: "توسعه فلتر",
    skills_laravel_title: "توسعه لاراول",
    skill_dart: "دارت",
    skill_flutter: "فریم‌ورک فلتر",
    skill_state: "مدیریت وضعیت",
    skill_firebase: "یکپارچگی فایربیس",
    skill_uiux: "طراحی رابط کاربری",
    skill_php: "پی‌اچ‌پی/لارفل",
    skill_api: "هوشمندسازی‌های استراحت",
    skill_database: "میواس‌کیو‌ال/پستگره‌اس‌کیو‌ال",
    skill_redis: "رددیس/کشینگ",
    skill_testing: "تست (پی‌اچ‌پی‌یونیت)",
    skill_level_expert: "متخصص",
    skill_level_advanced: "پیشرفته",
    
    // Experience Section
    experience_title: "سوابق کاری",
    experience_subtitle: "مسیر حرفه‌ای من",
    exp_1_title: "توسعه‌دهنده نرم‌افزار ارشد",
    exp_1_company: "شرکت راهکارهای فناوری",
    exp_1_date: "۲۰۲۲ - تاکنون",
    exp_1_desc_1: "هدایت توسعه اپلیکیشن‌های متقاطع پلتفرم با استفاده از فلتر",
    exp_1_desc_2: "طراحی و پیاده‌سازی هوشمندسازی‌های استراحت با لارفل برای پشتیبان موبایل",
    exp_1_desc_3: "راهنمایی توسعه‌دهندگان مبتدی در بهترین شیوه‌ها و کیفیت کد",
    exp_1_desc_4: "بهبود ۴۰ درصدی عملکرد اپلیکیشن از طریق تکنیک‌های بهینه‌سازی",
    exp_2_title: "توسعه‌دهنده شامل",
    exp_2_company: "مخترعان دیجیتال",
    exp_2_date: "۲۰۲۰ - ۲۰۲۲",
    exp_2_desc_1: "توسعه ۱۵+ اپلیکیشن موباایل با استفاده از فریم‌ورک فلتر",
    exp_2_desc_2: "ساخت خدمات پشتیبان مقیاس‌پذیر با لاراول و مای‌اس‌کیو‌ال",
    exp_2_desc_3: "یکپارچگی با هوشمندسازی‌های شخص ثالث و درگاه‌های پرداخت",
    exp_2_desc_4: "پیاده‌سازی خطوط لوله سی‌آی/سی‌دی برای تست و استقرار خودکار",
    exp_3_title: "توسعه‌دهنده نرم‌افزار",
    exp_3_company: "استودیوهای وبکرفت",
    exp_3_date: "۲۰۱۹ - ۲۰۲۰",
    exp_3_desc_1: "توسعه برنامه‌های تحت وب با استفاده از فریم‌ورک لاراول",
    exp_3_desc_2: "همکاری با طراحان رابط کاربری برای پیاده‌سازی رابط‌های پاسخگو",
    exp_3_desc_3: "نوشتن کد تمیز و قابل نگهداری با رعایت اصول سلید",
    exp_3_desc_4: "شرکت در بررسی‌های کد و بحث‌های تکنیکی",
    
    // Projects Section
    projects_title: "پروژه‌های برجسته",
    projects_subtitle: "برخی از کارهای اخیر من",
    project_1_title: "اپلیکیشن تجارت الکترونیک",
    project_1_desc: "اپلیکیشن خرید کامل با موجودی لحظه‌ای، پرداخت‌های ایمن و پیشنهادات شخصی‌سازی‌شده.",
    project_2_title: "نظام مدیریت وظایف",
    project_2_desc: "پلتفرم مدیریت پروژه سطح کسب‌وکار با همکاری تیم، اشتراک فایل و ردیابی پیشرفت.",
    project_3_title: "پورتال مراقبت‌های بهداشتی",
    project_3_desc: "نظام مدیریت بیمار امن با جدول‌ریزی نوبت، پرونده‌های پزشکی و ویژگی‌های مراقبت از راه دور.",
    
    // Contact Section
    contact_title: "تماس با من",
    contact_subtitle: "بیایید در پروژه بعدی شما همکاری کنیم",
    contact_email: "ایمیل",
    contact_email_value: "hello@johndev.com",
    contact_phone: "تلفن",
    contact_phone_value: "+1 (555) 123-4567",
    contact_location: "مکان",
    contact_location_value: "سنفرانسیسکو، کالیفرنیا",
    contact_name_placeholder: "نام شما",
    contact_email_placeholder: "ایمیل شما",
    contact_message_placeholder: "پیام شما",
    contact_btn: "ارسال پیام",
    
    // Footer
    footer_text: "© ۲۰۲۴ جان توسعه‌دهنده. تمام حقوق محفوظ است.",
    
    // Form messages
    form_sending: "در حال ارسال...",
    form_success: "پیام با موفقیت ارسال شد!",
    form_error: "ارسال پیام با شکست مواجه شد. لطفاً دوباره تلاش کنید."
  },
  
  ar: {
    // Navigation
    nav_brand: "معرض الأعمال",
    nav_home: "الرئيسية",
    nav_about: "حول",
    nav_skills: "المهارات",
    nav_experience: "الخبرة",
    nav_projects: "المشاريع",
    nav_contact: "اتصل",
    
    // Hero Section
    hero_badge: "متاح للعمل",
    hero_name: "جون المطور",
    hero_role: "مطور برمجيات",
    hero_description: "مطور شغوف متخصص في تطبيقات فلتر المحمول وأنظمة لارفل الخلفية القوية. بناء حلول قابلة للتطوير وسهلة الاستخدام للشركات الحديثة.",
    hero_btn_primary: "عرض أعمالي",
    hero_btn_secondary: "تواصل معي",
    hero_stat_years: "سنوات الخبرة",
    hero_stat_projects: "المشاريع المكتملة",
    hero_stat_clients: "العملاء السعداء",
    
    // About Section
    about_title: "حولي",
    about_subtitle: "تعرف أكثر على رحلتي وخبراتي",
    about_text_1: "أنا مطور برمجيات ملتزم وشغوف بإنشاء حلول رقمية مبتكرة. بخبرة في تطوير الواجهات الأمامية للهواتف المحمولة والأنظمة الخلفية القوية، أربط الفجوة بين تجربة المستخدم ووظائف الخادم.",
    about_text_2: "رحلتي في تطوير البرمجيات قادتها الالتزام بالتعلم المستمر وتقديم كود عالي الجودة الذي يحدث أثراً حقيقياً. أنأزدهر في حل المشكلات المعقدة وتحويل الأفكار إلى حقيقة.",
    about_highlight_1_title: "خبرة شاملة",
    about_highlight_1_desc: "قدرات تطوير من البداية للنهاية",
    about_highlight_2_title: "المنهجية المرنة",
    about_highlight_2_desc: "سكرام والتطوير التكراري",
    about_highlight_3_title: "التعاون الجماعي",
    about_highlight_3_desc: "تواصل فعال وقيادة",
    
    // Skills Section
    skills_title: "المهارات والتقنيات",
    skills_subtitle: "التقنيات التي أتميز فيها",
    skills_flutter_title: "تطوير فلتر",
    skills_laravel_title: "تطوير لارفل",
    skill_dart: "دارت",
    skill_flutter: "إطار فلتر",
    skill_state: "إدارة الحالة",
    skill_firebase: "تكامل فايربيس",
    skill_uiux: "تصميم واجهة المستخدم",
    skill_php: "بي إتش بي/لارفل",
    skill_api: "واجهات برمجة تطبيقات",
    skill_database: "ميو إس كيو إل/بوستجر إس كيو إل",
    skill_redis: "ريديس/التخزين المؤقت",
    skill_testing: "اختبار (بي إتش بي يونيت)",
    skill_level_expert: "خبير",
    skill_level_advanced: "متقدم",
    
    // Experience Section
    experience_title: "الخبرة العملية",
    experience_subtitle: "رحلتي المهنية",
    exp_1_title: "مطور برمجيات أقدم",
    exp_1_company: "شركة حلول التقنية",
    exp_1_date: "2022 - حتى الآن",
    exp_1_desc_1: "قيادة تطوير تطبيقات متعددة المنصات باستخدام فلتر",
    exp_1_desc_2: "تصميم وتنفيذ واجهات برمجة تطبيقات استراحة مع لارفل للخلفية المحمولة",
    exp_1_desc_3: "توجيه المطورين المبتدئين في أفضل الممارسات وجودة الكود",
    exp_1_desc_4: "تحسين أداء التطبيق بنسبة 40% من خلال تقنيات التحسين",
    exp_2_title: "مطور شامل",
    exp_2_company: "الابتكارات الرقمية",
    exp_2_date: "2020 - 2022",
    exp_2_desc_1: "تطوير 15+ تطبيقات موبايل باستخدام إطار فلتر",
    exp_2_desc_2: "بناء خدمات خلفية قابلة للتطوير مع لارفل وميو إس كيو إل",
    exp_2_desc_3: "دمج واجهات برمجة تطبيقات الطرف الثالث وبوابات الدفع",
    exp_2_desc_4: "تنفيذ خطوط أنابيب التكامل المستمر/التسليم المستمر للاختبار والتوزيع الآلي",
    exp_3_title: "مطور برمجيات",
    exp_3_company: "استوديوهات ويبكرافت",
    exp_3_date: "2019 - 2020",
    exp_3_desc_1: "تطوير تطبيقات ويب باستخدام إطار لارفل",
    exp_3_desc_2: "التعاون مع مصممي واجهة المستخدم لتنفيذ واجهات استجابة",
    exp_3_desc_3: "كتابة كود نظيف وقابل للصيانة مع اتباع مبادئ سوليد",
    exp_3_desc_4: "المشاركة في مراجعات الكود والمناقشات التقنية",
    
    // Projects Section
    projects_title: "المشاريع المميزة",
    projects_subtitle: "بعض أعمالي الحديثة",
    project_1_title: "تطبيق تجارة إلكترونية",
    project_1_desc: "تطبيق تسوق كامل الميزات مع مخزون فوري، مدفوعات آمنة، وتوصيات مخصصة.",
    project_2_title: "نظام إدارة المهام",
    project_2_desc: "منصة إدارة مشاريع مستوى الشركات مع تعاون الفريق، مشاركة الملفات، وتتبع التقدم.",
    project_3_title: "بوابة الرعاية الصحية",
    project_3_desc: "نظام إدارة المرضى الآمن مع جدولة المواعيد، السجلات الطبية، وميزات الرعاية عن بُعد.",
    
    // Contact Section
    contact_title: "تواصل معي",
    contact_subtitle: "دعنا نعمل معاً في مشروعك القادم",
    contact_email: "البريد الإلكتروني",
    contact_email_value: "hello@johndev.com",
    contact_phone: "الهاتف",
    contact_phone_value: "+1 (555) 123-4567",
    contact_location: "الموقع",
    contact_location_value: "سان فرانسيسكو، كاليفورنيا",
    contact_name_placeholder: "اسمك",
    contact_email_placeholder: "بريدك الإلكتروني",
    contact_message_placeholder: "رسالتك",
    contact_btn: "إرسال الرسالة",
    
    // Footer
    footer_text: "© ۲۰۲۴ جون المطور. جميع الحقوق محفوظة.",
    
    // Form messages
    form_sending: "جاري الإرسال...",
    form_success: "تم إرسال الرسالة بنجاح!",
    form_error: "فشل إرسال الرسالة. يرجى المحاولة مرة أخرى."
  }
};

// Current language state
let currentLang = 'en';

/**
 * Initialize translations
 */
export function initTranslations() {
  // Set initial language from localStorage or default to English
  const savedLang = localStorage.getItem('portfolio-lang');
  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
  }
  
  // Apply initial language
  applyLanguage(currentLang);
  
  // Set up language switcher buttons
  setupLanguageSwitcher();
}

/**
 * Set up language switcher buttons
 */
function setupLanguageSwitcher() {
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      switchLanguage(lang);
    });
  });
}

/**
 * Switch language
 */
export function switchLanguage(lang) {
  if (!translations[lang]) return;
  
  currentLang = lang;
  localStorage.setItem('portfolio-lang', lang);
  applyLanguage(lang);
  
  // Update active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Update page direction for RTL languages
  const body = document.body;
  if (lang === 'ar' || lang === 'fa') {
    body.setAttribute('dir', 'rtl');
  } else {
    body.setAttribute('dir', 'ltr');
  }
  
  // Dispatch language change event
  window.dispatchEvent(new CustomEvent('language:changed', { 
    detail: { language: lang } 
  }));
}

/**
 * Apply translations to the page
 */
function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) {
      el.textContent = t[key];
    }
  });
  
  // Update navigation
  updateNavigation(t);
  
  // Update hero section
  updateHero(t);
  
  // Update about section
  updateAbout(t);
  
  // Update skills section
  updateSkills(t);
  
  // Update experience section
  updateExperience(t);
  
  // Update projects section
  updateProjects(t);
  
  // Update contact section
  updateContact(t);
  
  // Update footer
  updateFooter(t);
}

/**
 * Update navigation elements
 */
function updateNavigation(t) {
  const navBrand = document.querySelector('.nav-brand');
  const navLinks = document.querySelectorAll('.nav-link');
  
  if (navBrand) navBrand.textContent = t.nav_brand;
  if (navLinks.length >= 6) {
    navLinks[0].textContent = t.nav_home;
    navLinks[1].textContent = t.nav_about;
    navLinks[2].textContent = t.nav_skills;
    navLinks[3].textContent = t.nav_experience;
    navLinks[4].textContent = t.nav_projects;
    navLinks[5].textContent = t.nav_contact;
  }
}

/**
 * Update hero section
 */
function updateHero(t) {
  const badgeText = document.querySelector('.badge-text');
  const heroName = document.querySelector('.hero-name');
  const heroRole = document.querySelector('.hero-role');
  const heroDescription = document.querySelector('.hero-description');
  const heroBtns = document.querySelectorAll('.btn-primary, .btn-secondary');
  const statLabels = document.querySelectorAll('.stat-label');
  
  if (badgeText) badgeText.textContent = t.hero_badge;
  if (heroName) heroName.textContent = t.hero_name;
  if (heroRole) heroRole.textContent = t.hero_role;
  if (heroDescription) heroDescription.textContent = t.hero_description;
  
  if (heroBtns.length >= 2) {
    heroBtns[0].textContent = t.hero_btn_primary;
    heroBtns[1].textContent = t.hero_btn_secondary;
  }
  
  if (statLabels.length >= 3) {
    statLabels[0].textContent = t.hero_stat_years;
    statLabels[1].textContent = t.hero_stat_projects;
    statLabels[2].textContent = t.hero_stat_clients;
  }
}

/**
 * Update about section
 */
function updateAbout(t) {
  const aboutSection = document.getElementById('about');
  if (!aboutSection) return;
  
  const sectionTitle = aboutSection.querySelector('.section-title');
  const sectionSubtitle = aboutSection.querySelector('.section-subtitle');
  const aboutParagraphs = aboutSection.querySelectorAll('.about-text p');
  const highlightItems = aboutSection.querySelectorAll('.highlight-item');
  
  if (sectionTitle) sectionTitle.textContent = t.about_title;
  if (sectionSubtitle) sectionSubtitle.textContent = t.about_subtitle;
  
  if (aboutParagraphs.length >= 2) {
    aboutParagraphs[0].textContent = t.about_text_1;
    aboutParagraphs[1].textContent = t.about_text_2;
  }
  
  if (highlightItems.length >= 3) {
    highlightItems[0].querySelector('h4').textContent = t.about_highlight_1_title;
    highlightItems[0].querySelector('p').textContent = t.about_highlight_1_desc;
    highlightItems[1].querySelector('h4').textContent = t.about_highlight_2_title;
    highlightItems[1].querySelector('p').textContent = t.about_highlight_2_desc;
    highlightItems[2].querySelector('h4').textContent = t.about_highlight_3_title;
    highlightItems[2].querySelector('p').textContent = t.about_highlight_3_desc;
  }
}

/**
 * Update skills section
 */
function updateSkills(t) {
  const skillsSection = document.getElementById('skills');
  if (!skillsSection) return;
  
  const sectionTitle = skillsSection.querySelector('.section-title');
  const sectionSubtitle = skillsSection.querySelector('.section-subtitle');
  const skillCategories = skillsSection.querySelectorAll('.skill-category h3');
  
  if (sectionTitle) sectionTitle.textContent = t.skills_title;
  if (sectionSubtitle) sectionSubtitle.textContent = t.skills_subtitle;
  
  if (skillCategories.length >= 2) {
    skillCategories[0].textContent = t.skills_flutter_title;
    skillCategories[1].textContent = t.skills_laravel_title;
  }
  
  // Update skill names and levels
  const skillNames = document.querySelectorAll('.skill-name');
  const skillLevels = document.querySelectorAll('.skill-level');
  
  if (skillNames.length >= 10 && skillLevels.length >= 10) {
    // Flutter skills
    skillNames[0].textContent = t.skill_dart;
    skillLevels[0].textContent = t.skill_level_expert;
    skillNames[1].textContent = t.skill_flutter;
    skillLevels[1].textContent = t.skill_level_expert;
    skillNames[2].textContent = t.skill_state;
    skillLevels[2].textContent = t.skill_level_advanced;
    skillNames[3].textContent = t.skill_firebase;
    skillLevels[3].textContent = t.skill_level_advanced;
    skillNames[4].textContent = t.skill_uiux;
    skillLevels[4].textContent = t.skill_level_advanced;
    
    // Laravel skills
    skillNames[5].textContent = t.skill_php;
    skillLevels[5].textContent = t.skill_level_expert;
    skillNames[6].textContent = t.skill_api;
    skillLevels[6].textContent = t.skill_level_expert;
    skillNames[7].textContent = t.skill_database;
    skillLevels[7].textContent = t.skill_level_advanced;
    skillNames[8].textContent = t.skill_redis;
    skillLevels[8].textContent = t.skill_level_advanced;
    skillNames[9].textContent = t.skill_testing;
    skillLevels[9].textContent = t.skill_level_advanced;
  }
}

/**
 * Update experience section
 */
function updateExperience(t) {
  const experienceSection = document.getElementById('experience');
  if (!experienceSection) return;
  
  const sectionTitle = experienceSection.querySelector('.section-title');
  const sectionSubtitle = experienceSection.querySelector('.section-subtitle');
  const timelineItems = experienceSection.querySelectorAll('.timeline-item');
  
  if (sectionTitle) sectionTitle.textContent = t.experience_title;
  if (sectionSubtitle) sectionSubtitle.textContent = t.experience_subtitle;
  
  if (timelineItems.length >= 3) {
    // Experience 1
    timelineItems[0].querySelector('h3').textContent = t.exp_1_title;
    timelineItems[0].querySelector('.timeline-company').textContent = t.exp_1_company;
    timelineItems[0].querySelector('.timeline-date').textContent = t.exp_1_date;
    const desc1 = timelineItems[0].querySelectorAll('.timeline-description li');
    if (desc1.length >= 4) {
      desc1[0].textContent = t.exp_1_desc_1;
      desc1[1].textContent = t.exp_1_desc_2;
      desc1[2].textContent = t.exp_1_desc_3;
      desc1[3].textContent = t.exp_1_desc_4;
    }
    
    // Experience 2
    timelineItems[1].querySelector('h3').textContent = t.exp_2_title;
    timelineItems[1].querySelector('.timeline-company').textContent = t.exp_2_company;
    timelineItems[1].querySelector('.timeline-date').textContent = t.exp_2_date;
    const desc2 = timelineItems[1].querySelectorAll('.timeline-description li');
    if (desc2.length >= 4) {
      desc2[0].textContent = t.exp_2_desc_1;
      desc2[1].textContent = t.exp_2_desc_2;
      desc2[2].textContent = t.exp_2_desc_3;
      desc2[3].textContent = t.exp_2_desc_4;
    }
    
    // Experience 3
    timelineItems[2].querySelector('h3').textContent = t.exp_3_title;
    timelineItems[2].querySelector('.timeline-company').textContent = t.exp_3_company;
    timelineItems[2].querySelector('.timeline-date').textContent = t.exp_3_date;
    const desc3 = timelineItems[2].querySelectorAll('.timeline-description li');
    if (desc3.length >= 4) {
      desc3[0].textContent = t.exp_3_desc_1;
      desc3[1].textContent = t.exp_3_desc_2;
      desc3[2].textContent = t.exp_3_desc_3;
      desc3[3].textContent = t.exp_3_desc_4;
    }
  }
}

/**
 * Update projects section
 */
function updateProjects(t) {
  const projectsSection = document.getElementById('projects');
  if (!projectsSection) return;
  
  const sectionTitle = projectsSection.querySelector('.section-title');
  const sectionSubtitle = projectsSection.querySelector('.section-subtitle');
  const projectCards = projectsSection.querySelectorAll('.project-card');
  
  if (sectionTitle) sectionTitle.textContent = t.projects_title;
  if (sectionSubtitle) sectionSubtitle.textContent = t.projects_subtitle;
  
  if (projectCards.length >= 3) {
    projectCards[0].querySelector('h3').textContent = t.project_1_title;
    projectCards[0].querySelector('p').textContent = t.project_1_desc;
    projectCards[1].querySelector('h3').textContent = t.project_2_title;
    projectCards[1].querySelector('p').textContent = t.project_2_desc;
    projectCards[2].querySelector('h3').textContent = t.project_3_title;
    projectCards[2].querySelector('p').textContent = t.project_3_desc;
  }
}

/**
 * Update contact section
 */
function updateContact(t) {
  const contactSection = document.getElementById('contact');
  if (!contactSection) return;
  
  const sectionTitle = contactSection.querySelector('.section-title');
  const sectionSubtitle = contactSection.querySelector('.section-subtitle');
  const contactItems = contactSection.querySelectorAll('.contact-item');
  const contactForm = contactSection.querySelector('.contact-form');
  
  if (sectionTitle) sectionTitle.textContent = t.contact_title;
  if (sectionSubtitle) sectionSubtitle.textContent = t.contact_subtitle;
  
  if (contactItems.length >= 3) {
    contactItems[0].querySelector('h4').textContent = t.contact_email;
    contactItems[0].querySelector('p').textContent = t.contact_email_value;
    contactItems[1].querySelector('h4').textContent = t.contact_phone;
    contactItems[1].querySelector('p').textContent = t.contact_phone_value;
    contactItems[2].querySelector('h4').textContent = t.contact_location;
    contactItems[2].querySelector('p').textContent = t.contact_location_value;
  }
  
  if (contactForm) {
    const nameInput = contactForm.querySelector('#name');
    const emailInput = contactForm.querySelector('#email');
    const messageInput = contactForm.querySelector('#message');
    const submitBtn = contactForm.querySelector('.btn-primary');
    
    if (nameInput) nameInput.placeholder = t.contact_name_placeholder;
    if (emailInput) emailInput.placeholder = t.contact_email_placeholder;
    if (messageInput) messageInput.placeholder = t.contact_message_placeholder;
    if (submitBtn) submitBtn.textContent = t.contact_btn;
  }
}

/**
 * Update footer
 */
function updateFooter(t) {
  const footerText = document.querySelector('.footer-content p');
  if (footerText) footerText.textContent = t.footer_text;
}

/**
 * Get current language
 */
export function getCurrentLanguage() {
  return currentLang;
}

/**
 * Set language (alias for switchLanguage)
 */
export function setLanguage(lang) {
  switchLanguage(lang);
}