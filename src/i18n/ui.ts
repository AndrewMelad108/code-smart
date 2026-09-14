export const defaultLang = "ar";
export type Lang = "ar" | "en";

export const ui = {
  ar: {
    layout: {
      title: "Code Smart Academy | نزرع شغف البرمجة",
      description:
        "أكاديمية برمجة للأطفال والناشئين تقدم مسارات عملية ممتعة في البرمجة والذكاء الاصطناعي وتطوير الويب.",
      skip: "انتقل إلى المحتوى",
    },
    header: {
      home: "الرئيسية",
      why: "لماذا Code Smart؟",
      learning: "مسار التعلّم",
      ages: "المراحل العمرية",
      academy: "عن الأكاديمية",
      rewards: "نظام المكافآت",
      future: "مستقبل طفلك",
      login: "دخول الطالب",
      signup: "ابدأ رحلتك الآن ←",
      menu: "فتح القائمة",
      close: "إغلاق القائمة",
      language: "EN",
      languageLabel: "Switch to English",
      unavailable: "رابط الدخول غير متاح حاليًا",
    },
    hero: {
      badge: "ابدأ رحلة طفلك نحو المستقبل الرقمي",
      title: "نزرع شغف البرمجة",
      highlight: "ونصنع جيل المستقبل",
      description:
        "نحوّل فضول طفلك إلى مهارات حقيقية من خلال رحلة تعليمية ممتعة، عملية، ومناسبة لكل مرحلة عمرية.",
      primary: "ابدأ رحلة طفلك",
      secondary: "تعرّف على الأكاديمية",
      imageAlt: "طالب يتعلم البرمجة مع Code Smart Academy",
      experience: "من 6 سنوات",
      experienceHighlight: "إلى الاحتراف",
      stages: [
        { title: "ابدأ واستكشف", note: "خطوتك الأولى" },
        { title: "تعلّم وطبّق", note: "مشروعات عملية" },
        { title: "طوّر مهاراتك", note: "مستويات متدرجة" },
        { title: "اصنع مستقبلك", note: "إلى الاحتراف" },
      ],
    },
    why: {
      eyebrow: "LEARN • CREATE • INNOVATE",
      titleBefore: "لماذا",
      titleBrand: "Code Smart",
      titleAfter: "؟",
      description:
        "نمنح طفلك تجربة تعليمية متكاملة تجمع بين المتعة والتطبيق العملي، وتبني شخصية مبتكرة قادرة على صناعة المستقبل.",
      cards: [
        {
          title: "محتوى ذكي ومتكامل",
          description:
            "مناهج حديثة تبدأ من الأساسيات وتصل إلى بناء مشروعات حقيقية.",
          icon: "code",
        },
        {
          title: "تعلّم ممتع وتفاعلي",
          description: "تحديات وألعاب ومكافآت تجعل كل درس تجربة ينتظرها طفلك.",
          icon: "game",
        },
        {
          title: "مسار واضح ومتدرّج",
          description:
            "كل مرحلة لها أهداف واضحة تناسب عمر الطالب ومستوى خبرته.",
          icon: "path",
        },
        {
          title: "متابعة ودعم مستمر",
          description:
            "مدربون متخصصون وتقارير واضحة تساعد الأسرة على متابعة التطور.",
          icon: "support",
        },
      ],
      footer: "التعلّم لم يعد مملًا — إنه تحدٍ ممتع يصنع المستقبل",
    },
    learning: {
      eyebrow: "FRONT-END DEVELOPER",
      title: "مسار التعليم",
      description: "رحلة من البداية إلى الاحتراف",
      tracks: [
        {
          number: "01",
          title: "البرمجة للمبتدئين",
          subtitle: "Junior Coding",
          skills: ["Code.org", "Scratch", "ScratchJr", "App Inventor"],
          color: "green",
        },
        {
          number: "01B",
          title: "تطوير الويب",
          subtitle: "Web Development",
          skills: ["HTML", "CSS", "JavaScript", "Web Projects"],
          color: "purple",
        },
        {
          number: "02A",
          title: "برمجة بايثون",
          subtitle: "Python Programming",
          skills: [
            "Python Basics",
            "Python Level 2",
            "Python Level 3",
            "Advanced Python",
          ],
          color: "blue",
        },
        {
          number: "02B",
          title: "الذكاء الاصطناعي",
          subtitle: "AI Foundations",
          skills: ["Creative AI", "Prompting", "Smart Projects"],
          color: "violet",
        },
      ],
      certificate: "بعد إتمام مرحلة التأسيس",
      certificateNote: "يتم اختيار حسب",
      certificateHighlight: "ميوله واهتماماته",
      certificateLabel: "الشهادة النهائية",
      beginnerAge: "6–12 سنة",
      advancedAge: "+13 سنة",
      junior: "Junior Python Programmer",
      senior: "Junior Front-End Developer",
      cta: "اكتشف المسار الكامل",
      imageAltPython: "مسار تعلّم البرمجة بلغة بايثون",
      imageAltWeb: "مسار تعلّم تطوير الويب",
    },
    ages: {
      eyebrow: "LEARNING FOR EVERY AGE",
      title: "تعلّم مناسب لكل مرحلة عمرية",
      description: "الأعمار المناسبة لكل مرحلة",
      groups: [
        {
          age: "6–8 سنوات",
          title:
            "بناء أساس قوي من الأنشطة التفاعلية والتعلم من خلال اللعب والإبداع",
          skills: ["تعلم", "مرح", "لعب"],
          image: "/age-child-student.png",
          color: "green",
        },
        {
          age: "9–12 سنة",
          title: "تعلّم البرمجة وبناء المشاريع وتطوير المهارات",
          skills: ["إدراك", "فهم", "تطوير"],
          image: "/age-junior-student.png",
          color: "blue",
        },
        {
          age: "+13 سنة",
          title: "التعمق في البرمجة وبناء المشاريع الاحترافية",
          skills: ["تطبيق", "احتراف", "تعلّم"],
          image: "/age-teen-student.png",
          color: "purple",
        },
      ],
    },
    academy: {
      eyebrow: "ABOUT CODE SMART ACADEMY",
      badge: "عن الأكاديمية",
      title: "مش بنعلّم البرمجة بس...",
      titleSecond: "بنبني عقلية",
      highlight: "صُنّاع المستقبل",
      description: [
        "في Code Smart Academy نقدم رحلة تعليمية متدرجة",
        "تساعد الأطفال والشباب على اكتساب مهارات البرمجة",
        "وحل المشكلات والتفكير الإبداعي من أول خطوة في",
        "عالم البرمجة وصولًا إلى بناء مشروعات حقيقية للمستقبل.",
      ],
      imageAlt: "طالب داخل معمل Code Smart Academy",
      imageCaption: "بيئة آمنة وداعمة",
      imageCaptionDescription:
        "نوفر بيئة تعليمية تساعد طفلك على الإبداع والاستكشاف وبناء الثقة",
      values: [
        {
          title: "مهارات للمستقبل",
          description: "تطوير التفكير الإبداعي وحل المشكلات ومواكبة العالم الرقمي",
          image: "/idea-lightbulb.png",
        },
        {
          title: "تطبيق عملي",
          description: "مشروعات برمجية وتحديات عملية تنمّي الفهم والمهارات",
          image: "/code-window.png",
        },
        {
          title: "تعلّم بخطوة واضحة",
          description: "مسار تعليمي متدرج يناسب كل الأعمار والمستويات",
          image: "/achievement-steps.png",
        },
      ],
      cta: "اكتشف أكاديمية Code Smart",
    },
    rewards: {
      eyebrow: "CODE SMART POINTS",
      title: "نظام المكافآت",
      description: "كل إنجاز يفتح لك مكافآت جديدة",
      cards: [
        {
          title: "إنجاز المهام",
          description: "أكمل المشروعات والتحديات واجمع النقاط باستمرار.",
          image: "/task-clipboard.png",
        },
        {
          title: "نظام المكافآت",
          description: "استبدل نقاطك بمنتجات حصرية وهدايا مميزة.",
          image: "/reward-gift.png",
        },
      ],
      points: "+250 Points",
      pointsCta: "اجمع النقاط مع كل خطوة",
      steps: [
        "مزايا تعليمية",
        "منتجات وهدايا",
        "شارات وإنجازات",
        "كوبونات خصم",
      ],
      cta: "اكتشف المزيد",
    },
    future: {
      badge: "مبادرة Code Smart السنوية",
      title: "صُنّاع المستقبل",
      year: "2026",
      highlight: "لتمكين الأطفال والشباب من تعلّم البرمجة والتصميم مجانًا",
      descriptionBefore:
        "نؤمن أن الموهبة تستحق الفرصة، لذلك نمنح 10 طلاب موهوبين فرصة حقيقية للتعلّم والتطوير من خلال منحة تدريبية مجانية بالكامل بقيمة ",
      descriptionAmount: "15,000 جنيه",
      descriptionAfter: " لكل طالب.",
      imageAlt: "طالب Code Smart Academy مستعد للمستقبل",
      stats: [
        { value: "10", label: "منح مجانية", note: "للموهوبين فقط" },
        { value: "15,000", label: "جنيه قيمة المنحة", note: "لكل طالب" },
        { value: "100%", label: "مجانية تمامًا", note: "بدون أي رسوم" },
      ],
      grantTitle: "منحة مقدمة بالكامل من",
      grantDescription: "قيمة المنحة 15,000 جنيه لكل طالب يتم اختياره",
      grantHighlight: "الطالب المقبول يحصل عليها مجانًا 100%",
      grantNote: "لن يدفع أي رسوم نهائيًا.",
      steps: [
        { title: "مقابلات واختيار", note: "أفضل المرشحين" },
        { title: "يبدأ التقديم", note: "نهاية مايو" },
        { title: "اختيار 10 طلاب", note: "للفوز بالمنحة" },
        { title: "بداية رحلة التعلّم", note: "خلال الصيف" },
      ],
      question: "هل أنت مستعد لصناعة مستقبلك؟",
      questionNote: "قد تكون أنت أحد صُنّاع المستقبل هذا العام!",
      cta: "اعرف المزيد عن المبادرة",
      terms: "تعرّف على شروط التقديم ومراحل الاختيار والمقابلات",
    },
    footer: {
      description: "نزرع شغف البرمجة، ونصنع جيلًا قادرًا على بناء المستقبل.",
      quickLinks: "روابط سريعة",
      tracks: "مسارات التعلّم",
      contact: "تواصل معنا",
      contactNote: "بيانات التواصل الرسمية ستُضاف قريبًا.",
      trackLinks: [
        "Programming Basics",
        "Web Development",
        "Python Programming",
        "Artificial Intelligence",
      ],
      rights: "جميع الحقوق محفوظة.",
      note: "Code Smart Academy — تعلّم، ابتكر، واصنع مستقبلك.",
      back: "العودة للأعلى",
    },
  },
  en: {
    layout: {
      title: "Code Smart Academy | Growing a passion for coding",
      description:
        "A coding academy for children and teens with fun, practical learning paths in programming, AI, and web development.",
      skip: "Skip to content",
    },
    header: {
      home: "Home",
      why: "Why Code Smart?",
      learning: "Learning path",
      ages: "Age groups",
      academy: "Our academy",
      rewards: "Rewards",
      future: "Your future",
      login: "Student login",
      signup: "Start your journey",
      menu: "Open menu",
      close: "Close menu",
      language: "AR",
      languageLabel: "التبديل إلى العربية",
      unavailable: "The student portal is not available yet",
    },
    hero: {
      badge: "Start your child's journey into the digital future",
      title: "We grow a passion for coding",
      highlight: "and build tomorrow's generation",
      description:
        "We turn curiosity into real skills through a fun, hands-on learning journey designed for every age.",
      primary: "Start the journey",
      secondary: "Meet the academy",
      imageAlt: "A student learning to code with Code Smart Academy",
      experience: "From age 6",
      experienceHighlight: "to mastery",
      stages: [
        { title: "Start & explore", note: "Your first step" },
        { title: "Learn & apply", note: "Practical projects" },
        { title: "Build your skills", note: "Progressive levels" },
        { title: "Shape your future", note: "Toward mastery" },
      ],
    },
    why: {
      eyebrow: "LEARN • CREATE • INNOVATE",
      titleBefore: "Why",
      titleBrand: "Code Smart",
      titleAfter: "?",
      description:
        "A complete learning experience that blends fun with hands-on practice and nurtures a creative, future-ready mindset.",
      cards: [
        {
          title: "Smart, complete content",
          description: "Modern curricula from core concepts to real projects.",
          icon: "code",
        },
        {
          title: "Fun, interactive learning",
          description:
            "Challenges, games, and rewards make every lesson exciting.",
          icon: "game",
        },
        {
          title: "A clear learning path",
          description:
            "Every stage has clear goals for each age and experience level.",
          icon: "path",
        },
        {
          title: "Ongoing support",
          description:
            "Specialist coaches and clear reports keep families informed.",
          icon: "support",
        },
      ],
      footer:
        "Learning is no longer boring — it is a fun challenge that shapes the future",
    },
    learning: {
      eyebrow: "FRONT-END DEVELOPER",
      title: "The learning path",
      description: "A journey from the first step to mastery",
      tracks: [
        {
          number: "01",
          title: "Coding for beginners",
          subtitle: "Junior Coding",
          skills: ["Code.org", "Scratch", "ScratchJr", "App Inventor"],
          color: "green",
        },
        {
          number: "01B",
          title: "Web development",
          subtitle: "Web Development",
          skills: ["HTML", "CSS", "JavaScript", "Web Projects"],
          color: "purple",
        },
        {
          number: "02A",
          title: "Python programming",
          subtitle: "Python Programming",
          skills: [
            "Python Basics",
            "Python Level 2",
            "Python Level 3",
            "Advanced Python",
          ],
          color: "blue",
        },
        {
          number: "02B",
          title: "Artificial intelligence",
          subtitle: "AI Foundations",
          skills: ["Creative AI", "Prompting", "Smart Projects"],
          color: "violet",
        },
      ],
      certificate: "After completing the foundation stage",
      certificateNote: "The next path is selected around",
      certificateHighlight: "their interests and strengths",
      certificateLabel: "Final certificate",
      beginnerAge: "Ages 6–12",
      advancedAge: "Ages 13+",
      junior: "Junior Python Programmer",
      senior: "Junior Front-End Developer",
      cta: "Explore the full path",
      imageAltPython: "Python programming learning path",
      imageAltWeb: "Web development learning path",
    },
    ages: {
      eyebrow: "LEARNING FOR EVERY AGE",
      title: "Learning that fits every age",
      description: "The right learning experience for every age",
      groups: [
        {
          age: "Ages 6–8",
          title:
            "Build strong foundations through interactive activities, play, and creativity.",
          skills: ["Learn", "Fun", "Play"],
          image: "/age-child-student.png",
          color: "green",
        },
        {
          age: "Ages 9–12",
          title:
            "Learn programming, build projects, and develop practical skills.",
          skills: ["Explore", "Understand", "Build"],
          image: "/age-junior-student.png",
          color: "blue",
        },
        {
          age: "Ages 13+",
          title: "Go deeper into programming and build professional projects.",
          skills: ["Apply", "Master", "Learn"],
          image: "/age-teen-student.png",
          color: "purple",
        },
      ],
    },
    academy: {
      eyebrow: "ABOUT CODE SMART ACADEMY",
      badge: "About the academy",
      title: "We teach more than coding...",
      titleSecond: "We build the mindset of",
      highlight: "future makers",
      description: [
        "Code Smart Academy offers a progressive learning journey",
        "that helps children and teens develop coding skills,",
        "creative thinking, and confident problem-solving,",
        "from their first lesson to real projects for the future.",
      ],
      imageAlt: "A student inside the Code Smart Academy lab",
      imageCaption: "A safe, supportive space",
      imageCaptionDescription:
        "A learning environment where every child can explore, create, and build confidence",
      values: [
        {
          title: "Future-ready skills",
          description: "Creative thinking, problem-solving, and digital confidence",
          image: "/idea-lightbulb.png",
        },
        {
          title: "Hands-on practice",
          description: "Coding projects and practical challenges that build real skills",
          image: "/code-window.png",
        },
        {
          title: "A clear learning path",
          description: "A progressive journey for every age and experience level",
          image: "/achievement-steps.png",
        },
      ],
      cta: "Discover Code Smart Academy",
    },
    rewards: {
      eyebrow: "CODE SMART POINTS",
      title: "Rewards system",
      description: "Every achievement unlocks a new reward",
      cards: [
        {
          title: "Complete missions",
          description:
            "Complete projects and challenges to keep earning points.",
          image: "/task-clipboard.png",
        },
        {
          title: "Unlock rewards",
          description: "Exchange your points for exclusive products and gifts.",
          image: "/reward-gift.png",
        },
      ],
      points: "+250 Points",
      pointsCta: "Collect points with every step",
      steps: [
        "Learning benefits",
        "Products and gifts",
        "Badges and achievements",
        "Discount coupons",
      ],
      cta: "Discover more",
    },
    future: {
      badge: "Code Smart's annual initiative",
      title: "Future Makers",
      year: "2026",
      highlight:
        "Giving children and teens free access to coding and design education",
      descriptionBefore:
        "Talent deserves an opportunity. We are giving 10 promising students a fully funded learning and development scholarship worth ",
      descriptionAmount: "EGP 15,000",
      descriptionAfter: " for each student.",
      imageAlt: "A Code Smart Academy student ready for the future",
      stats: [
        {
          value: "10",
          label: "Free scholarships",
          note: "For talented students",
        },
        {
          value: "15,000",
          label: "EGP scholarship value",
          note: "For each student",
        },
        { value: "100%", label: "Fully funded", note: "No fees" },
      ],
      grantTitle: "A fully funded scholarship from",
      grantDescription:
        "The scholarship is worth EGP 15,000 for each selected student",
      grantHighlight: "Every accepted student receives 100% funding",
      grantNote: "No fees will be charged.",
      steps: [
        { title: "Interviews & selection", note: "Top candidates" },
        { title: "Applications open", note: "End of May" },
        { title: "10 students selected", note: "Scholarship winners" },
        { title: "Learning begins", note: "During summer" },
      ],
      question: "Are you ready to shape your future?",
      questionNote: "You could be one of this year's Future Makers!",
      cta: "Learn more about the initiative",
      terms: "View application requirements, selection stages, and interviews",
    },
    footer: {
      description:
        "Growing a passion for coding and a generation ready to build the future.",
      quickLinks: "Quick links",
      tracks: "Learning paths",
      contact: "Contact us",
      contactNote: "Official contact details will be added soon.",
      trackLinks: [
        "Programming Basics",
        "Web Development",
        "Python Programming",
        "Artificial Intelligence",
      ],
      rights: "All rights reserved.",
      note: "Code Smart Academy — learn, create, and shape your future.",
      back: "Back to top",
    },
  },
} as const;
