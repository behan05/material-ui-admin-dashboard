import React from 'react';
import ChartBox from "../dashboard/widgets/ChartBox"
import StatsCard from "../dashboard/widgets/StatsCard"
import { Box } from '@mui/material';

function Analytics() {

    React.useEffect(() => {
        document.title = 'Admin / Analytics';
    }, []);

    return (
        <Box sx={{ minWidth: "100%", height: "auto", flexGrow: 1, p: 1, display: "flex", flexDirection: "column", gap: 4 }} >
            <StatsCard />
            <ChartBox />
        </Box>
    )
}

export default Analytics;