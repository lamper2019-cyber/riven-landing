import Link from "next/link";

function Icon({ name, className }: { name: string; className?: string }) {
  return (
    <span className={`material-symbols-outlined ${className || ""}`}>
      {name}
    </span>
  );
}

export default function LandingPage() {
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="bg-surface/80 backdrop-blur-xl border-b border-outline-variant/20 sticky top-0 z-50 w-full">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="text-2xl font-black tracking-[0.25em] text-primary uppercase font-headline">
            RIVEN
          </div>
          <div className="hidden md:flex gap-12 items-center font-headline font-bold tracking-tight text-sm">
            <a
              className="text-on-surface hover:text-primary transition-colors"
              href="#blueprint"
            >
              The Blueprint
            </a>
            <a
              className="text-on-surface hover:text-primary transition-colors"
              href="#community"
            >
              Community
            </a>
            <a
              className="text-on-surface hover:text-primary transition-colors"
              href="#audit"
            >
              Reset Audit
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#blueprint"
              className="text-primary font-headline font-bold tracking-tight hover:scale-95 transition-all duration-300 text-sm"
            >
              GET STARTED
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden px-8">
          {/* Abstract dark background - no people */}
          <div className="absolute inset-0 z-0 bg-surface">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(242,202,80,0.06)_0%,_transparent_60%)]" />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(242,202,80,0.04)_0%,_transparent_50%)]" />
            {/* Subtle grid lines */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(242,202,80,1) 1px, transparent 1px), linear-gradient(90deg, rgba(242,202,80,1) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
          </div>
          <div className="relative z-10 max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 flex flex-col justify-center">
              <span className="font-label text-sm uppercase tracking-[0.3em] text-primary mb-6 animate-fade-up">
                Summer 2026
              </span>
              <h1 className="font-headline text-6xl md:text-8xl font-bold text-on-surface leading-[0.9] tracking-tighter mb-8 animate-fade-up delay-100">
                LOSE 20 LBS. <br />
                <span className="text-primary italic">12 WEEKS.</span> <br />
                NO GAMES.
              </h1>
              <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl mb-12 leading-relaxed animate-fade-up delay-200">
                The Summer Body Blueprint. A structured, no-nonsense protocol built for Black women who are done starting over. Simple. Direct. Proven.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-start animate-fade-up delay-300">
                <a
                  href="#blueprint"
                  className="metallic-gradient px-10 py-5 rounded-md text-on-primary font-headline font-bold text-lg gold-glow hover:scale-95 transition-all duration-300"
                >
                  START THE BLUEPRINT
                </a>
                <a
                  href="#how-it-works"
                  className="group flex items-center gap-4 px-10 py-5 font-headline font-bold text-lg text-secondary"
                >
                  HOW IT WORKS
                  <Icon
                    name="arrow_forward"
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </a>
              </div>
            </div>
            <div className="hidden lg:col-span-4 lg:flex flex-col justify-center items-center">
              {/* Animated progress rings */}
              <div className="relative w-64 h-64 animate-fade-up delay-400">
                {/* Outer ring */}
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="90" fill="none" stroke="#2a2a2a" strokeWidth="4" />
                  <circle cx="100" cy="100" r="90" fill="none" stroke="#f2ca50" strokeWidth="4" strokeDasharray="565" strokeDashoffset="565" strokeLinecap="round" className="animate-ring-fill" />
                </svg>
                {/* Middle ring */}
                <svg className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] -rotate-90" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="90" fill="none" stroke="#2a2a2a" strokeWidth="3" />
                  <circle cx="100" cy="100" r="90" fill="none" stroke="#d4af37" strokeWidth="3" strokeDasharray="565" strokeDashoffset="565" strokeLinecap="round" className="animate-ring-fill-delayed" />
                </svg>
                {/* Inner ring */}
                <svg className="absolute inset-8 w-[calc(100%-4rem)] h-[calc(100%-4rem)] -rotate-90" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="90" fill="none" stroke="#2a2a2a" strokeWidth="2" />
                  <circle cx="100" cy="100" r="90" fill="none" stroke="#e9c176" strokeWidth="2" strokeDasharray="565" strokeDashoffset="565" strokeLinecap="round" className="animate-ring-fill-slow" />
                </svg>
                {/* Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="font-headline text-5xl font-bold text-primary animate-pulse-subtle">12</div>
                  <div className="font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant mt-1">Weeks</div>
                </div>
              </div>
              {/* Phase indicators */}
              <div className="flex gap-6 mt-8 animate-fade-up delay-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Phase 1</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary-container" />
                  <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Phase 2</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Phase 3</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 px-8 bg-surface-container-lowest">
          <div className="max-w-screen-2xl mx-auto">
            <span className="font-label text-xs uppercase tracking-[0.4em] text-primary mb-4 block">
              The Process
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-20">
              SIMPLE. STRUCTURED. <span className="text-primary italic">EFFECTIVE.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-surface-container-high border-l-2 border-primary">
                <div className="font-headline text-5xl font-bold text-primary/20 mb-6">01</div>
                <h3 className="font-headline text-xl font-bold mb-4">Phase One — Foundation</h3>
                <p className="font-body text-on-surface-variant leading-relaxed">
                  We start with what&apos;s easy. Hit 40g of protein before noon. Build the base habits that make everything else click. Small shifts, stacked consistently. No overwhelm — just momentum.
                </p>
              </div>
              <div className="p-8 bg-surface-container-high border-l-2 border-primary">
                <div className="font-headline text-5xl font-bold text-primary/20 mb-6">02</div>
                <h3 className="font-headline text-xl font-bold mb-4">Phase Two — Refinement</h3>
                <p className="font-body text-on-surface-variant leading-relaxed">
                  Now we tighten up. Strip out what&apos;s holding you back. Introduce glucomannan — a natural supplement that makes appetite control significantly easier. The process starts working with you, not against you.
                </p>
              </div>
              <div className="p-8 bg-surface-container-high border-l-2 border-primary">
                <div className="font-headline text-5xl font-bold text-primary/20 mb-6">03</div>
                <h3 className="font-headline text-xl font-bold mb-4">Phase Three — Acceleration</h3>
                <p className="font-body text-on-surface-variant leading-relaxed">
                  Activity goes up. Intensity increases. This is where the transformation becomes visible. Everything from Phase One and Two compounds — and the results speak for themselves.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tiered Offerings Section */}
        <section id="offerings" className="py-32 px-8 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Main Tier: The Blueprint */}
            <div
              id="blueprint"
              className="lg:col-span-8 group relative overflow-hidden bg-surface-container-high rounded-xl p-12 flex flex-col justify-between min-h-[600px] border-l-2 border-primary"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:opacity-10 transition-opacity">
                <Icon name="local_fire_department" className="text-[12rem]" />
              </div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-16">
                  <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold font-label tracking-widest uppercase">
                    Summer Body Blueprint
                  </span>
                  <div className="font-headline text-4xl font-bold text-primary">
                    $3,000
                  </div>
                </div>
                <h2 className="font-headline text-5xl md:text-6xl font-bold mb-8 max-w-md leading-none tracking-tighter">
                  The 12-Week Blueprint
                </h2>
                <p className="font-body text-on-surface-variant text-lg max-w-lg mb-8">
                  The full protocol. Nutrition plan, weekly check-ins, direct access to coaching, and the accountability structure that actually moves the needle. Built for women who are serious.
                </p>
                <ul className="space-y-4 mb-12 font-label text-sm uppercase tracking-wide text-on-surface">
                  <li className="flex items-center gap-3">
                    <Icon name="check_circle" className="text-primary text-xl" />
                    Custom Nutrition Protocol
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="check_circle" className="text-primary text-xl" />
                    Weekly 1-on-1 Check-ins
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="check_circle" className="text-primary text-xl" />
                    Direct Coaching Access
                  </li>
                </ul>
              </div>
              <a
                href="#blueprint"
                className="w-full md:w-max px-12 py-5 bg-surface-container-highest border border-outline-variant/30 font-headline font-bold text-primary hover:bg-primary hover:text-on-primary transition-all duration-500 inline-block text-center"
              >
                APPLY NOW
              </a>
            </div>

            {/* Secondary Tier: Community */}
            <div
              id="community"
              className="lg:col-span-4 bg-surface-container-low rounded-xl p-10 flex flex-col justify-between min-h-[400px]"
            >
              <div>
                <div className="flex justify-between items-center mb-10">
                  <span className="text-secondary font-label text-xs uppercase tracking-[0.2em]">
                    The Inner Circle
                  </span>
                  <div className="font-headline text-2xl font-bold text-secondary">
                    $100
                    <span className="text-sm font-normal text-on-surface-variant">
                      /mo
                    </span>
                  </div>
                </div>
                <h3 className="font-headline text-3xl font-bold mb-6 tracking-tight">
                  RIVEN Community
                </h3>
                <p className="font-body text-on-surface-variant mb-8">
                  The group. Weekly content drops, accountability threads, and a space built for Black women on the same mission. No fluff.
                </p>
              </div>
              <div className="space-y-4">
                <div className="h-px bg-outline-variant/20 w-full" />
                <a
                  href="#community"
                  className="group w-full flex justify-between items-center py-2 font-headline font-bold text-on-surface hover:text-primary transition-colors"
                >
                  JOIN THE COMMUNITY
                  <Icon
                    name="north_east"
                    className="text-primary group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>

            {/* Tertiary Tier: Riven Reset Audit */}
            <div
              id="audit"
              className="lg:col-span-4 bg-surface-container-low rounded-xl p-10 flex flex-col justify-between min-h-[400px]"
            >
              <div>
                <div className="flex justify-between items-center mb-10">
                  <span className="text-secondary font-label text-xs uppercase tracking-[0.2em]">
                    One-on-One
                  </span>
                  <div className="font-headline text-2xl font-bold text-secondary">
                    $50
                    <span className="text-sm font-normal text-on-surface-variant">
                      {" "}for 60 min
                    </span>
                  </div>
                </div>
                <h3 className="font-headline text-3xl font-bold mb-6 tracking-tight">
                  Riven Reset Audit
                </h3>
                <p className="font-body text-on-surface-variant mb-8">
                  60 minutes. We dive into everything — where you are, what&apos;s stalling you, and what the move is. Straight answers only.
                </p>
              </div>
              <div className="space-y-4">
                <div className="h-px bg-outline-variant/20 w-full" />
                <a
                  href="#audit"
                  className="group w-full flex justify-between items-center py-2 font-headline font-bold text-on-surface hover:text-primary transition-colors"
                >
                  BOOK THE AUDIT
                  <Icon
                    name="timer"
                    className="text-primary group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>

            {/* Statement Block - no photo */}
            <div className="lg:col-span-8 relative rounded-xl overflow-hidden min-h-[400px] bg-surface-container-high flex flex-col justify-center p-12">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(242,202,80,0.06)_0%,_transparent_60%)]" />
              <div className="relative z-10">
                <h4 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight tracking-tighter">
                  &ldquo;STOP STARTING OVER. START FINISHING.&rdquo;
                </h4>
                <p className="font-label text-sm uppercase tracking-widest text-on-surface/60">
                  RIVEN — SUMMER 2026
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 px-8 bg-surface border-y border-outline-variant/10">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <span className="font-label text-xs uppercase tracking-[0.4em] text-primary mb-4 block">
                  Real Results
                </span>
                <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter">
                  WOMEN WHO <br />
                  <span className="text-primary italic">FINISHED.</span>
                </h2>
              </div>
              <div className="hidden md:block">
                <Icon
                  name="format_quote"
                  className="text-8xl text-outline-variant/20"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Testimonial 1 */}
              <div className="flex flex-col gap-8 p-8 bg-surface-container-low border border-outline-variant/10 hover:border-primary/30 transition-colors duration-500">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="star"
                      className="text-primary text-lg"
                    />
                  ))}
                </div>
                <p className="font-body text-xl text-on-surface leading-relaxed italic">
                  &ldquo;I&apos;ve tried everything. Programs, apps, challenges — none of it stuck. This was different. The structure was clear. I lost 22 lbs and actually kept it off.&rdquo;
                </p>
                <div className="mt-auto">
                  <div className="font-headline font-bold text-lg text-primary tracking-tight">
                    TAMARA J.
                  </div>
                  <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant mt-1">
                    Atlanta, GA &middot; Age 34
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="flex flex-col gap-8 p-8 bg-surface-container-low border border-outline-variant/10 hover:border-primary/30 transition-colors duration-500">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="star"
                      className="text-primary text-lg"
                    />
                  ))}
                </div>
                <p className="font-body text-xl text-on-surface leading-relaxed italic">
                  &ldquo;No hype. No motivational speeches. Just a plan and someone holding me accountable every single week. Down 19 lbs. Clothes fit completely different now.&rdquo;
                </p>
                <div className="mt-auto">
                  <div className="font-headline font-bold text-lg text-primary tracking-tight">
                    KEISHA M.
                  </div>
                  <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant mt-1">
                    Houston, TX &middot; Age 28
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="flex flex-col gap-8 p-8 bg-surface-container-low border border-outline-variant/10 hover:border-primary/30 transition-colors duration-500">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="star"
                      className="text-primary text-lg"
                    />
                  ))}
                </div>
                <p className="font-body text-xl text-on-surface leading-relaxed italic">
                  &ldquo;The Reset Audit alone changed my whole approach. One conversation. 60 minutes. I knew exactly what I was doing wrong and what to do next.&rdquo;
                </p>
                <div className="mt-auto">
                  <div className="font-headline font-bold text-lg text-primary tracking-tight">
                    DOMINIQUE R.
                  </div>
                  <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant mt-1">
                    Chicago, IL &middot; Age 31
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-surface border-t border-outline-variant/20 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16 max-w-screen-2xl mx-auto font-body text-sm tracking-wide uppercase">
          <div>
            <div className="text-lg font-bold text-primary mb-6 font-headline tracking-[0.2em]">
              RIVEN
            </div>
            <p className="text-on-surface/60 normal-case mb-8">
              The Summer Body Blueprint. 12 weeks. 20 lbs. Built for Black women who are ready to finish what they started.
            </p>
            <div className="flex gap-4">
              <Icon
                name="share"
                className="text-primary cursor-pointer hover:scale-110 transition-transform"
              />
              <Icon
                name="mail"
                className="text-primary cursor-pointer hover:scale-110 transition-transform"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-primary font-bold mb-2 font-headline">
              CONNECT
            </span>
            <a
              className="text-on-surface/60 hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all duration-300"
              href="#"
            >
              Instagram
            </a>
            <a
              className="text-on-surface/60 hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all duration-300"
              href="#"
            >
              YouTube
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-primary font-bold mb-2 font-headline">
              LEGAL
            </span>
            <a
              className="text-on-surface/60 hover:text-primary transition-all duration-300"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-on-surface/60 hover:text-primary transition-all duration-300"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-on-surface/60 hover:text-primary transition-all duration-300"
              href="#"
            >
              Contact
            </a>
            <p className="mt-8 text-[10px] text-on-surface/40">
              &copy; 2026 RIVEN. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
