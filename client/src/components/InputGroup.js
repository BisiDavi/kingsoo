import React from 'react';
import { makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function InputTextField(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-secondary"
        label={props.label}
        variant="outlined"
        color="secondary"
        size="small"
      />
    </form>
  );
}
