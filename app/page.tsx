"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      router.push("/thank-you");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-riven-bg flex flex-col items-center px-5 py-14 md:justify-center md:py-24 overflow-x-hidden">
      {/* Ambient background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-riven-gold/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-xl">
        {/* Logo */}
        <h1 className="animate-shimmer text-3xl sm:text-4xl md:text-6xl font-bold tracking-[0.25em] sm:tracking-[0.3em] md:tracking-[0.35em] mb-5 animate-fade-up">
          RIVEN
        </h1>

        {/* Gold divider line */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-riven-gold/60 to-transparent animate-line-expand mb-10 md:mb-16" />

        {/* Hero Section */}
        <div className="w-full text-center space-y-4 mb-10 md:mb-14">
          <h2 className="text-[1.75rem] sm:text-3xl md:text-5xl font-bold leading-[1.15] tracking-tight animate-fade-up delay-200">
            The Phase 1 Protocol
          </h2>
          <p className="text-riven-muted text-sm sm:text-base md:text-xl leading-relaxed animate-fade-up delay-400">
            How I lost 56 lbs without a gym.
            <br />
            <span className="text-white/90 font-medium">One habit. Protein before noon.</span>
          </p>
        </div>

        {/* Social proof strip */}
        <div className="flex items-center gap-2.5 mb-8 animate-fade-up delay-500">
          <div className="flex -space-x-2">
            {["S", "M", "J", "A"].map((letter) => (
              <div
                key={letter}
                className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-riven-card border-2 border-riven-bg flex items-center justify-center text-[10px] text-riven-muted font-medium"
              >
                {letter}
              </div>
            ))}
          </div>
          <p className="text-riven-muted text-xs sm:text-sm">
            <span className="text-white font-medium">2,400+</span> people started Phase 1
          </p>
        </div>

        {/* Email Capture Card */}
        <div className="gold-border-card animate-pulse-glow w-full max-w-md p-5 sm:p-6 md:p-8 animate-fade-up delay-600">
          <p className="text-center text-xs sm:text-sm text-riven-muted mb-4 tracking-wide uppercase">
            Free guide — instant access
          </p>
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl bg-riven-bg border border-riven-border text-white placeholder-riven-muted focus:outline-none focus:border-riven-gold/60 focus:ring-1 focus:ring-riven-gold/20 transition-all text-sm sm:text-base"
            />
            <button
              type="submit"
              disabled={loading}
              className="group w-full py-3.5 rounded-xl bg-gradient-to-r from-riven-gold to-riven-gold-light text-riven-bg font-bold text-sm sm:text-base tracking-widest uppercase hover:shadow-[0_0_30px_rgba(200,169,81,0.3)] disabled:opacity-50 transition-all duration-300"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  SENDING...
                </span>
              ) : (
                "GET THE GUIDE"
              )}
            </button>
            {error && (
              <p className="text-red-400 text-sm text-center animate-fade-in">{error}</p>
            )}
          </form>
          <p className="text-center text-[11px] text-riven-muted/60 mt-3.5">
            No spam. Unsubscribe anytime.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-20 text-center animate-fade-up delay-800">
          <div className="h-[1px] w-10 bg-riven-border mx-auto mb-5" />
          <p className="text-riven-muted text-[11px] sm:text-xs md:text-sm">
            Want the full coaching experience?{" "}
            <a
              href="/enroll"
              className="text-riven-gold underline underline-offset-4 decoration-riven-gold/30 hover:decoration-riven-gold hover:text-riven-gold-light transition-all duration-300"
            >
              Apply for RIVEN private coaching
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
