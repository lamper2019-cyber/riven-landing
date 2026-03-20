import Image from "next/image";
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
          <div className="text-2xl font-black tracking-tighter text-primary uppercase font-headline">
            OBSIDIAN KINETIC
          </div>
          <div className="hidden md:flex gap-12 items-center font-headline font-bold tracking-tight">
            <a
              className="text-on-surface hover:text-primary transition-colors"
              href="#coaching"
            >
              One-on-One Coaching
            </a>
            <a
              className="text-on-surface hover:text-primary transition-colors"
              href="#community"
            >
              SKOOL Community
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
              href="#coaching"
              className="text-primary font-headline font-bold tracking-tight hover:scale-95 transition-all duration-300"
            >
              GET STARTED
            </a>
            <Icon
              name="account_circle"
              className="text-primary text-2xl cursor-pointer"
            />
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden px-8">
          <div className="absolute inset-0 z-0">
            <img
              alt="High-end gym interior"
              className="w-full h-full object-cover opacity-40 grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCowCeRx1qe04igoAONkZtepWs25cFnYa7-sdwneqT8nwdjsTDQo6kBNAVWavxN7XBGE4-iJhwKnkUtCtjZUQiKYAsZAEHvIcMPLTF3MMydF4f6METVqmoQanbhxLW1FcGPNfhZp9rfmN-yX-SMe9OFl8_fu3UD4UDtsxq5yl-WfjqBf2zTix8gMkXnqhwmgvceqzKfb3hdj_vDpf1hjNgZ3q09w5oTW7ffQu55mdNT3DOjAHuzly9I5_lswN2etoAl1BFc0nFf6VMR"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
          </div>
          <div className="relative z-10 max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 flex flex-col justify-center">
              <span className="font-label text-sm uppercase tracking-[0.3em] text-primary mb-6 animate-fade-up">
                Introducing Aureus Elite
              </span>
              <h1 className="font-headline text-6xl md:text-8xl font-bold text-on-surface leading-[0.9] tracking-tighter mb-8 animate-fade-up delay-100">
                THE PRIVATE <br />
                <span className="text-primary italic">ATELIER</span> OF <br />
                PERFORMANCE.
              </h1>
              <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl mb-12 leading-relaxed animate-fade-up delay-200">
                Forging the elite through bespoke physical architecture. We
                don&apos;t train clients; we curate legends. Obsidian Kinetic is
                the standard for those who demand absolute perfection.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-start animate-fade-up delay-300">
                <a
                  href="#coaching"
                  className="metallic-gradient px-10 py-5 rounded-md text-on-primary font-headline font-bold text-lg gold-glow hover:scale-95 transition-all duration-300"
                >
                  SECURE YOUR PROTOCOL
                </a>
                <a
                  href="#offerings"
                  className="group flex items-center gap-4 px-10 py-5 font-headline font-bold text-lg text-secondary"
                >
                  EXPLORE SERVICES
                  <Icon
                    name="arrow_forward"
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </a>
              </div>
            </div>
            <div className="hidden lg:col-span-4 lg:flex flex-col justify-end items-end pb-12">
              <div className="text-right animate-fade-up delay-400">
                <div className="font-headline text-6xl text-primary font-bold">
                  98%
                </div>
                <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                  Client Retention Rate
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tiered Offerings Section (Asymmetric Bento) */}
        <section id="offerings" className="py-32 px-8 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Main Tier: One-on-One Coaching */}
            <div
              id="coaching"
              className="lg:col-span-8 group relative overflow-hidden bg-surface-container-high rounded-xl p-12 flex flex-col justify-between min-h-[600px] border-l-2 border-primary"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Icon name="conditions" className="text-[12rem]" />
              </div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-16">
                  <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold font-label tracking-widest uppercase">
                    The Pinnacle Protocol
                  </span>
                  <div className="font-headline text-4xl font-bold text-primary">
                    $3,000
                  </div>
                </div>
                <h2 className="font-headline text-5xl md:text-6xl font-bold mb-8 max-w-md leading-none tracking-tighter">
                  One-on-One Coaching
                </h2>
                <p className="font-body text-on-surface-variant text-lg max-w-lg mb-8">
                  A completely bespoke, data-driven transformation journey.
                  Weekly bloodwork analysis, private facility access, and 24/7
                  direct communication with your master kineticist.
                </p>
                <ul className="space-y-4 mb-12 font-label text-sm uppercase tracking-wide text-on-surface">
                  <li className="flex items-center gap-3">
                    <Icon name="check_circle" className="text-primary text-xl" />
                    Biometric Neural Mapping
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="check_circle" className="text-primary text-xl" />
                    Private Kitchen Integration
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="check_circle" className="text-primary text-xl" />
                    Unlimited Priority Access
                  </li>
                </ul>
              </div>
              <a
                href="#coaching"
                className="w-full md:w-max px-12 py-5 bg-surface-container-highest border border-outline-variant/30 font-headline font-bold text-primary hover:bg-primary hover:text-on-primary transition-all duration-500 inline-block text-center"
              >
                APPLY FOR SELECTION
              </a>
            </div>

            {/* Secondary Tier: Skool Group */}
            <div
              id="community"
              className="lg:col-span-4 bg-surface-container-low rounded-xl p-10 flex flex-col justify-between min-h-[400px]"
            >
              <div>
                <div className="flex justify-between items-center mb-10">
                  <span className="text-secondary font-label text-xs uppercase tracking-[0.2em]">
                    Collective Intel
                  </span>
                  <div className="font-headline text-2xl font-bold text-secondary">
                    $100
                    <span className="text-sm font-normal text-on-surface-variant">
                      /mo
                    </span>
                  </div>
                </div>
                <h3 className="font-headline text-3xl font-bold mb-6 tracking-tight">
                  SKOOL Community
                </h3>
                <p className="font-body text-on-surface-variant mb-8">
                  Join the digital inner circle. Access our proprietary movement
                  vault and engage with high-performance peers.
                </p>
              </div>
              <div className="space-y-4">
                <div className="h-px bg-outline-variant/20 w-full" />
                <a
                  href="#community"
                  className="group w-full flex justify-between items-center py-2 font-headline font-bold text-on-surface hover:text-primary transition-colors"
                >
                  JOIN THE COLLECTIVE
                  <Icon
                    name="north_east"
                    className="text-primary group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>

            {/* Tertiary Tier: Reset Audit */}
            <div
              id="audit"
              className="lg:col-span-4 bg-surface-container-low rounded-xl p-10 flex flex-col justify-between min-h-[400px]"
            >
              <div>
                <div className="flex justify-between items-center mb-10">
                  <span className="text-secondary font-label text-xs uppercase tracking-[0.2em]">
                    Strategic Strike
                  </span>
                  <div className="font-headline text-2xl font-bold text-secondary">
                    $50
                    <span className="text-sm font-normal text-on-surface-variant">
                      /60m
                    </span>
                  </div>
                </div>
                <h3 className="font-headline text-3xl font-bold mb-6 tracking-tight">
                  Ribbon Reset Audit
                </h3>
                <p className="font-body text-on-surface-variant mb-8">
                  A surgical evaluation of your current physical trajectory.
                  Identify bottlenecks in 60 minutes.
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

            {/* Featured Image / Statement */}
            <div className="lg:col-span-8 relative rounded-xl overflow-hidden min-h-[400px]">
              <img
                alt="High performance athlete training"
                className="w-full h-full object-cover grayscale brightness-50"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaTs9pCiZZ1fiEtv2PfXRjWzmyDqDP4TTkN2GqP3uYYOTiRsgKoPcPEr7bCmd_Y5Px8bSMZmlB0ajh-hWmukzo7Onkc6PWUSWBg2zEnvH-l3A136Cw90NfI7UZjACRcoqJ0qlqfR-zD7lb1gQ3wJd4Gjj6KA7QJ-gIA3vemM0HeRzueulxQaWjdIJ6QpY_tm_j_vpcmdf1Z6rWSI1BNrmJ6labkJg3-Pm1rAqu6zw97iMKyU0JGcvlYLRzBebMTDFt1YpMhmQiTOyU"
              />
              <div className="absolute inset-0 flex flex-col justify-center p-12 bg-gradient-to-t from-surface to-transparent">
                <h4 className="font-headline text-4xl font-bold text-primary mb-4">
                  &ldquo;THE BODY IS THE ARCHITECTURE OF THE SOUL.&rdquo;
                </h4>
                <p className="font-label text-sm uppercase tracking-widest text-on-surface/60">
                  OBSIDIAN KINETIC PHILOSOPHY — 001
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
                  Proven Trajectories
                </span>
                <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter">
                  VOICES OF <br />
                  <span className="text-primary italic">THE ELITE.</span>
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
                  &ldquo;Obsidian Kinetic isn&apos;t a gym; it&apos;s an
                  engineering firm for the human form. The data-driven approach
                  corrected decade-old imbalances in weeks.&rdquo;
                </p>
                <div className="mt-auto">
                  <div className="font-headline font-bold text-lg text-primary tracking-tight">
                    ALEXANDER VANCE
                  </div>
                  <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant mt-1">
                    SaaS Founder &amp; Ultra-Endurance Athlete
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
                  &ldquo;The level of precision is unmatched. The &apos;Private
                  Atelier&apos; model provides the focus required for
                  high-stakes performance optimization.&rdquo;
                </p>
                <div className="mt-auto">
                  <div className="font-headline font-bold text-lg text-primary tracking-tight">
                    MARCUS THORNE
                  </div>
                  <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant mt-1">
                    Professional Motorsport Driver
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
                  &ldquo;A surgical strike on mediocrity. My cognitive clarity
                  has improved as much as my physical output. This is the
                  ultimate competitive edge.&rdquo;
                </p>
                <div className="mt-auto">
                  <div className="font-headline font-bold text-lg text-primary tracking-tight">
                    DR. ELARA VOSS
                  </div>
                  <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant mt-1">
                    Venture Capitalist &amp; Biohacker
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Signature Experience (Tonal Layering) */}
        <section className="bg-surface-container-lowest py-32 px-8">
          <div className="max-w-screen-xl mx-auto text-center">
            <span className="font-label text-xs uppercase tracking-[0.4em] text-primary mb-8 block">
              Exclusivity Guaranteed
            </span>
            <h2 className="font-headline text-5xl md:text-7xl font-bold mb-12 tracking-tighter">
              WE ONLY ACCEPT <br />
              <span className="italic text-primary">TWELVE</span> INITIATES PER
              CYCLE.
            </h2>
            <div className="flex flex-wrap justify-center gap-16 mt-20">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-6 gold-glow border border-primary/20">
                  <Icon name="diamond" className="text-primary" />
                </div>
                <span className="font-headline text-lg font-bold">
                  Absolute Privacy
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-6 gold-glow border border-primary/20">
                  <Icon
                    name="precision_manufacturing"
                    className="text-primary"
                  />
                </div>
                <span className="font-headline text-lg font-bold">
                  Biomechanical Focus
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-6 gold-glow border border-primary/20">
                  <Icon name="hotel_class" className="text-primary" />
                </div>
                <span className="font-headline text-lg font-bold">
                  Concierge Support
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface border-t border-outline-variant/20 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16 max-w-screen-2xl mx-auto font-body text-sm tracking-wide uppercase">
          <div>
            <div className="text-lg font-bold text-primary mb-6 font-headline">
              OBSIDIAN KINETIC
            </div>
            <p className="text-on-surface/60 normal-case mb-8">
              Redefining the boundaries of human potential through the
              intersection of science and artistry.
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
              NETWORK
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
              LinkedIn
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
              LEGAL &amp; CONTACT
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
              &copy; 2024 OBSIDIAN KINETIC. PRIVATE ATELIER PERFECTION.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
