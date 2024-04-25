import React from "react";
import styled from "styled-components";
//import {Link, Navigate} from 'react-router-dom'
 import {useNavigate} from 'react-router-dom'
//import { Navigate } from "react-router-dom";
// import * as React from 'react';
import {
  createTheme,
  ThemeProvider,
  alpha,
  getContrastRatio,
} from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/system";
import { ThemeProvider as Theme, Typography } from "@mui/material";
import { Link } from "react-router-dom";
//import { unstable_HistoryRouter } from 'react-router-dom';

// Augment the palette to include a violet color

// Update the Button's color options to include a violet option

// import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  // Theme customization goes here as usual, including tonalOffset and/or
  // contrastThreshold as the augmentColor() function relies on these
});

theme = createTheme(theme, {
  // Custom colors created with augmentColor go here
  palette: {
    salmon: theme.palette.augmentColor({
      color: {
        main: "#FF5733",
      },
      name: "salmon",
    }),
  },
});

// export default function UsingStylesUtils() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Stack gap={2} alignItems="center">
//         <Button variant="contained" color="violet">
//           Violet
//         </Button>
//         <Stack direction="row" gap={1}>
//           <Stack alignItems="center">
//             <Typography variant="body2">light</Typography>
//             <Box sx={{ bgcolor: 'violet.light', width: 40, height: 20 }} />
//           </Stack>
//           <Stack alignItems="center">
//             <Typography variant="body2">main</Typography>
//             <Box sx={{ bgcolor: 'violet.main', width: 40, height: 20 }} />
//           </Stack>
//           <Stack alignItems="center">
//             <Typography variant="body2">dark</Typography>
//             <Box sx={{ bgcolor: 'violet.dark', width: 40, height: 20 }} />
//           </Stack>
//         </Stack>
//       </Stack>
//     </ThemeProvider>
//   );
// }

const Welcome = () => {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate("/booknow");
  }
  return (
    <Welcome_container>
      <div className="Message">
        <h2>Welcome to Nit Kkr Guest Room Bookings.</h2>
        <p>
          Discover the convenience and ease of booking guest rooms on campus
          through our platform.We strive to make your booking experience
          seamless and stressfree.
        </p>
        <div className="primary">
          <Theme theme={theme}>
            <Button
              onClick={handleClick}
              variant="contained"
              color="salmon"
            >
              BOOK NOW
            </Button>
          </Theme>
        </div>
      </div>
    </Welcome_container>
  );
};

export default Welcome;
const Welcome_container = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-image: url("/images/Group-9.jpg");
  background-repeat: no-repeat;
  background-size: 100vw;
 // background-position-y: 72px;
  margin-bottom: 30px;
  border-bottom: 1px solid black;
  .Message {
    width: 45vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3vw 2vw;
    color: #ffff;
    position: relative;
    top: 3vw;
    .primary {
      // display: flex;
      // justify-content: center;
      margin-top: 1.5vw;
    }
    /* button{  
        background-color: #ff5208;
        border: none;
        padding:10px 20px;
        border-radius: 5px;
        color: #ffff;
      } */
    h2 {
      font-size: 3vw;
      font-weight: 500;
    }
    p {
      line-height: 1.5vw;
    }
  }
`;
