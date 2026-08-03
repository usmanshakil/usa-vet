import { dashboardStats } from "../data/mock";
import { StatCard } from "./stat-card";

export function StatsGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {dashboardStats.map((stat) => (
        <StatCard
          key={stat.id}
          {...stat}
        />
      ))}
    </section>
  );
}