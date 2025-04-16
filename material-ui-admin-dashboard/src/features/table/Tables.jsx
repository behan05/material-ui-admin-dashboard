import React, { useEffect } from 'react';
import {
  Avatar,
  Box,
  Button,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DashboardTable from '../../components/Table/DashboardTable';
import { projectTableData } from "../../data/dashboardTableData";

const authorTable = [
  {
    img: "/sampleImg/img1.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    function: "Manager",
    typeOfWork: "Organization",
    status: "online",
    employed: "23/04/18",
  },
  {
    img: "/sampleImg/img3.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    function: "Programmer",
    typeOfWork: "Developer",
    status: "offline",
    employed: "11/01/19",
  },
  {
    img: "/sampleImg/img4.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    function: "Executive",
    typeOfWork: "Projects",
    status: "online",
    employed: "19/09/17",
  },
  {
    img: "/sampleImg/img2.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    function: "Programmer",
    typeOfWork: "Developer",
    status: "online",
    employed: "24/12/08",
  },
  {
    img: "/sampleImg/img5.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    function: "Manager",
    typeOfWork: "Executive",
    status: "offline",
    employed: "04/10/21",
  },
  {
    img: "/sampleImg/img6.jpg",
    name: "Miriam Eric",
    email: "miriam@creative-tim.com",
    function: "Programmer",
    typeOfWork: "Developer",
    status: "offline",
    employed: "14/09/20",
  },
];

const Tables = () => {
  const theme = useTheme();

  useEffect(() => {
    document.title = "Admin / Tables";
  }, []);

  return (
    <React.Fragment>
      <Box p={3}>
        {/* Table Heading */}
        <Typography variant="h6" p={2} bgcolor={"#0f5aa9"} color="#fff" borderRadius={1}>
          Authors Table
        </Typography>

        {/* Authors Table */}
        <TableContainer sx={{ mt: 1, boxShadow: 5, bgcolor: theme.palette.background.default,borderRadius: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>AUTHOR</strong></TableCell>
                <TableCell><strong>FUNCTION</strong></TableCell>
                <TableCell><strong>STATUS</strong></TableCell>
                <TableCell><strong>EMPLOYED</strong></TableCell>
                <TableCell><strong>ACTION</strong></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {authorTable.map((user, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={2}>
                      <Avatar src={user.img} alt={user.name} />
                      <Box>
                        <Typography variant="subtitle1">{user.name}</Typography>
                        <Typography variant="body2" color="text.secondary">{user.email}</Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell>
                    <Typography variant="subtitle1">{user.function}</Typography>
                    <Typography variant="body2" color="text.secondary">{user.typeOfWork}</Typography>
                  </TableCell>

                  <TableCell>
                    <Chip
                      label={user.status.toUpperCase()}
                      color={user.status === 'online' ? 'success' : 'default'}
                      size="small"
                      sx={{ fontWeight: 600 }}
                    />
                  </TableCell>

                  <TableCell>
                    <Typography variant="body2">{user.employed}</Typography>
                  </TableCell>

                  <TableCell>
                    <Button
                      variant="outlined"
                      endIcon={<MoreVertIcon />}
                      size="small"
                      bgcolor={theme.palette.background.default}
                    >
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box p={3}>

        {/* Projects Table */}
        <Typography variant="h6" p={2} mb={1} bgcolor={"#0f5aa9"} color="#fff" borderRadius={1}>
          Projects Table
        </Typography>

        {/* Projects DashboardTable exist in componet folder*/}
        <DashboardTable data={projectTableData} />
      </Box>
    </React.Fragment>
  );
};

export default Tables;
