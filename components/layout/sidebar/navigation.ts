import {
  CalendarDays,
  LayoutDashboard,
  PawPrint,
  Settings,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface NavigationItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

export const navigation: NavigationItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Owners",
    href: "/owners",
    icon: Users,
  },
  {
    title: "Pets",
    href: "/pets",
    icon: PawPrint,
  },
  {
    title: "Appointments",
    href: "/appointments",
    icon: CalendarDays,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];