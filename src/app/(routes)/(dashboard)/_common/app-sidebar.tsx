"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
  Calendar,
  CreditCard,
  Lightbulb,
  Plus,
  Settings,
  PlayCircle,
  Camera,
  Music,
  LogOut,
  Leaf,
} from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggler";

const mainNav = [
  { name: "Ideas", href: "/ideas", icon: Lightbulb },
  { name: "Schedule", href: "/schedule", icon: Calendar },
  { name: "Billing", href: "/billing", icon: CreditCard },
  { name: "Settings", href: "/settings", icon: Settings },
];

const socialChannels = [
  {
    name: "YouTube",
    handle: "@youtube",
    color: "#FF0000",
    icon: PlayCircle,
    status: "Connected",
  },
  {
    name: "Instagram",
    handle: "@instagram",
    color: "#E1306C",
    icon: Camera,
    status: "Connected",
  },
  {
    name: "TikTok",
    handle: "@tiktok",
    color: "#00f2fe",
    icon: Music,
    status: "Syncing",
  },
];

const AppSidebar = () => {
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const handleCreateIdea = () => {
    toast.success("Create Idea modal coming soon!");
  };

  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-slate-800 bg-slate-950 text-slate-200"
      style={{
        ["--sidebar" as string]: "rgb(9, 13, 22)",
        ["--sidebar-border" as string]: "rgba(30, 41, 59, 0.4)",
        ["--sidebar-foreground" as string]: "rgb(226, 232, 240)",
        ["--sidebar-accent" as string]: "rgba(30, 41, 59, 0.5)",
        ["--sidebar-accent-foreground" as string]: "rgb(248, 250, 252)",
        ["--sidebar-ring" as string]: "rgb(163, 230, 53)",
      }}
    >
      {/* Header section with brand and pulse animation */}
      <SidebarHeader className="border-b border-slate-800/50 p-4 bg-slate-950">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-lime-400 to-emerald-500 shadow-[0_0_15px_rgba(163,230,53,0.3)] animate-pulse-glow">
              <Leaf className="h-4.5 w-4.5 text-slate-950" />
            </div>
            {!isCollapsed && (
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-wide text-white">
                  Lemon.ai
                </span>
                <span className="text-[9px] font-semibold uppercase tracking-wider text-lime-400">
                  Creator Engine
                </span>
              </div>
            )}
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-slate-950 px-2 py-4 no-scrollbar">
        {/* Quick action: New Idea */}
        {!isCollapsed ? (
          <div className="px-2 mb-6">
            <Button
              className="w-full bg-gradient-to-r from-lime-400 to-emerald-500 hover:from-lime-500 hover:to-emerald-600 text-slate-950 font-semibold shadow-[0_4px_20px_rgba(163,230,53,0.2)] transition-all duration-300 border-none group py-5 rounded-xl cursor-pointer"
              onClick={handleCreateIdea}
            >
              <Plus className="mr-2 h-4.5 w-4.5 group-hover:rotate-90 transition-transform duration-300" />
              New Idea
            </Button>
          </div>
        ) : (
          <div className="flex justify-center mb-6">
            <Button
              size="icon"
              className="h-9 w-9 rounded-xl bg-gradient-to-br from-lime-400 to-emerald-500 hover:from-lime-500 hover:to-emerald-600 text-slate-950 font-semibold shadow-md transition-all duration-300 cursor-pointer"
              onClick={handleCreateIdea}
            >
              <Plus className="h-5 w-5" />
            </Button>
          </div>
        )}

        {/* Navigation Menu */}
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="text-slate-500 font-semibold uppercase tracking-wider text-[9px] mb-2 px-3">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {mainNav.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300 relative group border-none",
                        isActive
                          ? "bg-slate-800/60 text-lime-400 font-semibold border-l-2 border-lime-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                          : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/30"
                      )}
                    >
                      <Link href={item.href}>
                        <Icon
                          className={cn(
                            "h-5 w-5 transition-transform duration-300 group-hover:scale-110",
                            isActive
                              ? "text-lime-400"
                              : "text-slate-400 group-hover:text-slate-200"
                          )}
                        />
                        {!isCollapsed && (
                          <span className="text-sm">{item.name}</span>
                        )}
                        {isActive && !isCollapsed && (
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-lime-500"></span>
                          </span>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Connected Channels Group */}
        <SidebarGroup className="p-0 mt-6">
          <SidebarGroupLabel className="text-slate-500 font-semibold uppercase tracking-wider text-[9px] mb-2 px-3">
            {!isCollapsed ? "Connected Channels" : "Channels"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2 px-2">
              {socialChannels.map((channel) => {
                const Icon = channel.icon;
                const isSyncing = channel.status === "Syncing";
                return (
                  <SidebarMenuItem key={channel.name}>
                    <div
                      className={cn(
                        "flex items-center justify-between rounded-xl border border-slate-800/40 p-2 bg-slate-900/30 backdrop-blur-xs transition-all duration-300",
                        isCollapsed ? "justify-center p-1.5" : ""
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className="flex h-7.5 w-7.5 shrink-0 items-center justify-center rounded-lg text-white"
                          style={{
                            backgroundColor: `${channel.color}15`,
                            color: channel.color,
                          }}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        {!isCollapsed && (
                          <div className="flex flex-col min-w-0">
                            <span className="text-[11px] font-semibold text-slate-200 truncate">
                              {channel.name}
                            </span>
                            <span className="text-[9px] text-slate-500 truncate">
                              {channel.handle}
                            </span>
                          </div>
                        )}
                      </div>
                      {!isCollapsed && (
                        <div className="flex items-center gap-1">
                          <span className="relative flex h-1.5 w-1.5">
                            <span
                              className={cn(
                                "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                                isSyncing ? "bg-amber-400" : "bg-emerald-400"
                              )}
                            ></span>
                            <span
                              className={cn(
                                "relative inline-flex rounded-full h-1.5 w-1.5",
                                isSyncing ? "bg-amber-500" : "bg-emerald-500"
                              )}
                            ></span>
                          </span>
                          <span
                            className={cn(
                              "text-[8px] font-medium uppercase tracking-wider",
                              isSyncing ? "text-amber-400" : "text-emerald-400"
                            )}
                          >
                            {channel.status}
                          </span>
                        </div>
                      )}
                    </div>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Pro profile footer card */}
      <SidebarFooter className="border-t border-slate-800/50 p-3 bg-slate-950/50">
        {!isCollapsed ? (
          <div className="relative overflow-hidden rounded-2xl border border-lime-500/10 bg-gradient-to-b from-slate-900 to-slate-950 p-3.5 shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
            {/* Ambient glow decoration */}
            <div className="absolute -right-4 -top-4 h-12 w-12 rounded-full bg-lime-500/5 blur-xl"></div>

            <div className="flex items-center gap-2.5">
              <div className="relative flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-lime-400 font-bold border border-slate-700">
                AC
                <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-slate-950 bg-emerald-500"></div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <span className="text-[11px] font-bold text-slate-100 truncate">
                    Arghya C.
                  </span>
                  <span className="flex items-center gap-0.5 rounded-full bg-lime-400/10 px-1 py-0.2 text-[7px] font-extrabold uppercase tracking-wide text-lime-400 border border-lime-400/20 shrink-0">
                    PRO
                  </span>
                </div>
                <p className="text-[9px] text-slate-500 truncate">
                  arghya@lemon.ai
                </p>
              </div>
            </div>

            {/* Usage status */}
            <div className="mt-3 space-y-1">
              <div className="flex justify-between text-[9px]">
                <span className="text-slate-400">Monthly Usage</span>
                <span className="font-semibold text-lime-400">
                  8 / 10 credits
                </span>
              </div>
              <div className="h-1 w-full rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-lime-400 to-emerald-500"></div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-slate-800/60 pt-2 text-[10px]">
              <button
                onClick={() => toast.success("Settings opened")}
                className="flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
              >
                <Settings className="h-3 w-3" />
                Settings
              </button>
              <ModeToggle />
              <button
                onClick={() => toast.success("Log out clicked")}
                className="flex items-center gap-1 text-red-400 hover:text-red-300 transition-colors cursor-pointer"
              >
                <LogOut className="h-3 w-3" />
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 py-2">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-lime-400 font-bold border border-slate-800">
              AC
              <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-slate-950 bg-emerald-500"></div>
            </div>
            <ModeToggle />
            <button
              onClick={() => toast.success("Log out clicked")}
              className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-slate-900 transition-colors cursor-pointer"
              title="Logout"
            >
              <LogOut className="h-4.5 w-4.5" />
            </button>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
