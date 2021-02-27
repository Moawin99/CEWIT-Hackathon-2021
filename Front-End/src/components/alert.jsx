import React from 'react';
import { makeStyles} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles(() => ({
    container:{
        marginTop: '30px',
        width: '100%'
    }
}))

function InfoAlert({className, ...rest}){
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <Alert severity="info">
                Houses with COVID Packages provide masks and sanitation for the full duration of your stay
            </Alert>
        </div>
    )
}

export default InfoAlert;