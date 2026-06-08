"use client";

import { Leaf } from "lucide-react";
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
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-sidebar-foreground text-sidebar">
        <Leaf className="h-4 w-4" />
      </div>
      {!hideName && <span className="text-base font-bold text-sidebar-foreground tracking-tight">{name}</span>}
    </div>
  );
};

export default Logo;
