import { HeroSection } from "@/components/hero/HeroSection";
import { SiteShell } from "@/components/layout/SiteShell";
import { SelectedWorkSection } from "@/components/sections/SelectedWork";
import { TechStackSection } from "@/components/sections/TechStack";
import { ExplorationsSection } from "@/components/sections/Explorations";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { EasterEggZone } from "@/components/ui/EasterEggZone";
import { education } from "@/lib/data/credentials";
import Image from "next/image";

export default function HomePage() {
    return (
        <SiteShell>
            <HeroSection />
            <SelectedWorkSection />
            <TechStackSection />

            <section
                id="about"
                className="container-editorial scroll-mt-24 border-t border-[color:var(--border)] pb-8 pt-16 md:pb-12 md:pt-24"
                aria-labelledby="about-heading"
            >
                <div className="grid gap-12 md:grid-cols-3 md:items-start lg:gap-16">
                    <div data-interactive-reveal="right" className="md:col-span-2">
                        <EasterEggZone zone="about-name" style={{ display: 'contents' }}>
                            <h2
                                data-interactive-reveal
                                id="about-heading"
                                className="section-heading headline-serif text-left text-5xl md:text-6xl lg:text-7xl"
                            >
                                <span className="interactive-word">Hi,</span>{" "}
                                <span className="interactive-word">I&apos;m</span>{" "}
                                <span className="interactive-word">Jan</span>{" "}
                                <span className="interactive-word">Andrew.</span>
                            </h2>
                        </EasterEggZone>

                        <div data-interactive-reveal className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--foreground)]/85 md:text-lg lg:text-xl">
                            <p>
                                I&apos;m a developer and builder who enjoys translating ideas into <span className="interactive-word">clean, useful digital experiences.</span> My work sits at the intersection of <span className="interactive-word">design, front-end craft,</span> and practical problem-solving, whether I&apos;m building an interface, a system, or a visual story around data.
                            </p>
                            <p>
                                I studied Information Technology and grew into web development through freelance work, personal projects, and a constant habit of <span className="interactive-word">learning by building.</span> I&apos;m especially interested in front-end work, but I also enjoy the full stack side of making things actually function well.
                            </p>
                            <p>
                                Outside of coding, I write, edit videos, and work on volleyball-related projects, including analysis and <span className="interactive-word">visual storytelling.</span> I also contribute to research-driven writing and community knowledge work where clarity, structure, and good sourcing matter.
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-1">
                        <div data-interactive-reveal="right" data-interactive-float>
                            <div className="about-portrait relative flex aspect-square w-full items-end overflow-hidden border border-[color:var(--border)] bg-[color:var(--surface)]/40 p-4 md:aspect-[4/5]">
                                <Image src="/images/portrait/barte.webp" alt="Jan Andrew Barte" fill sizes="(max-width: 767px) 100vw, 33vw" className="object-contain object-center" priority />
                            </div>
                            <span className="pointer-events-none mt-3 block label-mono text-[0.64rem] leading-relaxed text-[color:var(--foreground)] md:absolute md:inset-x-4 md:bottom-4 md:mt-0 md:text-white md:drop-shadow-md">JAN ANDREW BARTE</span>
                        </div>
                    </div>
                </div>

                <div className="about-credentials mt-24" data-education-timeline>
                    <div className="mb-8 flex items-end justify-between gap-4">
                        <h3 className="headline-serif text-5xl md:text-7xl">Education.</h3>
                    </div>

                    <div className="education-timeline-track">
                        <span className="education-timeline-line" data-education-line-fill aria-hidden="true" />
                        {education.map((entry, index) => (
                            <article
                                key={`${entry.stage}-${entry.degree}`}
                                className="education-timeline-entry"
                                data-education-entry={index}
                            >
                                <span className="education-timeline-point" aria-hidden="true" />
                                <div className="education-entry-heading">
                                    <p className="label-mono text-[0.62rem]">{entry.stage}</p>
                                </div>
                                <h4 className="mt-3 text-xl md:text-2xl">{entry.degree}</h4>
                                <p className="label-mono mt-3 text-[0.62rem]">{entry.institution}</p>
                                {entry.detail && (
                                    <p className="label-mono mt-2 text-[0.62rem] text-[color:var(--foreground)]/68">
                                        {entry.detail}
                                    </p>
                                )}
                                {entry.distinction && (
                                    <p className="education-entry-distinction mt-4 label-mono text-[0.6rem]">
                                        {entry.distinction}
                                    </p>
                                )}
                            </article>
                        ))}
                    </div>
                </div>

                {/* Certifications will be restored when certificates are available. */}
            </section>

            <ExplorationsSection />

            <ContactSection />

            <Footer />
        </SiteShell>
    );
}
