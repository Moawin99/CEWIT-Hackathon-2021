import { makeStyles } from '@material-ui/core';
import React from 'react';
import {
    Grid
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import CustomCard from './customCard';
import {listings} from '../mockData/data';
import {listings2} from '../mockData/data';
import {listings3} from '../mockData/data';



const useStyles = makeStyles(() => ({

}))

function ListingGrid({className, ...rest}){
    const classes = useStyles();
    return(
        <Grid style={{margin: 15}} spacing={3}>
        <Grid container spacing={3} display="flex" justify="center">
        {listings.map((data) => {
            return(
            <Grid item> 
            <CustomCard
            price={data.price}
            baths={data.baths}
            address={data.address}
            rooms={data.rooms}
            image={data.image}
            />
            </ Grid>
            );
        })}
        </Grid>
        <Grid container spacing={3} display="flex" justify="center">
        {listings2.map((data) => {
            return(
            <Grid item> 
            <CustomCard
            price={data.price}
            baths={data.baths}
            address={data.address}
            rooms={data.rooms}
            image={data.image}
            />
            </ Grid>
            );
        })}
        </Grid>
        <Grid container spacing={3} display="flex" justify="center">
        {listings3.map((data) => {
            return(
            <Grid item> 
            <CustomCard
            price={data.price}
            baths={data.baths}
            address={data.address}
            rooms={data.rooms}
            image={data.image}
            />
            </ Grid>
            );
        })}
        </Grid>
        <Grid item container display="flex" justify="center" style={{margin: 10}}> 
        <Pagination variant="outlined" count={10} color="primary" />
        </Grid>
        </Grid>
    )
}

export default ListingGrid;