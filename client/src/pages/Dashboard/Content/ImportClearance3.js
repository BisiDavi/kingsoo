import React from 'react';
import {
  Layout, RadioButtonsGroup, InputGroup, FileButton,
  LinkButton, MultipleSelect, Datepicker
} from '../../../import';
import { Grid, makeStyles, Typography, Paper, } from '@material-ui/core';

const useStyle = makeStyles({
  root: {
    height: '100vh'
  },
  paper: {
    height: '60vh',
    width: '70vw',
    margin: '10px 0px 0px 40px',
    padding: '35px'
  }
});

const ImportClearance3 = () => {
  const classes = useStyle()
  return (
    <Layout>
      <Grid container>
        <Typography className={classes.adminBodyText} variant="h4">Import Custom Clearance</Typography>
      </Grid>
      <Grid container>
        <Paper className={classes.paper}>
          <Grid container>
            <Typography className={classes.adminBodyText} variant="h4">
              Pre-Arrival Assessment Report (PAAR)
              </Typography>
          </Grid>
          <Grid container direction="row" justify="space-around" className={classes.radioButtonGroup}>
            <Grid item>
              <Typography className={classes.title} variant="h5">
                Date Received
                </Typography>
            </Grid>
            <Grid item>
              <Datepicker />
            </Grid>
          </Grid>
          <Grid container justify="space-around" className={classes.inputGroup}>
            <Grid item>
              <Typography className={classes.title} variant="h6">
                PAAR Numbers
              </Typography>
            </Grid>
            <Grid item>
              <InputGroup label="Enter name of Shipper" />
            </Grid>
            <Grid item>
              <Typography className={classes.title} variant="h6">
                Value
              </Typography>
            </Grid>
            <Grid item>
              <InputGroup label="Enter value" />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Typography className={classes.title} variant="h5">
                Upload PAAR Document
                </Typography>
            </Grid>
            <Grid item>
              <FileButton />
            </Grid>
          </Grid>
          <Grid container>
            <Typography className={classes.title} variant="h5">Assesment Notice</Typography>
          </Grid>
          <Grid container justify="space-around" className={classes.inputGroup}>
            <Grid item>
              <Typography className={classes.title} variant="h5">Date Received</Typography>
            </Grid>
            <Grid item>
              <Datepicker />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Typography className={classes.title} variant="h6">Custom Number</Typography>
            </Grid>
            <Grid item>
              <InputGroup label="Enter Custom Number" />
            </Grid>
            <Grid item>
              <Typography className={classes.title} variant="h6">Value</Typography>
            </Grid>
            <Grid item>
              <InputGroup label="Enter value" />
            </Grid>
          </Grid>
          <Grid container justify="space-around" className={classes.client}>
            <Grid item>
              <Typography className={classes.title} variant="h6">Assessment Number</Typography>
            </Grid>
            <Grid item>
              <InputGroup label="Enter assessment number" />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Typography className={classes.title} variant="h6">Upload Assessment Notice</Typography>
            </Grid>
            <Grid item>
              <FileButton />
            </Grid>
          </Grid>
          <Grid container justify="space-around" className={classes.radioButtonGroup}>
            <Grid item>
              <Typography className={classes.title} variant="h4">Duty Payment Date</Typography>
            </Grid>
            <Grid item>
              <Datepicker />
            </Grid>
            <Grid item>
              <Typography className={classes.title} variant="h4">Bank</Typography>
            </Grid>
            <Grid item>
              <Datepicker />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Typography className={classes.title} variant="h4">Upload Duty Receipt</Typography>
            </Grid>
            <Grid item>
              <FileButton />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Typography className={classes.title} variant="h4">Shipping Company Payment Date</Typography>
            </Grid>
            <Grid item>
              <Datepicker />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Typography className={classes.title} variant="h4">Terminal Charges Payment Date</Typography>
            </Grid>
            <Grid item>
              <Datepicker />
            </Grid>
          </Grid>

          <Grid container justify="space-around" className={classes.ButtonGroup}>
            <Grid item>
              <LinkButton link="/import-custom-clearance-2" content="Previous" />
            </Grid>
            <Grid item>
              <LinkButton link="/import-custom-clearance-3" content="Next" />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Layout >
  )
}

export default ImportClearance3;
