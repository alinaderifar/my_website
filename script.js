// Translation data for all three languages
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
        hero_description: "توسعه‌دهنده پرانرژی که به ایجاد راهکارهای دیجیتال نوین متعطش است. با تخصص در توسعه اپلیکیشن‌های موبایل با فلتر و سیستم‌های پشتیبان قدرتمند با لاراول، راهکارهای مقیاس‌پذیر و کاربرپسند برای کسب‌وکارهای مدرن ایجاد می‌کنم.",
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
        skill_php: "پی‌اچ‌پی/لاراول",
        skill_api: "هوشمندسازی‌های استراحت",
        skill_database: "مای‌اس‌کیو‌ال/پستگره‌اس‌کیو‌ال",
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
        exp_2_title: "توسعه‌دهنده تمام‌پشتیب",
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
        project_1_title: "اپلیکیشن موبایل تجارت الکترونیک",
        project_1_desc: "اپلیکیشن خرید کامل با موجودی لحظه‌ای، پرداخت‌های ایمن و پیشنهادات شخصی‌سازی‌شده.",
        project_2_title: "سیستم مدیریت وظایف",
        project_2_desc: "پلتفرم مدیریت پروژه سطح کسب‌وکار با همکاری تیم، اشتراک فایل و ردیابی پیشرفت.",
        project_3_title: "پورتال مراقبت‌های بهداشتی",
        project_3_desc: "سیستم مدیریت بیمار امن با برنامه‌ریزی نوبت، پرونده‌های پزشکی و ویژگی‌های مراقبت از راه دور.",
        
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

// Initialize the page
function init() {
    // Set initial language from localStorage or default to English
    const savedLang = localStorage.getItem('portfolio-lang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    }
    
    // Apply initial language
    applyLanguage(currentLang);
    
    // Set up language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            switchLanguage(lang);
        });
    });
    
    // Set up navigation smooth scrolling
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const headerHeight = 70;
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Set up contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Set up navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Set up scroll reveal animations
    setupScrollReveal();
    setupEnhancedScrollReveal();
    
    // Set up device showcase
    setupDeviceShowcase();
    
    // Set up 3D tilt effects
    setup3DTiltEffects();
    
    // Set up parallax effects
    setupParallaxEffects();
    
    // Create particle system
    createParticleSystem();
    
    // Create light rays
    createLightRays();
    
    // Create morphing shapes
    createMorphingShapes();
    
    // Set up page loader
    setupPageLoader();
    
    // Initialize interactive demos
    initInteractiveDemos();
}

// Initialize all interactive demos
function initInteractiveDemos() {
    // Flutter code editor demo
    initFlutterDemo();
    
    // Laravel API playground
    initApiPlayground();
    
    // Product configurator
    initProductConfigurator();
    
    // Kanban board
    initKanbanBoard();
    
    // Patient dashboard
    initPatientDashboard();
    
    // Demo tabs
    initDemoTabs();
}

// Flutter code editor demo
function initFlutterDemo() {
    const demoBtnCode = document.querySelector('[data-demo="editor"]');
    const demoBtnPreview = document.querySelector('[data-demo="preview"]');
    const codeEditor = document.getElementById('flutterEditor');
    const codePreview = document.getElementById('flutterPreview');
    const demoFab = document.getElementById('demoFab');
    const demoCounter = document.getElementById('demoCounter');
    
    if (demoBtnCode && demoBtnPreview && codeEditor && codePreview) {
        demoBtnCode.addEventListener('click', () => {
            demoBtnCode.classList.add('active');
            demoBtnPreview.classList.remove('active');
            codeEditor.style.display = 'block';
            codePreview.style.display = 'none';
        });
        
        demoBtnPreview.addEventListener('click', () => {
            demoBtnPreview.classList.add('active');
            demoBtnCode.classList.remove('active');
            codeEditor.style.display = 'none';
            codePreview.style.display = 'block';
        });
    }
    
    if (demoFab && demoCounter) {
        let count = 0;
        demoFab.addEventListener('click', () => {
            count++;
            demoCounter.textContent = count;
            demoFab.style.transform = 'scale(1.2)';
            setTimeout(() => {
                demoFab.style.transform = 'scale(1)';
            }, 150);
        });
    }
}

// Laravel API playground
function initApiPlayground() {
    const builderBtn = document.querySelector('[data-api-demo="builder"]');
    const testerBtn = document.querySelector('[data-api-demo="tester"]');
    const apiBuilder = document.getElementById('apiBuilder');
    const apiResponse = document.getElementById('apiResponse');
    const apiSendBtn = document.getElementById('apiSend');
    const apiMethod = document.getElementById('apiMethod');
    const apiEndpoint = document.getElementById('apiEndpoint');
    const apiHeaders = document.getElementById('apiHeaders');
    const apiBody = document.getElementById('apiBody');
    const responseTime = document.querySelector('.response-time');
    const responseContent = document.querySelector('.response-content code');
    
    if (builderBtn && testerBtn && apiBuilder && apiResponse) {
        builderBtn.addEventListener('click', () => {
            builderBtn.classList.add('active');
            testerBtn.classList.remove('active');
            apiBuilder.style.display = 'block';
            apiResponse.style.display = 'none';
        });
        
        testerBtn.addEventListener('click', () => {
            testerBtn.classList.add('active');
            builderBtn.classList.remove('active');
            apiBuilder.style.display = 'none';
            apiResponse.style.display = 'block';
        });
    }
    
    if (apiSendBtn) {
        apiSendBtn.addEventListener('click', () => {
            const method = apiMethod.value;
            const endpoint = apiEndpoint.value;
            const startTime = Date.now();
            
            // Simulate API call
            apiSendBtn.textContent = 'Sending...';
            apiSendBtn.disabled = true;
            
            setTimeout(() => {
                const endTime = Date.now();
                const duration = endTime - startTime;
                
                const mockResponses = {
                    GET: {
                        status: 'success',
                        message: 'Data retrieved successfully',
                        data: [
                            { id: 1, name: 'John Doe', email: 'john@example.com' },
                            { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
                        ]
                    },
                    POST: {
                        status: 'success',
                        message: 'Resource created successfully',
                        data: { id: 3, ...JSON.parse(apiBody.value || '{}') }
                    },
                    PUT: {
                        status: 'success',
                        message: 'Resource updated successfully',
                        data: { id: 1, updated: true }
                    },
                    DELETE: {
                        status: 'success',
                        message: 'Resource deleted successfully',
                        data: null
                    }
                };
                
                const response = mockResponses[method] || mockResponses.GET;
                
                if (responseTime) {
                    responseTime.textContent = `${duration} ms`;
                }
                
                if (responseContent) {
                    responseContent.textContent = JSON.stringify(response, null, 2);
                }
                
                apiSendBtn.textContent = 'Send Request';
                apiSendBtn.disabled = false;
                
                // Switch to tester view
                if (builderBtn && testerBtn) {
                    testerBtn.classList.add('active');
                    builderBtn.classList.remove('active');
                    apiBuilder.style.display = 'none';
                    apiResponse.style.display = 'block';
                }
            }, 800 + Math.random() * 700);
        });
    }
}

// Product configurator
function initProductConfigurator() {
    const configuratorDemo = document.getElementById('configuratorDemo');
    const productDetails = document.getElementById('productDetails');
    const demoTabs = document.querySelectorAll('.demo-tab');
    const productColor = document.getElementById('productColor');
    const productStorage = document.getElementById('productStorage');
    const productWarranty = document.getElementById('productWarranty');
    const warrantyCost = document.getElementById('warrantyCost');
    const totalPrice = document.getElementById('totalPrice');
    const colorOptions = document.querySelectorAll('.color-option');
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    
    // Demo tabs
    if (demoTabs.length > 0) {
        demoTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                demoTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                const demo = tab.dataset.demo;
                if (demo === 'configurator' && configuratorDemo) {
                    configuratorDemo.style.display = 'block';
                }
                if (demo === 'details' && productDetails) {
                    productDetails.style.display = 'block';
                }
            });
        });
    }
    
    // Color selection
    if (colorOptions.length > 0) {
        colorOptions.forEach(option => {
            option.addEventListener('click', () => {
                colorOptions.forEach(o => o.classList.remove('active'));
                option.classList.add('active');
                
                if (productColor) {
                    productColor.value = option.dataset.color;
                }
            });
        });
    }
    
    // Price calculation
    function updatePrice() {
        const basePrice = 299;
        const storagePrice = {
            '64': 0,
            '128': 50,
            '256': 150
        };
        const warrantyPrice = {
            '1': 0,
            '2': 49,
            '3': 99
        };
        
        const storage = productStorage ? productStorage.value : '64';
        const warranty = productWarranty ? productWarranty.value : '1';
        
        const storageCost = storagePrice[storage] || 0;
        const warrantyCostValue = warrantyPrice[warranty] || 0;
        const total = basePrice + storageCost + warrantyCostValue;
        
        if (warrantyCost) {
            warrantyCost.textContent = `$${warrantyCostValue}.00`;
        }
        if (totalPrice) {
            totalPrice.textContent = `$${total}.00`;
        }
    }
    
    if (productStorage) {
        productStorage.addEventListener('change', updatePrice);
    }
    if (productWarranty) {
        productWarranty.addEventListener('change', updatePrice);
    }
    
    // Add to cart
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            addToCartBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Added to Cart
            `;
            addToCartBtn.style.background = 'var(--success)';
            
            setTimeout(() => {
                addToCartBtn.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    Add to Cart
                `;
                addToCartBtn.style.background = '';
            }, 2000);
        });
    }
    
    updatePrice();
}

// Kanban board
function initKanbanBoard() {
    const kanbanTasks = document.querySelectorAll('.kanban-task');
    const kanbanColumns = document.querySelectorAll('.kanban-tasks');
    
    if (kanbanTasks.length > 0) {
        kanbanTasks.forEach(task => {
            task.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', task.outerHTML);
                task.style.opacity = '0.5';
            });
            
            task.addEventListener('dragend', () => {
                task.style.opacity = '1';
            });
        });
    }
    
    if (kanbanColumns.length > 0) {
        kanbanColumns.forEach(column => {
            column.addEventListener('dragover', (e) => {
                e.preventDefault();
            });
            
            column.addEventListener('drop', (e) => {
                e.preventDefault();
                const taskHTML = e.dataTransfer.getData('text/plain');
                if (taskHTML) {
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = taskHTML;
                    const taskElement = tempDiv.firstChild;
                    
                    // Remove from old column
                    const oldTask = document.querySelector(`[draggable="true"]`);
                    if (oldTask && oldTask.parentElement !== column) {
                        oldTask.remove();
                    }
                    
                    column.appendChild(taskElement);
                    initKanbanBoard(); // Reinitialize
                }
            });
        });
    }
}

// Patient dashboard
function initPatientDashboard() {
    const scheduleBtn = document.querySelector('.dashboard-actions .btn-secondary');
    const joinBtns = document.querySelectorAll('.btn-small');
    
    if (scheduleBtn) {
        scheduleBtn.addEventListener('click', () => {
            alert('Appointment scheduling would open a calendar interface here.');
        });
    }
    
    if (joinBtns.length > 0) {
        joinBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                alert('Joining video consultation...');
            });
        });
    }
}

// Demo tabs
function initDemoTabs() {
    const demoTabs = document.querySelectorAll('.demo-tab');
    
    if (demoTabs.length > 0) {
        demoTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const parent = tab.closest('.project-demo-container');
                if (parent) {
                    const configuratorDemo = parent.querySelector('.configurator-demo');
                    const productDetails = parent.querySelector('.product-details');
                    
                    if (tab.dataset.demo === 'configurator' && configuratorDemo) {
                        configuratorDemo.style.display = 'block';
                        if (productDetails) productDetails.style.display = 'none';
                    } else if (tab.dataset.demo === 'details' && productDetails) {
                        productDetails.style.display = 'block';
                        if (configuratorDemo) configuratorDemo.style.display = 'none';
                    }
                    
                    demoTabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                }
            });
        });
    }
}

// Switch language
function switchLanguage(lang) {
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
}

// Apply translations to the page
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
    document.querySelector('.nav-brand').textContent = t.nav_brand;
    document.querySelectorAll('.nav-link')[0].textContent = t.nav_home;
    document.querySelectorAll('.nav-link')[1].textContent = t.nav_about;
    document.querySelectorAll('.nav-link')[2].textContent = t.nav_skills;
    document.querySelectorAll('.nav-link')[3].textContent = t.nav_experience;
    document.querySelectorAll('.nav-link')[4].textContent = t.nav_projects;
    document.querySelectorAll('.nav-link')[5].textContent = t.nav_contact;
    
    // Update hero section
    document.querySelector('.badge-text').textContent = t.hero_badge;
    document.querySelector('.hero-name').textContent = t.hero_name;
    document.querySelector('.hero-role').textContent = t.hero_role;
    document.querySelector('.hero-description').textContent = t.hero_description;
    document.querySelectorAll('.btn-primary')[0].textContent = t.hero_btn_primary;
    document.querySelectorAll('.btn-secondary')[0].textContent = t.hero_btn_secondary;
    
    const statLabels = document.querySelectorAll('.stat-label');
    statLabels[0].textContent = t.hero_stat_years;
    statLabels[1].textContent = t.hero_stat_projects;
    statLabels[2].textContent = t.hero_stat_clients;
    
    // Update about section
    document.getElementById('about').querySelector('.section-title').textContent = t.about_title;
    document.getElementById('about').querySelector('.section-subtitle').textContent = t.about_subtitle;
    
    const aboutParagraphs = document.querySelectorAll('#about .about-text p');
    aboutParagraphs[0].textContent = t.about_text_1;
    aboutParagraphs[1].textContent = t.about_text_2;
    
    const highlightItems = document.querySelectorAll('.highlight-item');
    highlightItems[0].querySelector('h4').textContent = t.about_highlight_1_title;
    highlightItems[0].querySelector('p').textContent = t.about_highlight_1_desc;
    highlightItems[1].querySelector('h4').textContent = t.about_highlight_2_title;
    highlightItems[1].querySelector('p').textContent = t.about_highlight_2_desc;
    highlightItems[2].querySelector('h4').textContent = t.about_highlight_3_title;
    highlightItems[2].querySelector('p').textContent = t.about_highlight_3_desc;
    
    // Update skills section
    document.getElementById('skills').querySelector('.section-title').textContent = t.skills_title;
    document.getElementById('skills').querySelector('.section-subtitle').textContent = t.skills_subtitle;
    
    document.querySelectorAll('.skill-category h3')[0].textContent = t.skills_flutter_title;
    document.querySelectorAll('.skill-category h3')[1].textContent = t.skills_laravel_title;
    
    const skillNames = document.querySelectorAll('.skill-name');
    const skillLevels = document.querySelectorAll('.skill-level');
    
    // Flutter skills (first 5)
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
    
    // Laravel skills (next 5)
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
    
    // Update experience section
    document.getElementById('experience').querySelector('.section-title').textContent = t.experience_title;
    document.getElementById('experience').querySelector('.section-subtitle').textContent = t.experience_subtitle;
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Experience 1
    timelineItems[0].querySelector('h3').textContent = t.exp_1_title;
    timelineItems[0].querySelector('.timeline-company').textContent = t.exp_1_company;
    timelineItems[0].querySelector('.timeline-date').textContent = t.exp_1_date;
    const desc1 = timelineItems[0].querySelectorAll('.timeline-description li');
    desc1[0].textContent = t.exp_1_desc_1;
    desc1[1].textContent = t.exp_1_desc_2;
    desc1[2].textContent = t.exp_1_desc_3;
    desc1[3].textContent = t.exp_1_desc_4;
    
    // Experience 2
    timelineItems[1].querySelector('h3').textContent = t.exp_2_title;
    timelineItems[1].querySelector('.timeline-company').textContent = t.exp_2_company;
    timelineItems[1].querySelector('.timeline-date').textContent = t.exp_2_date;
    const desc2 = timelineItems[1].querySelectorAll('.timeline-description li');
    desc2[0].textContent = t.exp_2_desc_1;
    desc2[1].textContent = t.exp_2_desc_2;
    desc2[2].textContent = t.exp_2_desc_3;
    desc2[3].textContent = t.exp_2_desc_4;
    
    // Experience 3
    timelineItems[2].querySelector('h3').textContent = t.exp_3_title;
    timelineItems[2].querySelector('.timeline-company').textContent = t.exp_3_company;
    timelineItems[2].querySelector('.timeline-date').textContent = t.exp_3_date;
    const desc3 = timelineItems[2].querySelectorAll('.timeline-description li');
    desc3[0].textContent = t.exp_3_desc_1;
    desc3[1].textContent = t.exp_3_desc_2;
    desc3[2].textContent = t.exp_3_desc_3;
    desc3[3].textContent = t.exp_3_desc_4;
    
    // Update projects section
    document.getElementById('projects').querySelector('.section-title').textContent = t.projects_title;
    document.getElementById('projects').querySelector('.section-subtitle').textContent = t.projects_subtitle;
    
    const projectCards = document.querySelectorAll('.project-card');
    if (projectCards.length >= 3) {
        projectCards[0].querySelector('h3').textContent = t.project_1_title;
        projectCards[0].querySelector('p').textContent = t.project_1_desc;
        projectCards[1].querySelector('h3').textContent = t.project_2_title;
        projectCards[1].querySelector('p').textContent = t.project_2_desc;
        projectCards[2].querySelector('h3').textContent = t.project_3_title;
        projectCards[2].querySelector('p').textContent = t.project_3_desc;
    }
    
    // Update contact section
    document.getElementById('contact').querySelector('.section-title').textContent = t.contact_title;
    document.getElementById('contact').querySelector('.section-subtitle').textContent = t.contact_subtitle;
    
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems[0].querySelector('h4').textContent = t.contact_email;
    contactItems[0].querySelector('p').textContent = t.contact_email_value;
    contactItems[1].querySelector('h4').textContent = t.contact_phone;
    contactItems[1].querySelector('p').textContent = t.contact_phone_value;
    contactItems[2].querySelector('h4').textContent = t.contact_location;
    contactItems[2].querySelector('p').textContent = t.contact_location_value;
    
    document.getElementById('name').placeholder = t.contact_name_placeholder;
    document.getElementById('email').placeholder = t.contact_email_placeholder;
    document.getElementById('message').placeholder = t.contact_message_placeholder;
    document.querySelector('.contact-form .btn-primary').textContent = t.contact_btn;
    
    // Update footer
    document.querySelector('.footer-content p').textContent = t.footer_text;
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const t = translations[currentLang];
    const btn = e.target.querySelector('.btn-primary');
    const originalText = btn.textContent;
    
    // Show sending state
    btn.textContent = t.form_sending;
    btn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        // Show success message
        alert(t.form_success);
        
        // Reset form
        e.target.reset();
        
        // Restore button
        btn.textContent = originalText;
        btn.disabled = false;
    }, 1500);
}

// Set up scroll reveal animations
function setupScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
    
    // Observe project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    cardObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        cardObserver.observe(card);
    });
}

// Enhanced scroll reveal animations
function setupEnhancedScrollReveal() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Section reveal animations
    const sections = [
        { selector: '.hero-content', animation: 'fadeInLeft' },
        { selector: '.hero-image', animation: 'fadeInRight' },
        { selector: '#about', animation: 'fadeInUp' },
        { selector: '#skills', animation: 'fadeInUp' },
        { selector: '#experience', animation: 'fadeInUp' },
        { selector: '#projects', animation: 'fadeInUp' },
        { selector: '#contact', animation: 'fadeInUp' }
    ];
    
    // Card hover effects enhancement
    const cards = document.querySelectorAll('.project-card, .skill-category');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!prefersReducedMotion) {
                this.style.transform = 'translateY(-8px)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!prefersReducedMotion) {
                this.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            if (!prefersReducedMotion) {
                this.style.transform = 'translateY(-2px)';
            }
        });
        
        btn.addEventListener('mouseleave', function() {
            if (!prefersReducedMotion) {
                this.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Nav link hover effects
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            if (!prefersReducedMotion) {
                this.style.transform = 'translateY(-1px)';
            }
        });
        
        link.addEventListener('mouseleave', function() {
            if (!prefersReducedMotion) {
                this.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Set up IntersectionObserver for scroll animations
    if (prefersReducedMotion) {
        // If reduced motion is preferred, just show all elements
        sections.forEach(section => {
            const elements = document.querySelectorAll(section.selector);
            elements.forEach(el => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            });
        });
        return;
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const section = sections.find(s => entry.target.matches(s.selector) || entry.target.closest(s.selector));
                if (section) {
                    setTimeout(() => {
                        entry.target.style.animation = `${section.animation} 0.6s ease-out forwards`;
                    }, index * 100);
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe sections
    sections.forEach(section => {
        const elements = document.querySelectorAll(section.selector);
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = section.animation.includes('Left') ? 'translateX(-30px)' :
                                section.animation.includes('Right') ? 'translateX(30px)' :
                                section.animation.includes('Down') ? 'translateY(-30px)' : 'translateY(30px)';
            observer.observe(el);
        });
    });
    
    // Observe timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        
        const itemObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.transition = 'all 0.6s ease-out';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateX(0)';
                    }, index * 100);
                    itemObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        itemObserver.observe(item);
    });
    
    // Observe project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, cardIndex) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.transition = 'all 0.6s ease-out';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    cardObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        cardObserver.observe(card);
    });
}

// Device showcase functionality
function setupDeviceShowcase() {
    const deviceBtns = document.querySelectorAll('.device-btn');
    const deviceMockups = document.querySelectorAll('.device-mockup');
    
    deviceBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const device = btn.dataset.device;
            
            // Update active button
            deviceBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Switch device mockup
            deviceMockups.forEach(mockup => {
                mockup.classList.remove('active');
                if (mockup.dataset.device === device) {
                    setTimeout(() => {
                        mockup.classList.add('active');
                    }, 50);
                }
            });
        });
    });
}

// 3D tilt effects for project cards
function setup3DTiltEffects() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// Parallax effects
function setupParallaxEffects() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-image, .phone-mockup');
        
        parallaxElements.forEach(el => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Particle system
function createParticleSystem() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    
    const container = document.createElement('div');
    container.className = 'particle-container';
    document.body.appendChild(container);
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 6 + 4) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 10000);
    }
    
    // Create initial particles
    for (let i = 0; i < 20; i++) {
        setTimeout(() => createParticle(), i * 300);
    }
    
    // Continuously create particles
    setInterval(createParticle, 1000);
}

// Light rays effect
function createLightRays() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    
    const container = document.createElement('div');
    container.className = 'light-rays';
    document.body.appendChild(container);
    
    function createLightRay() {
        const ray = document.createElement('div');
        ray.className = 'light-ray';
        ray.style.left = Math.random() * 100 + '%';
        ray.style.animationDelay = Math.random() * 5 + 's';
        
        container.appendChild(ray);
        
        setTimeout(() => {
            ray.remove();
        }, 15000);
    }
    
    // Create initial rays
    for (let i = 0; i < 5; i++) {
        setTimeout(() => createLightRay(), i * 2000);
    }
    
    // Continuously create rays
    setInterval(createLightRay, 3000);
}

// Morphing shapes
function createMorphingShapes() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    
    const showcaseSection = document.querySelector('.showcase-section');
    if (!showcaseSection) return;
    
    for (let i = 0; i < 3; i++) {
        const shape = document.createElement('div');
        shape.className = 'morph-shape';
        showcaseSection.appendChild(shape);
    }
}

// Page loader
function setupPageLoader() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-spinner"></div>
        <div class="loader-text">Loading...</div>
    `;
    document.body.appendChild(loader);
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.remove();
            }, 800);
        }, 1000);
    });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Add binary code after page load
window.addEventListener('load', () => {
    setTimeout(createBinaryCode, 100);
});

// Binary code animation for Laravel section
function createBinaryCode() {
    const container = document.getElementById('binaryContainer');
    if (!container) return;
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    
    const binaryChars = ['0', '1'];
    const columns = Math.floor(container.offsetWidth / 20);
    
    for (let i = 0; i < columns; i++) {
        const binary = document.createElement('div');
        binary.className = 'binary-code';
        binary.style.left = (i * 20) + 'px';
        binary.style.animationDuration = (Math.random() * 3 + 2) + 's';
        binary.style.animationDelay = (Math.random() * 2) + 's';
        
        let code = '';
        const length = Math.floor(Math.random() * 20) + 10;
        for (let j = 0; j < length; j++) {
            code += binaryChars[Math.floor(Math.random() * 2)];
        }
        binary.textContent = code;
        
        container.appendChild(binary);
    }
}