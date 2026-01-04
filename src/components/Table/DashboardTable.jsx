import React from 'react';
import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Typography, Box, Menu,
    MenuItem
} from '@mui/material';
import { useTheme } from "@mui/material/styles";
import CheckIcon from '@mui/icons-material/Check';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CircleIcon from '@mui/icons-material/Circle';
import LinearProgress from '@mui/material/LinearProgress';

const DashboardTable = ({ title = "Recent Projects", data = [] }) => {

    const theme = useTheme();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handelClick = (e) => {
        setAnchorEl(e.currentTarget);
    }
    const handelClose = () => {
        setAnchorEl(null);
    }

    const getStatusColor = (status) => {
        switch (status) {
            case "Working":
                return "warning.main";
            case "Done":
                return "success.main";
            case "Pending":
                return "info.main";
            case "Canceled":
                return "error.main";
            default:
                return "text.disabled";
        }

    };

    const getCompletionColor = (value) => {
        if (value === 100) return theme.palette.success.main;
        if (value >= 70) return theme.palette.info.main;
        if (value >= 40) return theme.palette.warning.main;
        return theme.palette.error.main;
    };


    return (
        <Box elevation={3} sx={{
            p: 2,
            borderRadius: 3,
            border: `1px solid ${theme.palette.divider}`,
            background: theme.palette.background.paper
        }}>
            <Box
                display="flex"
                justifyContent="space-between"
                alignContent='center'
            >
                <Typography variant="h6" gutterBottom>{title}</Typography>
                <MoreVertIcon fontSize="small" onClick={handelClick} />
            </Box>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handelClose}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                PaperProps={{
                    sx: {
                        bgcolor: theme.palette.background.default,
                        borderRadius: 4,
                        boxShadow: 8,
                        p: 1
                    }
                }}
            >
                <MenuItem onClick={handelClose}>Action</MenuItem>
                <MenuItem onClick={handelClose}>Another action</MenuItem>
                <MenuItem onClick={handelClose}>Something else</MenuItem>
            </Menu>

            <Box display="flex" alignItems="center" gap={1} mb={0}>
                <CheckIcon color='success' fontSize="small" />
                <Typography variant='body2'>30 done this month</Typography>
            </Box>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Project</TableCell>
                            <TableCell align="right">Budget</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Completion</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, idx) => (
                            <TableRow key={idx}>
                                <TableCell>{row.project}</TableCell>
                                <TableCell align="right">{row.budget}</TableCell>
                                <TableCell align="right">
                                    <Box display="flex" alignItems="center" justifyContent="flex-end">
                                        <CircleIcon
                                            sx={{
                                                color: getStatusColor(row.status),
                                                fontSize: 10,
                                                mr: 1
                                            }}
                                        />
                                        {row.status}
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box display="flex" alignItems="center" justifyContent="flex-end" gap={1}>
                                        <Typography variant="body2" minWidth={28}>
                                            {`${row.completion}%`}
                                        </Typography>
                                        <Box width={100}>
                                            <LinearProgress
                                                variant="determinate"
                                                value={row.completion}
                                                sx={{
                                                    height: 8,
                                                    borderRadius: 5,
                                                    backgroundColor: theme.palette.grey[300],
                                                    '& .MuiLinearProgress-bar': {
                                                        borderRadius: 5,
                                                        backgroundColor: getCompletionColor(row.completion),
                                                    }
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default DashboardTable;
