import React from 'react';
import {
    Box,
    Typography,
    useTheme
} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const timelineData = [
    {
        icon: <MonetizationOnIcon fontSize="small" />,
        text: "$2400, Design changes",
        date: "22 DEC 7:20 PM",
        color: "primary.main",
    },
    {
        icon: <ShoppingCartIcon fontSize="small" />,
        text: "New order #1832412",
        date: "21 DEC 11 PM",
        color: "success.main",
    },
    {
        icon: <MonetizationOnIcon fontSize="small" />,
        text: "Server payments for April",
        date: "21 DEC 9:34 PM",
        color: "warning.main",
    },
    {
        icon: <CreditCardIcon fontSize="small" />,
        text: "New card added for order #4395133",
        date: "20 DEC 2:20 AM",
        color: "info.main",
    },
    {
        icon: <CreditCardIcon fontSize="small" />,
        text: "New card added for order #4395133",
        date: "18 DEC 4:54 AM",
        color: "error.main",
    },
];

const OrdersOverview = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                p: 3,
                borderRadius: 3,
                border: `1px solid ${theme.palette.divider}`,
                transition: "min-height 0.3s ease",
                minHeight: "100%",
            }}
        >
            <Typography variant="h6" gutterBottom>
                Orders Overview
            </Typography>

            <Box display="flex" alignItems="center" gap={1} mb={3}>
                <ArrowUpwardIcon fontSize="small" color="success" />
                <Typography variant="body2" color="text.secondary">
                    <strong>24%</strong> this month
                </Typography>
            </Box>

            <Box display="flex" flexDirection="column" gap={3}>
                {timelineData.map((item, idx) => (
                    <Box key={idx} display="flex" gap={2} alignItems="flex-start" position="relative">
                        {/* Timeline icon and connector */}
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <Box
                                sx={{
                                    color: item.color,
                                }}
                            >
                                {item.icon}
                            </Box>
                            {idx !== timelineData.length - 1 && (
                                <Box
                                    sx={{
                                        width: 2,
                                        flexGrow: 1,
                                        bgcolor: "divider",
                                        mt: 0.5,
                                    }}
                                />
                            )}
                        </Box>

                        {/* Content */}
                        <Box>
                            <Typography variant="body2" fontWeight={500}>
                                {item.text}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                {item.date}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default OrdersOverview;
