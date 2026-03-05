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
    <main className="min-h-screen bg-riven-bg flex flex-col items-center px-6 py-12 md:py-20">
      {/* Logo */}
      <h1 className="text-riven-gold text-4xl md:text-5xl font-bold tracking-[0.3em] mb-16 md:mb-20">
        RIVEN
      </h1>

      {/* Hero Section */}
      <div className="w-full max-w-xl text-center space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          The Phase 1 Protocol
        </h2>
        <p className="text-riven-muted text-lg md:text-xl leading-relaxed">
          How I lost 56 lbs without a gym.
          <br />
          One habit. Protein before noon.
        </p>
      </div>

      {/* Before/After Image Placeholder */}
      <div className="w-full max-w-xl mt-12 mb-12">
        <div className="border-2 border-dashed border-riven-border rounded-xl h-64 md:h-80 flex items-center justify-center">
          <span className="text-riven-muted text-sm">
            Before / After Image
          </span>
        </div>
      </div>

      {/* Email Capture */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4"
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-5 py-4 rounded-lg bg-riven-card border border-riven-border text-white placeholder-riven-muted focus:outline-none focus:border-riven-gold transition-colors text-base"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-lg bg-riven-gold text-riven-bg font-bold text-base tracking-wide hover:bg-riven-gold-light disabled:opacity-50 transition-all"
        >
          {loading ? "SENDING..." : "GET THE GUIDE"}
        </button>
        {error && (
          <p className="text-red-400 text-sm text-center">{error}</p>
        )}
      </form>

      {/* Bottom CTA */}
      <div className="mt-20 md:mt-28 text-center">
        <p className="text-riven-muted text-xs md:text-sm">
          Want the full coaching experience?{" "}
          <a
            href="/enroll"
            className="text-riven-gold underline underline-offset-4 hover:text-riven-gold-light transition-colors"
          >
            Apply for RIVEN private coaching
          </a>
        </p>
      </div>
    </main>
  );
}
