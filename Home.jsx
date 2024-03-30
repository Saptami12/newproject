import { styled } from '@mui/system';
import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const StyledDiv = styled('div')(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(4),
  backgroundImage: 'url("https://media.istockphoto.com/id/1419766496/photo/abstract-concepts-of-cybersecurity-technology-and-digital-data-protection-protect-internet.webp?b=1&s=170667a&w=0&k=20&c=ymHzOpQBTrldJ5egITZZAgfc7PGmxZ2bP83eo-KjARM=")', // Replace with your image URL
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  width:'200vh', // Adjust as needed
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(2),
}));

const Home = () => {
  const nav = useNavigate();

  return (
    <StyledDiv>
      <h2 style={{color:"white",fontStyle:"oblique",fontSize:"50px"}}>Welcome to Student Grade Book!</h2>
      <StyledButton
        onClick={() => nav('/teacher-login')}
        variant="contained"
      >
        TEACHER LOGIN
      </StyledButton>
      <StyledButton
        onClick={() => nav('/student-login')}
        variant="contained"
      >
        STUDENT LOGIN
      </StyledButton>
    </StyledDiv>
  );
};

export default Home;