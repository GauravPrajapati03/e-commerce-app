import React from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Paper elevation={3} className="p-8 w-full max-w-md">
        <Typography variant="h5" className="mb-6 text-center font-bold">
          Login to Your Account
        </Typography>

        <form className="flex flex-col gap-4">
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            required
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Login
          </Button>
        </form>

        <Typography className="mt-4 text-sm text-center">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 font-medium">
            Register here
          </Link>
        </Typography>
      </Paper>
    </div>
  );
};

export default Login;
