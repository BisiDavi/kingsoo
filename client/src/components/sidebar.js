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
  username: {
    color: 'white'
  },
  sidebar: {
    backgroundColor: 'blue',
    background: '#000428',  /* fallback for old browsers */
    background: '-webkit-linear-gradient(to right, #004e92, #000428)',  /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to right, #004e92, #000428)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    height: '100vh'
  }
});
const Sidebar = () => {
  const classes = useStyle();

  const sidebarIcons = [<HomeIcon />, <RoomOutlinedIcon />, <ReceiptOutlinedIcon />]
  const sidebarLinks = ["Dashboard", "Tracking", "Reports"]


  const sidebarButton = zip(sidebarIcons, sidebarLinks).map((value) => (
    <Button color={(value[1] === "Dashboard") ? "secondary" : "primary"}
      variant="contained" startIcon={value[0]}>
      {value[1]}
    </Button>
  ));

  return (
    <Grid container className={classes.sidebar}>
      <Grid container direction="column" justify="flex-end"
        alignItems="center">
        <Grid item>
          <img src={Logo} className={classes.logo} alt="kingsoo logo" />
        </Grid>
        <Grid item>
          <Typography className={classes.username} variant="h6">Jane Doe</Typography>
        </Grid>
      </Grid>
      <Grid container>
        {sidebarButton}
      </Grid>
    </Grid>
  )
}

export default Sidebar;
