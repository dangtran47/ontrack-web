import { type ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`px-4 sm:px-6 lg:px-8 py-16 sm:py-20 max-w-5xl mx-auto w-full ${className}`}
    >
      {children}
    </section>
  );
}
