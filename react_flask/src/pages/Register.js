import React from 'react';
import './wrapper.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from '@material-ui/core';


function Register({ setCredentials, ...props }) {
  const [loading, setLoading] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[2].value;
    const username = event.target[4].value;
    if (!email || !password || !username) return;
    
    // setLoading(true);
  
    axios.post(`/auth/register`, { email, password, username })
      .then((response) => {
        console.log(response);
        setCredentials(response.data);
        props.history.push('/dashboard');
      })
      .catch((err) => { })
      .finally(() => setLoading(false));
    }
  

  return(
    <Container component="main" maxWidth="sm">
      <Box boxShadow={1}>
        <Typography component="h1" variant="h2">
          Register
        </Typography>
        {
          loading
            ? <div className="wrapper"></div>
            : <form noValidate onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                type="text"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="username"
                label="username"
                type="text"
                id="username"
                autoFocus
              />
             
              <Button type="submit" fullWidth variant="contained" color="primary">
                Sign In
                </Button>
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <br />
                  <Link href="/" variant="body1">
                    {"Already have an account? Login!"}
                  </Link>
                </Grid>
              </Grid>
            </form>
        }
      </Box>
    </Container>
  );
}
export default Register;
Register.propTypes = {
  setCredentials: PropTypes.func.isRequired
}
