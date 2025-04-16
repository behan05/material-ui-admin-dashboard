import React from 'react';
import { Box, Paper, Typography, useTheme } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const userMess = [
    {
        mess: "A simple primary alert with an example link. Give it a click if you like.",
        closeIcon: <CloseIcon />
    },
    {
        mess: "A simple secondary alert with an example link. Give it a click if you like.",
        closeIcon: <CloseIcon />
    },
    {
        mess: "A simple success alert with an example link. Give it a click if you like.",
        closeIcon: <CloseIcon />
    },
    {
        mess: "A simple error alert with an example link. Give it a click if you like.",
        closeIcon: <CloseIcon />
    },
    {
        mess: "A simple warning alert with an example link. Give it a click if you like.",
        closeIcon: <CloseIcon />
    },
    {
        mess: "A simple info alert with an example link. Give it a click if you like.",
        closeIcon: <CloseIcon />
    },
    {
        mess: "A simple light alert with an example link. Give it a click if you like.",
        closeIcon: <CloseIcon />
    },
    {
        mess: "A simple dark alert with an example link. Give it a click if you like.",
        closeIcon: <CloseIcon />
    },
]



function Notifications() {

    const theme = useTheme();
    return (
        <Box p={3}>

        </Box>
    )
}

export default Notifications