import React, { useState } from 'react';
import {
    makeStyles,
    Typography,
    MobileStepper,
    Button,
    useTheme,
    Divider
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper'
import bedRoom from '../images/bedroom.jpg';
import kitchen from '../images/kitchen.jpg';
import livingRoom from '../images/livingroom.jpg';
import livingRoom2 from '../images/livingroom2.jpg';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ActivityChip from './activityChip';

const pictures = [
    {
        label: 'Bedroom',
        imgPath:bedRoom
    },
    {
        label: 'Kitchen',
        imgPath: kitchen
    },
    {
        label: 'Living Room',
        imgPath: livingRoom
    },
    {
        label: 'Living Room',
        imgPath: livingRoom2
    }
];

const useStyles = makeStyles((theme) => ({
    mainContainer:{
        display: 'flex',
        flexFlow: 'row wrap',
        padding: '1rem 10em 0 10em'
    },
    picContainer:{
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
    },
    root: {
    maxWidth: 400,
    flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        overflow: 'hidden',
        display: 'block',
        width: '100%',
    },
    sellerInfo:{
        display: 'flex',
        flexDirection: 'row'
    },
    bookBox:{
        display: 'flex',
        width: '50%',
        height: '22%',
        flexDirection: 'column',
        padding: '20px',
        border: 'solid 2px lightgray',
        borderRadius: '5%'
    },
    rightContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: '5em'
    },
    infoBox:{
        display: 'flex',
        justifyContent: 'space-between'
    }
    }))

function ListingDetails(props, {className, ...rest}){
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = pictures.length;
    const [features, setFeatures] = useState([]);

    const handleNext = () => {
     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return(
        <div className={classes.mainContainer}>
            <div className={classes.picContainer}>
                <Paper square elevation={0} className={classes.header}>
                    <Typography>{pictures[activeStep].label}</Typography>
                </Paper>
                <img
                className={classes.img}
                src={pictures[activeStep].imgPath}
                alt={pictures[activeStep].label}
                />
                <MobileStepper
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                    Next
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
                }
                backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Back
                </Button>
                }
            />
                <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                   
                        {props.features.map(feature => (
                            <div style={{margin: '0 2px', display: 'inline'}}>
                                <ActivityChip
                                feature={feature}
                                />
                            </div>
                        ))}
                </div>
            <div className={classes.infoBox}>
                <div>
                    <h2 style={{fontSize: '1.5em'}}>Studio at Water Street</h2>
                    <h3>{props.street}, {props.city} {props.zipcode}</h3>
                </div>
                <div>
                <h2 style={{fontSize: '1.5em'}}>${props.price}/mo</h2>
                <div style={{marginTop: '-20px'}}>
                    <h3>Not part of a group?</h3>
                    <Button style={{marginTop: '-10px'}} variant="outlined" color="secondary">Join Group</Button>
                </div>
                </div>
            </div>
            </div>
            <div className={classes.rightContainer} style={{width: '50%'}}>
                <div className={classes.bookBox}>
                    <div className={classes.sellerInfo}>
                        <AccountCircleIcon fontSize="large" />
                        <div>
                           Posted By: Mark Moawad
                        </div>
                    </div>
                    <Divider light />
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <h3>Total:</h3>
                        <h3>${props.price}</h3>
                    </div>
                    <Button style={{width: '100%'}} variant="contained" color="secondary">Book</Button>
                </div>
                <iframe style={{marginTop: '10px', width: '55%', height: '35%'}} className="map" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Palo%20Alto+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"  ></iframe>
                <div>
                </div>
            </div>
        </div>
    );
}

export default ListingDetails;


