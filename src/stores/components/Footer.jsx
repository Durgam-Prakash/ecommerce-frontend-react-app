import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#222",
        color: "#eee",
        mt: 8,
        py: 6,
        px: { xs: 3, sm: 6, md: 12 },
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 4,
      }}
    >
      {/* About */}
      <Box sx={{ minWidth: 200, flex: 1 }}>
        <Typography variant="h6" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
          We are committed to providing the best products and services to our customers with
          utmost quality and support.
        </Typography>
      </Box>

      {/* Quick Links */}
      <Box sx={{ minWidth: 150, flex: 1 }}>
        <Typography variant="h6" gutterBottom>
          Quick Links
        </Typography>
        {["Home", "Shop", "About", "Contact", "FAQs"].map((item) => (
          <Link
            href="#"
            key={item}
            underline="hover"
            color="inherit"
            sx={{ display: "block", my: 0.5, cursor: "pointer" }}
          >
            {item}
          </Link>
        ))}
      </Box>

      {/* Contact Info */}
      <Box sx={{ minWidth: 200, flex: 1 }}>
        <Typography variant="h6" gutterBottom>
          Contact
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          1234 Market Street<br />
          San Francisco, CA 94103
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          Email: support@example.com
        </Typography>
        <Typography variant="body2">Phone: +1 234 567 890</Typography>
      </Box>

      {/* Social Media */}
      <Box sx={{ minWidth: 150, flex: 1 }}>
        <Typography variant="h6" gutterBottom>
          Follow Us
        </Typography>
        <Box>
          {[Facebook, Twitter, Instagram, LinkedIn].map((Icon, index) => (
            <IconButton
              key={index}
              aria-label="social media"
              href="#"
              sx={{
                color: "#eee",
                transition: "color 0.3s",
                "&:hover": { color: "#1976d2" },
              }}
            >
              <Icon />
            </IconButton>
          ))}
        </Box>
      </Box>

      {/* Copyright */}
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          mt: 4,
          borderTop: "1px solid #444",
          pt: 2,
          fontSize: "0.875rem",
          color: "#aaa",
        }}
      >
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;
