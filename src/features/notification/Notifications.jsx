import React from 'react';
import { Box, Button, Typography, useTheme } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const initialUserMess = [
    {
        mess: "A simple primary alert with an example link. Give it a click if you like.",
        bgColor: "#A61347"
    },
    {
        mess: "A simple secondary alert with an example link. Give it a click if you like.",
        bgColor: "#535B62"
    },
    {
        mess: "A simple success alert with an example link. Give it a click if you like.",
        bgColor: "#377F46"
    },
    {
        mess: "A simple error alert with an example link. Give it a click if you like.",
        bgColor: "#9D1311"
    },
    {
        mess: "A simple warning alert with an example link. Give it a click if you like.",
        bgColor: "#BB6D00"
    },
    {
        mess: "A simple info alert with an example link. Give it a click if you like.",
        bgColor: "#0F5AA8"
    },
    {
        mess: "A simple light alert with an example link. Give it a click if you like.",
        bgColor: "linear-gradient(125deg,#CCCEAB, #0F392B)"
    },
    {
        mess: "A simple dark alert with an example link. Give it a click if you like.",
        bgColor: "linear-gradient(125deg,#EEF2F3,rgb(49, 49, 51))"
    },
];

const initialNotificationBtn = [
    {
        btnText: "SUCCESS NOTIFICATIONS",
        btnBgColor: "#388046"
    },
    {
        btnText: "INFO NOTIFICATIONS",
        btnBgColor: "#0E59A8"
    },
    {
        btnText: "WARNING NOTIFICATIONS",
        btnBgColor: "#BB6D00"
    },
    {
        btnText: "ERROR NOTIFICATIONS",
        btnBgColor: "#9D1311"
    },
]

function Notifications() {

    const theme = useTheme();
    const [message, setMessage] = React.useState(initialUserMess);

    const handleClick = (indexToRemove) => {
        const filterMessage = message.filter((_, index) => index !== indexToRemove)
        setMessage(filterMessage);
    };

    return (
        <React.Fragment>
            <Box p={2} sx={{
                maxWidth: 1000,
                minWidth: 380,
                height: "auto",
                bgcolor: theme.palette.background.paper,
                margin: "auto",
                mt: 3,
                borderRadius: 3,
            }}>
                <Typography variant='h6'>Alerts</Typography>
                {message.map((mes, i) => (
                    <Box
                        key={i}
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        p={"20px "}
                        sx={{ background: mes.bgColor }}
                        mt={2}
                        borderRadius={2}
                    >
                        <Typography variant='body1'>{mes.mess}</Typography>
                        <Typography variant='button' onClick={() => handleClick(i)} sx={{
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 2,

                            "&:hover": {
                                boxShadow: "0 0 2px"
                            }
                        }}
                        >
                            <CloseIcon />
                        </Typography>
                    </Box>
                ))
                }
            </Box >

            <Box p={2} sx={{
                maxWidth: 1000,
                minWidth: 380,
                height: "auto",
                bgcolor: theme.palette.background.paper,
                margin: "auto",
                mt: 3,
                borderRadius: 3,
            }}>
                <Typography variant='h6'>Notifications</Typography>

                <Box
                    display="flex"
                    flexWrap="wrap"
                    justifyContent={"space-evenly"}
                    gap={4}
                    mt={2}
                    p={1}>
                    {initialNotificationBtn.map((notis, i) => (
                        <Button
                            key={i}
                            variant='contained'
                            sx={{
                                bgcolor: notis.btnBgColor,
                                color: "#FFF",
                                minWidth: 150,
                                maxWidth: 250,
                                "&:hover": {
                                    boxShadow: `0 6px 1rem ${notis.btnBgColor}`
                                }
                            }}
                        >
                            {notis.btnText}
                        </Button>
                    ))}
                </Box>

            </Box>
        </React.Fragment>
    )
}

export default Notifications;