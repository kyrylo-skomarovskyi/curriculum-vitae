import type { PropsWithChildren } from 'react';
import { NavLink } from 'react-router';
import { ROUTE_PATH } from '@/constants/route-paths.ts';

export function AsideLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <div>
        <ul>
          <li>
            <NavLink to={ROUTE_PATH.home}>Summary</NavLink>
          </li>
          <li>
            <NavLink to={ROUTE_PATH.projects}>Projects</NavLink>
          </li>
        </ul>
      </div>

      {children}
    </div>
  );
}
