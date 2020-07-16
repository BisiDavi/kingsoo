import React from 'react';
import { AuthenticationBanner } from '../../import/.';
import Form from '../../components/form';
import { CssBaseline, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


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

const loginValues = ["Username", "Password"];

const LoginData = <Form myFormInput={loginValues} />


const Login = () => {
  const classes = useStyles();

  return (
    <Grid container component="main" className="root">
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      {LoginData}
    </Grid>
  )
}

export default Login
