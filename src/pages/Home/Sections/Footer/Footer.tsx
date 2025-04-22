import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email, WhatsApp } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center',
        padding: '30px 20px',
        borderTop: '1px solid #CEDC00',
        marginTop: 10,
      }}
    >
      <Typography variant="h6" gutterBottom>
        © {new Date().getFullYear()} André William
      </Typography>

      <Typography variant="body2" sx={{ marginBottom: 2 }}>
        Desenvolvedor Front-end & UX/UI Designer
      </Typography>

      <Box display="flex" justifyContent="center" gap={2}>
        <IconButton
          component="a"
          href="https://github.com/AndreWill99"
          target="_blank"
          rel="noopener"
          sx={{ color: '#CEDC00' }}
        >
          <GitHub />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.linkedin.com/in/andre-william-costa-33b873172/"
          target="_blank"
          rel="noopener"
          sx={{ color: '#CEDC00' }}
        >
          <LinkedIn />
        </IconButton>

        <IconButton
          component="a"
          href="mailto:andrewilliam2012@hotmail.com"
          sx={{ color: '#CEDC00' }}
        >
          <Email />
        </IconButton>

        <IconButton
          component="a"
          href="https://wa.me/+554198452031"
          target="_blank"
          rel="noopener"
          sx={{ color: '#CEDC00' }}
        >
          <WhatsApp />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
