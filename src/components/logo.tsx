"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  name?: string;
  className?: string;
  hideName?: boolean;
}

const Logo = ({
  name = "Post Meridian",
  className,
  hideName = false,
}: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-3 group select-none", className)}>
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-zinc-200/80 dark:border-zinc-800/80 bg-linear-to-b from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 shadow-[0_1px_2px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300 group-hover:border-zinc-300 dark:group-hover:border-zinc-700">
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5 text-sidebar-foreground transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 3a9 9 0 0 0 0 18" strokeLinecap="round" />
          <path
            d="M12 3a9 9 0 0 1 0 18z"
            className="fill-sidebar-foreground stroke-sidebar-foreground"
          />
          <circle
            cx="12"
            cy="12"
            r="1.2"
            className="fill-background stroke-sidebar-foreground"
            strokeWidth="1"
          />
        </svg>
      </div>
      {!hideName && (
        <span className="text-sm font-bold tracking-tight text-sidebar-foreground">
          Post
          <span className="font-light tracking-wide text-sidebar-foreground/70 transition-colors duration-300 group-hover:text-sidebar-foreground ml-0.5">
            Meridian
          </span>
          <span className="text-amber-500 font-extrabold ml-0.5 select-none transition-transform duration-300 group-hover:scale-125 inline-block">
            .
          </span>
        </span>
      )}
    </div>
  );
};

export default Logo;
