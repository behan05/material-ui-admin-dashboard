import React from 'react';
import { Typography, Box, useTheme, Avatar, IconButton } from "@mui/material"
import { Link } from "react-router-dom";
const userMessage = [
  {
    img: "./public/sampleImg/img1.jpg",
    name: "Sophie B.",
    mes: "Hi! I need more information.."
  },
  {
    img: "/sampleImg/img5.jpg",
    name: "Ivanna",
    mes: "About files I can.."
  },
  {
    img: "sampleImg/img2.jpg",
    name: "Anne Marie",
    mes: "Awesome work, can you.."
  },
  {
    img: "/sampleImg/img3.jpg",
    name: "Peterson",
    mes: "Have a great afternoon.."
  },
  {
    img: "/sampleImg/img4.jpg",
    name: "Nick Daniel",
    mes: "Hi! may i asked about.."
  },
  {
    img: "/sampleImg/img6.jpg",
    name: "Rocky Joc",
    mes: "Hi! can you give more access..."
  },
]

function Conversations() {

  const theme = useTheme()
  return (
    <Box display="flex" flexDirection={"column"}>
      <Typography variant="body1" color={theme.palette.text.secondary}>
        Conversations
      </Typography>

      <Box pt={2}>
        {userMessage.map((user, i) => (
          <Box pt={1} key={i} display={"flex"} alignItems={"flext-start"} justifyContent={"space-between"}>
            <Box display={"flex"} alignItems={"center"}>
              <IconButton>
                <Avatar src={user.img} alt={user.name} />
              </IconButton>
              <Box>
                <Typography variant='subtitle2'>{user.name}</Typography>
                <Typography variant='body1' fontSize={"small"} color={theme.palette.text.secondary}>{user.mes}</Typography>
              </Box>
            </Box>

            <Typography variant='button' component={Link} to={"/"} sx={{
              color: theme.palette.text.secondary,
              fontSize: "0.8rem",
              cursor: "pointer",
              textDecoration: "none"
            }}>REPLY</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Conversations