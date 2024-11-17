import React, { useState } from 'react';
import { 
  Box, 
  Avatar, 
  Typography, 
  IconButton, 
  Card, 
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse
} from '@mui/material';
import { 
  ExpandMore as ExpandMoreIcon,
  Phone as PhoneIcon,
  Email as EmailIcon
} from '@mui/icons-material';

const Profile = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 400, width: '100%', m: 'auto' }}>
      <CardContent sx={{ p: 2 }}>
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            cursor: 'pointer'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar
              sx={{ width: 48, height: 48, fontSize: '1.25rem', bgcolor: 'primary.main' }}
            >
              MK
            </Avatar>
            <Box>
              <Typography variant="h6" component="h3">
                Mathan Kumar
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Software Engineer
              </Typography>
            </Box>
          </Box>
          <IconButton 
            onClick={handleExpandClick}
            sx={{ transform: expanded ? 'rotate(180deg)' : 'none', transition: '0.3s' }}
          >
            <ExpandMoreIcon />
          </IconButton>
        </Box>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <List sx={{ mt: 2, borderTop: 1, borderColor: 'divider', pt: 2 }}>
            <ListItem sx={{ px: 0 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <EmailIcon color="action" />
              </ListItemIcon>
              <ListItemText 
                primary="such-lair-nurture@duck.com"
                secondary="Personl"
                primaryTypographyProps={{ variant: 'body1' }}
                secondaryTypographyProps={{ variant: 'body2' }}
              />
            </ListItem>
          </List>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default Profile;