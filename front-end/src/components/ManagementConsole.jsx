import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ManagementConsole = () => {
  return (
    <Container>
        <Heading>Find By:-</Heading>
      <div className="searchbar">
        <DateField>
          <DateLabel>Arrival Date</DateLabel>
          <TextField
            name="arrival"
            type="date"
            variant="outlined"
            size="small"
            // value={details.arrival}
            // onChange={handleChange}
            // error={!!formErrors.arrival}
            // helperText={formErrors.arrival}
          />
        </DateField>
        <DateField>
          <DateLabel>Departure Date</DateLabel>
          <TextField
            name="departure"
            type="date"
            variant="outlined"
            size="small"
            // value={details.departure}
            // onChange={handleChange}
            // error={!!formErrors.departure}
            // helperText={formErrors.departure}
          />
        </DateField>

        <DateField>
          <DateLabel>Student Roll No</DateLabel>
          <TextField
            name="rollno"
            label="Student Roll No"
            variant="outlined"
            size="small"
            //value={details.rollno}
            //onChange={handleChange}
            // error={!!formErrors.rollno}
            // helperText={formErrors.rollno}
          />
        </DateField>
        <SubmitButton
          type="submit"
          variant="outlined"
          color="primary"
         
        >
          Search
        </SubmitButton>
      </div>
    </Container>
  );
};

export default ManagementConsole;

const Container = styled.div`
padding: 20px;
border-bottom: 1px solid black;
  .searchbar {
    display: flex;
    justify-content: space-around;
  }
`;
const DateField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const DateLabel = styled.label`
  font-size: 14px;
`;
const SubmitButton = styled(Button)`
  align-self: flex-end;
`;
const Heading = styled.h2`
  text-align: left;
  font-weight: 400;
  margin-bottom: 20px;
`;