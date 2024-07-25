import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'

const ReferralForm = ({ handleClose }) => {
  const { handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = async data => {
    console.log(data);
    // Live API URL
    // const res = await fetch("https://refer-and-earn-oth0.onrender.com/api/referral", {
    //   const res = await fetch('http://localhost:3000/api/referral', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    const url = "http://127.0.0.1:3000/api/referral"
    
    // const res = await axios.post(url , data)
    // console.log('the response from backend',res);

    axios.post(url,data).then((res) => {
      console.log('the response backend',res);
    }).catch((err) => {
      console.log('the error',err);
    })

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
            label="This field must be unique everytime" 
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
