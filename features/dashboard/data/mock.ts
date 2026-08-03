import {
  CalendarDays,
  DollarSign,
  PawPrint,
  Users,
} from "lucide-react";

export const dashboardStats = [
  {
    id: 1,
    title: "Today's Appointments",
    value: "18",
    change: "+12%",
    trend: "up",
    icon: CalendarDays,
  },
  {
    id: 2,
    title: "Active Patients",
    value: "1,248",
    change: "+8%",
    trend: "up",
    icon: PawPrint,
  },
  {
    id: 3,
    title: "Monthly Revenue",
    value: "$24,820",
    change: "+18%",
    trend: "up",
    icon: DollarSign,
  },
  {
    id: 4,
    title: "New Clients",
    value: "42",
    change: "+6%",
    trend: "up",
    icon: Users,
  },
];