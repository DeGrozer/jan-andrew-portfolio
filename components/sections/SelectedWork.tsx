import Image from "next/image";
import type { IconType } from "react-icons";
import {
  SiCodeigniter,
  SiCss,
  SiGsap,
  SiJavascript,
  SiMysql,
  SiPhp,
  SiPython,
  SiReact,
  SiSocket,
  SiTailwindcss,
  SiThreedotjs,
  SiWordpress,
} from "react-icons/si";
import { selectedWorkProjects } from "@/lib/data/projects";
import { ProjectScreenshotCarousel } from "@/components/projects/ProjectScreenshotCarousel";
import type { PortfolioProject } from "@/lib/types/project";

const stackIconMap: Record<string, IconType> = {
  php: SiPhp,
  codeigniter: SiCodeigniter,
  gsap: SiGsap,
  "three.js": SiThreedotjs,
  wordpress: SiWordpress,
  mysql: SiMysql,
  javascript: SiJavascript,
  python: SiPython,
  websocket: SiSocket,
  react: SiReact,
  tailwind: SiTailwindcss,
  css: SiCss,
};

const stackHrefMap: Record<string, string> = {
  php: "https://www.php.net/",
  codeigniter: "https://codeigniter.com/",
  gsap: "https://gsap.com/",
  "three.js": "https://threejs.org/",
  wordpress: "https://wordpress.org/",
  mysql: "https://www.mysql.com/",
  javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  python: "https://www.python.org/",
  react: "https://react.dev/",
  tailwind: "https://tailwindcss.com/",
  css: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  websocket: "https://developer.mozilla.org/en-US/docs/Web/API/WebSocket",
};

function ProjectStack({ items }: { items: PortfolioProject["stack"] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <ul className="project-stack" aria-label="Technologies used">
      {items.map((item) => {
        const Icon = stackIconMap[item.key.toLowerCase()] ?? null;
        const href = stackHrefMap[item.key.toLowerCase()];
        const content = (
          <>
            {Icon ? <Icon className="project-stack-icon" aria-hidden="true" /> : null}
            <span>{item.label}</span>
          </>
        );

        return (
          <li key={`${item.label}-${item.key}`}>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-stack-link"
                title={`Visit ${item.label}`}
                aria-label={`Visit ${item.label} official website`}
              >
                {content}
              </a>
            ) : (
              <span className="project-stack-link project-stack-link--static" title={item.label}>
                {content}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function SelectedWorkSection() {
  return (
    <section
      id="selected-work"
      className="selected-work-section container-editorial scroll-mt-24 py-16 md:py-24"
      aria-labelledby="selected-work-heading"
    >
      <div className="section-intro">
        <div>
          <h2 data-interactive-reveal id="selected-work-heading" className="section-heading headline-serif text-5xl md:text-7xl">
            Selected work.
          </h2>
          <p data-interactive-reveal className="mx-auto mt-4 max-w-[48ch] text-base leading-relaxed text-[color:var(--foreground)]/88 md:text-lg">
            Selected products, systems, and experiments built through school, freelance
            work, and hands-on exploration.
          </p>
        </div>
      </div>

      <div className="mt-12 space-y-12 md:mt-16 md:space-y-16">
        {selectedWorkProjects.map((project, index) => {
          const isReversed = index % 2 === 1;
          const projectNumber = String(index + 1).padStart(2, "0");
          const projectLiveUrl = project.slug === "eng-bakery" ? undefined : project.liveUrl;
          const ctaLabel = project.slug === "opticcs"
            ? "VIEW DOCUMENTATION / MANUAL"
            : projectLiveUrl
              ? "VISIT SITE"
              : project.githubUrl
                ? "VIEW SOURCE"
                : null;
          const ctaHref = projectLiveUrl ?? project.githubUrl;

          return (
            <article
              key={project.id}
              className="grid gap-8 md:grid-cols-12 md:items-start md:gap-8 xl:gap-10"
              aria-labelledby={`${project.slug}-title`}
            >
              <div
                className={
                  isReversed
                    ? "md:order-2 md:col-span-5"
                    : "md:order-1 md:col-span-5"
                }
              >
                <div
                  data-interactive-reveal={isReversed ? "right" : "left"}
                  className="space-y-4 md:pr-4 xl:pr-6"
                >
                  <div className="project-heading-lockup">
                    <div className="project-index" aria-hidden="true">
                      {projectNumber}
                    </div>
                    <div className="min-w-0">
                      <h3
                        id={`${project.slug}-title`}
                        className={`headline-serif text-left text-3xl leading-[0.96] md:text-4xl xl:text-[2.75rem] ${project.slug === "opticcs" ? "selected-work-title--long" : ""}`}
                      >
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <p className="label-mono text-left text-[0.68rem] tracking-[0.12em] text-[color:var(--foreground)]/75 md:text-[0.72rem]">
                      {project.category}
                    </p>
                    {project.status === "wip" && (
                      <span className="label-mono inline-block border border-[color:var(--focus)] bg-[color:var(--focus)]/10 px-1.5 py-0.5 text-[0.55rem] tracking-[0.1em] text-[color:var(--focus)]">
                        {project.slug === "barangay-atlas" ? "COMING SOON" : "WIP"}
                      </span>
                    )}
                  </div>

                  <p className="max-w-none text-left text-sm leading-relaxed text-[color:var(--foreground)]/88 md:text-base">
                    {project.description}
                  </p>

                  {project.stack.length > 0 || project.tags?.length ? (
                    <div className="space-y-3">
                      {project.stack.length > 0 ? <ProjectStack items={project.stack} /> : null}
                      {project.tags?.length ? (
                        <p className="project-tags label-mono text-left">
                          {project.tags.join(" · ")}
                        </p>
                      ) : null}
                    </div>
                  ) : null}

                </div>
              </div>

              <div
                className={
                  isReversed
                    ? "md:order-1 md:col-span-7"
                    : "md:order-2 md:col-span-7"
                }
              >
                <div data-interactive-reveal={isReversed ? "left" : "right"} data-interactive-float className="group relative w-full">
                  {project.image ? (
                    <a
                      href={ctaHref ?? undefined}
                      target={ctaHref ? "_blank" : undefined}
                      rel={ctaHref ? "noopener noreferrer" : undefined}
                      className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
                      aria-label={ctaHref ? `${ctaLabel ?? "Open project"} for ${project.title}` : project.imageAlt}
                    >
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[color:var(--surface)]/30">
                        <Image
                          src={project.image}
                          alt={project.imageAlt}
                          fill
                          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 66vw, 58vw"
                          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.015]"
                        />
                        {ctaHref ? (
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
                            <div className="absolute bottom-4 left-4 md:bottom-5 md:left-5">
                              <span className="label-mono inline-flex items-center gap-2 border border-white/25 bg-white/10 px-3 py-2 text-[0.58rem] tracking-[0.16em] text-white backdrop-blur-[2px]">
                                {ctaLabel ?? "VISIT SITE"}
                                <span aria-hidden="true">↗</span>
                              </span>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </a>
                  ) : (
                    <div data-interactive-reveal={isReversed ? "left" : "right"} data-interactive-float className="group relative w-full">
                      {project.screenshots && project.screenshots.length > 0 ? (
                        <ProjectScreenshotCarousel
                          screenshots={project.screenshots}
                          projectName={project.slug}
                          liveUrl={projectLiveUrl}
                          overlayLabel={project.slug === "opticcs" ? "VIEW DOCUMENTATION / MANUAL" : undefined}
                        />
                      ) : (
                        <a
                          href={projectLiveUrl ?? undefined}
                          target={projectLiveUrl ? "_blank" : undefined}
                          rel={projectLiveUrl ? "noopener noreferrer" : undefined}
                          className={projectLiveUrl ? "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]" : "block"}
                          aria-label={projectLiveUrl ? `${ctaLabel ?? "Open project"} for ${project.title}` : project.imageAlt}
                        >
                          <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-[color:var(--surface)]/20 px-6 text-center">
                            <div>
                              <p className="label-mono text-[0.7rem]">
                                {project.slug === "philippine-geobase" ? "VIEW SITE" : "PROJECT VISUAL"}
                              </p>
                              <p className="mt-3 text-sm text-[color:var(--muted)]">
                                {project.slug === "philippine-geobase"
                                  ? "Explore the interactive map of the Philippines."
                                  : "Screenshot placeholder ready for real asset."}
                              </p>
                            </div>
                            {projectLiveUrl ? (
                              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                                <div className="absolute bottom-4 left-4 md:bottom-5 md:left-5">
                                  <span className="label-mono inline-flex items-center gap-2 border border-white/25 bg-white/10 px-3 py-2 text-[0.58rem] tracking-[0.16em] text-white backdrop-blur-[2px]">
                                    VISIT SITE
                                    <span aria-hidden="true">↗</span>
                                  </span>
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-12 flex flex-col items-center text-center md:mt-16">
        <p className="text-[1.05rem] tracking-[0.12em] text-[color:var(--foreground)]/80 md:text-[1.25rem]">
          Want to see what&apos;s under the hood?
        </p>
        <a
          href="https://github.com/degrozer"
          target="_blank"
          rel="noopener noreferrer"
          className="group label-mono mt-5 inline-flex items-center gap-3 text-[1.3rem] text-[color:var(--foreground)] transition-colors hover:text-[color:var(--muted)] md:text-[2.4rem]"
          aria-label="Open Andrew Barte GitHub profile"
        >
          <span className="underline-offset-8 group-hover:underline">GITHUB.COM/DEGROZER</span>
          <span aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
        </a>
      </div>
    </section>
  );
}
