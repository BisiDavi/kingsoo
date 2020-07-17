import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function LinkButton(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to={props.link}>
        <Button variant="contained" color="secondary">
          {props.content}
        </Button>
      </Link>
    </div>
  );
}
