import { makeStyles } from '@material-ui/core';
import React from 'react';
import {
    Grid
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import CustomCard from './customCard';


const useStyles = makeStyles(() => ({

}))

function ListingGrid({className, ...rest}){
    const classes = useStyles();
    return(
        <Grid style={{margin: 15}} spacing={3}>
        <Grid container spacing={3} display="flex" justify="center">
            <Grid item> 
            <CustomCard />

            </ Grid>
            <Grid item> 
            <CustomCard />

            </ Grid>
            <Grid item> 
            <CustomCard />

            </ Grid>
            <Grid item> 
            <CustomCard />
            </ Grid>
        </Grid>
        <Grid container spacing={3} display="flex" justify="center">
            <Grid item> 
            <CustomCard />

            </ Grid>
            <Grid item> 
            <CustomCard />

            </ Grid>
            <Grid item> 
            <CustomCard />

            </ Grid>
            <Grid item> 
            <CustomCard />
            </ Grid>
        </Grid>
        <Grid container spacing={3} display="flex" justify="center">
            <Grid item> 
            <CustomCard />

            </ Grid>
            <Grid item> 
            <CustomCard />

            </ Grid>
            <Grid item> 
            <CustomCard />

            </ Grid>
            <Grid item> 
            <CustomCard />
            </ Grid>
        </Grid>
        <Grid item container display="flex" justify="center" style={{margin: 10}}> 
        <Pagination variant="outlined" count={10} color="primary" />
        </Grid>
        </Grid>
    )
}

export default ListingGrid;