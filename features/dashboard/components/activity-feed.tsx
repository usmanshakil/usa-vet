import { ArrowRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { recentActivities } from "../data/mock";
import { ActivityItem } from "./activity-item";

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Activity Feed</CardTitle>

        <button className="flex items-center gap-1 text-sm text-blue-600 hover:underline">
          View all
          <ArrowRight className="h-4 w-4" />
        </button>
      </CardHeader>

      <CardContent className="space-y-4">
        {recentActivities.map((activity) => (
          <ActivityItem
            key={activity.id}
            activity={activity}
          />
        ))}
      </CardContent>
    </Card>
  );
}