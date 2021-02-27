import React, {Component} from "react";
import {
    Box,
    InputBase,
    makeStyles,
    Toolbar,
    Typography
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(() => ({

    root:{
        backgroundColor: '#cccc'
    },
    toolBar: {
        backgroundColor: '#ffff',
        height: '100px'
    },
    logoText :{
        fontSize: 38,
        fontWeight: 'bold',
        color: 'black'
    },
    inputRoot: {
        top: 10,
        borderRadius: '15px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor:'#grey',
        width: '230px',
        height: '40px'
      },
      inputInput: {
        padding: '1, 1, 1, 1',
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em)`,
        width: '100%',
      },
      search: {
          position: 'relative',
          top: -23,
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
      }
})); 

function Header({className, ...rest}){
    const classes = useStyles();
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
                    </Toolbar>
            </header>
        </div>
    );

}

export default Header;