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

        <div className="px-3 py-3">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
