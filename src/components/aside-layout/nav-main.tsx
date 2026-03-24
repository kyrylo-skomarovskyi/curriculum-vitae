import { NavLink } from 'react-router';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar.tsx';
import { NAV_CONFIG } from './nav-config.tsx';

export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {NAV_CONFIG.map((menuItem) => {
            return (
              <SidebarMenuItem key={menuItem.key}>
                <NavLink to={menuItem.to} end={menuItem.end}>
                  {({ isActive }) => (
                    <SidebarMenuButton tooltip={menuItem.tooltip} isActive={isActive} asChild>
                      <span>
                        {menuItem.icon}

                        <span>{menuItem.label}</span>
                      </span>
                    </SidebarMenuButton>
                  )}
                </NavLink>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
