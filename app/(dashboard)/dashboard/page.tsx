import { PageHeader } from "@/components/layout/page-header/page-header";

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Here's what's happening in your clinic today."
      />

      <div>
        {/* Dashboard widgets will go here */}
      </div>
    </>
  );
}