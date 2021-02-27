import React from 'react';
import {
    makeStyles,
    Typography,
    Paper,
    Button
} from '@material-ui/core';
import House from '/mnt/c/Users/Mark/Documents/gitProjects/CEWIT-Hackathon-2021/Front-End/src/images/House.jpg';
import ActivityChip from './activityChip';

const useStyles = makeStyles(() => ({
    container:{
        display: 'flex',
        flexDirection: 'row',
        padding: '2em 12em 0 12em'
    },
    image:{
        height: '40em',
        borderRadius: '5%'
    },
    addressText:{
        fontSize: 28,
        fontWeight: 'bold',
        paddingLeft: '1em'
    },
    addressContainer:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    list:{
        listStyle: 'none'
    },
    listItems:{
        margin: '10px 0'
    },
    container3:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    payPaper:{
        borderRadius: '5%',
        height: '8em',
    }
    }))

function ListingDetails(props, {className, ...rest}){
    const classes = useStyles();
    const features = ["covid", "food", "view", "pets",];
    return(
        <div className={classes.container}>
            <div>
              <img src={House} className={classes.image} />
            </div>
            <div className={classes.addressContainer}>
                <Typography className={classes.addressText}>
                    Address: {props.street}, {props.city} {props.zipcode}
                </Typography>
                <div className={classes.container3}>
                    <ul className={classes.list}>
                        <h3>Includes</h3>
                        {features.map(feature => (
                            <li className={classes.listItems}>
                            <ActivityChip
                            feature={feature}
                            />
                            </li>
                        ))}
                    </ul> 
                    <Paper elevation={3} className={classes.payPaper}>
                        <h2>${props.price} / mo</h2>
                        <Button variant='contained' color='secondary'>Book</Button>
                    </Paper>
                </div>
                
            </div>
        </div>
    )
}

export default ListingDetails;


