import React from 'react';
import {
    Box,
    makeStyles,
    Typography,
    MenuItem,
    FormControl,
    Select,
    InputLabel,

} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    container:{
        display: 'flex',
        backgroundColor: '#ebf0ff',
        position: 'relative',
        height: '75px',
        flexDirection: 'row'
    },
    sortContainer:{
        display: 'flex',
        justifyContent: 'space-around',
        position: 'relative',
        flexDirection: 'row'
    },
    sortText:{
        fontSize: 28,
        fontWeight: 'bold'
    },
    verticalLine:{
        width: '4px',
        height: '40px',
        borderRight: '2px solid black'
        //for now this is not implemented bc adding a div adds it to a new line
    }
}))

function Sort({className, ...rest}){
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <Box>
                <Typography className={classes.sortText}>
                    Sort :
                </Typography>
                <FormControl variant="outlined">
                    <InputLabel id="demo-simple-select-outlined-label">Price</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem>> $1000</MenuItem>
                    <MenuItem>$1001 - $1500</MenuItem>
                    <MenuItem>$1501 - $2000</MenuItem>
                    <MenuItem>$2000+</MenuItem>
                    </Select>
                </FormControl>

                <FormControl variant="outlined">
                    <InputLabel id="demo-simple-select-outlined-label">Groups</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem>Filler data</MenuItem>
                    <MenuItem>Filler data</MenuItem>
                    <MenuItem>Filler data</MenuItem>
                    <MenuItem>Filler data</MenuItem>
                    </Select>
                </FormControl>

                <FormControl variant="outlined">
                    <InputLabel id="demo-simple-select-outlined-label">Location</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem>San Francisco</MenuItem>
                    <MenuItem>Palo Alto</MenuItem>
                    <MenuItem>Cupertino</MenuItem>
                    <MenuItem>Seattle</MenuItem>
                    </Select>
                </FormControl>

                <Typography className={classes.sortText}>
                    Tags :
                </Typography>
                
            </Box>
        </div>
    )
}

export default Sort;