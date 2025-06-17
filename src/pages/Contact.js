import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  MenuItem,
  Snackbar,
  Alert,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    message: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSnackbar({
      open: true,
      message: 'Thank you for your message. We will get back to you soon!',
      severity: 'success',
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      interest: '',
      message: '',
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const contactInfo = [
    {
      icon: <LocationOnIcon fontSize="large" color="primary" />,
      title: 'Visit Us',
      details: ['123 Business Park', 'Johannesburg, 2000', 'South Africa'],
    },
    {
      icon: <PhoneIcon fontSize="large" color="primary" />,
      title: 'Call Us',
      details: ['+27 723 425 329', 'Mon-Fri: 8:00 AM - 6:00 PM'],
    },
    {
      icon: <EmailIcon fontSize="large" color="primary" />,
      title: 'Email Us',
      details: ['vrincsolutions@gmail.com', 'www.vrsincsolutions.co.za'],
    },
  ];

  const interests = [
    'Basic Training Module',
    'Professional Certification Program',
    'Corporate Fleet Training',
    'General Inquiry',
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Get in touch with us to discuss your training needs or schedule a demo
          </Typography>
        </MotionBox>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {/* Contact Information Cards */}
          {contactInfo.map((info, index) => (
            <Grid item xs={12} md={4} key={index}>
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                sx={{ height: '100%', textAlign: 'center' }}
              >
                <CardContent>
                  {info.icon}
                  <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                    {info.title}
                  </Typography>
                  {info.details.map((detail, i) => (
                    <Typography key={i} color="text.secondary">
                      {detail}
                    </Typography>
                  ))}
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>

        {/* Contact Form */}
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12}>
            <MotionCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  Send Us a Message
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        select
                        label="I'm interested in"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                      >
                        {interests.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        multiline
                        rows={4}
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </MotionCard>
          </Grid>
        </Grid>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact; 