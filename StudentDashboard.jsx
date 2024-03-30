import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const { std_id } = useParams();
  const [studentDetails, setStudentDetails] = useState(null);

  useEffect(() => {
    const idToFind = parseInt(std_id, 10);
    const storedStudents = localStorage.getItem("Studentdetails");

    try {
      // Handle potential parsing errors
      const students = JSON.parse(storedStudents);

      if (Array.isArray(students)) {
        const student = students.find((item) => item.std_id === idToFind);

        if (student) {
          setStudentDetails(student);
        } else {
          console.error(`Student with ID ${idToFind} not found.`);
        }
      } else {
        console.error("Invalid data format in localStorage.");
      }
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
    }
  }, [std_id]);

  if (!studentDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome, {studentDetails.name}!</h1>
      <div className="dashboard-details">
        <p><strong>ID:</strong> {studentDetails.std_id}</p>
        <p><strong>Subject Marks:</strong></p>
        <ul>
          {Object.entries(studentDetails.subjectMarks).map(([subject, marks]) => (
            <li key={subject}><strong>{subject}:</strong> {marks}</li>
          ))}
        </ul>
        <p><strong>Total Marks:</strong> {studentDetails.totalMarks}</p>
        <p><strong>Percentage:</strong> {studentDetails.percentage ? studentDetails.percentage.toFixed(2) + '%' : 'N/A'}</p>
        <p><strong>Grade:</strong> {studentDetails.grade}</p>
      </div>
    </div>
  );
};

export default StudentDashboard;