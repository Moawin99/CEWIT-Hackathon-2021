import React from 'react';
import {
    makeStyles,
    Typography,
    Box,
    Chip
} from '@material-ui/core';
import House from '../images/House.jpg';
import ActivityChip from './activityChip';

const useStyles = makeStyles(() => ({
    container:{
        height: 100,
        display: 'flex',
        flexDirection: 'column',
        padding: '1em 20em 0 20em'
    },
    address:{
        fontSize: 36,
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'flex-start'
    },
    image:{
        height: '650px',
        width: '100%',
        borderRadius: '5%'
    },
    detailText:{ 
        fontSize: 36,
        fontWeight: 'bold'
    },
    arrangeContainer:{
        marginTop: '40em'
    }
}))

function ListingDetails(props, {className, ...rest}){
    const classes = useStyles();
    return(
        <div>
            <div className={classes.container}>
            <Typography className={classes.address}>
                Address: {props.street}, {props.city} {props.zipcode}
            </Typography>
            <img src={House} className={classes.image} />
           </div>
           <div className={classes.arrangeContainer}>
               <Typography className={classes.detailText}>
                    Arrangements
               </Typography>
               <ActivityChip feature="food" />
           </div>
        </div>
    )
}

export default ListingDetails;


