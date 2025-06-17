import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TimerIcon from '@mui/icons-material/Timer';
import SchoolIcon from '@mui/icons-material/School';
import BarChartIcon from '@mui/icons-material/BarChart';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const Training = () => {
  const programs = [
    {
      title: 'Basic Training Module',
      price: 'R150/hr',
      duration: '15-20 hours',
      description: 'Essential training program focused on practical job operations and fundamental truck driving skills for entry-level drivers.',
      features: [
        'Basic vehicle operation and control skills',
        'Loading and unloading procedures',
        'Route planning and navigation',
        'Safety protocols and compliance',
        'Certificate upon completion',
      ],
      icon: <TimerIcon fontSize="large" color="primary" />,
    },
    {
      title: 'Professional Certification Program',
      price: 'R150/hr',
      duration: '20-30 hours',
      description: 'Comprehensive program designed to elevate your driving skills and prepare you for advanced professional opportunities in the trucking industry.',
      features: [
        'Advanced vehicle handling techniques',
        'Complex loading scenarios',
        'Hazard perception and prevention',
        'Fuel efficiency training',
        'Professional certification',
        'Job placement assistance',
      ],
      highlighted: true,
      icon: <SchoolIcon fontSize="large" color="primary" />,
    },
    {
      title: 'Corporate Fleet Training',
      price: 'Custom Pricing',
      duration: 'Flexible',
      description: 'Tailored programs for companies looking to enhance their fleet drivers\' skills and safety records.',
      features: [
        'Customized training modules',
        'Fleet-specific scenarios',
        'Performance analytics',
        'Regular progress reports',
        'Bulk booking discounts',
        'Dedicated support',
      ],
      icon: <BarChartIcon fontSize="large" color="primary" />,
    },
  ];

  const trainingFeatures = [
    {
      title: 'Real-World Scenarios',
      description: 'Practice handling steep hills, adverse weather, and long-haul fatigue in a safe environment',
    },
    {
      title: 'Performance Tracking',
      description: 'Detailed digital logging of hours, skills assessments, and hazard-perception scores',
    },
    {
      title: 'SETA Alignment',
      description: 'Training programs designed to meet national certification standards',
    },
    {
      title: 'Expert Instruction',
      description: 'Guidance from experienced trainers throughout your learning journey',
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{ textAlign: 'center', mb: 8 }}
        >
          <Typography variant="h2" gutterBottom>
            Training Programs
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Comprehensive VR training programs designed to prepare drivers for real-world job operations with industry-recognized certification
          </Typography>
        </MotionBox>

        {/* Programs Section */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {programs.map((program, index) => (
            <Grid item xs={12} md={4} key={index}>
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  ...(program.highlighted && {
                    border: 2,
                    borderColor: 'primary.main',
                  }),
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    {program.icon}
                  </Box>
                  <Typography variant="h4" component="h2" gutterBottom align="center">
                    {program.title}
                  </Typography>
                  <Typography variant="h3" color="primary" align="center" gutterBottom>
                    {program.price}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" align="center" gutterBottom>
                    Duration: {program.duration}
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                    {program.description}
                  </Typography>
                  <List>
                    {program.features.map((feature, featureIndex) => (
                      <ListItem key={featureIndex} sx={{ py: 0.5 }}>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                  <Box sx={{ mt: 'auto', pt: 2, textAlign: 'center' }}>
                    <Button
                      variant={program.highlighted ? 'contained' : 'outlined'}
                      color="primary"
                      size="large"
                      component={RouterLink}
                      to="/contact"
                      fullWidth
                    >
                      Enroll Now
                    </Button>
                  </Box>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 8 }} />

        {/* Training Features */}
        <Typography variant="h3" align="center" gutterBottom>
          Training Features
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {trainingFeatures.map((feature, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <MotionCard
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
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

        {/* CTA Section */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Ready to Start Your Training?
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
            Contact us today to discuss your training needs and begin your journey to becoming a skilled professional driver.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={RouterLink}
            to="/contact"
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Training; 