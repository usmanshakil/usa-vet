import {
  CalendarDays,
  DollarSign,
  PawPrint,
  Users,
} from "lucide-react";

import type {
  Appointment,
  DashboardStat,
  Patient,
} from "../types";

export const dashboardStats: DashboardStat[] = [
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

export const todaysAppointments: Appointment[] = [
  {
    id: 1,
    time: "09:00",
    pet: "Bella",
    owner: "John Smith",
    veterinarian: "Dr. Sarah Johnson",
    type: "Vaccination",
    status: "confirmed",
  },
  {
    id: 2,
    time: "10:00",
    pet: "Max",
    owner: "Emily Brown",
    veterinarian: "Dr. Michael Lee",
    type: "Surgery Consultation",
    status: "pending",
  },
  {
    id: 3,
    time: "11:30",
    pet: "Luna",
    owner: "David Wilson",
    veterinarian: "Dr. Sarah Johnson",
    type: "Annual Checkup",
    status: "completed",
  },
];

export const recentPatients: Patient[] = [
  {
    id: 1,
    name: "Bella",
    species: "Dog",
    breed: "Golden Retriever",
    owner: "John Smith",
    lastVisit: "Today",
  },
  {
    id: 2,
    name: "Max",
    species: "Cat",
    breed: "Persian",
    owner: "Emily Brown",
    lastVisit: "Yesterday",
  },
  {
    id: 3,
    name: "Luna",
    species: "Dog",
    breed: "German Shepherd",
    owner: "David Wilson",
    lastVisit: "2 days ago",
  },
];