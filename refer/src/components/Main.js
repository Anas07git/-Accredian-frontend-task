import React, { useState } from 'react';
import { Container, Typography, Button, Box, Modal } from '@mui/material';
import ReferralForm from './ReferralForm';

const Main = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        textAlign="center"
      >
        <Typography variant="h2" gutterBottom>
          Refer & Earn
        </Typography>
        <Typography variant="h6" gutterBottom>
          Refer a friend to earn rewards!
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Refer Now
        </Button>
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={style}
        >
          <ReferralForm handleClose={handleClose} />
        </Box>
      </Modal>
    </Container>
  );
};

export default Main;
