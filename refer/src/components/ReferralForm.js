import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

const ReferralForm = ({ handleClose }) => {
  const { handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    handleClose();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6" gutterBottom>
        Referral Form
      </Typography>
      
      <Controller
        name="referrerName"
        control={control}
        defaultValue=""
        rules={{ required: 'Referrer name is required' }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Your Name"
            fullWidth
            margin="normal"
            error={!!errors.referrerName}
            helperText={errors.referrerName?.message}
          />
        )}
      />

      <Controller
        name="referrerEmail"
        control={control}
        defaultValue=""
        rules={{
          required: 'Referrer email is required',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'Invalid email address',
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Your Email"
            fullWidth
            margin="normal"
            error={!!errors.referrerEmail}
            helperText={errors.referrerEmail?.message}
          />
        )}
      />

      <Controller
        name="refereeName"
        control={control}
        defaultValue=""
        rules={{ required: 'Referee name is required' }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Friend's Name"
            fullWidth
            margin="normal"
            error={!!errors.refereeName}
            helperText={errors.refereeName?.message}
          />
        )}
      />

      <Controller
        name="refereeEmail"
        control={control}
        defaultValue=""
        rules={{
          required: 'Referee email is required',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'Invalid email address',
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Friend's Email"
            fullWidth
            margin="normal"
            error={!!errors.refereeEmail}
            helperText={errors.refereeEmail?.message}
          />
        )}
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </Box>
  );
};

export default ReferralForm;
