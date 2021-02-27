import React, {Component} from 'react';
import {
    Box,
    makeStyles,
    Toolbar,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    
    toolBar:{
        backgroundColor: '#414141',
        height: '100px',
        display: 'flex',
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
        position: 'relative',
        justifyContent: 'center',
        left: 90 
    },
    logoText:{
        fontSize: 38,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    container2:{
        display: 'flex',
        position: 'relative',
        backgroundColor: '#606060',
        borderRadius: '10%',
        padding: '10px',
        left: 360
    },
    userText:{
        fontSize: 28,
        fontWeight: 'bold',
        color: "white"
    }
}))

function ListingHeader({className, ...rest}){
    const classes = useStyles();
    return(
        <div>
            <header>
                <Toolbar className={classes.toolBar}>
                    <Box flexGrow={.38} className={classes.container1}>
                        <div className={classes.logo} />
                        <Typography className={classes.logoText}>
                            Internzip
                        </Typography>
                    </Box>
                    <Box className={classes.container2}>
                        <Typography className={classes.userText}>
                            Welcome User!
                        </Typography>

                    </Box>

                </Toolbar>
            </header>
        </div>
    )
}

export default ListingHeader;