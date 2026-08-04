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
  duration: number;
  room: string;
  status: "confirmed" | "pending" | "completed";
}

export interface Patient {
  id: number;
  name: string;
  species: "Dog" | "Cat" | "Bird";
  breed: string;
  owner: string;
  lastVisit: string;
}

export interface Activity {
  id: number;
 title: string;
  description: string;
  time: string;
  type: "appointment" | "patient" | "invoice";
}

export interface QuickAction {
  id: number;
  title: string;
  icon: LucideIcon;
  href: string;
}