export const projects = [
  {
    id: 1,
    title: "IWM - Reverse Vending Machine",
    category: "IoT / AI / Hardware",
    tags: ["IoT", "Hardware", "Embedded"],
    description:
      "Patented AI-powered waste collection system awarded a <strong>Government of India Design Patent</strong>. Secured <strong>₹1L+ in funding</strong> from the BGSCET Innovation Cell. Three-stage bottle validation with thermal reward coupons.",
    descriptionPlain:
      "Automated PET bottle collection system with three-stage validation — presence, material type, and weight — rewarding users with thermal coupons. Built with Raspberry Pi, conveyor belt hardware, and custom embedded firmware.",
    github: "https://github.com/ishaaqdev/IWM-Reverse-Vending-Machine",
    live: "https://ishaaqdev.github.io/IWM-Reverse-Vending-Machine/",
    liveLabel: "Live Site",
    featured: true,
    images: [
      "/projects/iwm/images/rvm1.jpeg",
      "/projects/iwm/images/rvm2.jpeg",
      "/projects/iwm/images/rvm3.jpeg",
      "/projects/iwm/images/rvm4.jpeg",
      "/projects/iwm/images/rvm5.jpeg",
      "/projects/iwm/images/IWM_RVM_Circuit_schematic.png",
    ],
    video: "/projects/iwm/video/rvm Demo cardboard.mp4",
  },
  {
    id: 2,
    title: "Staged Embarrassment Learning (SEL)",
    category: "Machine Learning Research",
    tags: ["AI/ML", "Python", "Research"],
    description:
      "Bio-inspired training framework achieving up to <strong>99% FLOPs reduction</strong> using dynamic gradient sparsity. Focuses compute on high-loss samples — designed for <strong>Edge AI</strong> and satellite deployment.",
    descriptionPlain:
      "Training framework that prioritizes high-loss samples using sparse gradient updates, achieving substantial energy savings for edge and satellite deployments while trading a small amount of accuracy.",
    github: "https://github.com/ishaaqdev/Staged-Embarrassment-Learning-SEL/",
    live: "https://ishaaqdev.github.io/Staged-Embarrassment-Learning-SEL/",
    liveLabel: "Research",
    featured: true,
  },
  {
    id: 3,
    title: "Recylo — Smart India Hackathon",
    category: "AI / Computer Vision",
    tags: ["Computer Vision", "Raspberry Pi", "IoT"],
    description:
      "AI waste segregation system built for <strong>SIH 2025</strong>, holder of <strong>Design Patent No. 482604-001</strong>. CNN on Raspberry Pi 5 classifies waste into 4 categories at <strong>~90% accuracy</strong>.",
    descriptionPlain:
      "IoT waste segregation system using ML and computer vision to classify household waste. Raspberry Pi 5 hardware, servo routing, and a companion web app for citizens, drivers, and admins.",
    github: "https://github.com/ishaaqdev/Recylo-SIH/",
    live: "https://ishaaqdev.github.io/Recylo-SIH/",
    liveLabel: "Live Site",
    featured: true,
  },
  {
    id: 4,
    title: "OceanOS",
    category: "Web Graphics / 3D",
    tags: ["Three.js", "WebGL", "Node.js"],
    description:
      "Integrated marine conservation platform with <strong>real-time ocean health monitoring</strong> and AI-powered cleanup management. Unified <strong>3D simulation</strong> + admin dashboard + fisherman incentive app over WebSockets.",
    descriptionPlain:
      "Marine conservation platform combining 3D ocean simulation, admin dashboard, fisherman incentive app, and pollution detection — built with Three.js, Node.js, and WebSockets.",
    github: "https://github.com/ishaaqdev/OceanOS",
    live: "https://ocean-os.vercel.app/#apps",
    liveLabel: "Live Site",
    featured: true,
  },
  {
    id: 5,
    title: "FitQuest",
    category: "Full-Stack Marketplace",
    tags: ["MERN Stack", "React", "MongoDB"],
    description:
      "MERN stack marketplace connecting fitness professionals with enthusiasts across India. Book sessions, discover verified coaches, and leave reviews through a unified interface.",
    descriptionPlain:
      "MERN stack marketplace for fitness professionals across India. Users discover coaches, book sessions, and leave reviews while trainers showcase certifications.",
    github: "https://github.com/ishaaqdev/FitQuest",
    live: "https://fitquest.vercel.app",
    liveLabel: "Live App",
    featured: false,
  },
  {
    id: 6,
    title: "OnlyFriends",
    category: "Social / Productivity",
    tags: ["JavaScript", "Behavioral Design", "WebApp"],
    description:
      "Minimalist social accountability platform using streaks and leaderboards to drive habit formation. Built on behavioral science — social proof and loss aversion.",
    descriptionPlain:
      "Social accountability platform that turns individual goals into collaborative progress through streaks, leaderboards, and peer motivation.",
    github: "https://github.com/ishaaqdev/OnlyFriends",
    live: "https://ishaaqdev.github.io/OnlyFriends/",
    liveLabel: "Live Site",
    featured: false,
  },
  {
    id: 7,
    title: "SEL v2",
    category: "Machine Learning Research",
    tags: ["Deep Learning", "Python", "Efficiency"],
    description:
      "Second iteration of the Staged Embarrassment Learning framework with improved curriculum scheduling and broader model architecture support.",
    descriptionPlain:
      "Improved SEL with refined curriculum scheduling, broader model architecture compatibility, and updated benchmarks.",
    github: "https://github.com/ishaaqdev/Staged-Embarrassment-Learning",
    live: "https://ishaaqdev.github.io/Staged-Embarrassment-Learning/",
    liveLabel: "Research",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
