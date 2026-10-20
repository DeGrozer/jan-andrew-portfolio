import type { SiteProfile } from "@/lib/types/content";

export const siteProfile: SiteProfile = {
    name: "ANDREW BARTE",
    tagline: "Developer building useful web experiences, systems, and visual tools.",
    location: "BASED IN BICOL / MAKATI, PHILIPPINES",
    scrollLabel: "SCROLL TO VIEW SELECTED WORK",
    navigation: [
        { label: "01 / SELECTED WORK", href: "/#selected-work" },
        { label: "02 / TECH STACK", href: "/#tech-stack" },
        { label: "03 / THE PERSON BEHIND THE WORK", href: "/#about" },
        { label: "04 / EXPLORATIONS", href: "/#explorations" },
        { label: "05 / ONE MORE THING", href: "/#contact" },
    ],
    socialLinks: [
        { platform: "linkedin", href: "https://www.linkedin.com/in/janandrewbarte/" },
        { platform: "github", href: "https://github.com/degrozer" },
    ],
};
