import Link from "next/link";

export default function NotFound() {
    return (
        <main className="container-editorial py-24">
            <p className="label-mono">404 / NOT FOUND</p>
            <h1 className="headline-serif mt-6 text-5xl md:text-7xl">This page is missing.</h1>
            <p className="mt-6 max-w-prose text-base text-[color:var(--muted)]">
                The path you opened does not exist yet.
            </p>
            <Link href="/" className="mt-8 inline-block border-b border-[color:var(--border)] pb-1">
                Return home
            </Link>
        </main>
    );
}
