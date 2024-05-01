import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchReasult from "./SearchReasult";

const ManagementConsole = () => {
  const [filters, setFilters] = useState({
    arrival: Date,
    departure: Date,
    rollno: "",
  });
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(filters);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/all-bookings", {
          method: "POST",
          body: JSON.stringify(filters),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });

        const json = await response.json();

        setData(json);
      } catch (error) {
        setError("Unable to Fetch Data");
      }
    };
    fetchData();
  };
    console.log(data);
  if (error) return <div>{error}</div>;
  return (
    <Container>
      <Heading>Find By:-</Heading>
      <div className="searchbar">
        <Form onSubmit={handleSubmit}>
          <DateField>
            <DateLabel>Arrival Date</DateLabel>
            <TextField
              name="arrival"
              type="date"
              variant="outlined"
              size="small"
              // value={details.arrival}
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
              // error={!!formErrors.rollno}
              // helperText={formErrors.rollno}
            />
          </DateField>
          <SubmitButton type="submit" variant="outlined" color="primary">
            Search
          </SubmitButton>
        </Form>
      </div>

      <SearchReasult data={data}/>
    </Container>
  );
};

export default ManagementConsole;

const Container = styled.div`
    padding: 20px;
    min-height: 63.3vh;
 
  .searchbar {
    padding-bottom: 20px;
    border-bottom: 1px solid black;
  }
`;
const Form = styled.form`
  display: flex;
  justify-content: space-around;
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
