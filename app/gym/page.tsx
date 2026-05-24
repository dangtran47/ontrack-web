import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  ChevronLeft,
  Library,
  Smartphone,
  Timer,
  Trophy,
  Zap,
} from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { Section } from "@/components/Section";
import { FeatureCard } from "@/components/FeatureCard";

export const metadata: Metadata = {
  title: "Gym",
  description:
    "Mobile-first workout tracker. Log lifts, time your rests, and watch your progress compound.",
  keywords: ["workout tracker", "lifting app", "PWA workout app", "gym app", "rest timer", "lift logger"],
  alternates: { canonical: "/gym" },
  openGraph: {
    title: "OnTrack Gym · On Track Guru",
    description: "Mobile-first workout tracker for individual lifters.",
    url: "https://ontrack.guru/gym",
  },
  twitter: {
    title: "OnTrack Gym — Log lifts, beat your PRs, stay consistent.",
    description: "Mobile-first workout tracker. Log lifts, time your rests, and watch your progress compound.",
  },
};

const GYM = "#7c40cf";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://ontrack.guru/gym#app",
  name: "OnTrack Gym",
  description:
    "Mobile-first workout tracker. Log lifts, time your rests, and watch your progress compound.",
  url: "https://gym.ontrack.guru",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  creator: { "@id": "https://ontrack.guru/#organization" },
  screenshot: [
    "https://ontrack.guru/gym-dashboard.png",
    "https://ontrack.guru/gym-session.png",
    "https://ontrack.guru/gym-history.png",
    "https://ontrack.guru/gym-exercises.png",
    "https://ontrack.guru/gym-add-exercise.png",
    "https://ontrack.guru/gym-settings.png",
  ],
};

const features = [
  {
    Icon: Zap,
    title: "Fast set logging",
    body: "Weight, reps, and a warmup flag. Tap to mark complete — built for speed between sets.",
  },
  {
    Icon: Timer,
    title: "Smart rest timer",
    body: "Auto-starts when you complete a set. Configurable default; pause or skip anytime.",
  },
  {
    Icon: BarChart3,
    title: "Dashboard that means it",
    body: "Weekly heatmap, workout streaks, personal records, and body-weight trend in one view.",
  },
  {
    Icon: Library,
    title: "873-exercise library",
    body: "Curated global catalog with muscle-group tagging, plus your own custom exercises.",
  },
  {
    Icon: Trophy,
    title: "Personal records",
    body: "Best sets are tracked per exercise and surfaced automatically after each session.",
  },
  {
    Icon: Smartphone,
    title: "Installable PWA",
    body: "Add to your home screen and log workouts offline. No app store needed.",
  },
];

const screenshots = [
  { src: "/gym-dashboard.png", label: "Dashboard", desc: "Stats, streaks & PRs" },
  { src: "/gym-session.png", label: "Session", desc: "Logging sets with rest timer" },
  { src: "/gym-history.png", label: "History", desc: "Activity heatmap & sessions" },
  { src: "/gym-exercises.png", label: "Exercises", desc: "Browse by muscle group" },
  { src: "/gym-add-exercise.png", label: "Find exercise", desc: "Fast fuzzy search" },
  { src: "/gym-settings.png", label: "Settings", desc: "Units, theme, rest timer" },
];

export default function GymPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, oklch(0.93 0.08 295 / 0.4), transparent)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-xs text-muted hover:text-fg mb-8 transition-colors"
          >
            <ChevronLeft size={14} /> On Track Guru
          </Link>
          <div className="flex flex-col items-start gap-5">
            <BrandMark fill={GYM} size={52} />
            <p
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: GYM }}
            >
              OnTrack · Gym
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-fg leading-tight max-w-2xl">
              Log lifts. See progress. Stay on track.
            </h1>
            <p className="text-lg text-muted max-w-xl leading-relaxed">
              A mobile-first PWA for individual lifters — fast set entry, smart rest timer, and a
              dashboard that actually tells you something.
            </p>
            <a
              href="https://gym.ontrack.guru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full text-white font-semibold text-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: GYM }}
            >
              Open the app <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* Screenshots */}
      <div className="border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-xl font-semibold text-fg mb-2">See it in action</h2>
          <p className="text-sm text-muted mb-8">
            Real screenshots from the app.
          </p>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            {screenshots.map(({ src, label, desc }) => (
              <div key={src} className="flex-shrink-0 flex flex-col items-center gap-2">
                <div className="rounded-2xl overflow-hidden border border-border shadow-sm bg-neutral-50">
                  <Image
                    src={src}
                    alt={label}
                    width={180}
                    height={390}
                    className="h-[360px] w-auto object-cover object-top"
                  />
                </div>
                <span className="text-xs font-medium text-fg">{label}</span>
                <span className="text-xs text-muted">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <Section className="border-t border-border">
        <h2 className="text-xl font-semibold text-fg mb-2">Everything you need at the gym</h2>
        <p className="text-sm text-muted mb-8">Nothing you don&apos;t.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} accent={GYM} />
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section className="border-t border-border">
        <h2 className="text-xl font-semibold text-fg mb-8 text-center">Start in minutes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { n: "1", label: "Sign up free", desc: "No credit card. Just an email." },
            {
              n: "2",
              label: "Log your first session",
              desc: "Pick exercises from 873 options or create your own.",
            },
            {
              n: "3",
              label: "Watch the streak grow",
              desc: "Consistency compounds. The dashboard keeps score.",
            },
          ].map(({ n, label, desc }) => (
            <div key={n} className="flex flex-col items-center text-center gap-2">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: GYM }}
              >
                {n}
              </div>
              <h3 className="font-semibold text-fg text-sm">{label}</h3>
              <p className="text-xs text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA band */}
      <div className="border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-fg mb-3">Ready to track your lifts?</h2>
          <p className="text-muted mb-6">
            Free to use. Works on any device. Add to home screen in seconds.
          </p>
          <a
            href="https://gym.ontrack.guru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-7 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: GYM }}
          >
            Open the app <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </>
  );
}
