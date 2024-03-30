import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

function StudentRegister() {
    const [name, setName] = useState("");
    const [id,setId]= useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    

    let nav = useNavigate();

    const handleSubmit = () => {
        let user_id = 101;
        let old = localStorage.getItem("Registration");
        old = JSON.parse(old) || [];

        if (old && old.length) {
            user_id = old[old.length - 1].user_id + 1;
        }

        let newuser = {
            user_id: user_id,
            name: name,
            id:id,
            phone: phone,
            email: email,
            address: address,
            password: password,
            
        };

        const alldata = [...old, newuser];
        localStorage.setItem("Registration", JSON.stringify(alldata));
        nav('/student-login');
    };

    console.log(name,id, phone, email, password, address);

    return (
        <div className="registration-form-container" style={{ maxWidth: '600px', margin: '50px auto', border: '1px solid #ccc', borderRadius: '5px', color: 'ThreeDHighlight',backgroundColor:'#f5f5f5' }}>
            <Card sx={{ minWidth: 200 }}>
                <CardContent>
                    <img src="image.png" alt="" height="50px" />

                    <Typography variant='body1' style={{ color: "darkmagenta", fontSize: "30px", backgroundColor: "ButtonFace" }}>Student Registration</Typography>

                    <form style={{ display: 'flex', flexDirection: 'column' }}>
                        <br />
                        <br />
                        <div>
                            <TextField
                                type='text'
                                id="outlined-basic"
                                name='text'
                                label="Full Name"
                                variant="outlined"
                                margin="dense"
                                fullWidth="true"
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                                className="input-field"
                            />
                        </div>
                        <div>
                            <TextField
                                type='number'
                                id="outlined-basic"
                                name='number'
                                label="id"
                                variant="outlined"
                                margin="dense"
                                fullWidth="true"
                                value={id}
                                onChange={(e) => { setId(e.target.value) }}
                                className="input-field"
                            />
                        </div>
                        <div>
                            <TextField
                                type='tel'
                                id="outlined-basic"
                                name='text'
                                label="Phone Number"
                                variant="outlined"
                                margin="dense"
                                fullWidth="true"
                                value={phone}
                                onChange={(e) => { setPhone(e.target.value) }}
                                className="input-field"
                            />
                        </div>
                        <div>
                            <TextField
                                type='text'
                                id="outlined-basic"
                                name='text'
                                label="Address"
                                variant="outlined"
                                margin="dense"
                                fullWidth="true"
                                value={address}
                                onChange={(e) => { setAddress(e.target.value) }}
                                className="input-field"
                            />
                        </div>
                        <div>
                            <TextField
                                type='email'
                                id="outlined-basic"
                                name='email'
                                label="Email"
                                variant="outlined"
                                margin="dense"
                                fullWidth="true"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                className="input-field"
                            />
                        </div>
                        <div>
                            <TextField
                                type='password'
                                id="outlined-basic"
                                name='password'
                                label="Password"
                                variant="outlined"
                                margin="dense"
                                fullWidth="true"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                className="input-field"
                            />
                        </div>

                        <Button
                            variant="contained"
                            size="normal"
                            fullWidth
                            onClick={handleSubmit}
                            className="submit-button"
                        >
                            <Typography variant="h6">Register</Typography>
                        </Button>
                    </form>
                </CardContent>
            </Card>

            <br />

            <Card sx={{ minWidth: 300, marginTop: "iren", color: "black", backgroundColor: "wheat" }}>
                <CardContent style={{
                    paddingLeft: "20px",
                    paddingRight: "22px",
                }}>
                    <Typography variant='p'>
                        
                        <Button variant='text'>
                            <Typography><Link to="/student-login">Login</Link></Typography>
                        </Button>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default StudentRegister;