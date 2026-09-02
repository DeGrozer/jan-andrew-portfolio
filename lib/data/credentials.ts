export interface EducationEntry {
    stage: string;
    degree: string;
    institution: string;
    detail: string;
    distinction?: string;
}

export interface CertificateEntry {
    name: string;
    issuer: string;
    date: string;
    image?: string;
    href?: string;
}

export const education: EducationEntry[] = [
    {
        stage: "2022 - 2026",
        degree: "Bachelor of Science in Information Technology",
        institution: "Camarines Sur Polytechnic Colleges",
        detail: "Relevant experience: web dev, web designing, system analysis and design, low- and high-level programming",
        distinction: "GWA 1.4 Magna Cum Laude",
    },
    {
        stage: "2020 - 2022",
        degree: "Senior High School",
        institution: "Humanities and Social Studies (HUMSS)",
        detail: "Senior High",
        distinction: "",
    },
    {
        stage: "2016 - 2020",
        degree: "Junior High School",
        institution: "Computer Science High School of Bicolandia",
        detail: "Junior High",
        distinction: "",
    },
    {
        stage: "2009 - 2016",
        degree: "Elementary",
        institution: "School of the Future",
        detail: "Elementary",
        distinction: "",
    },
];

export const certificates: CertificateEntry[] = [];
