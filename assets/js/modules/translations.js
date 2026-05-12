/**
 * Translations Module
 * Handles multi-language support with lazy loading
 */

import { announce } from './accessibility.js';

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
    hero_name: "Ali Naderifar",
     hero_role: "Software Developer",
     hero_description: "Passionate software developer specializing in Flutter mobile applications and Laravel backend systems. Building scalable, user-friendly solutions for modern businesses.",
    hero_btn_primary: "View My Work",
    hero_btn_secondary: "Get In Touch",
    hero_stat_years: "Years Experience",
    hero_stat_projects: "Projects Completed",
    hero_stat_clients: "Happy Clients",
    hero_phone_card_orders: "New Orders",
    hero_phone_card_orders_delta: "+12% from yesterday",
    hero_phone_card_revenue: "Revenue",
    hero_phone_card_revenue_delta: "+8% this week",
    hero_phone_order_status_shipped: "Shipped",
    hero_phone_order_status_packing: "Packing",
    hero_phone_order_status_new: "New",
    hero_phone_search_placeholder: "Search orders…",
    hero_phone_search_recent_cables: "Recent: cables",
    hero_phone_search_recent_usbc: "Recent: USB-C",
    hero_phone_profile_name: "You",
    hero_phone_profile_role_label: "Role",
    hero_phone_profile_role_value: "Admin",
    hero_phone_profile_since_label: "Since",
    hero_phone_profile_since_value: "2024",
    hero_phone_nav_home: "Home",
    hero_phone_nav_orders: "Orders",
    hero_phone_nav_search: "Search",
    hero_phone_nav_profile: "Profile",
    
    // About Section
    about_title: "About Me",
    about_subtitle: "Get to know more about my journey and expertise",
    about_text_1: "I build mobile and web products with Flutter and Laravel, and I care as much about how the code is written as how the app feels in someone's hand.",
    about_text_2: "Most of my work has been with small teams and real clients, where you learn quickly, fix things when they break, and ship features people actually use.",
    about_highlight_1_title: "Full-Stack Expertise",
    about_highlight_1_desc: "End-to-end development capabilities",
    about_highlight_2_title: "Team Collaboration",
    about_highlight_2_desc: "Clear communication and working well with designers, clients, and other developers",
    
    // Skills Section
    skills_title: "Skills & Technologies",
    skills_subtitle: "Interactive skill showcases and demonstrations",
    skills_flutter_title: "Flutter Development",
    skills_laravel_title: "Laravel Development",
    skills_react_title: "React.js Development",
    skills_flutter_tree_title: "Flutter Skill Tree",
    skills_laravel_tree_title: "Laravel Skill Tree",
    skills_react_tree_title: "React Skill Tree",
    skills_flutter_mastery_title: "Flutter Mastery",
    skills_flutter_mastery_desc: "Cross-platform excellence",
    skills_dart_expert_title: "Dart Expert",
    skills_dart_expert_desc: "Modern language mastery",
    skills_framework_deep_title: "Framework Deep Dive",
    skills_framework_deep_desc: "Architecture & patterns",
    skills_state_management_title: "State Management",
    skills_state_management_desc: "Riverpod, Bloc & Provider",
    skills_firebase_integration_title: "Firebase Integration",
    skills_firebase_integration_desc: "Backend & real-time DB",
    skills_ui_ux_design_title: "UI/UX Design",
    skills_ui_ux_design_desc: "Pixel-perfect interfaces",
    skills_laravel_expert_title: "Laravel Expert",
    skills_laravel_expert_desc: "PHP framework mastery",
    skills_restful_apis_title: "RESTful APIs",
    skills_restful_apis_desc: "Clean architecture design",
    skills_mysql_postgresql_title: "MySQL/PostgreSQL",
    skills_mysql_postgresql_desc: "Database optimization",
    skills_redis_caching_title: "Redis/Caching",
    skills_redis_caching_desc: "Performance optimization",
    skills_phpunit_testing_title: "PHPUnit Testing",
    skills_phpunit_testing_desc: "TDD & quality assurance",
    
    // React Skills
    skills_react_mastery_title: "React Mastery",
    skills_react_mastery_desc: "Component-based architecture",
    skills_react_hooks_title: "React Hooks",
    skills_react_hooks_desc: "useState, useEffect, custom hooks",
    skills_react_native_title: "React Native",
    skills_react_native_desc: "Cross-platform mobile apps",
    skills_react_state_title: "State Management",
    skills_react_state_desc: "Redux, Zustand",
skills_nextjs_title: "Next.js",
    skills_nextjs_desc: "SSR, SSG, API routes",
    skills_typescript_title: "TypeScript",
    skills_typescript_desc: "Type-safe development",
    
    // Experience Section
    experience_title: "Work Experience",
    experience_subtitle: "My professional journey",
    exp_1_title: "Senior Software Developer",
    exp_1_company: "Freelancer",
     exp_1_date: "2025 - Present",
     exp_1_desc_1: "Lead development of cross-platform mobile applications using Flutter",
     exp_1_desc_2: "Designed and implemented RESTful APIs with Laravel for mobile backend",
     exp_1_desc_3: "Mentored junior developers in best practices and code quality",
     exp_1_desc_4: "Improved app performance by 40% through optimization techniques",
     exp_2_title: "Full-Stack Developer",
     exp_2_company: "Web Arka Pars",
     exp_2_date: "2021 - 2025",
     exp_2_desc_1: "Developed 15+ mobile applications using Flutter framework",
     exp_2_desc_2: "Built scalable backend services with Laravel and MySQL",
     exp_2_desc_3: "Integrated third-party APIs and payment gateways",
     exp_2_desc_4: "Implemented CI/CD pipelines for automated testing and deployment",
     exp_3_title: "Flutter Intern",
     exp_3_company: "Prata Tech",
     exp_3_date: "2020 - 2021",
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
    project_4_title: "AI Chat Application",
    project_4_desc: "Intelligent chatbot with natural language processing and real-time responses.",
    project_5_title: "Social Media Platform",
    project_5_desc: "Feature-rich social networking platform with real-time messaging and content sharing.",
    project_click_preview: "Click me",

    // Contact Section
    contact_title: "Get In Touch",
    contact_subtitle: "Let's work together on your next project",
    contact_email: "Email",
    contact_email_value: "alinaderifar02468@gmail.com",
    contact_github: "GitHub",
    contact_github_link_text: "github.com/alinaderifar",
    contact_linkedin: "LinkedIn",
    contact_linkedin_link_text: "linkedin.com/in/ali-naderifar-014703224",
    contact_phone: "Phone",
    contact_phone_value: "+98 912 345 6789",
    contact_location: "Location",
    contact_location_value: "Tehran, Iran",
    contact_name_placeholder: "Your Name",
    contact_email_placeholder: "Your Email",
    contact_message_placeholder: "Your Message",
    contact_btn: "Send Message",
    
    // Footer
    footer_text: "© Made with Love by Me",
    
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
    hero_name: "علی نادری‌فر",
    hero_role: "توسعه‌دهنده نرم‌افزار",
    hero_description: "توسعه‌دهنده پرانرژی که به ایجاد راهکارهای دیجیتال نوین متعطش است. با تخصص در توسعه اپلیکیشن‌های موبایل با فلتر و سیستم‌های پشتیبان قدرتمند با لارفل، راهکارهای مقیاس‌پذیر و کاربرپسند برای کسب‌وکارهای مدرن ایجاد می‌کنم.",
    hero_btn_primary: "نمایش کارهای من",
    hero_btn_secondary: "تماس با من",
    hero_stat_years: "سال سابقه",
    hero_stat_projects: "پروژه‌های تکمیل شده",
    hero_stat_clients: "مشتریان راضی",
    hero_phone_card_orders: "سفارش‌های جدید",
    hero_phone_card_orders_delta: "+۱۲٪ نسبت به دیروز",
    hero_phone_card_revenue: "درآمد",
    hero_phone_card_revenue_delta: "+۸٪ این هفته",
    hero_phone_order_status_shipped: "ارسال‌شده",
    hero_phone_order_status_packing: "در حال بسته‌بندی",
    hero_phone_order_status_new: "جدید",
    hero_phone_search_placeholder: "جستجوی سفارش‌ها…",
    hero_phone_search_recent_cables: "اخیر: کابل‌ها",
    hero_phone_search_recent_usbc: "اخیر: USB-C",
    hero_phone_profile_name: "شما",
    hero_phone_profile_role_label: "نقش",
    hero_phone_profile_role_value: "مدیر",
    hero_phone_profile_since_label: "از",
    hero_phone_profile_since_value: "۲۰۲۴",
    hero_phone_nav_home: "خانه",
    hero_phone_nav_orders: "سفارش‌ها",
    hero_phone_nav_search: "جستجو",
    hero_phone_nav_profile: "پروفایل",
    
    // About Section
    about_title: "درباره من",
    about_subtitle: "بیشتر بدانید درباره مسیرم و تخصصم",
    about_text_1: "با Flutter و Laravel اپلیکیشن موبایل و وب می‌سازم. برایم مهم است کد تمیز بنویسم و محصولی که تحویل می‌دهم در دست کاربر حس خوبی داشته باشد.",
    about_text_2: "بیشتر کارهایم با تیم‌های کوچک و مشتری‌های واقعی بوده؛ جایی که سریع یاد می‌گیری، وقتی چیزی خراب می‌شود درستش می‌کنی و قابلیت‌هایی می‌سازی که مردم واقعاً استفاده می‌کنند.",
    about_highlight_1_title: "تخصص تمام‌پشتیب",
    about_highlight_1_desc: "توانایی توسعه از ابتدا تا انتها",
    about_highlight_2_title: "همکاری تیمی",
    about_highlight_2_desc: "ارتباط شفاف و کار کردن با طراحان، مشتریان و توسعه‌دهندگان دیگر",
    
    // Skills Section
    skills_title: "مهارت‌ها و فناوری‌ها",
    skills_subtitle: "فناوری‌هایی که در آن تخصص دارم",
    skills_flutter_title: "Flutter Development",
    skills_laravel_title: "Laravel Development",
    skills_react_title: "React.js Development",
    skills_flutter_tree_title: "Flutter Skill Tree",
    skills_laravel_tree_title: "Laravel Skill Tree",
    skills_react_tree_title: "React Skill Tree",
    skills_flutter_mastery_title: "Flutter Mastery",
    skills_flutter_mastery_desc: "برتری چند پلتفرمی",
    skills_dart_expert_title: "کارشناس دارت",
    skills_dart_expert_desc: "تسلط زبان مدرن",
    skills_framework_deep_title: "غوطه‌وری عمیق فریم‌ورک",
    skills_framework_deep_desc: "معماری و الگوها",
    skills_state_management_title: "مدیریت وضعیت",
    skills_state_management_desc: "ریورپاد، بلاک و ارائه‌دهنده",
    skills_firebase_integration_title: "یکپارچگی فایربیس",
    skills_firebase_integration_desc: "پشتیبان و پایگاه داده لحظه‌ای",
    skills_ui_ux_design_title: "طراحی رابط کاربری",
    skills_ui_ux_design_desc: "رابط‌های پیکسل کامل",
    skills_laravel_expert_title: "Laravel Expert",
    skills_laravel_expert_desc: "تسلط فریم‌ورک پی‌اچ‌پی",
    skills_restful_apis_title: "هوشمندسازی‌های استراحت",
    skills_restful_apis_desc: "طراحی معماری پاک",
    skills_mysql_postgresql_title: "میواس‌کیو‌ال/پستگره‌اس‌کیو‌ال",
    skills_mysql_postgresql_desc: "بهینه‌سازی پایگاه داده",
    skills_redis_caching_title: "رددیس/کشینگ",
    skills_redis_caching_desc: "بهینه‌سازی عملکرد",
    skills_phpunit_testing_title: "تست پی‌اچ‌پی‌یونیت",
    skills_phpunit_testing_desc: "توسعه آزمون محور و تضمین کیفیت",
    
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
    exp_4_title: "توسعه‌دهنده میکروسرویس لاراول",
    exp_4_company: "شرکت راهکارهای فناوری",
    exp_4_date: "۲۰۲۲ - ۲۰۲۴",
    exp_4_desc_1: "طراحی و پیاده‌سازی معماری میکروسرویس با لاراول و داکر",
    exp_4_desc_2: "ساخت ارتباط رویداد-محور بین سرویس‌ها با استفاده از صف پیام (RabbitMQ/Redis)",
    exp_4_desc_3: "پیاده‌سازی الگوی دروازه API با احراز هویت JWT و محدودسازی نرخ",
    exp_4_desc_4: "بسته‌بندی سرویس‌ها با Docker و مدیریت با Kubernetes",
    exp_4_desc_5: "دستیابی به 99.9% آپتایم با مقیاس‌پذیری افقی و تعادل بار",

    // Projects Section
    projects_title: "پروژه‌های برجسته",
    projects_subtitle: "برخی از کارهای اخیر من",
    project_1_title: "اپلیکیشن تجارت الکترونیک",
    project_1_desc: "اپلیکیشن خرید کامل با موجودی لحظه‌ای، پرداخت‌های ایمن و پیشنهادات شخصی‌سازی‌شده.",
    project_2_title: "نظام مدیریت وظایف",
    project_2_desc: "پلتفرم مدیریت پروژه سطح کسب‌وکار با همکاری تیم، اشتراک فایل و ردیابی پیشرفت.",
    project_3_title: "پورتال مراقبت‌های بهداشتی",
    project_3_desc: "نظام مدیریت بیمار امن با جدول‌ریزی نوبت، پرونده‌های پزشکی و ویژگی‌های مراقبت از راه دور.",
    project_4_title: "اپلیکیشن چت هوشمند",
    project_4_desc: "چت‌بات هوشمند با پردازش زبان طبیعی و پاسخ‌دهی به صورت لحظه‌ای.",
    project_5_title: "پلتفرم شبکه اجتماعی",
    project_5_desc: "پلتفرم شبکه اجتماعی پرکاربرد با پیام‌رسانی لحظه‌ای و اشتراک‌گذاری محتوا.",
    project_click_preview: "پیش‌نمایش",

    // Contact Section
    contact_title: "تماس با من",
    contact_subtitle: "بیایید در پروژه بعدی شما همکاری کنیم",
    contact_email: "ایمیل",
    contact_email_value: "alinaderifar02468@gmail.com",
    contact_github: "گیت‌هاب",
    contact_github_link_text: "github.com/alinaderifar",
    contact_linkedin: "لینکدین",
    contact_linkedin_link_text: "linkedin.com/in/ali-naderifar-014703224",
    contact_phone: "تلفن",
    contact_phone_value: "+98 912 345 6789",
    contact_location: "مکان",
    contact_location_value: "تهران، ایران",
    contact_name_placeholder: "نام شما",
    contact_email_placeholder: "ایمیل شما",
    contact_message_placeholder: "پیام شما",
    contact_btn: "ارسال پیام",
    
    // Footer
    footer_text: "© Made with Love by Me",
    
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
    hero_name: "علي نادريفر",
    hero_role: "مطور برمجيات",
    hero_description: "مطور شغوف متخصص في تطبيقات فلتر المحمول وأنظمة لارفل الخلفية القوية. بناء حلول قابلة للتطوير وسهلة الاستخدام للشركات الحديثة.",
    hero_btn_primary: "عرض أعمالي",
    hero_btn_secondary: "تواصل معي",
    hero_stat_years: "سنوات الخبرة",
    hero_stat_projects: "المشاريع المكتملة",
    hero_stat_clients: "العملاء السعداء",
    hero_phone_card_orders: "طلبات جديدة",
    hero_phone_card_orders_delta: "+١٢٪ عن أمس",
    hero_phone_card_revenue: "الإيرادات",
    hero_phone_card_revenue_delta: "+٨٪ هذا الأسبوع",
    hero_phone_order_status_shipped: "تم الشحن",
    hero_phone_order_status_packing: "قيد التعبئة",
    hero_phone_order_status_new: "جديد",
    hero_phone_search_placeholder: "ابحث في الطلبات…",
    hero_phone_search_recent_cables: "الأخيرة: كابلات",
    hero_phone_search_recent_usbc: "الأخيرة: USB-C",
    hero_phone_profile_name: "أنت",
    hero_phone_profile_role_label: "الدور",
    hero_phone_profile_role_value: "مسؤول",
    hero_phone_profile_since_label: "منذ",
    hero_phone_profile_since_value: "٢٠٢٤",
    hero_phone_nav_home: "الرئيسية",
    hero_phone_nav_orders: "الطلبات",
    hero_phone_nav_search: "بحث",
    hero_phone_nav_profile: "الملف الشخصي",
    
    // About Section
    about_title: "حولي",
    about_subtitle: "تعرف أكثر على رحلتي وخبراتي",
    about_text_1: "أبني تطبيقات للجوال والويب باستخدام Flutter وLaravel، وأهتم بأن يكون الكود نظيفاً قدر اهتمامي بأن يشعر المستخدم بالتطبيق في يده.",
    about_text_2: "معظم عملي كان مع فرق صغيرة وعملاء حقيقيين؛ تتعلّم بسرعة، تصلّح ما يتعطل، وتطلق ميزات يستخدمها الناس فعلاً.",
    about_highlight_1_title: "خبرة شاملة",
    about_highlight_1_desc: "قدرات تطوير من البداية للنهاية",
    about_highlight_2_title: "التعاون الجماعي",
    about_highlight_2_desc: "تواصل واضح والعمل مع المصممين والعملاء والمطورين الآخرين",
    
    // Skills Section
    skills_title: "المهارات والتقنيات",
    skills_subtitle: "التقنيات التي أتميز فيها",
    skills_flutter_title: "Flutter Development",
    skills_laravel_title: "Laravel Development",
    skills_flutter_tree_title: "Flutter Skill Tree",
    skills_laravel_tree_title: "Laravel Skill Tree",
    skills_flutter_mastery_title: "Flutter Mastery",
    skills_flutter_mastery_desc: "التميز عبر المنصات",
    skills_dart_expert_title: "خبير دارت",
    skills_dart_expert_desc: "إتقان اللغة الحديثة",
    skills_framework_deep_title: "الغوص العميق في الإطار",
    skills_framework_deep_desc: "الهندسة المعمارية والأنماط",
    skills_state_management_title: "إدارة الحالة",
    skills_state_management_desc: "ريفربود، بلوك وموفّر",
    skills_firebase_integration_title: "تكامل فايربيس",
    skills_firebase_integration_desc: "الخلفية وقاعدة البيانات في الوقت الفعلي",
    skills_ui_ux_design_title: "تصميم واجهة المستخدم",
    skills_ui_ux_design_desc: "واجهات مثالية بالبكسل",
    skills_laravel_expert_title: "Laravel Expert",
    skills_laravel_expert_desc: "إتقان إطار بي إتش بي",
    skills_restful_apis_title: "واجهات برمجة تطبيقات",
    skills_restful_apis_desc: "تصميم الهندسة المعمارية النظيفة",
    skills_mysql_postgresql_title: "ميو إس كيو إل/بوستجر إس كيو إل",
    skills_mysql_postgresql_desc: "تحسين قاعدة البيانات",
    skills_redis_caching_title: "ريديس/التخزين المؤقت",
    skills_redis_caching_desc: "تحسين الأداء",
    skills_phpunit_testing_title: "اختبار بي إتش بي يونيت",
    skills_phpunit_testing_desc: "التطوير الموجه بالاختبار وضمان الجودة",
    skills_react_title: "React.js Development",
    skills_react_tree_title: "React Skill Tree",
    skills_react_mastery_title: "React Mastery",
    skills_react_mastery_desc: "الهندسة المعمارية القائمة على المكونات",
    skills_react_hooks_title: "ري‌اكت هوكس",
    skills_react_hooks_desc: "useState، useEffect، وهوكس مخصصة",
    skills_react_native_title: "ري‌اكت نيتف",
    skills_react_native_desc: "تطبيقات موبايل عبر المنصات",
    skills_react_state_title: "إدارة الحالة",
    skills_react_state_desc: "ريداكس، زوستاند",
    skills_nextjs_title: "Next.js",
    skills_nextjs_desc: "ري‌ستر، اس‌اس‌ج، واجهات برمجة تطبيقات",
    skills_typescript_title: "تايب اسكريبت",
    skills_typescript_desc: "تطوير مع نوع آمن",
    
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
    exp_4_title: "مطور ميكروسرويسيس لارفل",
    exp_4_company: "شركة حلول التقنية",
    exp_4_date: "۲۰۲۲ - ۲۰۲۴",
    exp_4_desc_1: "تصميم وتنفيذ بنية ميكروسرويسيس باستخدام لارفل ودوكر",
    exp_4_desc_2: "بناء اتصال قائم على الأحداث بين الخدمات باستخدام صفوف الرسائل (RabbitMQ/Redis)",
    exp_4_desc_3: "تنفيذ نمط بوابة API مع مصادقة JWT وتحديد معدل الطلبات",
    exp_4_desc_4: "حاوية الخدمات باستخدام Docker وإدارةها مع Kubernetes",
    exp_4_desc_5: "تحقيق 99.9% وقت تشغيل مع توسع أفقي وتوازن الحمل",

    // Projects Section
    projects_title: "المشاريع المميزة",
    projects_subtitle: "بعض أعمالي الحديثة",
    project_1_title: "تطبيق تجارة إلكترونية",
    project_1_desc: "تطبيق تسوق كامل الميزات مع مخزون فوري، مدفوعات آمنة، وتوصيات مخصصة.",
    project_2_title: "نظام إدارة المهام",
    project_2_desc: "منصة إدارة مشاريع مستوى الشركات مع تعاون الفريق، مشاركة الملفات، وتتبع التقدم.",
    project_3_title: "بوابة الرعاية الصحية",
    project_3_desc: "نظام إدارة المرضى الآمن مع جدولة المواعيد، السجلات الطبية، وميزات الرعاية عن بُعد.",
    project_4_title: "تطبيق الدردشة الذكية",
    project_4_desc: "روبوت دردشة ذكي بمعالجة اللغة الطبيعية واستجابات فورية.",
    project_5_title: "منصة التواصل الاجتماعي",
    project_5_desc: "منصة تواصل اجتماعي غنية بالمواصفات مع رسائل فورية ومشاركة المحتوى.",
    project_click_preview: "معاينة",

    // Contact Section
    contact_title: "تواصل معي",
    contact_subtitle: "دعنا نعمل معاً في مشروعك القادم",
    contact_email: "البريد الإلكتروني",
    contact_email_value: "alinaderifar02468@gmail.com",
    contact_github: "GitHub",
    contact_github_link_text: "github.com/alinaderifar",
    contact_linkedin: "LinkedIn",
    contact_linkedin_link_text: "linkedin.com/in/ali-naderifar-014703224",
    contact_phone: "الهاتف",
    contact_phone_value: "+98 912 345 6789",
    contact_location: "الموقع",
    contact_location_value: "طهران، إيران",
    contact_name_placeholder: "اسمك",
    contact_email_placeholder: "بريدك الإلكتروني",
    contact_message_placeholder: "رسالتك",
    contact_btn: "إرسال الرسالة",
    
    // Footer
    footer_text: "© Made with Love by Me",
    
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
  
  // Apply initial language and document direction
  setupLanguageSwitcher();
  switchLanguage(currentLang);
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
  
  // Announce language change for screen readers
  const messages = {
    en: 'Language changed to English',
    fa: 'زبان به فارسی تغییر کرد',
    ar: 'تم تغيير اللغة إلى العربية'
  };
  announce(messages[lang] || messages.en);
  
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

  const isRTL = lang === 'ar' || lang === 'fa';
  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.dir = isRTL ? 'rtl' : 'ltr';
  
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
  
  if (highlightItems.length >= 2) {
    highlightItems[0].querySelector('h4').textContent = t.about_highlight_1_title;
    highlightItems[0].querySelector('p').textContent = t.about_highlight_1_desc;
    highlightItems[1].querySelector('h4').textContent = t.about_highlight_2_title;
    highlightItems[1].querySelector('p').textContent = t.about_highlight_2_desc;
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
   
   if (skillCategories.length >= 3) {
     skillCategories[0].textContent = t.skills_flutter_title;
     skillCategories[1].textContent = t.skills_laravel_title;
     skillCategories[2].textContent = t.skills_react_title;
   }
   
   // Skill names and descriptions are updated via data-i18n attributes
   const skillTreeTitles = skillsSection.querySelectorAll('.skill-tree-container h4');
   if (skillTreeTitles.length >= 3) {
     skillTreeTitles[0].textContent = t.skills_flutter_tree_title;
     skillTreeTitles[1].textContent = t.skills_laravel_tree_title;
     skillTreeTitles[2].textContent = t.skills_react_tree_title;
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
  
  if (projectCards.length >= 5) {
    projectCards[0].querySelector('h3').textContent = t.project_1_title;
    projectCards[0].querySelector('p').textContent = t.project_1_desc;
    projectCards[1].querySelector('h3').textContent = t.project_2_title;
    projectCards[1].querySelector('p').textContent = t.project_2_desc;
    projectCards[2].querySelector('h3').textContent = t.project_3_title;
    projectCards[2].querySelector('p').textContent = t.project_3_desc;
    projectCards[3].querySelector('h3').textContent = t.project_4_title;
    projectCards[3].querySelector('p').textContent = t.project_4_desc;
    projectCards[4].querySelector('h3').textContent = t.project_5_title;
    projectCards[4].querySelector('p').textContent = t.project_5_desc;
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
  const contactForm = contactSection.querySelector('.contact-form');
  
  if (sectionTitle) sectionTitle.textContent = t.contact_title;
  if (sectionSubtitle) sectionSubtitle.textContent = t.contact_subtitle;
  
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