import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ViewInArIcon from '@mui/icons-material/ViewInAr';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Services', path: '/services' },
    { text: 'Training Programs', path: '/training' },
    { text: 'About Us', path: '/about' },
    { text: 'Contact', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem
          button
          component={RouterLink}
          to={item.path}
          key={item.text}
          onClick={handleDrawerToggle}
          sx={{
            py: 2,
            '&:hover': {
              backgroundColor: 'rgba(27, 73, 101, 0.08)',
            },
          }}
        >
          <ListItemText 
            primary={item.text} 
            primaryTypographyProps={{
              fontWeight: 500,
            }}
          />
        </ListItem>
      ))}
      <ListItem>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          component={RouterLink}
          to="/contact"
          onClick={handleDrawerToggle}
        >
          Book Training
        </Button>
      </ListItem>
    </List>
  );

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <ViewInArIcon 
              sx={{ 
                display: 'flex', 
                mr: 1,
                color: 'primary.main',
                fontSize: '2rem',
              }} 
            />
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'primary.main',
              }}
            >
              VR SIM TRAINING
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 2 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={RouterLink}
                  to={item.path}
                  color="inherit"
                  sx={{
                    fontWeight: 500,
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
              <Button
                variant="contained"
                color="secondary"
                component={RouterLink}
                to="/contact"
                sx={{ ml: 2 }}
              >
                Book Training
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            backgroundColor: 'background.paper',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar; 