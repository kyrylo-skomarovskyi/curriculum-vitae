import { EllipsisVertical } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar.tsx';
import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/ui/sidebar.tsx';
import UserAvatar from '@/components/user-avatar.tsx';
import { UserLabel } from './user-label.tsx';
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
        <SidebarMenu>
          <SidebarMenuItem>
            <NavUser>
              <Avatar className="h-8 w-8 rounded-lg grayscale">
                <UserAvatar />
              </Avatar>

              <UserLabel />

              <EllipsisVertical className="ml-auto size-4" />
            </NavUser>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
}
