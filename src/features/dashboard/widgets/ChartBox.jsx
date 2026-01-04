import React from "react";
import {
    Box,
    Card,
    CardContent,
    Typography,
    useTheme,
} from "@mui/material";
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const ChartBox = () => {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    const viewsData = [
        { name: "M", value: 400 },
        { name: "T", value: 600 },
        { name: "W", value: 300 },
        { name: "T", value: 700 },
        { name: "F", value: 500 },
    ];

    const salesData = [
        { name: "M", value: 100 },
        { name: "T", value: 250 },
        { name: "W", value: 200 },
        { name: "T", value: 300 },
        { name: "F", value: 400 },
    ];

    const taskData = [
        { name: "M", value: 5 },
        { name: "T", value: 8 },
        { name: "W", value: 6 },
        { name: "T", value: 10 },
        { name: "F", value: 12 },
    ];

    const cards = [
        {
            title: "Website Views",
            subtitle: "Last Campaign Performance",
            percent: "+15% increase in today sales.",
            footer: "Updated 4 minutes ago",
            chartType: "bar",
            data: viewsData,
            color: theme.palette.success.main,
        },
        {
            title: "Daily Sales",
            subtitle: "Last Campaign Performance",
            percent: "+20% growth today",
            footer: "Updated just now",
            chartType: "line",
            data: salesData,
            color: theme.palette.info.main,
        },
        {
            title: "Completed Tasks",
            subtitle: "Last Campaign Performance",
            percent: "-5% decrease this week",
            footer: "Just updated",
            chartType: "line",
            data: taskData,
            color: theme.palette.error.main,
        },
    ];

    return (
        <Box
            display="grid"
            gap={2}
            gridTemplateColumns="repeat(auto-fit, minmax(350px, 1fr))"
            sx={{ p: 1 }}
        >
            {cards.map((item, index) => (
                <Card
                    key={index}
                    sx={{
                        color: theme.palette.text.primary,
                        borderRadius: 3,
                        border: `1px solid ${theme.palette.divider}`
                    }}
                >
                    <CardContent sx={{ bgcolor: theme.palette.background.default, }}>
                        <Typography variant="h6">{item.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.subtitle}
                        </Typography>

                        <Box mt={2} height={120}>
                            <ResponsiveContainer width="100%" height="100%">
                                {item.chartType === "bar" ? (
                                    <BarChart data={item.data}>
                                        <XAxis dataKey="name" hide />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: theme.palette.background.paper,
                                                color: theme.palette.text.primary,
                                                border: `1px solid ${theme.palette.divider}`,
                                            }}
                                        />
                                        <Bar
                                            dataKey="value"
                                            fill={item.color}
                                            radius={[8, 8, 0, 0]}
                                        />
                                    </BarChart>
                                ) : (
                                    <LineChart data={item.data}>
                                        <XAxis dataKey="name" hide />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: theme.palette.background.paper,
                                                color: theme.palette.text.primary,
                                                border: `1px solid ${theme.palette.divider}`,
                                            }}
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="value"
                                            stroke={item.color}
                                            strokeWidth={2}
                                            dot={false}
                                        />
                                    </LineChart>
                                )}
                            </ResponsiveContainer>
                        </Box>

                        <Typography
                            variant="body2"
                            sx={{
                                mt: 1,
                                color: item.percent.includes("+")
                                    ? theme.palette.success.main
                                    : theme.palette.error.main,
                            }}
                        >
                            {item.percent}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            {item.footer}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default ChartBox;
