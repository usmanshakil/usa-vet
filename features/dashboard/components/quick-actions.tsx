import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { quickActions } from "../data/mock";
import { QuickActionButton } from "./quick-action-button";

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {quickActions.map((action) => (
          <QuickActionButton
            key={action.id}
            action={action}
          />
        ))}
      </CardContent>
    </Card>
  );
}