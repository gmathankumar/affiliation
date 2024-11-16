import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const Profile = () => {
  return (
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <Avatar
        sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
        alt="Mathan Kumar"
        src="https://avatars.githubusercontent.com/u/31972774"
      />
      <Typography variant="h4" gutterBottom>
        Mathan Kumar
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Affiliate Marketing Expert | Frontend Developer
      </Typography>
    </Box>
  );
};

export default Profile;