import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Paper, Typography } from '@mui/material';
import './Addstudent.css';

const AddStudent = () => {
  const [studentDetails, setStudentDetails] = useState({
    name: '',
    id: '',
    subjectMarks: {
      Kannada: 0,
      English: 0,
      Hindi: 0,
      SocialScience: 0,
      Science: 0,
      Maths: 0,
    },
    totalMarks: 0,
    percentage: 0,
    grade: '',
  });

  const handleInputChange = (field, value) => {
    setStudentDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const handleSubjectMarksChange = (subject, value) => {
    const updatedMarks = { ...studentDetails.subjectMarks, [subject]: parseInt(value, 10) || 0 };
    const total = Object.values(updatedMarks).reduce((acc, mark) => acc + mark, 0);
    const numberOfSubjects = Object.keys(updatedMarks).length;
    const percentage = (total / (numberOfSubjects * 100)) * 100; // Calculate percentage
    const grade = calculateGrade(percentage);

    setStudentDetails((prevDetails) => ({
      ...prevDetails,
      subjectMarks: updatedMarks,
      totalMarks: total,
      percentage: percentage,
      grade: grade,
    }));
  };

  const calculateGrade = (percentage) => {
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B';
    if (percentage >= 60) return 'C';
    return 'F';
  };

  const handleSubmit = () => {
    let std_id = 101;
    let old = localStorage.getItem("Studentdetails");
    old = JSON.parse(old) || [];

    if (old && old.length) {
      std_id = old[old.length - 1].std_id + 1;
    }

    let newuser = {
      std_id: std_id,
      name: studentDetails.name,
      id: studentDetails.id,
      subjectMarks: studentDetails.subjectMarks,
      totalMarks: studentDetails.totalMarks,
      grade: studentDetails.grade,
      percentage:studentDetails.percentage,
    };

    const alldata = [...old, newuser];
    localStorage.setItem("Studentdetails", JSON.stringify(alldata));
    // Redirect or perform any other action as needed
  };

  return (
    <Container>
      <Paper className="form-container">
        <Typography variant="h5" gutterBottom>
          Add Student
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                className="input-field"
                value={studentDetails.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="ID"
                variant="outlined"
                fullWidth
                className="input-field"
                value={studentDetails.id}
                onChange={(e) => handleInputChange('id', e.target.value)}
              />
            </Grid>
            {Object.keys(studentDetails.subjectMarks).map((subject, index) => (
              <Grid item xs={12} key={index}>
                <TextField
                  label={subject.charAt(0).toUpperCase() + subject.slice(1)}
                  variant="outlined"
                  type="number"
                  fullWidth
                  className="input-field"
                  value={studentDetails.subjectMarks[subject]}
                  onChange={(e) => handleSubjectMarksChange(subject, e.target.value)}
                />
              </Grid>
            ))}
          </Grid>
          <Typography variant="h6" className="total-grade">
            Total Marks: {studentDetails.totalMarks} | Percentage: {studentDetails.percentage.toFixed(2)}% | Grade: {studentDetails.grade}
          </Typography>
          <Button type="submit" variant="contained" color="primary" className="submit-button">
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default AddStudent;