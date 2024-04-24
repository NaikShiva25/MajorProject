import React from "react";
import styled from "styled-components";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import {
  createTheme,
  ThemeProvider,
  alpha,
  getContrastRatio,
} from "@mui/material/styles";
import Button from "@mui/material/Button";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { ThemeProvider as Theme, Typography } from "@mui/material";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

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


const Booknow = () => {
  
  const [details,setDetails] = useState({
      name:'',
      student:'',
      rollno:'',
      street:'',
      city:'',
      pin:'',
      state:'',
      mobileno:'',
      rooms:"",
      purpose:'',
      arrival:'',
      departure:'',
      studentId:'',
      aadharId:'',
      check:'',

  })
  const handleChange = (e)=>{
     const {name ,student,rollno,street,city,pin,state,mobileno,rooms,purpose,arrival,departure,studentId,aadharId,check}=e.target;
     setDetails((prev)=>{
          return {...prev , [name] : e.target.value };
     });
       console.log(e.target);
  };
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(details);
  }
  return (
    <Container>
      <div className="head">
        <h2>Book a Room</h2>
      </div>
      <div className="box">
        <div className="body">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
           onSubmit={handleSubmit}
          >
            <div className="Name">
              <h3>Full Name</h3>
              <div className="name">
              <TextField
                  name="name"
                  label="Name"
                  id="outlined-size-small"
                  size="small"
                  onChange={handleChange}
                />
                <TextField
                  name="student"
                  label="Student Name"
                  id="outlined-size-small"
                  size="small"
                  onChange={handleChange}
                />
                <TextField
                  name="rollno"
                  label="Student Roll No"
                  id="outlined-size-small"
                  size="small"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="Address">
              <h3>Address</h3>
              <div className="address">
                <TextField
                  name="street"
                  label="Street Name"
                  id="outlined-size-small"
                  size="small"
                  onChange={handleChange}
                />
                <TextField
                  name="city"
                  label="City Name"
                  id="outlined-size-small"
                  size="small"
                  onChange={handleChange}
                />
                <TextField
                  name="pin"
                  id="outlined-number"
                  label="PIN Code"
                  size="small"
                  onChange={handleChange}
                  // InputLabelProps={{
                  //   shrink: true,
                  // }}
                />
                <TextField
                  name="state"
                  label="State Name"
                  id="outlined-size-small"
                  size="small"
                  onChange={handleChange}
                />
                <TextField
                  name="mobileno"
                  label="Mobile No"
                  id="outlined-size-small"
                  size="small"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="Other">
              <h3>Details</h3>
              <div className="display">
                <div className="select">
                <TextField
                  name="rooms"
                  label="Rooms Required"
                  type="number"
                  id="outlined-size-small"
                  size="small"
                  onChange={handleChange}
                />
                {/* <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">No.Rooms</InputLabel>
                  <Select
                    name="rooms"
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={rooms}
                    label="Rooms"
                    onChange={handleChange}
                  >
                    <MenuItem value="rooms">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>One</MenuItem>
                    <MenuItem value={2}>Two</MenuItem>
                  </Select>
                  </FormControl> */}
                </div>
                <div className="other">
                  <TextField
                    name="purpose"
                    label="Purpose of Visit"
                    id="outlined-size-small"
                    size="small"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="Date">
              <div className="date">
                <div className="todate">
                  <label for="arrival">Arrival Date :</label>
                  <TextField
                    type="date"
                    name="arrival"
                    label=""
                    id="outlined-size-small"
                    size="small"
                    onChange={handleChange}
                  />
                </div>
                <div className="fromdate">
                  <label for="departure">Departure Date :</label>

                  <TextField
                    name="departure"
                    type="date"
                    label=""
                    id="outlined-size-small"
                    size="small"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="File">
              <div className="file">
                <div className="idcard">
                  <label for="student ID">Student-Id </label>
                  <TextField
                    label=""
                    name="studentId"
                    type="file"
                    id="outlined-size-small"
                    size="small"
                    onChange={handleChange}
                  />
                </div>

                <div className="aadharcard">
                  <label for="Aadhar-Id">Aadhar Id of Guest </label>
                  <TextField
                    label=""
                    name="aadharId"
                    type="file"
                    id="outlined-size-small"
                    size="small"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="check">
              <FormControlLabel
                required
                control={<Checkbox name="check" onChange={handleChange}/>}
                label="The guest is known to me and I will pay the charges of the guest if not paid by him"
              />
            </div>
            <Theme theme={theme}>
              <Button type ="submit" variant="contained" color="salmon">
                submit
              </Button>
            </Theme>
          </Box>
         
        </div>
      </div>
    </Container>
  );
};

export default Booknow;

const Container = styled.div`
  min-height: 105vh;
  width: 100%;
  position: relative;
  top: 72px;

  .head {
    height: 15vh;
    width: 100%;
    border-bottom: 1px solid black;
    font-size: 1.5vw;
    margin-bottom: 2vw;

    h2 {
      position: absolute;
      top: 25px;
      font-weight: 400;
      padding: 0 4vw;
    }
  }
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .body {
    width: 60%;
    padding: 1vw 1vw;
    margin-bottom: 100px;
    border: 1px solid black;

    .Name {
      h3 {
        font-weight: 400;
      }
      input {
        // height: 4vh;
      }
      .name {
        display: flex;
        justify-content: space-around;
      }
    }
    .Address {
      h3 {
        font-weight: 400;
      }
      TextField {
        margin: 1vw 2vw;
      }
      .address {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
      }
    }
    .Other {
      h3 {
        font-weight: 400;
      }
      .display {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      /* input {
        height: 5vh;
        width: 30vw;
        margin: 1vw 2vw;
      } */
      /*
      .other {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
      } */
    }
    .Date {
      .date {
        padding: 1vw 2vw;
        display: flex;
        gap: 10vw;
      }
      /* input {
        height: 4vh;
        width: 10vw;
      } */
    }
    .File {
      .file {
        display: flex;
        justify-content: space-around;
      }
      margin: 1vw 1vw;
    }
    .check {
      padding: 1vw;

      label {
        font-size: large;
      }
      /* #checkbox {
        height: 15px;
        width: 20px;
      } */
    }
  }
`;
