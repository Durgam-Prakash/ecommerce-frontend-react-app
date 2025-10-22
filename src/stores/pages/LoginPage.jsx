import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
    // Implement login logic here
    alert(`Logged in with email: ${email}`);
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: 'auto',
        mt: 8,
        p: 4,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" mb={3} align="center">
        Login
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button variant="contained" color="primary" fullWidth type="submit" sx={{ mt: 2 }}>
          Login
        </Button>
      </form>
      <Typography mt={2} align="center">
        Don't have an account?{' '}
        <MuiLink component={Link} to="/signup" underline="hover">
          Sign Up
        </MuiLink>
      </Typography>
    </Box>
  );
};

export default LoginPage;
