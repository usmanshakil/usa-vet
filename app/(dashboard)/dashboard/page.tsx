import { PageHeader } from "@/components/layout/page-header/page-header";
import { StatsGrid } from "@/features/dashboard/components/stats-grid";

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Here's what's happening in your clinic today."
      />

      <StatsGrid />
    </>
  );
}