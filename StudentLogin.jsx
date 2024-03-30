import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Container, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#536dfe',
    },
  },
});

const StudentLogin = () => {
  const [stdId, setStdId] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    let students = JSON.parse(localStorage.getItem("Studentdetails"));
    let student = students.find((item) => item.std_id.toString() === stdId.toString() && item.name === name);

    if (student) {
      alert("Login successful");
      // Redirect to student dashboard or details page
      navigate(`/student-dashboard/${student.std_id}`);
    } else {
      alert("Login unsuccessful");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <div>
          <Typography component="h1" variant="h5">
            Student Login
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="stdId"
            label="Student ID"
            name="stdId"
            autoFocus
            value={stdId}
            onChange={(e) => setStdId(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="name"
            label="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="secondary"
            onClick={handleLogin}
          >
            Login
          </Button>
          <Typography>
            Don't have an account? <Link to="/student-register">Register</Link>
          </Typography>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default StudentLogin;