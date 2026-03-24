import { SidebarContent, SidebarFooter, SidebarHeader } from '@/components/ui/sidebar.tsx';
import { NavMain } from './nav-main.tsx';
import { NavUser } from './nav-user.tsx';

export function AppSidebar() {
  return (
    <>
      <SidebarHeader>
        <div className="h-8" />
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </>
  );
}
