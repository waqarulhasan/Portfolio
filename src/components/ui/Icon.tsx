import {
  LuBug,
  LuCloud,
  LuCode,
  LuGlobe,
  LuLayers,
  LuMonitor,
  LuServer,
  LuShieldCheck,
  LuSmartphone,
  LuUsers,
} from "react-icons/lu";
import type { IconType } from "react-icons";

const icons: Record<string, IconType> = {
  bug: LuBug,
  cloud: LuCloud,
  code: LuCode,
  globe: LuGlobe,
  layers: LuLayers,
  monitor: LuMonitor,
  server: LuServer,
  shield: LuShieldCheck,
  smartphone: LuSmartphone,
  users: LuUsers,
};

/** Renders one of the named icons used in data.ts. */
export function Icon({ name, className }: { name: string; className?: string }) {
  const C = icons[name] ?? LuCode;
  return <C className={className} aria-hidden />;
}
