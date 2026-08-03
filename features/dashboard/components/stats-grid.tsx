import {
  CalendarDays,
  DollarSign,
  PawPrint,
  Users,
} from "lucide-react";

import { StatCard } from "./stat-card";
import { dashboardStats } from "../data/mock";

export function StatsGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {dashboardStats.map((stat) => (
        <StatCard
          key={stat.title}
          {...stat}
        />
      ))}
    </section>
  );
}