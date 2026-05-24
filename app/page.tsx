import { ArrowRight, Focus, ShieldCheck, Smartphone } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/Section";
import { ProductTile } from "@/components/ProductTile";
import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, oklch(0.93 0.06 175 / 0.5), transparent)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 sm:pt-32 sm:pb-28 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-600 mb-4">
            On Track Guru
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-fg leading-tight">
            Stay on track.
            <br />
            Across everything.
          </h1>
          <p className="mt-4 text-lg text-muted max-w-xl mx-auto leading-relaxed">
            A growing family of focused apps for the things that matter to you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link
              href="/gym"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-brand-500 text-white font-medium text-sm hover:bg-brand-600 transition-colors"
            >
              Explore Gym <ArrowRight size={15} />
            </Link>
            <a
              href="#products"
              className="inline-flex items-center px-5 py-2.5 rounded-full border border-border text-fg font-medium text-sm hover:bg-neutral-50 transition-colors"
            >
              See all apps
            </a>
          </div>
        </div>
      </div>

      {/* Product grid */}
      <Section id="products">
        <h2 className="text-xl font-semibold text-fg mb-2">The ecosystem</h2>
        <p className="text-muted text-sm mb-8">
          One app for each part of life you want to improve.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((p) => (
            <ProductTile key={p.id} product={p} />
          ))}
        </div>
      </Section>

      {/* Philosophy */}
      <Section className="border-t border-border">
        <h2 className="text-xl font-semibold text-fg mb-8 text-center">
          Built on simple principles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              Icon: Focus,
              title: "Focused",
              body: "Each app does one thing well. No bloat, no feature creep.",
            },
            {
              Icon: ShieldCheck,
              title: "Private",
              body: "Your data stays yours. Row-level security, no third-party analytics.",
            },
            {
              Icon: Smartphone,
              title: "Mobile-first",
              body: "Designed for the moment, not the desk. PWA, offline-capable.",
            },
          ].map(({ Icon, title, body }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-surface border border-border"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center">
                <Icon size={20} className="text-brand-600" />
              </div>
              <h3 className="font-semibold text-fg">{title}</h3>
              <p className="text-sm text-muted leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
