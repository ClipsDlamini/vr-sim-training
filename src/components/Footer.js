import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Stack,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              VR Sim Training
            </Typography>
            <Typography variant="body2">
              South Africa's premier VR simulation training academy for professional drivers.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link component={RouterLink} to="/" color="inherit">
                Home
              </Link>
              <Link component={RouterLink} to="/services" color="inherit">
                Services
              </Link>
              <Link component={RouterLink} to="/training" color="inherit">
                Training Programs
              </Link>
              <Link component={RouterLink} to="/about" color="inherit">
                About Us
              </Link>
              <Link component={RouterLink} to="/contact" color="inherit">
                Contact
              </Link>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Stack spacing={2}>
              <Box display="flex" alignItems="center" gap={1}>
                <Email fontSize="small" />
                <Link href="mailto:vrincsolutions@gmail.com" color="inherit">
                  vrincsolutions@gmail.com
                </Link>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <Phone fontSize="small" />
                <Link href="tel:+27723425329" color="inherit">
                  +27 723 425 329
                </Link>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <LocationOn fontSize="small" />
                <Typography variant="body2">
                  South Africa
                </Typography>
              </Box>
              <Box display="flex" gap={1} mt={2}>
                <IconButton
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  size="small"
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  size="small"
                >
                  <Twitter />
                </IconButton>
                <IconButton
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  size="small"
                >
                  <LinkedIn />
                </IconButton>
              </Box>
            </Stack>
          </Grid>
        </Grid>
        
        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 4, borderTop: '1px solid rgba(255,255,255,0.1)', pt: 3 }}
        >
          © {new Date().getFullYear()} VR Sim Training. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer; 