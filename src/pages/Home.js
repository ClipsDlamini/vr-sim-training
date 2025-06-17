import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const Home = () => {
  const stats = [
    {
      value: 480,
      suffix: 'B',
      prefix: 'R',
      label: 'Annual Freight Market',
    },
    {
      value: 3000,
      suffix: '+',
      prefix: '',
      label: 'Driver Shortage',
    },
    {
      value: 62,
      suffix: '%',
      prefix: '',
      label: 'Accidents Involve Trucks',
    },
  ];

  const features = [
    {
      title: 'High-Fidelity Simulation',
      description: 'Experience real-world scenarios with force-feedback rigs and advanced VR technology',
      image: '/images/simulation.jpg',
    },
    {
      title: 'SETA Accreditation',
      description: 'Nationally recognized certification pathway for professional drivers',
      image: '/images/certification.jpg',
    },
    {
      title: 'Performance Analytics',
      description: 'Detailed metrics tracking for skills assessment and improvement',
      image: '/images/analytics.jpg',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h1" gutterBottom>
                  Start Your Professional Driving Career
                </Typography>
                <Typography variant="h5" paragraph sx={{ mb: 4 }}>
                  South Africa's premier VR simulation training academy preparing aspiring drivers for professional truck driving careers. 
                  Master essential skills in a safe, immersive environment.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    component={RouterLink}
                    to="/training"
                  >
                    Explore Programs
                  </Button>
                  <Button
                    variant="outlined"
                    color="inherit"
                    size="large"
                    component={RouterLink}
                    to="/contact"
                  >
                    Contact Us
                  </Button>
                </Box>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  src="/images/hero-simulation.jpg"
                  alt="VR Simulation Training"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                  }}
                />
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={12} md={4} key={index}>
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                sx={{ textAlign: 'center', py: 4 }}
              >
                <CardContent>
                  <Typography variant="h3" color="primary" gutterBottom>
                    {stat.prefix}
                    <CountUp end={stat.value} duration={2.5} separator="," />
                    {stat.suffix}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {stat.label}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            Why Choose VR Sim Training
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
            Advanced technology meets practical experience
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <MotionCard
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={feature.image}
                    alt={feature.title}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'primary.dark', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={8} textAlign="center">
              <Typography variant="h3" gutterBottom>
                Ready to Begin Your Professional Driving Career?
              </Typography>
              <Typography variant="h6" paragraph sx={{ mb: 4 }}>
                Join our state-of-the-art training program and become a qualified, job-ready truck driver
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                component={RouterLink}
                to="/contact"
              >
                Book Your Training Session
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 