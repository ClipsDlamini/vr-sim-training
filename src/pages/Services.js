import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BusinessIcon from '@mui/icons-material/Business';
import SchoolIcon from '@mui/icons-material/School';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const Services = () => {
  const services = [
    {
      title: 'VR Simulation Training',
      description: 'State-of-the-art VR simulation rigs with force feedback for realistic training scenarios.',
      icon: <DirectionsCarIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      image: '/images/simulation.jpg',
      features: [
        'High-fidelity force feedback',
        'Real-world scenario simulation',
        'Weather condition training',
        'Emergency situation handling'
      ]
    },
    {
      title: 'Professional Certification',
      description: 'SETA-aligned certification programs for professional drivers.',
      icon: <SchoolIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      image: '/images/certification.jpg',
      features: [
        'Nationally recognized certification',
        'Comprehensive assessment',
        'Job placement assistance',
        'Career development guidance'
      ]
    },
    {
      title: 'Corporate Solutions',
      description: 'Customized training programs for fleet operators and logistics companies.',
      icon: <BusinessIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      image: '/images/hero-simulation.jpg',
      features: [
        'Fleet-specific training',
        'Group booking discounts',
        'Progress tracking',
        'Regular assessment reports'
      ]
    },
    {
      title: 'Performance Analytics',
      description: 'Detailed performance tracking and analytics for continuous improvement.',
      icon: <AnalyticsIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      image: '/images/analytics.jpg',
      features: [
        'Skill progression tracking',
        'Performance metrics',
        'Detailed reporting',
        'Improvement recommendations'
      ]
    }
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{ textAlign: 'center', mb: 8 }}
        >
          <Typography variant="h2" gutterBottom>
            Our Services
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Comprehensive training solutions using cutting-edge VR technology to create skilled, confident drivers
          </Typography>
        </MotionBox>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {service.icon}
                    <Typography variant="h4" component="h3" sx={{ ml: 2 }}>
                      {service.title}
                    </Typography>
                  </Box>
                  <Typography variant="body1" paragraph>
                    {service.description}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {service.features.map((feature, featureIndex) => (
                      <Typography
                        component="li"
                        variant="body1"
                        key={featureIndex}
                        sx={{ mb: 1 }}
                      >
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Ready to Get Started?
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
            Contact us today to discuss your training needs or schedule a demo session.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={RouterLink}
            to="/contact"
          >
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Services; 