"use client"

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { month: "Jan", desktop: 186, mobile: 80 },
    { month: "Feb", desktop: 305, mobile: 200 },
    { month: "Mar", desktop: 237, mobile: 120 },
    { month: "Apr", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "Jun", desktop: 214, mobile: 140 },
]

const chartConfig = {
    desktop: {
        label: "Aviation",
        color: "hsl(var(--chart-1))",
    },
    mobile: {
        label: "Maritime",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export default function ImpactChart() {
    return (
        <Card className="bg-transparent border-none text-white shadow-none">
            <CardHeader>
                <CardTitle className="text-xl font-mono text-cyan-400">Quarterly Trends</CardTitle>
                <CardDescription className="text-gray-400">
                    Showing infrastructure utilization index for the last 6 months
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="max-h-[300px] w-full">
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.1)" />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                            stroke="#888888"
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            stroke="#888888"
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dot" />}
                        />
                        <Area
                            dataKey="mobile"
                            type="natural"
                            fill="var(--color-mobile)"
                            fillOpacity={0.4}
                            stroke="var(--color-mobile)"
                            stackId="a"
                        />
                        <Area
                            dataKey="desktop"
                            type="natural"
                            fill="var(--color-desktop)"
                            fillOpacity={0.4}
                            stroke="var(--color-desktop)"
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
