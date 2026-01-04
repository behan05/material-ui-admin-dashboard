import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from "@mui/material";
import { userLogs } from "./usersDataLogs";

function Logs() {
    const theme = useTheme();
    return (
        <Box p={3} sx={{
            bgcolor: theme.palette.background.paper,
            mt: 4,
            overflowX: "auto",
            borderRadius: 3
        }}>
            <Typography variant='h5' pb={2}>User Logs</Typography>
            <TableContainer>
                <Table>

                    <TableHead>
                        <TableRow>
                            <TableCell>Date & Time</TableCell>
                            <TableCell>User</TableCell>
                            <TableCell>Action</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>IP Address</TableCell>
                            <TableCell>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    
                    <TableBody>
                        {userLogs.map((logs, i) => (
                            <TableRow key={i}>
                                <TableCell>{logs.timestamp}</TableCell>
                                <TableCell>{logs.user}</TableCell>
                                <TableCell>{logs.action}</TableCell>
                                <TableCell>{logs.status}</TableCell>
                                <TableCell>{logs.ip}</TableCell>
                                <TableCell>{logs.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default Logs;