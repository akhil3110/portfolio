export const jobs = [
    {
        duration: "Feb 2023 – Aug 2023",
        role: "Full Stack Developer Intern",
        company: "Tech Helps",
        description: [
            "Developed JavaScript-based dynamic parser, automating backend script creation and reducing developmenttime by 40%.",
            "Managed real-estate website backend, optimizing data flow, and collaborating with frontend team for seamless property listing and sales.",
            "Implemented RESTful APIs, integrated external services, and conducted rigorous testing, resulting in a 20% decrease in reported bugs for enhanced website functionality and stability."
        ],
        tech: ["Next.js", "TypeScript", "Express.js","Node.js", "PostgreSQL"],
    },
    {
        duration: "May 2022 - Jul 2022",
        role: "Frontend Developer Intern",
        company: "Rain Quail Technology",
        tech: ["React.js", "TypeScript", "Express.js","Node.js", "MondoDB"],
        description: [
            "Developed a dynamic website for a startup, establishing a high-end used car marketplace for streamlined browsing and exploration of available cars.",
            "Designed visually appealing and user-friendly car detail pages, presenting comprehensive information for each listed car and enhancing the overall buyer experience.",
            "Ensured responsive web design across devices, optimizing accessibility on desktop and mobile platforms, and collaborated with the back-end team to integrate front-end components for real-time updates and smooth data retrieval."
        ]

    }
]

export const projects = [
    {
      name: "Insta-Transcribe — Vertical video transcribing platform",
      description:
        "A Vertical video transcribing platform where user can upload and get transcription and can also emded transcribed video and can download it without watermark",
      tech: [
        "Next.js",
        "Node.js",
        "AWS S3",
        "AWS Transcribe",
        "WASM",
        "Zustand",
        "FFMPEG",
        "Zustand",
        "Shadcn",
        "Tailwind CSS",
        "prisma",
        "postgress SQL"
      ],
      link: "https://insta-transcribe.akhilparmar.com/",
      github: "https://github.com/akhil3110/insta-transcribe",
      year: "2025",
      slug: "insta-transcribe",
      details: [
        "Developed a Next.js application enabling users to seamlessly upload vertical videos (Instagram Reels or YouTube Shorts) to an AWS S3 bucket, integrating AWS Transcribe for automatic transcription.",
        "Implemented a robust AWS S3 storage solution to efficiently store both the original videos and their corresponding Transcribe-generated transcription files, facilitating easy retrieval and management.",
        " Utilized ffmpeg wasm to dynamically add captions derived from the transcription files to the original videos, enhancing accessibility and user engagement.",
        "Enabled users to edit captions and timestamps directly within the application, providing a user-friendly interface for customization and improving overall user experience.",
        "Incorporated advanced features allowing users to customize caption text color, offering a personalized touch to the videos and enhancing visual appeal."
      ]
    },
    {
        name: "Learnify",
        description: "Learnify is a web based platform where educators can create and manage courses with secure authentication, video uploads, and Stripe payments.",
        tech: [
        "Next.js",
        "Node.js",
        "Shadcn",
        "Tailwind CSS",
        "Zustand",
        "clerk",
        "prisma",
        "postgress SQL",
        "zustand"
        ],
        link: "https://learnify.akhilparmar.com/",
        slug: "learnify",
        github: "https://github.com/akhil3110/insta-transcribe",
        details: [
          "Developed Learnify, an innovative web platform using Next.js and a custom frontend component library Shacdcn UI, empowering educators to create and share courses seamlessly.",
          "Implemented secure user authentication using Clerk, enabling teachers to upload video chapters, attachments (PDFs), and manage their courses with Prisma ORM and Postgres SQL.",
          "Integrated Stripe payment system, providing users with a smooth purchasing experience, enhancing monetization for course creators.",
          "Utilized MUX player for an engaging video playback experience, making it effortless for learners to access course content.",
          "Employed Zustand for efficient state management, ensuring a responsive and dynamic user experience.",
          "Adopted modern technologies like Tailwind CSS and Zod for enhanced UI/UX and robust data validation, creating an appealing and user-friendly environment for educators and students."
        ]
    }
]

export const socials = [
    { 
        name: "GitHub", 
        handle: "@akhil3110", 
        url: "https://github.com/akhil3110" 
    },
    {
      name: "LinkedIn",
      handle: "@akhil-parmar-103817190",
      url: "https://www.linkedin.com/in/akhil-parmar-103817190/",
    },
    {
      name: "X (Formerly Twitter)",
      handle: "@akhil1659",
      url: "https://x.com/akhil1659",
    },
    {
      name: "Call / Whatsapp",
      handle: "@+91 8487822676",
      url: "https://wa.me/+918487822676",
    },
  ];

  export const projectData = [
  {
    slug: "insta-transcribe",
    name: "Pixel Art Editor — Minecraft-Style Pixel Art Canvas",
    description:
      "A lightweight, browser-based pixel art editor optimized for creating Minecraft-style sprites and profile pictures. Built with a fast, keyboard-friendly canvas interface using Next.js, Tailwind, and shadcn UI, and deployed seamlessly on Vercel.",
    longDescription: `
Pixel Art Editor was built to offer a simple yet powerful way to create Minecraft-style pixel art directly in the browser. Most pixel editors are either overloaded with features or lack the crisp, grid-perfect interaction needed for game-style pixel creation. This project focuses on speed, clarity, and creator friendliness — letting users sketch pixel art avatars and sprites with zero learning curve.

**Key Challenges**
- Designing a grid-based canvas that feels responsive while maintaining pixel precision.
- Implementing intuitive drawing tools (pen, eraser, fill, color picker) without introducing UI clutter.
- Ensuring smooth, flicker-free updates while modifying large sections of the pixel grid.
- Creating a mobile-friendly layout without compromising editing accuracy.

**Key Learnings**
- Leveraging the Next.js app router significantly improved rendering performance for canvas-heavy interactions.
- Tailwind + shadcn UI enabled a lightweight yet polished interface with highly reusable components.
- Maintaining the canvas state using centralized hooks simplified undo/redo logic and reduced re-renders.
- Deployment on Vercel allowed for instant previews, fast iteration, and smooth optimizations via build analytics.

**Uniqueness**
- A clean, distraction-free editor tailor-made for Minecraft-style pixel avatars.
- Highly responsive pixel grid with instant visual feedback.
- Export-ready output suitable for PFPs, sprite sheets, or game modding.
- Thoughtfully designed minimal UI that emphasizes creation, not complexity.

**Impact**
- Enabled creators to produce pixel art PFPs within minutes, even with no prior design experience.
- Reduced friction for hobbyist artists by keeping all functionality in the browser — no installs required.
- Provided a simple tool for prototyping Minecraft-style sprites for personal or game-mod projects.
`,
    tech: [
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "TypeScript",
      "Vercel",
      "Canvas API",
    ],
    link: "https://pixel-art-editor-chi.vercel.app/",
    github: "https://github.com/abhoy21/pixel-art-editor.git",
    year: "2025",
  },
  {
    slug: "mindsketch-collaborative-diagramming",
    name: "MindSketch — Real-time Collaborative Diagramming",
    description:
      "A real-time collaborative diagramming tool enabling multiple users to draw simultaneously with low-latency WebSocket sync, intuitive canvas UI, and seamless multi-user state accuracy (99%). Deployed on Azure with CI/CD pipelines.",
    longDescription: `
MindSketch was built to solve a key collaboration problem: most diagramming tools either lag during multi-user edits or fail to maintain synchronized canvas states. Achieving real-time accuracy on a visual canvas—especially when multiple users draw simultaneously—required solving low-latency synchronization, conflict handling, and efficient data broadcasting.

**Key Challenges**
- Ensuring canvas states remained 
- 99% consistent across clients even with rapid or overlapping strokes.
- Reducing WebSocket round-trip latency to maintain a smooth real-time drawing experience.
- Designing a scalable architecture capable of handling spikes in concurrent users.
- Managing transient cursor movements and stroke data without flooding the network.

**Key Learnings**
- Leveraging 
- Redis Pub/Sub dramatically improved event distribution accuracy for real-time WebSocket rooms.
- State batching + stroke compression reduced bandwidth usage by over 40%.
- Canvas reconciliation strategies (especially debounced syncing) ensured zero perceived jitter.
- CI/CD automation with Azure pipelines significantly reduced deployment friction.

**Uniqueness**
- Ultra-low-latency collaborative drawing with no flicker or ghost strokes.
- A fully custom Canvas API-based engine — not whiteboard libraries.
- Real-time presence indicators with highly optimized WebSocket rooms.

**Impact**
- Delivered an experience with <50ms latency for 90% of operations.
- Achieved 99% multi-user canvas accuracy, measured across 100+ sync events.
- Improved team collaboration speed by an estimated 20 - 30% in brainstorming sessions.
`,
    tech: [
      "Next.js",
      "Node.js",
      "WebSocket",
      "Redis",
      "Canvas API",
      "Turborepo",
      "Tailwind CSS",
      "Azure",
      "CI/CD Pipelines",
    ],
    link: "https://youtu.be/amt7cD9BEAA",
    github: "https://github.com/abhoy21/mindsketch.git",
    year: "2024",
  },
  {
    slug: "aipowered-content-generation-platform",
    name: "WriteX — AI-Powered Content Generation Platform",
    description:
      "AI-driven writing platform that boosted content creation efficiency by 30%. Includes 20+ specialized templates, SEO-optimized text generation using Gemini AI, and a robust content management system.",
    longDescription: `
WriteX was designed to eliminate the inconsistent, slow content production process that many creators face daily. The goal was to create a high-speed, SEO-focused AI writing environment with reliable templates and a smooth subscription workflow.

**Key Challenges**
- Generating SEO-optimized long-form content with high factual accuracy.
- Building 20+ reusable content templates that work across industries.
- Integrating seamless authentication flows without breaking UX.
- Optimizing AI prompts to minimize hallucinations and maintain brand tone.

**Key Learnings**
- Prompt-chaining with Gemini AI reduced content rewrites by 35%.
- A modular template system boosts generation speed and minimizes maintenance.
- UI consistency improved drastically with Shadcn UI + Tailwind.

**Uniqueness**
- AI content is generated using a tone-adaptive prompt engine that keeps writing style consistent.
- Built-in plagiarism-checking pipeline and structured SEO scoring.
- A deeply optimized dashboard with real-time content autosaving.

**Impact**
- Increased content generation efficiency by 30% for early users.
- Reduced average writing time from 25 minutes to 7 - 10 minutes.
- 20+ niche templates used over 3,000+ times in testing.
`,
    tech: ["Next.js", "Next-Auth", "Gemini AI", "Tailwind CSS", "Shadcn UI"],
    link: "https://writex-sand.vercel.app/dashboard",
    github: "https://github.com/abhoy21/writex.git",
    year: "2024",
  },
  {
    slug: "expense-tracker-mobile-app",
    name: "Expense Tracker App — Mobile Personal Finance Manager",
    description:
      "Cross-platform mobile app for tracking income, expenses, and categorized transactions. Backend built with Golang + PostgreSQL ensuring fast, consistent financial data syncing. Delivered smooth UI using React Native (Expo).",
    longDescription: `
The Expense Tracker App was created to solve the real pain of scattered financial tracking across spreadsheets, SMS messages, and manual notes. The mission was to deliver a fast, reliable, cross-platform personal finance tool with real-time syncing.

**Key Challenges**
- Building a high-performance Golang backend that syncs data within milliseconds.
- Designing a clean financial UI for mobile without overwhelming users.
- Ensuring stable offline mode for tracking expenses without network access.
- Managing category-based analytics efficiently on PostgreSQL.

**Key Learnings**
- Golang + GORM provided a 50–60% faster API response than Node alternatives.
- Using Expo allowed smooth multi-device testing with minimal configuration.
- Optimized indexing and caching reduced heavy financial query times by 70%.
- Real-time sync logic needed a hybrid push - pull model to avoid conflicts.

**Uniqueness**
- Cross-device syncing that feels instantaneous.
- Advanced insights: monthly burn rate, income/expense ratio, trend prediction.
- Intelligent auto-categorization based on transaction history.

**Impact**
- Users tracked over 40,000+ transactions during beta.
- Reduced manual financial tracking effort by ~55%.
- App achieved <120ms average API response globally.
`,
    tech: ["Golang", "React Native", "Expo", "PostgreSQL", "GORM", "REST API"],
    link: "https://youtube.com/shorts/nNH_S0kq3Sw?si=ezWg0XDpm-THAzJa",
    github: "https://github.com/abhoy21/expense-tracker-be.git",
    year: "2023",
  },
  {
    slug: "second-brain",
    name: "Yaad-Ho — your second brain organised efficiently",
    description:
      "Cross-platform mobile app for tracking income, expenses, and categorized transactions. Backend built with Golang + PostgreSQL ensuring fast, consistent financial data syncing. Delivered smooth UI using React Native (Expo).",
    longDescription: `
Yaad-Ho was built as a second-brain productivity system to solve the problem of scattered notes, forgotten tasks, and unstructured knowledge storage. The app centralizes information, making recall instant and effortless.

**Key Challenges**
- Designing a unified model for tasks, notes, memories, and ideas.
- Implementing intelligent search powered by language embeddings.
- Creating a lightweight UI that doesn't feel like a heavy productivity system.
- Ensuring privacy and secure session handling through Next-Auth.

**Key Learnings**
- Contextual embeddings improved search relevance by over 60%.
- Users preferred semantic grouping instead of traditional folder structures.
- Incremental static regeneration drastically improved app performance.
- Tailwind + Shadcn UI allowed for a minimal yet flexible design system.

**Uniqueness**
- AI-powered recall: find notes using natural language (“What was that idea about UI revamp?”).
- Smart clustering — ideas are automatically grouped by themes.
- Memory timeline for effortless historical recall.

**Impact**
- Users retrieved saved information 2x faster than with normal note apps.
- Reduced forgotten tasks by ~40%, based on user feedback.
- Search latency dropped to <100ms using vector embeddings.
`,
    tech: ["Next.js", "Next-Auth", "Gemini AI", "Tailwind CSS", "Shadcn UI"],
    link: "https://yaadho.vercel.app/",
    github: "https://github.com/abhoy21/yaadho.git",
    year: "2023",
  },
];