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
  CircularProgress,
  Fab,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

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

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const serviceID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
      const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
      const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        interest: formData.interest,
        message: formData.message,
        to_email: 'vrincsolutions@gmail.com', // Your business email
      };

      // Temporarily disable EmailJS until configured
      // await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      // For now, just simulate success (remove this when EmailJS is configured)
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSnackbar({
        open: true,
        message: 'Thank you for your message! We will get back to you within 24 hours.',
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
    } catch (error) {
      console.error('Error sending email:', error);
      setSnackbar({
        open: true,
        message: 'Sorry, there was an error sending your message. Please try calling us directly.',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleWhatsAppClick = () => {
    const phone = '+27723425329'; // Your WhatsApp number
    const message = 'Hi! I\'m interested in VR simulation training. Can you please provide more information?';
    const whatsappUrl = `https://wa.me/${phone.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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
    <Box sx={{ py: 8, position: 'relative' }}>
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
                <Typography variant="body1" color="text.secondary" paragraph>
                  Fill out the form below or click the WhatsApp button for instant chat
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
                        disabled={loading}
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
                        disabled={loading}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        disabled={loading}
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
                        disabled={loading}
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
                        disabled={loading}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        disabled={loading}
                        startIcon={loading ? <CircularProgress size={20} /> : null}
                      >
                        {loading ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </MotionCard>
          </Grid>
        </Grid>
      </Container>

      {/* WhatsApp Floating Action Button */}
      <Fab
        color="success"
        aria-label="WhatsApp"
        onClick={handleWhatsAppClick}
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          backgroundColor: '#25D366',
          '&:hover': {
            backgroundColor: '#128C7E',
          },
        }}
      >
        <WhatsAppIcon />
      </Fab>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 