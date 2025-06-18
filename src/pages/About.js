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
} from '@mui/material';
import { motion } from 'framer-motion';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import SpeedIcon from '@mui/icons-material/Speed';
import GroupIcon from '@mui/icons-material/Group';
import StarIcon from '@mui/icons-material/Star';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const About = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'Pioneering VR technology in driver training to create immersive, effective learning experiences.',
      icon: <EmojiObjectsIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
    {
      title: 'Excellence',
      description: 'Committed to delivering the highest quality training and maintaining rigorous standards.',
      icon: <StarIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
    {
      title: 'Safety',
      description: 'Prioritizing road safety through comprehensive training and skill development.',
      icon: <SpeedIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
    {
      title: 'Community',
      description: 'Building a community of skilled professional drivers across South Africa.',
      icon: <GroupIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          sx={{ textAlign: 'center', mb: 8 }}
        >
          <Typography variant="h2" gutterBottom>
            About VR Sim Training
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Transforming driver training in South Africa through innovative VR technology
          </Typography>
        </MotionBox>

        {/* Mission Section */}
        <Grid container spacing={4} alignItems="center" sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h3" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph>
                At VR Sim Training, we're dedicated to revolutionizing professional driver training in South Africa. Our mission is to create skilled, confident, and safety-conscious drivers through cutting-edge VR simulation technology.
              </Typography>
              <Typography variant="body1" paragraph>
                We understand the critical role that professional drivers play in South Africa's R480 billion road freight industry. By addressing the skills gap and providing comprehensive training solutions, we're helping to build a safer, more efficient transportation sector.
              </Typography>
            </MotionBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={process.env.PUBLIC_URL + '/images/hero-simulation.jpg'}
                alt="VR Simulation Training"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                }}
              />
            </MotionBox>
          </Grid>
        </Grid>

        {/* Values Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" align="center" gutterBottom>
            Our Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <MotionCard
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    {value.icon}
                    <Typography variant="h5" sx={{ my: 2 }}>
                      {value.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Impact Section */}
        <Box sx={{ bgcolor: 'background.paper', py: 8, borderRadius: 2 }}>
          <Container maxWidth="md">
            <Typography variant="h3" align="center" gutterBottom>
              Our Impact
            </Typography>
            <Typography variant="body1" paragraph align="center">
              Through our innovative training programs, we aim to address the critical skills gap in South Africa's transportation sector. While many drivers hold Code 10 and Code 14 licenses, they often lack the practical experience and job-readiness skills that trucking companies require. Our state-of-the-art VR simulation technology is designed to bridge this gap, providing drivers with the hands-on experience and operational knowledge needed to meet industry standards, with the goal of creating safer roads and more efficient logistics operations.
            </Typography>
            <Typography variant="body1" paragraph align="center">
              We're proud to be recognized by the Gauteng Department of Roads & Transport and to work towards SETA accreditation, ensuring our training programs meet national standards and industry requirements.
            </Typography>
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={RouterLink}
                to="/contact"
              >
                Join Our Mission
              </Button>
            </Box>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 