import type { ReactNode } from "react";

/**
 * Page transition: every route fades and lifts in as it mounts.
 * Done in CSS (see .page-in in globals.css) so content is never hidden while JavaScript loads.
 */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-in">{children}</div>;
}
