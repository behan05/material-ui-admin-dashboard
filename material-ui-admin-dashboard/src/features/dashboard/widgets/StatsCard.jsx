import React from 'react';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Box, IconButton, Typography } from "@mui/material";
import { useMediaQuery, useTheme } from '@mui/material';

const stats = [
    {
        title: "Bookings",
        value: "281",
        change: "+55%",
        subtitle: "than last week",
        icon: <ChildFriendlyIcon sx={{ fontSize: 40 }} />,
    },
    {
        title: "Today's Users",
        value: "2,300",
        change: "+3%",
        subtitle: "than last month",
        icon: <SignalCellularAltIcon sx={{ fontSize: 40 }} />,
    },
    {
        title: "Revenue",
        value: "$34k",
        change: "+1%",
        subtitle: "than yesterday",
        icon: <MonetizationOnIcon sx={{ fontSize: 40 }} />,
    },
    {
        title: "Followers",
        value: "+91",
        change: "",
        subtitle: "",
        icon: <PersonAddIcon sx={{ fontSize: 40 }} />,
    },
];



function StatsCard() {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Box
            display="flex"
            flexWrap="wrap"
            gap={2}
            justifyContent="space-between"
        >

            {stats.map((stat, i) => {
                return (
                    <Box
                        bgcolor={theme.palette.background.default}
                        mt={2} p={1} key={i}
                        display="flex"
                        justifyContent="space-between"
                        sx={{
                            flex: `1 1 ${isSmallScreen ? "100%" : "250px"}`,
                            minHeight: 140,
                            borderRadius: 3,
                            boxShadow: 6,
                        }}>

                        <Box>
                            <Box>
                                <IconButton edge="start">
                                    {stat.icon}
                                </IconButton>
                            </Box>
                            {stat.change && (
                                <Typography variant="body2" mt={6} color="success.main">
                                    {stat.change}{" "}
                                    <Typography variant="caption" sx={{ mb: 2 }} color="text.secondary" component="span">
                                        {stat.subtitle}
                                    </Typography>
                                </Typography>
                            )}
                        </Box>

                        <Box>
                            <Typography variant="subtitle2" color="text.secondary">{stat.title}</Typography>
                            <Typography alignSelf="end" variant="h5" fontWeight="bold">{stat.value}</Typography>
                        </Box>
                    </Box>
                )
            })}
        </Box >
    )
}

export default StatsCard;
