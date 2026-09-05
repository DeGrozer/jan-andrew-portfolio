"use client";

import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import { Braces, Globe2, Layers3, ShieldCheck, Wrench } from "lucide-react";
import {
  SiBootstrap,
  SiCodeigniter,
  SiCplusplus,
  SiDotnet,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJupyter,
  SiLaravel,
  SiLinux,
  SiMetasploit,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiNpm,
  SiOpenjdk,
  SiPfsense,
  SiPycharm,
  SiPhp,
  SiPython,
  SiReact,
  SiReplit,
  SiSharp,
  SiSublimetext,
  SiSpringboot,
  SiTailwindcss,
  SiVirtualbox,
  SiVmware,
  SiCss,
  SiWebcomponentsdotorg,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { techStackCategories, techStackItems } from "@/lib/data/tech-stack";

const techIconMap: Record<string, IconType> = {
  php: SiPhp,
  java: SiOpenjdk,
  cplusplus: SiCplusplus,
  csharp: SiSharp,
  vb6: SiDotnet,
  html: SiHtml5,
  css: SiCss,
  javascript: SiJavascript,
  python: SiPython,
  bootstrap: SiBootstrap,
  tailwind: SiTailwindcss,
  codeigniter: SiCodeigniter,
  springboot: SiSpringboot,
  react: SiReact,
  reactnative: SiReact,
  laravel: SiLaravel,
  nextjs: SiNextdotjs,
  github: SiGithub,
  nodejs: SiNodedotjs,
  npm: SiNpm,
  vscode: VscVscode,
  sublime: SiSublimetext,
  notion: SiNotion,
  replit: SiReplit,
  jupyter: SiJupyter,
  pycharm: SiPycharm,
  git: SiGit,
  linux: SiLinux,
  vmware: SiVmware,
  virtualbox: SiVirtualbox,
  pfsense: SiPfsense,
  metasploitable: SiMetasploit,
};

const techBrandColorMap: Record<string, string> = {
  php: "#777bb4",
  java: "#ea2d2e",
  cplusplus: "#00599c",
  csharp: "#68217a",
  vb6: "#512bd4",
  html: "#e34f26",
  css: "#1572b6",
  javascript: "#f7df1e",
  python: "#3776ab",
  bootstrap: "#7952b3",
  tailwind: "#06b6d4",
  codeigniter: "#ef4223",
  springboot: "#6db33f",
  react: "#61dafb",
  reactnative: "#61dafb",
  laravel: "#ff2d20",
  nextjs: "#111111",
  github: "#6e5494",
  nodejs: "#5fa04e",
  npm: "#cb3837",
  vscode: "#007acc",
  sublime: "#ff9800",
  notion: "#111111",
  replit: "#f26207",
  jupyter: "#f37626",
  pycharm: "#21d789",
  git: "#f05032",
  linux: "#fcc624",
  vmware: "#607078",
  virtualbox: "#183a61",
  pfsense: "#212121",
  metasploitable: "#4f8cc9",
};

const categoryMarkMap = {
  languages: Braces,
  "web-scripting": Globe2,
  "frameworks-libraries": Layers3,
  "tools-environment": Wrench,
  "ethical-hacking-tools": ShieldCheck,
};

export function TechStackSection() {
  const rows = techStackCategories.map((category) => ({
    ...category,
    items: techStackItems.filter((item) => item.category === category.id),
  }));

  return (
    <section
      id="tech-stack"
      className="container-editorial scroll-mt-24 border-t border-[color:var(--border)] py-14 md:py-18"
      aria-labelledby="tech-stack-heading"
    >
      <div className="section-intro">
        <div>
          <h2 data-interactive-reveal id="tech-stack-heading" className="section-heading headline-serif text-5xl md:text-7xl">
            Things I use to build.
          </h2>
          <p data-interactive-reveal className="mx-auto mt-4 max-w-[48ch] text-base leading-relaxed text-[color:var(--foreground)]/88 md:text-lg">
            A working set of technologies I&apos;ve used in projects. Some are familiar;
            others are still in progress.
          </p>
        </div>
      </div>

      <div className="mt-20 space-y-12 md:mt-24 md:space-y-14">
        {rows.map((row) => (
          <section key={row.id} className="tech-marquee-row mx-auto w-full max-w-[1200px]" aria-label={row.label}>
            <div className="flex items-center justify-center gap-2.5 md:gap-3">
              <p className="tech-category-label label-mono shrink-0 text-center text-[0.66rem] tracking-[0.12em] text-[color:var(--foreground)]/72 md:text-[0.7rem]">
                {(() => {
                  const CategoryIcon = categoryMarkMap[row.id as keyof typeof categoryMarkMap];
                  return <CategoryIcon className="tech-category-mark" aria-hidden="true" />;
                })()}
                <span>{row.label}</span>
              </p>
            </div>

            <div className="tech-marquee-viewport mt-6 md:mt-8">
              <div
                className={`tech-marquee-track ${row.direction === "left" ? "is-reverse" : ""}`}
                style={{ "--marquee-duration": `${row.durationSeconds}s` } as CSSProperties}
                onMouseEnter={(event) => {
                  event.currentTarget.style.animationPlayState = "paused";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.animationPlayState = "running";
                }}
                onFocus={(event) => {
                  event.currentTarget.style.animationPlayState = "paused";
                }}
                onBlur={(event) => {
                  event.currentTarget.style.animationPlayState = "running";
                }}
              >
                {[0, 1, 2].map((copyIndex) => (
                  <ul
                    key={`${row.id}-${copyIndex}`}
                    className="tech-marquee-sequence"
                    aria-hidden={copyIndex !== 0}
                  >
                    {row.items.map((item) => {
                      const Icon = techIconMap[item.key] ?? SiWebcomponentsdotorg;

                      return (
                        <li key={`${copyIndex}-${item.key}`} className="group">
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tech-marquee-link"
                            aria-label={`${item.name} documentation`}
                            data-status={item.status}
                            title={`${item.name} (${item.status})`}
                            style={{ "--tech-accent": techBrandColorMap[item.key] ?? "currentColor" } as CSSProperties}
                          >
                            <span className="inline-flex items-center gap-2.5">
                              <Icon className="h-4.5 w-4.5 shrink-0" aria-hidden="true" />
                              <span>{item.name}</span>
                            </span>
                            <span className="tech-marquee-docs" aria-hidden="true">
                              ↗
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

    </section>
  );
}