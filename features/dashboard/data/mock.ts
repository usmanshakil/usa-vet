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
  Activity
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
    duration: 30,
    room: "Room 1",
    status: "confirmed",
  },
  {
    id: 2,
    time: "10:00",
    pet: "Max",
    owner: "Emily Brown",
    veterinarian: "Dr. Michael Lee",
    type: "Surgery Consultation",
    duration: 20,
    room: "Room 2",
    status: "pending",
  },
  {
    id: 3,
    time: "11:30",
    pet: "Luna",
    owner: "David Wilson",
    veterinarian: "Dr. Sarah Johnson",
    type: "Annual Checkup",
    duration: 5,
    room: "Room 3",
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

export const recentActivities: Activity[] = [
  {
    id: 1,
    title: "Appointment completed",
    description: "Bella • Dr. Sarah Johnson",
    time: "10 min ago",
    type: "appointment",
  },
  {
    id: 2,
    title: "New patient registered",
    description: "Charlie • John Smith",
    time: "35 min ago",
    type: "patient",
  },
  {
    id: 3,
    title: "Invoice paid",
    description: "Emily Brown",
    time: "1 hour ago",
    type: "invoice",
  },
];