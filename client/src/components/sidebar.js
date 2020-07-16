import React from 'react';
import { Grid, Typography, Button, makeStyles } from '@material-ui/core';
import { Logo } from '../import/.';
import { zip } from 'lodash';
import HomeIcon from '@material-ui/icons/Home';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';


const useStyle = makeStyles({
  logo: {
    width: '30%',
    margin: 'auto!important',
    display: 'flex',
    padding: '50px 0px 10px 0px',
    borderRadius: '40%'
  },
  sidebarcontent: {
    marginTop: '30px'
  },
  username: {
    color: 'white'
  },
  sidebar: {
    backgroundColor: 'blue',
    background: '#000428',  /* fallback for old browsers */
    background: '-webkit-linear-gradient(to right, #004e92, #000428)',  /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to right, #004e92, #000428)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    height: '100vh'
  },
  sidebarbuttongroup: {
    alignItems: 'flex- start!important',
    marginTop: '-200px',
    display: 'flex',
    justifyContent: 'center',
  },
  sidebarbuttton: {
    width: '100%',
    margin: '5px 0px',
  }
});
const Sidebar = () => {
  const classes = useStyle();

  const sidebarIcons = [<HomeIcon />, <RoomOutlinedIcon />, <ReceiptOutlinedIcon />]
  const sidebarLinks = ["Dashboard", "Tracking", "Reports"]


  const sidebarButton = zip(sidebarIcons, sidebarLinks).map((value) => (
    <Button color={(value[1] === "Dashboard") ? "secondary" : "primary"}
      variant="contained" className={classes.sidebarbuttton} startIcon={value[0]}>
      {value[1]}
    </Button>
  ));

  return (
    <Grid container className={classes.sidebar}>
      <Grid container alignItems="flex-start" className={classes.sidebarcontent}>
        <Grid container direction="column" justify="flex-end" alignItems="center">
          <Grid item>
            <img src={Logo} className={classes.logo} alt="kingsoo logo" />
          </Grid>
          <Grid item>
            <Typography className={classes.username} variant="h6">Jane Doe</Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.sidebarbuttongroup}>
          {sidebarButton}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Sidebar;
