import React, { useState } from 'react';
import {
    Box,
    makeStyles,
    Typography,
    MenuItem,
    FormControl,
    Select,
    InputLabel,
    Checkbox,
    FormControlLabel
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    container:{
        display: 'flex',
        backgroundColor: '#ffff',
        position: 'relative',
        height: '75px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottom: '1px solid lightgrey'
    },
    sortContainer:{
        display: 'flex',
        justifyContent: 'space-around',
        position: 'relative',
        flexDirection: 'row',
    },
    sortText:{
        fontSize: 28,
        fontWeight: 'bold',
        display: 'flex',
        gap: 10,
    },
    verticalLine:{
        width: '4px',
        height: '40px',
        borderRight: '2px solid black'
        //for now this is not implemented bc adding a div adds it to a new line
    },
    formControl:{
        margin: '10px',
        minWidth: 120,
    },
    textBox:{
        display: 'none'
    },
    vert: {
        border: 'none',
        borderLeft:    '1px solid hsla(200, 10%, 50%,100)',
        height:         '50px',
        width:          '1px'
    },

}))

function Sort({className, ...rest}){
    const [price, setPrice] = useState();
    const [group, setGroup] = useState();
    const [location, setLocation] = useState();
    const [covidPack, setCovidPack] = useState(true);
    const [isPetAllowed, setIsPetAllowed] = useState(false);
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <Box className={classes.sortContainer}>
                <Typography className={classes.sortText} style={{margin: 'auto', paddingRight: 10, marginLeft: 45}}>
                    Sort
                </Typography>

                <Typography style={{margin: 'auto'}}>
                    <hr className={classes.vert}>
                    </hr>
                </Typography>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Price</InputLabel>
                    <Select>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="> $1000"> $1000</MenuItem>
                    <MenuItem value="$1001-$1500">$1001 - $1500</MenuItem>
                    <MenuItem value="$1501-$2000">$1501 - $2000</MenuItem>
                    <MenuItem value ="$2000+">$2000+</MenuItem>
                    </Select>
                </FormControl>

                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel>Groups</InputLabel>
                    <Select>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem>Filler data</MenuItem>
                    <MenuItem>Filler data</MenuItem>
                    <MenuItem>Filler data</MenuItem>
                    <MenuItem>Filler data</MenuItem>
                    </Select>
                </FormControl>

                <FormControl  variant="outlined" className={classes.formControl}>
                    <InputLabel> Location</InputLabel>
                    <Select>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="San Francisco">San Francisco</MenuItem>
                    <MenuItem value="Palo Alto">Palo Alto</MenuItem>
                    <MenuItem value="Cupertino">Cupertino</MenuItem>
                    <MenuItem value="NYC">NYC</MenuItem>
                    <MenuItem value="Seattle">Seattle</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box className={classes.sortContainer} style={{paddingRight: 30}}>
            <Typography className={classes.sortText} style={{margin: 'auto', paddingRight: 10}}>
                    Tags
                </Typography>

                <Typography style={{margin: 'auto', paddingRight: 10}}>
                    <hr className={classes.vert}>
                    </hr>
                </Typography>
                <FormControlLabel control={<Checkbox/>} label="COVID Package"/>
                <FormControlLabel control={<Checkbox/>} label="Pets Allowed"/>   
            </Box>
        </div>
    )
}

export default Sort;