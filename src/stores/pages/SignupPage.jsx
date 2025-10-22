import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert('Please fill in all fields');
      return;
    }
    // Implement signup logic here
    alert(`Signed up with name: ${name}, email: ${email}`);
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
        Sign Up
      </Typography>
      <form onSubmit={handleSignup}>
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
          Sign Up
        </Button>
      </form>
      <Typography mt={2} align="center">
        Already have an account?{' '}
        <MuiLink component={Link} to="/login" underline="hover">
          Login
        </MuiLink>
      </Typography>
    </Box>
  );
};

export default SignupPage;
