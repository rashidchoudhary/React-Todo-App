import "../App.css";
import React from "react";
import { Typography, AppBar, Toolbar, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  const onSubmit = async (e) => {
    e.preventDefault();
    
    const user = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const response = await axios.post('http://localhost:3000/user/register', user);
      
      if (response.data._id) {
        alert("Registration successful!");
        navigate("/login");
      } else {
        alert("Registration failed: No user ID returned.");
      }
    } catch (error) {
      console.error("There was an error registering the user!", error);
      alert("An error occurred during registration. Please try again.");
    }
  };

  const customStyle = {
    margin: "5px",
    marginTop: "10px",
    marginBottom: "10px",
    width: "100%",
    height: "50px",
    borderRadius: "5px",
    fontSize: "16px",
  };

  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Let's Learn Routes
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: "90px" }} />

      <Typography variant="h5" color="primary">
        Register
      </Typography>
      <form onSubmit={onSubmit}>
        <TextField
          style={customStyle}
          type="text"
          label="Name"
          variant="outlined"
          name="name"
          required
        />
        <TextField
          style={customStyle}
          type="email"
          label="Email"
          variant="outlined"
          name="email"
          required
        />
        <TextField
          style={customStyle}
          type="password"
          label="Password"
          variant="outlined"
          name="password"
          required
        />
        <Button
          style={customStyle}
          variant="contained"
          color="primary"
          type="submit">
          Register
        </Button>
      </form>
      <Typography variant="h6" color="primary">
        Already have an account?
      </Typography>
      <Typography variant="h5" color="primary">
        <Link to="/login">Login</Link>
      </Typography>
    </div>
  );
};

export default Register;
