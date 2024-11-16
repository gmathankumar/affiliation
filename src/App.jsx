// src/App.js
import React, { useState } from 'react';
import {
  CssBaseline,
  Container,
  Box,
  IconButton,
  ThemeProvider,
  useTheme,
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { lightTheme, darkTheme } from './theme/theme';
import Profile from './components/Profile';
import AffiliateCard from './components/AffiliateCard';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { affiliateData } from './models/affiliateData';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = useTheme();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'background.default',
        }}
      >
        <Box sx={{ position: 'absolute', right: 16, top: 16 }}>
          <IconButton onClick={toggleTheme} color="inherit">
            {isDarkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
        
        <Container 
          maxWidth="xl" 
          sx={{ 
            mt: { xs: 8, sm: 6, md: 4 },
            mb: 4, 
            flex: 1,
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Profile />
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 3,
              justifyContent: {
                xs: 'center',
                sm: 'space-between',
              },
              paddingRight: { xs: 0, sm: 2 },
            }}
          >
            {affiliateData.map((affiliate, index) => (
              <Box
                key={index}
                sx={{
                  width: '350px',
                  minWidth: '350px',
                  maxWidth: '350px',
                  '@media (max-width: 380px)': {
                    width: '100%',
                    minWidth: '280px',
                  },
                }}
              >
                <AffiliateCard {...affiliate} />
              </Box>
            ))}
          </Box>
        </Container>
        <Footer />
        <ScrollToTop />
      </Box>
    </ThemeProvider>
  );
};

export default App;