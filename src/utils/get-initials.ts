export function getInitials(value: string | undefined): string {
  if (!value) return '';

  const words = value.trim().split(/\s+/);

  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }

  return (words[0][0] + words[1][0]).toUpperCase();
}
