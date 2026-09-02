import type { PortfolioProject } from "@/lib/types/project";

export const selectedWorkProjects: PortfolioProject[] = [
  {
    id: "asog-tbi",
    number: "01",
    slug: "asog-tbi",
    name: "DOST-CSPC ASOG",
    title: "ASOG TBI Website",
    category: "WEB DEVELOPMENT · CMS · INTERACTIVE",
    description:
      "A website and content management system developed for the DOST-CSPC ASOG Technology Business Incubator.",
    stack: [
      { label: "PHP", key: "php" },
      { label: "CodeIgniter", key: "codeigniter" },
      { label: "GSAP", key: "gsap" },
      { label: "Three.js", key: "three.js" },
    ],
    screenshots: [
      { src: "/images/projects/asog/incubatees.webp", alt: "ASOG TBI Incubatees" },
      { src: "/images/projects/asog/journey.webp", alt: "ASOG TBI Journey" },
      { src: "/images/projects/asog/banox.webp", alt: "BanoX Detail" },
      { src: "/images/projects/asog/leaderboard.webp", alt: "Leaderboard" },
    ],
    imageAlt: "Placeholder panel for ASOG TBI project screenshot",
    liveUrl: "https://asogtbi.com",
    status: "active",
  },
  {
    id: "volleywood",
    number: "02",
    slug: "volleywood",
    name: "VOLLEYWOOD",
    title: "VOLLEYWOOD",
    category: "VOLLEYBALL CONTENT AND MEDIA PLATFORM",
    description:
      "A volleyball-focused website and content management platform built and maintained with WordPress, featuring editorial content, structured navigation, and a customized user experience.",
    stack: [
      { label: "WordPress", key: "wordpress" },
      { label: "CMS", key: "cms" },
      { label: "UI/UX", key: "uiux" },
      { label: "Web Development", key: "web" },
    ],
    screenshots: [
      { src: "/images/projects/volleywood/landing.webp", alt: "landing page of Volleywood" }
    ],
    imageAlt: "Placeholder panel for ASOG TBI project screenshot",
    liveUrl: "https://volleywood.net",
    status: "wip",
  },
  {
    id: "eng-bakery",
    number: "03",
    slug: "eng-bakery",
    name: "ENG BAKERY",
    title: "EnG BAKERY",
    category: "BAKERY MANAGEMENT SYSTEM",
    description:
      "A management system developed to support bakery operations and perform day-to-day workflows.",
    stack: [
      { label: "PHP", key: "php" },
      { label: "CodeIgniter", key: "codeigniter" },
      { label: "MySQL", key: "mysql" },
      { label: "JavaScript", key: "javascript" },
    ],
    screenshots: [
      { src: "/images/projects/eng/eng.webp", alt: "EnG Bakery dashboard overview" },
    ],
    imageAlt: "EnG Bakery project screenshot",
    liveUrl: "https://example.com/eng-bakery",
    status: "active",
  },
  {
    id: "opticcs",
    number: "04",
    slug: "opticcs",
    name: "OPTICCS",
    title:
      "OptiCCS: An Integrated System for Monitoring and Managing Computer and Laboratory Equipment for the College of Computer Studies",
    category: "FULL STACK WEB DEVELOPER · CAPSTONE PROJECT",
    description:
      "Built a centralized lab management platform (PHP/CodeIgniter/MySQL) with real-time monitoring via Python WebSocket agent. Features include equipment inventory tracking, borrower management, remote command execution, violation detection, and live screenshot streaming.",
    stack: [
      { label: "PHP", key: "php" },
      { label: "CodeIgniter", key: "codeigniter" },
      { label: "MySQL", key: "mysql" },
      { label: "Python", key: "python" },
      { label: "WebSockets", key: "websocket" },
    ],
    screenshots: [
      { src: "/images/projects/opticcs/opticcs.webp", alt: "OptiCCS lab monitoring dashboard" },
    ],
    imageAlt: "OptiCCS project screenshot",
    liveUrl: "https://drive.google.com/drive/folders/19eiHIC7nf4bv_UmVHWdUNKqbCrtDy38E?usp=sharing",
    status: "active",
    featured: true,
  },
  {
    id: "fivb-3d-rankings",
    number: "05",
    slug: "3d-world-rankings",
    name: "3D WORLD RANKINGS",
    title: "3D INTERACTIVE FIVB WORLD RANKING",
    category: "EXPERIMENTAL · 3D",
    description:
      "A passion project and work in progress that visualizes FIVB volleyball world rankings through an interactive 3D globe.",
    stack: [
      { label: "Three.js", key: "three.js" },
      { label: "Data Viz", key: "dataviz" },
      { label: "WebGL", key: "webgl" },
      { label: "WIP", key: "wip" },
    ],
    screenshots: [
      { src: "/images/projects/3d/3d.webp", alt: "3D interactive world rankings interface" },
    ],
    imageAlt: "3D world rankings project screenshot",
    liveUrl: "https://degrozer.github.io/3dfivbranking/globe-lineart/",
    status: "wip",
  },
];
