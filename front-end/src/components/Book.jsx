// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Checkbox from "@mui/material/Checkbox";

// const Booknow = () => {
//   const [details, setDetails] = useState({
//     name: "",
//     student: "",
//     rollno: "",
//     street: "",
//     city: "",
//     pin: "",
//     state: "",
//     mobileno: "",
//     rooms: "",
//     purpose: "",
//     arrival: "",
//     departure: "",
//     studentId: "",
//     aadharId: "",
//     check: false,
//   });
//   const [formErrors, setFormErrors] = useState({});

//   useEffect(() => {
//     setFormErrors(validate(details));
//   }, [details]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(details));
//     if (Object.keys(formErrors).length === 0) {
//       console.log("Form submitted:", details);
//       console.log(details);
//       // You can add further actions here, such as sending data to a server
//     }
//   };

//   const validate = (values) => {
//     const errors = {};
//     if (!values.name) {
//       errors.name = "Guest Name is Required";
//     }
//     if (!values.student) {
//       errors.student = "Student Name is Required";
//     }
//     if (!values.rollno) {
//       errors.rollno = "Student Roll No is Required";
//     }
//     if (!values.mobileno) {
//       errors.mobileno = "Mobile No is Required";
//     }
//     if (!values.rooms) {
//       errors.rooms = "Rooms Required field is Required";
//     }
//     if (!values.arrival) {
//       errors.arrival = "Arrival Date is Required";
//     }
//     if (!values.departure) {
//       errors.departure = "Departure Date is Required";
//     }
//     return errors;
//   };

//   return (
//     <Container>
//       <Heading>Book a Room</Heading>
//       <Form onSubmit={handleSubmit}>
//         <TextField
//           name="name"
//           label="Guest Name"
//           variant="outlined"
//           size="small"
//           value={details.name}
//           onChange={handleChange}
//           error={!!formErrors.name}
//           helperText={formErrors.name}
//         />
//         <TextField
//           name="student"
//           label="Student Name"
//           variant="outlined"
//           size="small"
//           value={details.student}
//           onChange={handleChange}
//           error={!!formErrors.student}
//           helperText={formErrors.student}
//         />
//         <TextField
//           name="rollno"
//           label="Student Roll No"
//           variant="outlined"
//           size="small"
//           value={details.rollno}
//           onChange={handleChange}
//           error={!!formErrors.rollno}
//           helperText={formErrors.rollno}
//         />
//         <TextField
//           name="street"
//           label="Street Name"
//           variant="outlined"
//           size="small"
//           value={details.street}
//           onChange={handleChange}
//         />
//         <TextField
//           name="city"
//           label="City Name"
//           variant="outlined"
//           size="small"
//           value={details.city}
//           onChange={handleChange}
//         />
//         <TextField
//           name="pin"
//           label="PIN Code"
//           variant="outlined"
//           size="small"
//           type="number"
//           value={details.pin}
//           onChange={handleChange}
//         />
//         <TextField
//           name="state"
//           label="State Name"
//           variant="outlined"
//           size="small"
//           value={details.state}
//           onChange={handleChange}
//         />
//         <TextField
//           name="mobileno"
//           label="Mobile No"
//           variant="outlined"
//           size="small"
//           value={details.mobileno}
//           onChange={handleChange}
//           error={!!formErrors.mobileno}
//           helperText={formErrors.mobileno}
//         />
//         <TextField
//           name="rooms"
//           label="Rooms Required"
//           variant="outlined"
//           size="small"
//           type="number"
//           value={details.rooms}
//           onChange={handleChange}
//           error={!!formErrors.rooms}
//           helperText={formErrors.rooms}
//         />
//         <TextField
//           name="purpose"
//           label="Purpose of Visit"
//           variant="outlined"
//           size="small"
//           value={details.purpose}
//           onChange={handleChange}
//         />
//         <DateFields>
//           <DateField>
//             <DateLabel>Arrival Date</DateLabel>
//             <TextField
//               name="arrival"
//               type="date"
//               variant="outlined"
//               size="small"
//               value={details.arrival}
//               onChange={handleChange}
//               error={!!formErrors.arrival}
//               helperText={formErrors.arrival}
//             />
//           </DateField>
//           <DateField>
//             <DateLabel>Departure Date</DateLabel>
//             <TextField
//               name="departure"
//               type="date"
//               variant="outlined"
//               size="small"
//               value={details.departure}
//               onChange={handleChange}
//               error={!!formErrors.departure}
//               helperText={formErrors.departure}
//             />
//           </DateField>
//         </DateFields>
//         <TextField
//           name="studentId"
//           label="Student ID"
//           variant="outlined"
//           size="small"
//           value={details.studentId}
//           onChange={handleChange}
//           type="file"
//           InputLabelProps={{ shrink: true }}
//         />
//         <TextField
//           name="aadharId"
//           label="Aadhar ID"
//           variant="outlined"
//           size="small"
//           value={details.aadharId}
//           onChange={handleChange}
//           type="file"
//           InputLabelProps={{ shrink: true }}
//         />
//         <CheckboxWrapper>
//           <Checkbox
//             name="check"
//             checked={details.check}
//             onChange={(e) =>
//               setDetails((prev) => ({ ...prev, check: e.target.checked }))
//             }
//           />
//           <CheckboxLabel>
//             The guest is known to me and I will pay the charges if not paid by
//             them.
//           </CheckboxLabel>
//         </CheckboxWrapper>
//         <SubmitButton type="submit" variant="contained" color="primary">
//           Submit
//         </SubmitButton>
//       </Form>
//     </Container>
//   );
// };

// const Container = styled.div`
//   max-width: 500px;
//   margin: 0 auto;
//   padding: 20px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   position: relative;
//   top: 72px;
// `;

// const Heading = styled.h2`
//   text-align: center;
//   margin-bottom: 20px;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 15px;
// `;
// const DateFields = styled.div`
//   display: flex;
//   justify-content: space-between;
//   gap: 15px;
// `;

// const DateField = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 5px;
// `;

// const DateLabel = styled.label`
//   font-size: 14px;
// `;
// const CheckboxWrapper = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const CheckboxLabel = styled.label`
//   font-size: 14px;
//   margin-left: 5px;
// `;

// const SubmitButton = styled(Button)`
//   align-self: flex-end;
// `;

// export default Booknow;

//part 2


// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Checkbox from "@mui/material/Checkbox";

// const Booknow = () => {
//   const [details, setDetails] = useState({
//     name: "",
//     student: "",
//     rollno: "",
//     street: "",
//     city: "",
//     pin: "",
//     state: "",
//     mobileno: "",
//     rooms: "",
//     purpose: "",
//     arrival: "",
//     departure: "",
//     studentId: "",
//     aadharId: "",
//     check: false,
//   });
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
//   const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

//   useEffect(() => {
//     setFormErrors(validate(details));
//   }, [details]);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setDetails((prev) => ({ ...prev, [name]: value }));
// //   };

//     const handleChange = (e) => {
//         const { name, value, checked } = e.target;
//         if (name === "check") {
//           setIsCheckboxChecked(checked);
//         } else {
//           setDetails((prev) => ({ ...prev, [name]: value }));
//         }
//       };
  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(details));
//     setIsSubmit(true);
//   };

//   useEffect(() => {
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log("Form submitted:", details);
//       // You can add further actions here, such as sending data to a server
//     }
//   }, [formErrors, isSubmit, details]);

//   const validate = (values) => {
//     const errors = {};
//     if (!values.name) {
//       errors.name = "Guest Name is Required";
//     }
//     if (!values.student) {
//       errors.student = "Student Name is Required";
//     }
//     if (!values.rollno) {
//       errors.rollno = "Student Roll No is Required";
//     }
//     if (!values.mobileno) {
//       errors.mobileno = "Mobile No is Required";
//     }
//     if (!values.rooms) {
//       errors.rooms = "Rooms Required field is Required";
//     }
//     if (!values.arrival) {
//       errors.arrival = "Arrival Date is Required";
//     }
//     if (!values.departure) {
//       errors.departure = "Departure Date is Required";
//     }
//     return errors;
//   };

//   return (
//     <Container>
//       <Heading>Book a Room</Heading>
//       <Form onSubmit={handleSubmit}>
//         <TextField
//           name="name"
//           label="Guest Name"
//           variant="outlined"
//           size="small"
//           value={details.name}
//           onChange={handleChange}
//           error={!!formErrors.name}
//           helperText={formErrors.name}
//         />
//         <TextField
//           name="student"
//           label="Student Name"
//           variant="outlined"
//           size="small"
//           value={details.student}
//           onChange={handleChange}
//           error={!!formErrors.student}
//           helperText={formErrors.student}
//         />
//         <TextField
//           name="rollno"
//           label="Student Roll No"
//           variant="outlined"
//           size="small"
//           value={details.rollno}
//           onChange={handleChange}
//           error={!!formErrors.rollno}
//           helperText={formErrors.rollno}
//         />
//         <TextField
//           name="street"
//           label="Street Name"
//           variant="outlined"
//           size="small"
//           value={details.street}
//           onChange={handleChange}
//         />
//         <TextField
//           name="city"
//           label="City Name"
//           variant="outlined"
//           size="small"
//           value={details.city}
//           onChange={handleChange}
//         />
//         <TextField
//           name="pin"
//           label="PIN Code"
//           variant="outlined"
//           size="small"
//           type="number"
//           value={details.pin}
//           onChange={handleChange}
//         />
//         <TextField
//           name="state"
//           label="State Name"
//           variant="outlined"
//           size="small"
//           value={details.state}
//           onChange={handleChange}
//         />
//         <TextField
//           name="mobileno"
//           label="Mobile No"
//           variant="outlined"
//           size="small"
//           value={details.mobileno}
//           onChange={handleChange}
//           error={!!formErrors.mobileno}
//           helperText={formErrors.mobileno}
//         />
//         <TextField
//           name="rooms"
//           label="Rooms Required"
//           variant="outlined"
//           size="small"
//           type="number"
//           value={details.rooms}
//           onChange={handleChange}
//           error={!!formErrors.rooms}
//           helperText={formErrors.rooms}
//         />
//         <TextField
//           name="purpose"
//           label="Purpose of Visit"
//           variant="outlined"
//           size="small"
//           value={details.purpose}
//           onChange={handleChange}
//         />
//         <DateFields>
//           <DateField>
//             <DateLabel>Arrival Date</DateLabel>
//             <TextField
//               name="arrival"
//               type="date"
//               variant="outlined"
//               size="small"
//               value={details.arrival}
//               onChange={handleChange}
//               error={!!formErrors.arrival}
//               helperText={formErrors.arrival}
//             />
//           </DateField>
//           <DateField>
//             <DateLabel>Departure Date</DateLabel>
//             <TextField
//               name="departure"
//               type="date"
//               variant="outlined"
//               size="small"
//               value={details.departure}
//               onChange={handleChange}
//               error={!!formErrors.departure}
//               helperText={formErrors.departure}
//             />
//           </DateField>
//         </DateFields>
//         <TextField
//           name="studentId"
//           label="Student ID"
//           variant="outlined"
//           size="small"
//           value={details.studentId}
//           onChange={handleChange}
//           type="file"
//           InputLabelProps={{ shrink: true }}
//         />
//         <TextField
//           name="aadharId"
//           label="Aadhar ID"
//           variant="outlined"
//           size="small"
//           value={details.aadharId}
//           onChange={handleChange}
//           type="file"
//           InputLabelProps={{ shrink: true }}
//         />
//         <CheckboxWrapper>
//           <Checkbox
//             name="check"
//             checked={details.check}
//             onChange={(e) => setDetails((prev) => ({ ...prev, check: e.target.checked }))}
//           />
//           <CheckboxLabel>The guest is known to me and I will pay the charges if not paid by them.</CheckboxLabel>
//         </CheckboxWrapper>
//         <SubmitButton type="submit" variant="contained" color="primary" disabled={!isCheckboxChecked}>
//           Submit
//         </SubmitButton>
//       </Form>
//     </Container>
//   );
// };

// const Container = styled.div`
//   max-width: 500px;
//   margin: 0 auto;
//   padding: 20px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const Heading = styled.h2`
//   text-align: center;
//   margin-bottom: 20px;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 15px;
// `;

// const DateFields = styled.div`
//   display: flex;
//   justify-content: space-between;
//   gap: 15px;
// `;

// const DateField = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 5px;
// `;

// const DateLabel = styled.label`
//   font-size: 14px;
// `;

// const CheckboxWrapper = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const CheckboxLabel = styled.label`
//   font-size: 14px;
//   margin-left: 5px;
// `;

// const SubmitButton = styled(Button)`
//   align-self: flex-end;
// `;

// export default Booknow;


    ///part 3

    import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";

const Book = () => {
  const [details, setDetails] = useState({
    name: "",
    student: "",
    rollno: "",
    street: "",
    city: "",
    pin: "",
    state: "",
    mobileno: "",
    noOfRoomsRequired: Number,
    purpose: "",
    fromDate: Date,
    toDate: Date,
    studentId: "",
    aadharId: "",
    check: false,
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    setFormErrors(validate(details));
  }, [details]);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "check") {
      setDetails((prev) => ({ ...prev, [name]: checked }));
    } else {
      setDetails((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
   e.preventDefault();
    setFormErrors(validate(details));
    setIsSubmit(true);
    
  
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit && !formSubmitted) {
      console.log("Form submitted:", details);
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:8000/book/book-accomodation", {
            method: "POST",
            body: JSON.stringify(details),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });
  
          const json = await response.json();
         // console.log(json);
          setFormSubmitted(true);
         
        } catch (error) {
           console.log(error);
        }
      };
      fetchData();
    }
  }, [formErrors, isSubmit,details, formSubmitted]);


  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Guest Name is Required.";
    }
    if (!values.student) {
      errors.student = "Student Name is Required.";
    }
    if (!values.rollno) {
      errors.rollno = "Student Roll No is Required.";
    }
    if (!values.mobileno) {
      errors.mobileno = "Mobile No is Required.";
    }
    if (!values.noOfRoomsRequired) {
      errors.noOfRoomsRequired = "Rooms Required field is Required.";
    }
    if (!values.fromDate) {
      errors.fromDate = "Arrival Date is Required.";
    }
    if (!values.toDate) {
      errors.toDate = "Departure Date is Required.";
    }
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const phone = values.mobileno.match(regex);
    if(!phone){
      errors.mobileno = "Enter Valid MobileNo.";
    }
    const regexp = /^\d{8}$/;
    const valid = values.rollno.match(regexp);
    if(!valid){
      errors.rollno = "Enter Valid student Roll No."
    }
    
    return errors;
  };

  return (
    <Container>
      <Heading>Book a Room</Heading>
      <Form onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Guest Name"
          variant="outlined"
          size="small"
          value={details.name}
          onChange={handleChange}
          error={!!formErrors.name}
          helperText={formErrors.name}
        />
        <TextField
          name="student"
          label="Student Name"
          variant="outlined"
          size="small"
          value={details.student}
          onChange={handleChange}
          error={!!formErrors.student}
          helperText={formErrors.student}
        />
        <TextField
          name="rollno"
          label="Student Roll No"
          variant="outlined"
          size="small"
          value={details.rollno}
          onChange={handleChange}
          error={!!formErrors.rollno}
          helperText={formErrors.rollno}
        />
        <TextField
          name="street"
          label="Street Name"
          variant="outlined"
          size="small"
          value={details.street}
          onChange={handleChange}
        />
        <TextField
          name="city"
          label="City Name"
          variant="outlined"
          size="small"
          value={details.city}
          onChange={handleChange}
        />
        <TextField
          name="pin"
          label="PIN Code"
          variant="outlined"
          size="small"
          type="number"
          value={details.pin}
          onChange={handleChange}
        />
        <TextField
          name="state"
          label="State Name"
          variant="outlined"
          size="small"
          value={details.state}
          onChange={handleChange}
        />
        <TextField
          name="mobileno"
          label="Mobile No"
          variant="outlined"
          size="small"
          value={details.mobileno}
          onChange={handleChange}
          error={!!formErrors.mobileno}
          helperText={formErrors.mobileno}
        />
        <TextField
          name="noOfRoomsRequired"
          label="Rooms Required"
          variant="outlined"
          size="small"
          type="number"
          value={details.noOfRoomsRequired}
          onChange={handleChange}
          error={!!formErrors.noOfRoomsRequired}
          helperText={formErrors.noOfRoomsRequired}
        />
        <TextField
          name="purpose"
          label="Purpose of Visit"
          variant="outlined"
          size="small"
          value={details.purpose}
          onChange={handleChange}
        />
        <DateFields>
          <DateField>
            <DateLabel>Arrival Date</DateLabel>
            <TextField
              name="fromDate"
              type="date"
              variant="outlined"
              size="small"
              value={details.fromDate}
              onChange={handleChange}
              error={!!formErrors.fromDate}
              helperText={formErrors.fromDate}
            />
          </DateField>
          <DateField>
            <DateLabel>Departure Date</DateLabel>
            <TextField
              name="toDate"
              type="date"
              variant="outlined"
              size="small"
              value={details.toDate}
              onChange={handleChange}
              error={!!formErrors.toDate}
              helperText={formErrors.toDate}
            />
          </DateField>
        </DateFields>
        <TextField
          name="studentId"
          label="Student ID"
          variant="outlined"
          size="small"
          value={details.studentId}
          onChange={handleChange}
          type="file"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          name="aadharId"
          label="Aadhar ID"
          variant="outlined"
          size="small"
          value={details.aadharId}
          onChange={handleChange}
          type="file"
          InputLabelProps={{ shrink: true }}
        />
        <CheckboxWrapper>
          <Checkbox
            name="check"
            checked={details.check}
            onChange={handleChange}
          />
          <CheckboxLabel>
            The guest is known to me and I will pay the charges if not paid by
            them.
          </CheckboxLabel>
        </CheckboxWrapper>
        <SubmitButton
          type="submit"
          variant="contained"
          color="primary"
          disabled={!details.check}
        >
          Submit
        </SubmitButton>
      </Form>
    </Container>
  );
};

const Container = styled.div`
 min-height: auto;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  /* position: relative;
  top: 72px; */
`;

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const DateFields = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

const DateField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const DateLabel = styled.label`
  font-size: 14px;
`;
const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
  margin-left: 5px;
`;

const SubmitButton = styled(Button)`
  align-self: flex-end;
`;

export default Book;

