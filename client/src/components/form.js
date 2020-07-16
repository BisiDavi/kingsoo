import React from 'react';
import {
  Avatar, Button, TextField, FormControlLabel,
  Checkbox, Link, Paper, Grid, Typography
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Form(props) {
const classes = useStyles();

const myFormInput = props.myFormInput;
const formData = myFormInput.map((item) => (
  <TextField
    key={item}
    variant="outlined"
    margin="normal"
    required
    fullWidth
    id={item}
    label={item}
    name={item}
    autoComplete={item}
    size="small"
    autoFocus
  />
))

return (
  <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
        </Typography>
      <form className={classes.form} noValidate>
        
        {formData}
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign In
        </Button>
        <Grid container>        
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
                </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  </Grid>
)
}