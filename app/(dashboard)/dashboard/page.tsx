import { PageHeader } from "@/components/layout/page-header/page-header";
import { StatsGrid } from "@/features/dashboard/components/stats-grid";
import { DashboardGrid } from "@/features/dashboard/components/dashboard-grid";
import { AppointmentTimeline } from "@/features/dashboard/components/appointment-timeline";
import { ActivityFeed } from "@/features/dashboard/components/activity-feed";
import { RecentPatients } from "@/features/dashboard/components/recent-patients";
import { QuickActions } from "@/features/dashboard/components/quick-actions";

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Here's what's happening in your clinic today."
      />

      <StatsGrid />

      <DashboardGrid
        left={
          <>
            <AppointmentTimeline />
            <ActivityFeed />
          </>
        }
        right={
          <>
            <RecentPatients />
            <QuickActions />
          </>
        }
      />
    </>
  );
}