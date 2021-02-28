import React, {Component} from "react";
import {
    Box,
    InputBase,
    makeStyles,
    Toolbar,
    Menu,
    MenuItem,
    Typography
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import TocIcon from '@material-ui/icons/Toc';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles(() => ({

    root:{
        backgroundColor: '#cccc'
    },
    toolBar: {
        backgroundColor: '#ffff',
        height: '80px'
    },
    logoText :{
        fontSize: 38,
        fontWeight: 'bold',
        color: 'black'
    },
    inputRoot: {
        top: 15,
        borderRadius: '15px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor:'#grey',
        width: '230px',
        height: '40px'
      },
      inputInput: {
        padding: '1, 1, 1, 1',
        paddingLeft: `calc(1em)`,
        width: '100%',
      },
      search: {
          position: 'relative',
          top: -18,
          left: 190,
          width: 27,
          height: 27,
          borderRadius: '50%',
          backgroundColor: 'pink'
      },
      logo: {
          height: 50,
          width: 50,
          backgroundColor: 'pink',
          borderRadius: '50%',
      },
      container: {
          display: 'flex',
          gap: '10px',
          position: 'relative',
          left: '150px  '
      },
        container2:{
        backgroundColor: '#C4C4C4',
        height: '50px',
        width: '125px',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 30,
        marginRight: -500,
        marginLeft: 300
    },
 
})); 

function Header({className, ...rest}){
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
      if (anchorEl !== event.currentTarget) {
        setAnchorEl(event.currentTarget);
      }
    }
  
    function handleClose() {
      setAnchorEl(null);
    }
    return(
        <div>
            <header>
                    <Toolbar className={classes.toolBar}>
                        <Box flexGrow={0.38 } className={classes.container}>
                        <div className={classes.logo}></div>
                            <Typography className={classes.logoText}>
                                InternZip
                            </Typography>
                        </Box>
                        <Box>

                            <InputBase placeholder="Search by zip code"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                              }}>
                            </InputBase>
                            <div className={classes.search}>
                                <SearchIcon />                            
                            </div>

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
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>

                    </Toolbar>
            </header>
        </div>
    );

}

export default Header;