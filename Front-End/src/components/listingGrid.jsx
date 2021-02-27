import { makeStyles } from '@material-ui/core';
import React from 'react';
import {
    Grid
} from '@material-ui/core';
import CustomCard from './customCard';


const useStyles = makeStyles(() => ({

}))

function ListingGrid({className, ...rest}){
    const classes = useStyles();
    return(
        <Grid>
            <CustomCard />
        </Grid>
    )
}

export default ListingGrid;