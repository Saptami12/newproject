import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Container, createTheme, ThemeProvider } from '@mui/material';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3', // Custom primary color
    },
    secondary: {
      main: '#536dfe', // Custom secondary color
    },
  },
});

const TeacherLogin = () => {
  let nav = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log(`Attempting login with email: ${email}, password: ${password}`);
    let teacher = JSON.parse(localStorage.getItem("Register"))
    let check = teacher.filter((item) => {
      return item.email == email && item.password == password
    })

    if(check.length>0){
      alert("login successfull")
      nav('/add-student')
    }
    else{
      alert("Login unsuccessfull!!")
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <div>
          <Typography component="h1" variant="h5">
            Teacher Login
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            Don't have an account? <Link to="/teacher-register">Register</Link>
          </Typography>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default TeacherLogin;