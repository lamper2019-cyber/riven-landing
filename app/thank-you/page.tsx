import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-surface flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter text-primary mb-6 animate-fade-up">
          OBSIDIAN KINETIC
        </h1>

        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-primary/60 to-transparent mb-12" />

        <div className="space-y-4 max-w-md animate-fade-up delay-300">
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 gold-glow">
            <span className="material-symbols-outlined text-primary text-3xl">
              check_circle
            </span>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface">
            Application Received.
          </h2>
          <p className="font-body text-on-surface-variant text-lg">
            We&apos;ll be in touch within 48 hours.
          </p>
        </div>

        <Link
          href="/"
          className="mt-14 text-primary text-sm font-label uppercase tracking-widest hover:text-secondary transition-all duration-300 animate-fade-up delay-500"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
