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
    id: "eng-bakery",
    number: "02",
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
    liveUrl: "https://engbakery-karangahan-main.in/",
    status: "active",
  },
  {
    id: "opticcs",
    number: "03",
    slug: "opticcs",
    name: "OPTICCS",
    title:
      "OptiCCS: An Integrated System for Monitoring and Managing Computer and Laboratory Equipment for the College of Computer Studies",
    category: "FULL STACK WEB DEVELOPER · CAPSTONE PROJECT",
    description:
      "Built a centralized lab management platform (PHP/CodeIgniter/MySQL) with a PHP Ratchet WebSocket server and Python client for real-time monitoring. Features include equipment inventory tracking, borrower management, remote command execution, violation detection, and live screenshot streaming.",
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
    number: "04",
    slug: "3d-world-rankings",
    name: "3D WORLD RANKINGS",
    title: "3D INTERACTIVE FIVB WORLD RANKING",
    category: "EXPERIMENTAL · 3D",
    description:
      "A passion project and work in progress that visualizes FIVB volleyball world rankings through an interactive 3D globe.",
    stack: [
      { label: "Three.js", key: "three.js" },
    ],
    tags: ["Data Viz", "WebGL"],
    screenshots: [
      { src: "/images/projects/3d/3d.webp", alt: "3D interactive world rankings interface" },
    ],
    imageAlt: "3D world rankings project screenshot",
    liveUrl: "https://degrozer.github.io/3dfivbranking/globe-lineart/",
    status: "wip",
  },
  {
    id: "philippine-geobase",
    number: "05",
    slug: "philippine-geobase",
    name: "PHILIPPINE GEOBASE",
    title: "Philippine GeoBase",
    category: "OPEN SOURCE · GEOSPATIAL DATA · DEVELOPER TOOL",
    description:
      "An open-source geospatial foundation for the Philippines, providing reusable coordinate data and administrative boundary shapes that anyone can customize and build upon.",
    stack: [],
    screenshots: [
      { src: "/images/projects/geobase/gebase.png", alt: "Philippine GeoBase map interface" },
    ],
    imageAlt: "Preview placeholder for Philippine GeoBase",
    liveUrl: "https://map-maqvxxbyp-degrozers-projects.vercel.app/",
    status: "wip",
  },
];
