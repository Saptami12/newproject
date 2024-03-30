import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TeacherLogin from '../Components/TeacherLogin';
import StudentLogin from '../Components/StudentLogin';
import StudentDashboard from '../Components/StudentDashboard';
import StudentRegister from '../Components/StudentRegister';
import TeacherRegister from '../Components/TeacherRegister';
import Home from '../Components/Home';
import Localstorages from '../Components/Localstorage';
import AddStudent from'../Components/AddStudent';
export default function Router() {
  return (
    <BrowserRouter> 
    <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/teacher-login" element={<TeacherLogin />} />
        <Route exact path="/student-register" element={ <StudentRegister />} />
        <Route exact path="/student-login" element={ <StudentLogin />} />
        <Route exact path="/add-student" element={<AddStudent />} />
        <Route exact path="/student-dashboard/:std_id" element={<StudentDashboard />} />
        <Route exact path="/teacher-register" element={ <TeacherRegister />} />
        <Route exact path="/localstorage" element={ <Localstorages />} />

        {/* Route for the root URL */}
       
    
    </Routes>
    </BrowserRouter>
  )
}
