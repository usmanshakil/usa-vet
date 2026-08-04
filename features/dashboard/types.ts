import type { LucideIcon } from "lucide-react";

export interface DashboardStat {
  id: number;
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
}

export interface Appointment {
  id: number;
  time: string;
  pet: string;
  owner: string;
  veterinarian: string;
  type: string;
  status: "confirmed" | "pending" | "completed";
}