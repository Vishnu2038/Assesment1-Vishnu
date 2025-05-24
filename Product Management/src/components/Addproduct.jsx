
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Addproduct = () => {
  return (
    <div>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <TextField label="Product Name" variant="filled" />
        <TextField label="Image" variant="filled" />
        <TextField label="Price" variant="filled" />
        <TextField label="Category" variant="filled" />
        <Button variant="contained">ADD</Button>
      </Box>
    </div>
  );
};

export default Addproduct;
