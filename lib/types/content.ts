export interface NavigationItem {
    label: string;
    href: `/#${string}`;
}

export interface SiteProfile {
    name: string;
    tagline: string;
    location: string;
    scrollLabel: string;
    navigation: NavigationItem[];
    socialLinks: Array<{
        platform: "github" | "linkedin";
        href: string | null;
    }>;
}
