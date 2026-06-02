import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/app/(routes)/(dashboard)/_common/app-sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="bg-sidebar! border-none">
          <div
            className="m-1 px-4 rounded-lg border border-border
                     dark:border-[#e0e1e11a] shadow-xs bg-background h-full"
          >
            <div className="py-2 px-3">{children}</div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}
