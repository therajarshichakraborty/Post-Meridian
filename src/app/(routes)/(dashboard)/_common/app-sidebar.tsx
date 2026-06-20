"use client";

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
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  ChevronsUpDown,
  Calendar,
  Home,
  Inbox,
  Lightbulb,
  LogOut,
  Settings,
  Search,
  CreditCard,
  User,
} from "lucide-react";

import Logo from "@/components/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

const mainNavItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Inbox", url: "/inbox", icon: Inbox },
  { title: "Ideas", url: "/ideas", icon: Lightbulb },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "Search", url: "/search", icon: Search },
];

const secondaryNavItems = [
  { title: "Billing", url: "/billing", icon: CreditCard },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSideBar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex flex-row items-center justify-between gap-2 px-3 py-3 group-data-[collapsible=icon]:justify-center">
        <div className="group-data-[collapsible=icon]:hidden flex items-center gap-2 overflow-hidden">
          <Logo />
        </div>
        <SidebarTrigger className="shrink-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground" />
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sidebar-foreground/35 px-2 select-none">
            Application
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                      className={cn(
                        "relative transition-all duration-200",
                        isActive
                          ? "bg-sidebar-accent/50 text-sidebar-foreground font-semibold"
                          : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/30"
                      )}
                    >
                      <Link
                        href={item.url}
                        className="flex items-center w-full"
                      >
                        {isActive && (
                          <span className="absolute left-[4px] w-[2.5px] h-3 rounded-full bg-sidebar-foreground" />
                        )}
                        <span className="flex items-center justify-center size-4 shrink-0 transition-transform duration-200 group-hover/menu-button:translate-x-[1px]">
                          <item.icon className="size-4" />
                        </span>
                        <span className="truncate font-medium tracking-tight transition-transform duration-200 group-hover/menu-button:translate-x-[1px] ml-0.5">
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sidebar-foreground/35 px-2 select-none">
            Account
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryNavItems.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                      className={cn(
                        "relative transition-all duration-200",
                        isActive
                          ? "bg-sidebar-accent/50 text-sidebar-foreground font-semibold"
                          : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/30"
                      )}
                    >
                      <Link
                        href={item.url}
                        className="flex items-center w-full"
                      >
                        {isActive && (
                          <span className="absolute left-[4px] w-[2.5px] h-3 rounded-full bg-sidebar-foreground" />
                        )}
                        <span className="flex items-center justify-center size-4 shrink-0 transition-transform duration-200 group-hover/menu-button:translate-x-[1px]">
                          <item.icon className="size-4" />
                        </span>
                        <span className="truncate font-medium tracking-tight transition-transform duration-200 group-hover/menu-button:translate-x-[1px] ml-0.5">
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarSeparator />

      <SidebarFooter className="pb-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  tooltip="Account options"
                  className="relative transition-all duration-200 hover:bg-sidebar-accent/40 active:bg-sidebar-accent/60"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-950 text-sidebar-foreground text-xs font-semibold shadow-[0_1px_2px_rgba(0,0,0,0.03)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
                    <Image
                      src='https://miro.medium.com/1*APbiVEPq_Q1UiYjuUU7UDQ.jpeg'
                      alt=""
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-col items-start leading-tight group-data-[collapsible=icon]:hidden">
                    <span className="text-[13px] font-semibold tracking-tight text-sidebar-foreground">
                      Rajarshi Chakraborty
                    </span>
                    <span className="text-[11px] text-muted-foreground/80 tracking-normal truncate">
                      rajarshichakraborty2005@gmail.com
                    </span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-3.5 text-sidebar-foreground/45 group-data-[collapsible=icon]:hidden" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent side="top" align="start" className="w-56">
                <DropdownMenuItem>
                  <User className="mr-5 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <Link href="/settings">
                  <DropdownMenuItem>
                    <Settings className="mr-5 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive focus:text-destructive">
                  <LogOut className="mr-5 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
