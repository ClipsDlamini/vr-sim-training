import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Training from './pages/Training';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B4965', // Professional deep blue
      light: '#62B6CB',
      dark: '#0D2534',
    },
    secondary: {
      main: '#FF6B35', // Energetic orange for calls-to-action
      light: '#FF8C61',
      dark: '#CC4A1B',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8F9FA',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.75rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.2rem',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        },
      },
    },
  },
});

function App() {
  const location = useLocation();
  const basename = process.env.PUBLIC_URL;

  // Reset scroll position when location changes
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Redirect to home if we're at the base URL with a blank page
  React.useEffect(() => {
    if (location.pathname === basename + '/') {
      window.scrollTo(0, 0);
    }
  }, [location, basename]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToTop />
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        overflow: 'hidden'
      }}>
        <Navbar />
        <main style={{ 
          flexGrow: 1,
          position: 'relative',
          overflow: 'auto'
        }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/training" element={<Training />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Catch-all route to redirect to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App; 