import React, {Component} from 'react';
import {
    Box,
    makeStyles,
    Toolbar,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    
    root:{
        backgroundColor: '#cccc'
    },
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
    container:{
        display: 'flex',
        gap: '10px',
        position: 'relative',
        justifyContent: 'center'
    },
    logoText:{
        fontSize: 38,
        fontWeight: 'bold',
        color: '#ffffff'
    }
}))

function ListingHeader({className, ...rest}){
    const classes = useStyles();
    return(
        <div>
            <header>
                <Toolbar className={classes.toolBar}>
                    <Box flexGrow={.38} className={classes.container}>
                        <div className={classes.logo} />
                        <Typography className={classes.logoText}>
                            Internzip
                        </Typography>
                    </Box>

                </Toolbar>
            </header>
        </div>
    )
}

export default ListingHeader;