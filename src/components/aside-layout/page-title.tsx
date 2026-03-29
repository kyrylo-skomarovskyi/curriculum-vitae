import type { ReactNode } from 'react';
import { type UIMatch, useMatches } from 'react-router';

type Handle = {
  title: (match: UIMatch) => ReactNode;
};

const isHandle = (handle: unknown): handle is Record<string, unknown> => {
  return typeof handle === 'object' && handle !== null;
};

const hasCrumb = (handle: unknown): handle is Handle => {
  return isHandle(handle) && typeof handle.title === 'function';
};

function findTitle(matches: Array<UIMatch>) {
  const match = matches.findLast((match) => !!match.handle);
  const handle = match?.handle;

  if (!match || !hasCrumb(handle)) {
    return null;
  }

  const title = handle.title;

  return title(match);
}

export function PageTitle() {
  const matches = useMatches();
  const title = findTitle(matches);

  return <h1 className="text-base font-medium">{title}</h1>;
}
