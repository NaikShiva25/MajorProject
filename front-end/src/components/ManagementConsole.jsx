import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchReasult from "./SearchReasult";
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ManagementConsole = () => {
  const [filters, setFilters] = useState({
    arrival: Date,
    departure: Date,
    rollno: "",
  });
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [showPDFButton, setShowPDFButton] = useState(false);
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
        setShowPDFButton(true);
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
      <PDFGenerator data={data} showPDFButton= {showPDFButton} />
    </Container>
  );
};
class PDFGenerator extends React.Component {
  generatePDF = () => {
    const { data  } = this.props;

    if (!data) {
      console.error('Data is null or undefined. Unable to generate PDF.');
      return;
    }

    const doc = new jsPDF("landscape");
   
    try {
      const excludedFields = ['_id', 'street', 'city', 'state', 'pin', 'createdAt', 'updatedAt', '__v'];

      const tableColumns = Object.keys(data[0])
        .filter(key => !excludedFields.includes(key))
        .map(key => {
          switch (key) {
            case 'name':
              return { header: 'Guest Name', dataKey: key };
            case 'student':
              return { header: 'Student Name', dataKey: key };
            case 'rollno':
              return { header: 'Roll No', dataKey: key };
            case 'mobileno':
              return { header: 'Mobile No', dataKey: key };
            case 'noOfRoomsRequired':
              return { header: 'No of Rooms Required', dataKey: key };
            case 'purpose':
              return { header: 'Purpose', dataKey: key };
            case 'fromDate':
              return { header: 'Arrival Date', dataKey: key };
            case 'toDate':
              return { header: 'Departure Date', dataKey: key };
            case 'studentId':
              return { header: 'Student ID', dataKey: key };
            case 'aadharId':
              return { header: 'Aadhar ID', dataKey: key };
            // Add more cases for other fields as needed
            default:
              return { header: key, dataKey: key }; // Use default header as key name
          }
        });

        const tableData = data.map(item => {
          const rowData = {};
          tableColumns.forEach(col => {
            if (col.dataKey === 'fromDate' || col.dataKey === 'toDate') {
              rowData[col.dataKey] = item[col.dataKey] ? new Date(item[col.dataKey]).toISOString().substr(0, 10) : '';
            } else {
              rowData[col.dataKey] = item[col.dataKey];
            }
          });
          return rowData;
        });

      const tableRows = tableData.map(item => tableColumns.map(col => item[col.dataKey]));

      doc.autoTable({
        columns: tableColumns,
        body: tableRows,
        startY: 20,
        columnStyles: {
          // Set custom widths for each column if needed
        },
      });

      // Save the PDF
      doc.save('report.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };
  

  render() {
    const { showPDFButton } = this.props;
    return (
      <Magicbutton>
        {/* Render your PDF generation button or trigger */}
        
        {showPDFButton && <Button onClick={this.generatePDF} variant="contained" color="primary">Generate PDF</Button>}

        </Magicbutton>
    );
  }
}
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
const Magicbutton = styled.div`
   display: flex;
   justify-content: center;
`;