/**
 * Resolves a path inside /public against the app's actual base URL.
 *
 * GitHub Pages serves a repo either at the domain root ("username.github.io")
 * or under a subpath ("username.github.io/repo-name/"). A hardcoded
 * "/images/x.jpg" only works for the first case — under a subpath it would
 * resolve to the domain root and 404. Vite exposes the configured base as
 * import.meta.env.BASE_URL at build time (see vite.config.ts: base: "./"),
 * so prefixing every /public reference with it keeps images working in
 * both deployment shapes without any per-repo configuration.
 */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
