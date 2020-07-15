import React from 'react';
import { Form, AuthenticationBanner } from '../../import';
import { CssBaseline, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const forgotPasswordValues = ["Email"];

const forgotPasswordData = <Form key={item} myFormInput={forgotPasswordValues} />

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
    height: '100vh',
    backgroundPosition: 'center',
  },
}));

const ForgetPassword = () => {
  const classes = useStyles();

  return (
    <Grid container component="main" className="root">
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      {forgotPasswordData}
    </Grid>
  )
}

export default ForgetPassword;
