import React from 'react';
import ChartBox from "../dashboard/widgets/ChartBox"
import StatsCard from "../dashboard/widgets/StatsCard"
import { Box } from '@mui/material';

function Analytics() {

    React.useEffect(() => {
        document.title = Analytics
    }, []);

    return (
        <Box pt={6}>
            <StatsCard />
            <ChartBox />
        </Box>
    )
}

export default Analytics;