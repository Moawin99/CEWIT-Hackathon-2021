import React from 'react';
import {
    Chip, makeStyles
} from '@material-ui/core';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import PetsIcon from '@material-ui/icons/Pets';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

const useStyles = makeStyles(() => ({
    chip:{
        maxWidth: '200px'
    }
}));

function ActivityChip(props, {className, ...rest}){
    const classes = useStyles();
    if(props.feature === 'food'){
        return(
            <Chip className={classes.chip} label="Restaurants Near By" icon={<FastfoodIcon />} size="medium" color="secondary" />
        );
    }
    else if(props.feature === "pets"){
        return(
            <Chip label="Pets Allowed" className={classes.chip} icon={<PetsIcon />} size="medium" color="secondary"/>
        );
    }
    else if(props.feature === "covid"){
        return(
            <Chip label="COVID Package Included" className={classes.chip} size="medium" icon={<VerifiedUserIcon />} color="secondary" />
        );
    }
    else if(props.feature === "view"){
        return(
            <Chip label="Great SightSeeing" className={classes.chip} size="medium" icon={<CameraAltIcon />} color="secondary" />
        );
    }
    else{
        return(
            <Chip label={props.feature} className={classes.chip} size="medium" color="secondary" />
        )
    }
}

export default ActivityChip;