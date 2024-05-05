import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    const fetchlogin = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/login", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        const json = await response.json();
        localStorage.setItem("accessToken" ,json["data"]["accessToken"]);
        localStorage.setItem("refreshToken" ,json["data"]["refreshToken"]);
        if (!json.success) {
          setError(json.message);
        } else if (json.success) {
          navigate("/dashboard");
        }
      } catch (error) {
        
      }
    };
    fetchlogin();
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <h2>Management Login</h2>
        <StyledTextField
          id="username"
          name="username"
          label="Username"
          variant="outlined"
          onChange={handleChange}
          error={!!error}
          helperText={error}
          fullWidth
        />
        <StyledTextField
          id="password"
          name="password"
          label="Password"
          variant="outlined"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={!!error}
          helperText={error}
          fullWidth
        />
        <SubmitButton
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Log In
        </SubmitButton>
      </StyledForm>
    </Container>
  );
};

export default LoginForm;
const Container = styled.div`
  min-height: 63.3vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 33vw;
  margin: auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 15px;
`;

const SubmitButton = styled(Button)`
  margin-top: 20px;
`;
