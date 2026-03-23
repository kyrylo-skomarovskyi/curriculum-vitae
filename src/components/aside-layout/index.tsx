import type { PropsWithChildren, CSSProperties } from 'react';
import { Sidebar, SidebarInset, SidebarProvider } from '@/components/ui/sidebar.tsx';
import { AppHeader } from '@/components/aside-layout/app-header.tsx';
import { AppSidebar } from '@/components/aside-layout/app-sidebar.tsx';

const SIDEBAR_STYLE = {
  '--sidebar-width': 'calc(var(--spacing) * 72)',
  '--header-height': 'calc(var(--spacing) * 12)',
} as CSSProperties;

export function AsideLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider style={SIDEBAR_STYLE}>
      <Sidebar variant="inset" collapsible="offcanvas">
        <AppSidebar />
      </Sidebar>

      <SidebarInset>
        <AppHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">{children}</div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
