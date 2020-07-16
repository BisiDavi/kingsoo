import React, { useState } from 'react';
import { Layout } from '../../../import';
import {
  Grid, makeStyles, Typography, Paper, RadioRadioGroup,
  FormControlLabel, FormControl, FormLabel,
} from '@material-ui/core';

const useStyle = makeStyles({
  root: {
    height: '100vh'
  },
  title: {

  }
});


const ImportClearance1 = () => {
  const classes = useStyle()
  const [value, setValue] = useState('Sea');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Layout>
      <Typography className={classes.adminBodyText} variant="h4">Import Custom Clearance</Typography>
      <Paper>
        <Grid container justify="space-around" className={classes.radioButtonGroup}>
          <Grid item>
            <Typography className={classes.title} variant="h6">Sea</Typography>
          </Grid>
          <FormControl component="fieldset">
            <FormLabel component="legend">Sea</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
              <FormControlLabel value="Sea" control={<Radio />} label="Sea" />
              <FormControlLabel value="Air" control={<Radio />} label="Air" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid container justify="space-around" className={classes.inputGroup}>
          <Grid item>
            <Typography className={classes.title} variant="h6">SCAC</Typography>
          </Grid>
          <Grid item>
          </Grid>
          <Grid item>
          </Grid>
        </Grid>
        <Grid container justify="space-around" className={classes.inputGroup}>
          <Grid item>
            <Typography className={classes.title} variant="h6">B/L</Typography>
          </Grid>
          <Grid item>
          </Grid>
          <Grid item>
          </Grid>
        </Grid>
        <Grid container justify="space-around" className={classes.client}>
          <Grid item>
            <Typography className={classes.title} variant="h6">Client</Typography>
          </Grid>
          <Grid item>
          </Grid>
          <Grid item>
          </Grid>
        </Grid>
        <Grid container justify="space-around" className={classes.radioButtonGroup}>
          <Grid item>
            <Typography className={classes.title} variant="h6">Type of Freight</Typography>
          </Grid>
          <Grid item>
          </Grid>
          <Grid item>
          </Grid>
        </Grid>
      </Paper>
    </Layout>
  )
}

export default ImportClearance1;
