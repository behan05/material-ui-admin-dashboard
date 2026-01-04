import { Box } from "@mui/material";
import DashboardStats from "./widgets/StatsCard";
import ChartBox from "./widgets/ChartBox";
import { projectTableData } from "../../data/dashboardTableData";
import DashboardTable from "../../components/Table/DashboardTable";
import OrdersOverview from "../../components/OrdersOverview/OrdersOverview";

const Dashboard = () => {

  return (
    <>
      <Box sx={{
        minWidth: "100%",
        height: "auto",
        flexGrow: 1,
        p: 1,
        display: "flex",
        flexDirection: "column",
        gap: 4
      }} >
        <DashboardStats />
        <ChartBox />
        <Box display="flex" gap={2} flexWrap="wrap">
          <Box flex={2} minWidth={300}>
            <DashboardTable data={projectTableData} />
          </Box>
          <Box flex={1} minWidth={250}>
            <OrdersOverview />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
