import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Collapse,
  Typography,
  Box,
  IconButton,
  styled,
  Avatar,
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon, ContentCopy as ContentCopyIcon } from '@mui/icons-material'

const StyledExpandMore = styled(IconButton)(({ theme }) => ({
  transform: 'rotate(0deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  '&.expanded': {
    transform: 'rotate(180deg)',
  },
}));

const AffiliateCard = ({ title, amount, description, ctaText, ctaLink, code, instructions, validUntil }) => {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <Card
      elevation={3}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '& .MuiCardHeader-root': {
          paddingBottom: 1,
        },
        '& .MuiCardHeader-title': {
          fontSize: '1.25rem',
          fontWeight: 500,
        },
        '& .MuiCardContent-root': {
          paddingTop: 1,
          flexGrow: 1,
        },
      }}
    >
      <CardHeader
        avatar={
          <Avatar 
            sx={{ 
              bgcolor: 'primary.main',
              width: 48,
              height: 48,
              fontSize: '1.25rem'
            }}
          >
            £{amount}
          </Avatar>
        }
        title={title}
        subheader={validUntil ? `Valid until ${formatValidUntil(validUntil)}` : 'No expiration date'}
        sx={{
          '& .MuiCardHeader-content': {
            overflow: 'hidden',
            '& .MuiCardHeader-title': {
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }
          }
        }}
      />
      <CardContent>
        <Typography 
          variant="body1" 
          color="text.secondary" 
          sx={{ 
            mb: 2,
            minHeight: '3em', // Ensure consistent height for description
          }}
        >
          {description}
        </Typography>
        
        {ctaText && ctaLink ? (
          <Button
            variant="contained"
            color="primary"
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            fullWidth
            sx={{ mt: 'auto' }}
          >
            {ctaText}
          </Button>
        ) : code && (
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            gap: 2,
            mt: 'auto'
          }}>
            <Typography
              variant="body2"
              sx={{
                flex: 1,
                padding: 1,
                backgroundColor: 'action.hover',
                borderRadius: 1,
                fontFamily: 'monospace',
              }}
            >
              {code}
            </Typography>
            <Button
              variant="outlined"
              startIcon={<ContentCopyIcon />}
              onClick={handleCopyCode}
              color={copied ? "success" : "primary"}
            >
              {copied ? "Copied!" : "Copy Code"}
            </Button>
          </Box>
        )}
      </CardContent>

      {instructions && instructions.length > 0 && (
        <>
          <CardActions 
            disableSpacing 
            sx={{ 
              paddingX: 2,
              justifyContent: 'space-between',
              borderTop: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Typography variant="button" color="text.secondary">
              Instructions
            </Typography>
            <StyledExpandMore
              className={expanded ? 'expanded' : ''}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </StyledExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent sx={{ pt: 1, pb: 2 }}>
              {instructions.map((instruction, index) => (
                <Typography
                key={index}
                component="p"
                sx={{
                  display: 'block',
                  mb: 1,
                  '&:last-child': {
                    mb: 0,
                  },
                }}
              >
                {index + 1}.{' '}
                {instruction.link ? (
                  <Typography
                    component="a"
                    href={instruction.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      textDecoration: 'underline',
                      color: 'primary.main',
                    }}
                  >
                    {instruction.text}
                  </Typography>
                ) : (
                  <Typography
                    component="span"
                    sx={{
                      textDecoration: 'none',
                      color: 'text.primary',
                    }}
                  >
                    {instruction.text}
                  </Typography>
                )}
              </Typography>              
              ))}
            </CardContent>
          </Collapse>
        </>
      )}
    </Card>
  );
};

export default AffiliateCard;