import type { ComponentProps, PropsWithChildren } from 'react';
import { Link, useLocation } from 'react-router';
import { LogOut, UserRound } from 'lucide-react';
import { toast } from 'sonner';
import { Avatar } from '@/components/ui/avatar.tsx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx';
import { SidebarMenuButton, useSidebar } from '@/components/ui/sidebar.tsx';
import UserAvatar from '@/components/user-avatar.tsx';
import { ROUTE_PATH } from '@/constants/route-paths.ts';
import { useAuth } from '@/contexts/auth-context';
import { auth } from '@/lib/firebase';
import { UserLabel } from './user-label.tsx';

function UserButton(props: ComponentProps<typeof SidebarMenuButton>) {
  return (
    <SidebarMenuButton
      {...props}
      size="lg"
      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
    />
  );
}

export function NavUser({ children }: PropsWithChildren) {
  const { loading, user } = useAuth();
  const location = useLocation();
  const { isMobile } = useSidebar();
  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        toast.success('Sign Out');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  if (loading) {
    return <UserButton>{children}</UserButton>;
  }

  if (!user) {
    return (
      <UserButton asChild>
        <Link to={ROUTE_PATH.login} state={{ from: location }}>
          {children}
        </Link>
      </UserButton>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <UserButton>{children}</UserButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
        side={isMobile ? 'bottom' : 'right'}
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              <UserAvatar />
            </Avatar>

            <UserLabel />
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserRound />
            Account
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem onSelect={signOut}>
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
