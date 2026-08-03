import type { LucideIcon } from "lucide-react";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface StatCardProps {
    title: string;
    value: string;
    change: string;
    trend: "up" | "down";
    icon: LucideIcon;
}

export function StatCard({
    title,
    value,
    change,
    trend,
    icon: Icon,
}: StatCardProps) {
    return (
        <Card className="transition-shadow hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                    {title}
                </CardTitle>

                <div className="rounded-xl bg-blue-50 p-2.5">
                    <Icon className="h-5 w-5 text-blue-600" />
                </div>
            </CardHeader>

            <CardContent>
                <div className="text-3xl font-bold tracking-tight">
                    {value}
                </div>

                <p
                    className={`mt-2 text-sm ${trend === "up"
                            ? "text-emerald-600"
                            : "text-red-600"
                        }`}
                >
                    {change} from last month
                </p>
            </CardContent>
        </Card>
    );
}