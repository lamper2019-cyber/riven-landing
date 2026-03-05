import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-riven-bg flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-riven-gold/[0.04] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="animate-shimmer text-4xl md:text-5xl font-bold tracking-[0.35em] mb-6 animate-fade-up">
          RIVEN
        </h1>

        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-riven-gold/60 to-transparent animate-line-expand mb-12" />

        <div className="space-y-4 max-w-md animate-fade-up delay-300">
          <div className="w-14 h-14 rounded-full bg-riven-gold/10 border border-riven-gold/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-7 h-7 text-riven-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Check your email.
          </h2>
          <p className="text-riven-muted text-lg">
            Your guide is on the way.
          </p>
        </div>

        <Link
          href="/"
          className="mt-14 text-riven-gold text-sm underline underline-offset-4 decoration-riven-gold/30 hover:decoration-riven-gold hover:text-riven-gold-light transition-all duration-300 animate-fade-up delay-500"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
