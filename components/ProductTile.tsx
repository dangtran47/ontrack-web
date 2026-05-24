import Link from "next/link";
import { type Product } from "@/lib/products";

export function ProductTile({ product }: { product: Product }) {
  const { name, blurb, accent, Icon, status, href } = product;

  const inner = (
    <div
      className={`relative rounded-2xl border border-border bg-surface p-6 flex flex-col gap-4 h-full transition-shadow ${
        status === "live" ? "hover:shadow-md" : "opacity-50"
      }`}
    >
      <span
        className={`absolute top-4 right-4 text-xs font-medium px-2 py-0.5 rounded-full ${
          status === "live"
            ? "bg-brand-100 text-brand-700"
            : "bg-neutral-100 text-neutral-500"
        }`}
      >
        {status === "live" ? "Live" : "Soon"}
      </span>

      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: `${accent}20` }}
      >
        <Icon size={20} style={{ color: accent }} />
      </div>

      <div>
        <h3 className="font-semibold text-base text-fg">{name}</h3>
        <p className="mt-1 text-sm text-muted leading-relaxed">{blurb}</p>
      </div>
    </div>
  );

  if (status === "live" && href) {
    return (
      <Link href={href} className="block h-full">
        {inner}
      </Link>
    );
  }

  return inner;
}
