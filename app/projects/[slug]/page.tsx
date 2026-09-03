import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { selectedWorkProjects } from "@/lib/data/projects";
import { ProjectScreenshotCarousel } from "@/components/projects/ProjectScreenshotCarousel";

type ProjectPageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return selectedWorkProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = selectedWorkProjects.find((p) => p.slug === slug);

    return {
        title: `${project?.name || slug} | Andrew Barte`,
        description: project?.description || "Project detail page",
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = selectedWorkProjects.find((p) => p.slug === slug);

    if (!project) notFound();

    return (
        <main className="container-editorial py-20">
            <p className="label-mono">PROJECT / {project.number}</p>
            <h1 className="headline-serif mt-6 text-5xl md:text-7xl">{project.name}</h1>
            <p className="label-mono mt-4 text-[color:var(--muted)]">{project.category}</p>
            <p className="mt-8 max-w-prose text-lg leading-relaxed">{project.description}</p>

            {project.stack && project.stack.length > 0 && (
                <div className="mt-12">
                    <p className="label-mono mb-4">STACK</p>
                    <div className="flex flex-wrap gap-3">
                        {project.stack.map((tech) => (
                            <span key={tech.key} className="border border-[color:var(--border)] px-3 py-1.5 text-sm">
                                {tech.label}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            <div className="mt-16">
                <p className="label-mono mb-8">SCREENSHOTS</p>
                <ProjectScreenshotCarousel
                    screenshots={project.screenshots ?? []}
                    projectName={project.slug}
                    liveUrl={project.liveUrl}
                />
            </div>

            <Link href="/" className="mt-16 inline-block border-b border-[color:var(--border)] pb-1">
                Back to home
            </Link>
        </main>
    );
}
