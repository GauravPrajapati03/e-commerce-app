// src/pages/Register.jsx
import React from 'react';
import {
  TextField,
  Button,
  Typography,
  Paper,
} from '@mui/material';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Paper elevation={3} className="p-8 w-full max-w-md">
        <Typography variant="h5" className="mb-6 text-center font-bold">
          Create a New Account
        </Typography>

        <form className="flex flex-col gap-4">
          <TextField label="Name" variant="outlined" fullWidth required />
          <TextField label="Email" variant="outlined" type="email" fullWidth required />
          <TextField label="Password" variant="outlined" type="password" fullWidth required />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Register
          </Button>
        </form>

        <Typography className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium">Login here</Link>
        </Typography>
      </Paper>
    </div>
  );
};

export default Register;
