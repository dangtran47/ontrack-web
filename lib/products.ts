import { Dumbbell, Bookmark, BookOpen, Wallet, type LucideIcon } from "lucide-react";

export type Product = {
  id: string;
  name: string;
  blurb: string;
  accent: string;
  Icon: LucideIcon;
  status: "live" | "soon";
  href?: string;
};

export const products: Product[] = [
  {
    id: "gym",
    name: "Gym",
    blurb: "Mobile-first workout tracker. Log lifts, beat your PRs, stay consistent.",
    accent: "#7c40cf",
    Icon: Dumbbell,
    status: "live",
    href: "/gym",
  },
  {
    id: "soon-1",
    name: "Coming soon",
    blurb: "Another focused tool is in the works.",
    accent: "#94a3b8",
    Icon: Bookmark,
    status: "soon",
  },
  {
    id: "soon-2",
    name: "Coming soon",
    blurb: "Another focused tool is in the works.",
    accent: "#94a3b8",
    Icon: BookOpen,
    status: "soon",
  },
  {
    id: "soon-3",
    name: "Coming soon",
    blurb: "Another focused tool is in the works.",
    accent: "#94a3b8",
    Icon: Wallet,
    status: "soon",
  },
];
