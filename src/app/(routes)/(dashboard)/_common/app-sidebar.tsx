"use client";

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarRail,
//   SidebarSeparator,
//   SidebarTrigger,
// } from "@/components/ui/sidebar";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// import {
//   ChevronsUpDown,
//   Calendar,
//   Home,
//   Inbox,
//   Lightbulb,
//   LogOut,
//   Settings,
//   Search,
//   CreditCard,
//   User,
// } from "lucide-react";

// import Logo from "@/components/logo";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { cn } from "@/lib/utils";
// import Image from "next/image";

// const mainNavItems = [
//   { title: "Home", url: "/", icon: Home },
//   { title: "Inbox", url: "/inbox", icon: Inbox },
//   { title: "Ideas", url: "/ideas", icon: Lightbulb },
//   { title: "Calendar", url: "/calendar", icon: Calendar },
//   { title: "Search", url: "/search", icon: Search },
// ];

// const secondaryNavItems = [
//   { title: "Billing", url: "/billing", icon: CreditCard },
//   { title: "Settings", url: "/settings", icon: Settings },
// ];

// export function AppSideBar() {
//   const pathname = usePathname();


//   return (
//     <Sidebar collapsible="icon">
//       <SidebarHeader className="flex flex-row items-center justify-between gap-2 px-3 py-3 group-data-[collapsible=icon]:justify-center">
//         <div className="group-data-[collapsible=icon]:hidden flex items-center gap-2 overflow-hidden">
//           <Logo />
//         </div>
//         <SidebarTrigger className="shrink-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground" />
//       </SidebarHeader>
//       <SidebarSeparator />
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarGroupLabel className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sidebar-foreground/35 px-2 select-none">
//             Application
//           </SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {mainNavItems.map((item) => {
//                 const isActive = pathname === item.url;
//                 return (
//                   <SidebarMenuItem key={item.title}>
//                     <SidebarMenuButton
//                       asChild
//                       isActive={isActive}
//                       tooltip={item.title}
//                       className={cn(
//                         "relative transition-all duration-200",
//                         isActive
//                           ? "bg-sidebar-accent/50 text-sidebar-foreground font-semibold"
//                           : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/30"
//                       )}
//                     >
//                       <Link
//                         href={item.url}
//                         className="flex items-center w-full"
//                       >
//                         {isActive && (
//                           <span className="absolute left-[4px] w-[2.5px] h-3 rounded-full bg-sidebar-foreground" />
//                         )}
//                         <span className="flex items-center justify-center size-4 shrink-0 transition-transform duration-200 group-hover/menu-button:translate-x-[1px]">
//                           <item.icon className="size-4" />
//                         </span>
//                         <span className="truncate font-medium tracking-tight transition-transform duration-200 group-hover/menu-button:translate-x-[1px] ml-0.5">
//                           {item.title}
//                         </span>
//                       </Link>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>
//                 );
//               })}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>

//         <SidebarSeparator />

//         <SidebarGroup>
//           <SidebarGroupLabel className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sidebar-foreground/35 px-2 select-none">
//             Account
//           </SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {secondaryNavItems.map((item) => {
//                 const isActive = pathname === item.url;
//                 return (
//                   <SidebarMenuItem key={item.title}>
//                     <SidebarMenuButton
//                       asChild
//                       isActive={isActive}
//                       tooltip={item.title}
//                       className={cn(
//                         "relative transition-all duration-200",
//                         isActive
//                           ? "bg-sidebar-accent/50 text-sidebar-foreground font-semibold"
//                           : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/30"
//                       )}
//                     >
//                       <Link
//                         href={item.url}
//                         className="flex items-center w-full"
//                       >
//                         {isActive && (
//                           <span className="absolute left-[4px] w-[2.5px] h-3 rounded-full bg-sidebar-foreground" />
//                         )}
//                         <span className="flex items-center justify-center size-4 shrink-0 transition-transform duration-200 group-hover/menu-button:translate-x-[1px]">
//                           <item.icon className="size-4" />
//                         </span>
//                         <span className="truncate font-medium tracking-tight transition-transform duration-200 group-hover/menu-button:translate-x-[1px] ml-0.5">
//                           {item.title}
//                         </span>
//                       </Link>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>
//                 );
//               })}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>

//       <SidebarSeparator />

//       <SidebarFooter className="pb-3">
//         <SidebarMenu>
//           <SidebarMenuItem>
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <SidebarMenuButton
//                   size="lg"
//                   tooltip="Account options"
//                   className="relative transition-all duration-200 hover:bg-sidebar-accent/40 active:bg-sidebar-accent/60"
//                 >
//                   <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-950 text-sidebar-foreground text-xs font-semibold shadow-[0_1px_2px_rgba(0,0,0,0.03)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
//                     <Image
//                       src="https://miro.medium.com/1*APbiVEPq_Q1UiYjuUU7UDQ.jpeg"
//                       alt=""
//                       width={20}
//                       height={20}
//                       className="rounded-full"
//                     />
//                   </div>
//                   <div className="flex flex-col items-start leading-tight group-data-[collapsible=icon]:hidden">
//                     <span className="text-[13px] font-semibold tracking-tight text-sidebar-foreground">
//                       Rajarshi Chakraborty
//                     </span>
//                     <span className="text-[11px] text-muted-foreground/80 tracking-normal truncate">
//                       rajarshichakraborty2005@gmail.com
//                     </span>
//                   </div>
//                   <ChevronsUpDown className="ml-auto size-3.5 text-sidebar-foreground/45 group-data-[collapsible=icon]:hidden" />
//                 </SidebarMenuButton>
//               </DropdownMenuTrigger>

//               <DropdownMenuContent side="top" align="start" className="w-56">
//                 <DropdownMenuItem>
//                   <User className="mr-5 h-4 w-4" />
//                   Profile
//                 </DropdownMenuItem>
//                 <Link href="/settings">
//                   <DropdownMenuItem>
//                     <Settings className="mr-5 h-4 w-4" />
//                     Settings
//                   </DropdownMenuItem>
//                 </Link>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem className="text-destructive focus:text-destructive">
//                   <LogOut className="mr-5 h-4 w-4" />
//                   Log out
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </SidebarMenuItem>
//         </SidebarMenu>
//       </SidebarFooter>

//       <SidebarRail />
//     </Sidebar>
//   );
// }




"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HugeiconsIcon } from '@hugeicons/react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { Calendar, CreditCard, Lightbulb, Plus, PlusCircleIcon, Settings } from 'lucide-react';
import { useSidebar } from '@/components/ui/sidebar';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Skeleton } from '@/components/ui/skeleton';
import { getChannelIcon, getChannelUrl } from '@/constants/channels';
import { ChannelType } from '@/types/channel-type';
import { PlusSignIcon } from '@hugeicons/core-free-icons';
import { UserButton, useUser } from '@clerk/nextjs';
// import ChannelAvatar from '@/components/channel-avatar';
import { toast } from 'sonner';
import { useState } from 'react';
//import CreatePostDialog from '@/components/schedule/create-post-dialog';

const mainNav = [
  { name: "Ideas", href: "/ideas", icon: Lightbulb },
  { name: "Schedule", href: "/schedule", icon: Calendar },
  { name: "Billing", href: "/billing", icon: CreditCard },
  { name: "Settings", href: "/settings", icon: Settings },
];

const AppSidebar = () => {
  const pathname = usePathname();
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"
  const { user } = useUser()
  const [isCreatePostOpen, setIsCreatePostOpen] = useState<boolean>(false)

   const connectMutation = useMutation({
    mutationFn: async (channelTypeId: string) => {
      const res = await fetch("/api/channel/connect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          channelTypeId,
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || "Failed to connect channel")
      }
      return data
    },
    onSuccess: ({url}) => {
      window.location.href = url
    },
    onError: () => {
      toast.error("Failed to connect channel")
    }
  })

  const {data:channelsData, isPending} = useQuery({
    queryKey: ["channels"],
    queryFn: async () => {
      const res = await fetch("/api/channel");
      const data = await res.json();
      return data
    }
  })
  
  const channels = (channelsData?.channels || []) as ChannelType[]
  const unconnectedChannels = channels.filter((channel: ChannelType) => !channel.connected);
  const connectedChannels = channels.filter((channel: ChannelType) => channel.connected);

  const connectedCount = channelsData?.connectedCount || 0;
  const totalChannels = channelsData?.totalChannels || 0;
  const limitedChannels = unconnectedChannels.slice(0, 4);


  const handleConnect = (channelTypeId: string) => {
    if(connectMutation.isPending) return;
    connectMutation.mutate(channelTypeId);
  }
 

  return (
    <>
    <Sidebar collapsible="icon">
      <SidebarHeader className={cn("p-4", isCollapsed && "p-2")}>
        <div className='flex items-center justify-between'>
           <Logo hideName={isCollapsed} />
           <SidebarTrigger className="hidden md:flex -mx-8 mb-0" />
        </div>
        <Button className='mt-4 w-full'
         size={isCollapsed ? "icon": "lg"}
         onClick={() => setIsCreatePostOpen(true)}
        >
            <Plus className="size-4" />
           {!isCollapsed && <span>New Post</span>}
        </Button>
      </SidebarHeader>
      <SidebarContent className={cn(!isCollapsed && "px-2")}>
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu>
                    {mainNav.map((item) => (
                        <SidebarMenuItem key={item.name}>
                            <SidebarMenuButton asChild
                            isActive={pathname === item.href}
                    tooltip={item.name}
                            >
                                <Link href={item.href}>
                                    <item.icon className="size-4" />
                                    <span className='text-sm'>{item.name}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>

        {/* {connected channels} */}
         {connectedChannels.length > 0 && (
         <SidebarGroup className={cn(isCollapsed && "px-1")}>
          <SidebarGroupLabel className='text-sm'>Channels</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
               {isPending ? (
                <div className='flex flex-col gap-2'>
                  <Skeleton className='h-8 w-full bg-secondary' />
                  <Skeleton className='h-8 w-full bg-secondary' />
                  <Skeleton className='h-8 w-full bg-secondary' />
                  <Skeleton className='h-8 w-full bg-secondary' />
                </div>
              ) : (
                connectedChannels?.map((channel: ChannelType) => {
                  //const url = getChannelUrl(channel.type)
                  return (
                    <SidebarMenuItem key={channel.id}>
                      <SidebarMenuButton asChild>
                       <a
                        
                         target="_blank" rel="noreferrer"
                          className="w-full! relative block items-center gap-2"
                       >
                           {/* <ChannelAvatar
                            size="sm"
                           className="w-full flex items-center gap-2"
                            type={channel.type}
                            color={channel.color}
                            profileImage={channel.profile_image}
                            name={!isCollapsed ? (channel.handle || channel.name) : ""}
                           /> */}
                       </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                }
              )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
         </SidebarGroup>
         )}


        {/* {unconnected channels} */}
         <SidebarGroup className={cn(isCollapsed && "px-1")}>
          <SidebarGroupLabel className='text-sm'>Connect Channels</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {isPending ? (
                <div className='flex flex-col gap-2'>
                  <Skeleton className='h-8 w-full bg-secondary' />
                  <Skeleton className='h-8 w-full bg-secondary' />
                  <Skeleton className='h-8 w-full bg-secondary' />
                  <Skeleton className='h-8 w-full bg-secondary' />
                </div>
              ) : (
                <>
                {/* {limitedChannels.map((channel: ChannelType) => {
                 // const icon = getChannelIcon(channel.type)
                  return (
                    <SidebarMenuItem key={channel.id}>
                      <SidebarMenuButton asChild
                       tooltip={`Connect ${channel.name}`}
                      >
                       <button
                        className='w-full flex items-center gap-2'
                        disabled={connectMutation.isPending}
                        onClick={() => handleConnect(channel.id)}
                       >
                          <span>
                             <div className='relative'>
                              {icon ? (
                                <HugeiconsIcon icon={icon} color='currentColor'
                                className=" text-white! size-6! p-1 rounded-sm"
                                  style={{ background: channel.color}}
                                />
                              ) : null}

                              <div className={`absolute -right-1 bottom-0 p-0.5
                                 bg-white dark:bg-background rounded-xs
                                `}>
                                  <HugeiconsIcon icon={PlusSignIcon} className="size-2!" />
                                </div>
                             </div>
                          </span>
                          <span className='truncate'>{channel.name}</span>
                       </button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })} */}
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Button asChild variant="ghost" className='w-full justify-start mt-1'>
                      <Link href="/settings" className='w-full flex items-center gap-2'>
                      <PlusCircleIcon className='size-4'  />
                      <span className='text-sm'>More channels</span>
                      </Link>
                    </Button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                </>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
         </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
         <div className="mb-3 text-xs text-muted-foreground">
          <span>
            {connectedCount}/{totalChannels} channels connected
          </span>
        </div>
        <div className="flex items-center gap-2">
          <UserButton
            showName={false}
            appearance={{
              elements: {
                avatarBox: "h-8 w-8",
              },
            }}
          />
          <span className="text-sm">{user?.fullName || user?.primaryEmailAddress?.emailAddress}</span>
        </div>
      </SidebarFooter>
    </Sidebar>
     {/* <CreatePostDialog
        open={isCreatePostOpen}
        onOpenChange={setIsCreatePostOpen}
      /> */}
    </>
  )
}

export default AppSidebar