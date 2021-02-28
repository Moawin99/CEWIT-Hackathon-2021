import { makeStyles } from '@material-ui/core';
import React from 'react';
import {
    Grid,
    Typography
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import CustomCard from './customCard';
import {sanFrancisco} from '../mockData/data';
import {newYork} from '../mockData/data';
import {seattle} from '../mockData/data';



const useStyles = makeStyles(() => ({

}))

function ListingGrid({className, ...rest}){
    const classes = useStyles();
    return(
        <Grid style={{margin: 15}} spacing={3}>
        <Typography style={{display: 'flex', marginLeft: 30, fontSize: 34}}>
            San Francisco
        </Typography>
        <hr width="96%"/>
        <Grid container spacing={3} display="flex" justify="center">
        {sanFrancisco.map((data) => {
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
        <Typography style={{display: 'flex', marginLeft: 30, fontSize: 34, marginTop: 30}}>
            New York City
        </Typography>
        <hr width="96%"/>
        <Grid container spacing={3} display="flex" justify="center">
        {newYork.map((data) => {
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
        <Typography style={{display: 'flex', marginLeft: 30, fontSize: 34, marginTop: 30}}>
            Seattle
        </Typography>
        <hr width="96%"/>
        <Grid container spacing={3} display="flex" justify="center">
        {seattle.map((data) => {
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