import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-riven-bg flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-riven-gold text-3xl md:text-4xl font-bold tracking-[0.3em] mb-12">
        RIVEN
      </h1>
      <div className="space-y-4 max-w-md">
        <h2 className="text-2xl md:text-3xl font-bold">
          Check your email.
        </h2>
        <p className="text-riven-muted text-lg">
          Your guide is on the way.
        </p>
      </div>
      <Link
        href="/"
        className="mt-12 text-riven-gold text-sm underline underline-offset-4 hover:text-riven-gold-light transition-colors"
      >
        Back to home
      </Link>
    </main>
  );
}
