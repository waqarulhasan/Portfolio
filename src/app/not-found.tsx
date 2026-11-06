import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="font-mono text-sm text-brand-cyan">404</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-white">This page doesn&apos;t exist</h1>
        <p className="mt-3 text-slate-400">The link may be old or mistyped.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-ink hover:bg-slate-200">
          Back to the homepage
        </Link>
      </div>
    </main>
  );
}
