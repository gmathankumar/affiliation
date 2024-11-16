import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="caption" color="text.secondary" align="center">
          Disclaimer: The affiliate links and offers presented on this website are provided for
          informational purposes only. It is your responsibility to thoroughly review all terms,
          conditions, and details before making any decisions. I do not guarantee the accuracy
          or completeness of any offers and are not liable for any actions taken based on the
          information provided.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;