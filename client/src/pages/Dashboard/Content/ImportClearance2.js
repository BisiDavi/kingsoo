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
  left: {
    marginRight: '120px'
  },
  paper: {
    height: '60vh',
    width: '70vw',
    margin: '10px 0px 0px 40px',
    padding: '35px'
  },
  date: {
    marginTop: '-20px'
  }
});

const ImportClearance2 = () => {
  const classes = useStyle()
  return (
    <Layout>
      <Grid container>
        <Typography className={classes.title} variant="h4">Import Custom Clearance</Typography>
      </Grid>
      <Grid container>
        <Paper className={classes.paper}>
          <Grid container direction="row" alignItems="flex-start" className={classes.radioButtonGroup}>
            <Grid item>
              <Typography className={classes.left} variant="h6">Pre-Alert Date</Typography>
            </Grid>
            <Grid item className={classes.date}>
              <Datepicker />
            </Grid>
          </Grid>
          <Grid container alignItems="flex-start" className={classes.inputGroup}>
            <Grid item>
              <Typography className={classes.left} variant="h6">Shipper</Typography>
            </Grid>
            <Grid item>
              <InputGroup label="Enter name of Shipper" />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Typography className={classes.left} variant="h6">Consignee</Typography>
            </Grid>
            <Grid item>
              <InputGroup label="Enter name of Consignee" />
            </Grid>
          </Grid>
          <Grid container alignItems="flex-start" className={classes.inputGroup}>
            <Grid item>
              <Typography className={classes.left} variant="h6">Form M.Number</Typography>
            </Grid>
            <Grid item>
              <InputGroup label="Enter Form M.Number" />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Typography className={classes.left} variant="h6">Cargo Description</Typography>
            </Grid>
            <Grid item>
              <InputGroup label="Enter Cargo Description" />
            </Grid>
          </Grid>
          <Grid container alignItems="flex-start" className={classes.client}>
            <Grid item>
              <Typography className={classes.left} variant="h6">Estimated Time of Arrival</Typography>
            </Grid>
            <Grid item>
              <MultipleSelect />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Typography className={classes.left} variant="h6">Cargo Destination</Typography>
            </Grid>
            <Grid item>
              <InputGroup label="Cargo Destination" />
            </Grid>
          </Grid>
          <Grid container alignItems="flex-start" className={classes.radioButtonGroup}>
            <Grid item>
              <Typography className={classes.left} variant="h6">Cargo Type</Typography>
            </Grid>
            <Grid item>
              <RadioButtonsGroup value1="Container" value2="Bulk" />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Typography className={classes.left} variant="h6">If Others</Typography>
            </Grid>
            <Grid item>
              <InputGroup label="State Cargo ID" />
            </Grid>
            <Grid item>
              <Typography className={classes.left} variant="h6">Container Number</Typography>
            </Grid>
            <Grid item>
              <InputGroup label="Enter Container Number" />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Typography className={classes.left} variant="h6">Upload Bill of Laden</Typography>
            </Grid>
            <Grid item>
              <FileButton />
            </Grid>
            <Grid item>
              <Typography className={classes.left} variant="h6">Upload Commercial Invoice</Typography>
            </Grid>
            <Grid item>
              <FileButton />
            </Grid>
            <Grid item>
              <Typography className={classes.left} variant="h6">Upload Contract</Typography>
            </Grid>
            <Grid item>
              <FileButton />
            </Grid>
          </Grid>

          <Grid container alignItems="flex-start" className={classes.radioButtonGroup}>
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

export default ImportClearance2;
