import React from 'react';
import { Layout, RadioButtonsGroup, InputGroup, LinkButton, MultipleSelect } from '../../../import';
import { Grid, makeStyles, Typography, Paper, } from '@material-ui/core';

const useStyle = makeStyles({
  root: {
    height: '100vh'
  },
  title: {
    padding: '10px 20px'
  },
  paper: {
    height: '60vh',
    width: '70vw',
    margin: '10px 0px 0px 40px',
    padding: '35px'
  }
});

const ImportClearance1 = () => {
  const classes = useStyle()

  return (
    <Layout>
      <Grid container>
        <Typography className={classes.title} variant="h4">Import Custom Clearance</Typography>
      </Grid>
      <Grid container>
        <Paper className={classes.paper}>
          <Grid container direction="row" justify="space-around" className={classes.radioButtonGroup}>
            <RadioButtonsGroup value1="Sea" value2="Air" />
          </Grid>
          <Grid container justify="space-around" className={classes.inputGroup}>
            <Grid item>
              <Typography className={classes.title} variant="h6">SCAC</Typography>
            </Grid>
            <Grid item>
              <InputGroup label="Enter SCAC" />
            </Grid>
            <Grid item>
              <Typography className={classes.title} variant="h6">Airline</Typography>
            </Grid>
            <Grid item>
              <InputGroup label="Enter SCAC" />
            </Grid>
          </Grid>
          <Grid container justify="space-around" className={classes.inputGroup}>
            <Grid item>
              <Typography className={classes.title} variant="h6">B/L</Typography>
            </Grid>
            <Grid item>
              <InputGroup label="Enter BIll of Laden" />
            </Grid>
            <Grid item>
              <Typography className={classes.title} variant="h6">W/B</Typography>
            </Grid>
            <Grid item>
              <InputGroup label="Enter BIll of Laden" />
            </Grid>
          </Grid>
          <Grid container justify="space-around" className={classes.client}>
            <Grid item>
              <Typography className={classes.title} variant="h6">Client</Typography>
            </Grid>
            <Grid item>
              <MultipleSelect />
            </Grid>
            <Grid item>
              <Typography className={classes.title} variant="h6">Add New Client</Typography>
            </Grid>
            <Grid item>
              <InputGroup label="Add a new client" />
            </Grid>
          </Grid>
          <Grid container justify="space-around" className={classes.radioButtonGroup}>
            <RadioButtonsGroup legend="Type of Freight" value1="Direct" value2="Transfer" />
          </Grid>

          <Grid container justify="space-around" className={classes.radioButtonGroup}>
            <LinkButton link="/import-custom-clearance-2" content="Next" />
          </Grid>
        </Paper>
      </Grid>
    </Layout >
  )
}

export default ImportClearance1;
