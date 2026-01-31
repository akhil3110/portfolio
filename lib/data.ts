import { link } from "fs";

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
      name: "Sketch Flow — A Sketching Tool",
      description:
        "A sketching tool that allows users to create and share their ideas with ease. It features a user-friendly interface, and the ability to collaborate with others.",
      tech: [
        "Next.js",
        "Node.js",
        "Express.js",
        "Redis",
        "WebSockets",
        "TurboRepo",
        "Docker",
        "ShadCn",
        "React.js",
        "TypeScript",
        "Drizzle",
        "Postgres SQL",
        "Tailwind CSS",
      ],
      link: "https://ecdraw.akhilparmar.com/",
      github: "https://github.com/akhil3110/excali-draw",
      year: "2025",
      details: [
        "Architected and built a real-time collaborative whiteboard system supporting multi-user concurrent editing with low-latency updates using WebSockets.",
        "Implemented a custom HTML Canvas rendering engine from scratch (no third-party drawing libraries), supporting shapes, freehand drawing, text, erasing, and interaction state management.",
        "Designed a scalable real-time event pipeline using Redis as an in-memory queue, enabling fast UI updates while asynchronously persisting canvas state to PostgreSQL.",
        "Developed invitation-based access control for shared canvases, allowing secure multi-user collaboration.",
        "Optimized rendering and network payloads to handle high-frequency drawing events without frame drops or UI lag.",
        "Built a monorepo architecture using Turborepo, sharing types and utilities across frontend, HTTP API, and WebSocket services.",
        "Designed a fault-tolerant backend using Express and WebSockets, capable of handling multiple concurrent sessions per canvas.",
        "Modeled relational data using PostgreSQL + Drizzle ORM, ensuring consistency between real-time state and persistent storage.",
        "Containerized services using Docker to ensure reproducible development and production deployments.",
        "Delivered a production-grade feature set comparable to Excalidraw, including free real-time collaboration."
      ]
    },
    {
      name: "Insta-Transcribe — Vertical Video transcribing platform",
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
        name: "Learnify - Platform for Educators",
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