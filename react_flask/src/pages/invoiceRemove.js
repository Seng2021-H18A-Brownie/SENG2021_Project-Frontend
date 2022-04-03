import React, { useState } from 'react';
import './wrapper.css';
import axios from 'axios';
import './wrapper.css';

import Credentials from '../Credentials';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@material-ui/core';

function InvoiceRemove() {
  const [removed, setRemoved] = React.useState(false);

  const tmp = React.useContext(Credentials);
  
  function handleSubmit(event) {
    event.preventDefault();

    const invoice_id = event.target[0].value;
    console.log(invoice_id);
    if (!invoice_id) return;
    

    const token = tmp.replace(/['"]+/g, '');
    axios.delete(`/invoices/remove`, {
      data: {
        token: `${token}`,
        invoice_id: `${invoice_id}`
      },
    }) 
    .then(() => {
      setRemoved = true;
      // console.log(response.data);
    })
    .catch((err) => { });
    } 

  return(
    <Container component="main" maxWidth="lg">
      <Box boxShadow={1}>
        <Typography component="h1" variant="h2">
          Remove Invoice
        </Typography>
        {
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="invoice_id"
              name="invoice_id"
              label="Invoice ID"
              type="text"
              autoFocus 
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
            Submit
            </Button>
            <div className="removed">{removed ? <p>Status: {removed}</p> : null}</div>
          </form>

            
        }
      </Box>
    </Container>
  );
}

export default InvoiceRemove;
