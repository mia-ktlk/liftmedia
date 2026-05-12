/** In-app path including Vite `base` (e.g. `/resources` or `/repo/resources`). */
export function publicPath(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  const base = import.meta.env.BASE_URL;
  if (base === "/") return p;
  const b = base.endsWith("/") ? base.slice(0, -1) : base;
  return `${b}${p}`;
}

/** Full URL for a client route, for copy/share (works on GitHub project pages). */
export function absoluteAppUrl(path: string): string {
  if (typeof window === "undefined") return "";
  return `${window.location.origin}${publicPath(path)}`;
}
