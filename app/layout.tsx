import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, IBM_Plex_Mono, Work_Sans } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
    variable: "--font-cormorant",
    weight: ["400", "500", "600"],
    subsets: ["latin"],
    display: "swap",
});

const workSans = Work_Sans({
    variable: "--font-work-sans",
    weight: ["400", "500", "600"],
    subsets: ["latin"],
    display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
    variable: "--font-ibm-plex-mono",
    subsets: ["latin"],
    weight: ["400", "500"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Andrew Barte | Portfolio",
    description:
        "Portfolio of Andrew Barte, a developer building useful web experiences, systems, and visual tools.",
};

export default function RootLayout({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en">
            <body
                className={`${cormorantGaramond.variable} ${workSans.variable} ${ibmPlexMono.variable}`}
            >
                {children}
            </body>
        </html>
    );
}
