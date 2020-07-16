import React from 'react';
import { AuthenticationBanner } from '../../import/.';
import Form from '../../components/form';
import { CssBaseline, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const signupValues = [
  "First name", "Last name", "Username", "Email", "Password", "Confirm Password"
];

const SignupData = <Form myFormInput={signupValues} />

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${AuthenticationBanner})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    minHeight: '100%',
    backgroundPosition: 'center',
  },
}));

const Signup = () => {
  const classes = useStyles();

  return (
    <Grid container component="main" className="root">
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      {SignupData}
    </Grid>
  )
}

export default Signup
