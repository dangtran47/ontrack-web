import Link from "next/link";
import { BrandMark } from "./BrandMark";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
        >
          <BrandMark size={28} />
          <span className="font-semibold text-fg text-sm tracking-tight">On Track Guru</span>
        </Link>
        <nav>
          <Link
            href="/gym"
            className="text-sm text-muted hover:text-fg transition-colors px-3 py-1.5 rounded-lg hover:bg-neutral-100"
          >
            Gym
          </Link>
        </nav>
      </div>
    </header>
  );
}
