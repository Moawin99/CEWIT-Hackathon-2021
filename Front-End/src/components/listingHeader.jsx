import React, {Component} from 'react';
import TocIcon from '@material-ui/icons/Toc';
import {
    Box,
    makeStyles,
    Toolbar,
    Typography,
    Menu,
    MenuItem
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import history from './history';

const useStyles = makeStyles(() => ({
    
    toolBar:{
        backgroundColor: '#414141',
        height: '100px',
        justifyContent: 'center'
    },
    logo:{
        height:50,
        width:50,
        backgroundColor: 'pink',
        borderRadius: '50%'
    },
    container1:{
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
        position: 'relative',
        left: 90
    },
    logoText:{
        fontSize: 38,
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily:  "Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif !important"

    },
    container2:{
        backgroundColor: '#606060',
        height: '50px',
        width: '125px',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 30,
    },
 
}))

function ListingHeader({className, ...rest}){
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
      if (anchorEl !== event.currentTarget) {
        setAnchorEl(event.currentTarget);
      }
    }

    function handleLogout(){
        history.replace("/");
    }
  
    function handleClose() {
      setAnchorEl(null);
    }
    const classes = useStyles();
    return(
        <div>
            <header>
                <Toolbar className={classes.toolBar}>
                    <Box flexGrow={0.75} className={classes.container1}>
                        <div className={classes.logo} />
                        <Typography className={classes.logoText}>
                            InternZip
                        </Typography>
                    </Box>
                    <Box className={classes.container2}         
                        aria-owns={anchorEl ? "simple-menu" : undefined}
                        aria-haspopup="true"
                        onMouseOver={handleClick}>
                        <Box>
                        <TocIcon style={{ height: 50, width: 70}} color='action'/>
                        </Box>
                        <Box>
                        <AccountCircleIcon style={{ height: 50, width: 30}} color='action'/>
                        </Box>
                    </Box>
                    <Menu
                        style={{ marginTop: 50, marginLeft: 5}}
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        MenuListProps={{ onMouseLeave: handleClose }}>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>

                </Toolbar>
            </header>
        </div>
    )
}

export default ListingHeader;