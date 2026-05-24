import { type LucideIcon } from "lucide-react";

type FeatureCardProps = {
  Icon: LucideIcon;
  title: string;
  body: string;
  accent?: string;
};

export function FeatureCard({ Icon, title, body, accent = "#7c40cf" }: FeatureCardProps) {
  return (
    <div className="flex gap-4 p-5 rounded-xl border border-border bg-surface">
      <div
        className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: `${accent}18` }}
      >
        <Icon size={18} style={{ color: accent }} />
      </div>
      <div>
        <h3 className="font-semibold text-sm text-fg">{title}</h3>
        <p className="mt-0.5 text-sm text-muted leading-relaxed">{body}</p>
      </div>
    </div>
  );
}
