import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Instrument_Serif, IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
    variable: "--font-instrument-serif",
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

const manrope = Manrope({
    variable: "--font-manrope",
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
        "Developer / Builder / Still figuring it out. Personal portfolio of Andrew Barte.",
};

export default function RootLayout({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en">
            <body
                className={`${instrumentSerif.variable} ${manrope.variable} ${ibmPlexMono.variable}`}
            >
                {children}
            </body>
        </html>
    );
}
