import type { ComponentProps, ReactNode } from 'react';
import { type NavLinkProps } from 'react-router';
import { Folder, UserRound } from 'lucide-react';
import { ROUTE_PATH } from '@/constants/route-paths.ts';
import type { SidebarMenuButton } from '@/components/ui/sidebar.tsx';

type NavItem = NavLinkProps &
  Pick<ComponentProps<typeof SidebarMenuButton>, 'tooltip'> & {
    key: string;
    label: ReactNode;
    icon?: ReactNode;
  };

export const NAV_CONFIG: Array<NavItem> = [
  {
    key: ROUTE_PATH.home,
    to: ROUTE_PATH.home,
    end: true,
    label: 'Summary',
    tooltip: 'Summary',
    icon: <UserRound />,
  },
  {
    key: ROUTE_PATH.projects,
    to: ROUTE_PATH.projects,
    label: 'Projects',
    tooltip: 'Projects',
    icon: <Folder />,
  },
];
