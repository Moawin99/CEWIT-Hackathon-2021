import React from 'react';
import Header from './components/Header.jsx';
import House from './images/House.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import history from './components/history';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import HouseCard from './images/house1.jpg';

import Tech from './images/big_tech.jpg';
const muiTheme = createMuiTheme({
  overrides: {
      MuiStepIcon: {
          root: {
              color: 'pink', // or 'rgba(0, 0, 0, 1)'
              '&$active': {
                  color: 'pink',
              },
              '&$completed': {
                  color: 'pink',
              },
          },
      },
  }
});

  const useStyles = makeStyles(() => ({
    root:{
      display: "flex",
      maxWidth: 600,
      height: 180
    },
    image:{
        float: 'left',
        width: '70%',
        height: '550px',
        position: 'relative',
        marginTop: '-150px',
        zIndex: -1
    },
    containerRoot: {
      maxWidth: 350,
      paddingLeft: 41,
      paddingRight: 41,
      backgroundColor: '#f7f7f7',
    },
    stepIcon: {
      backgroundColor: "pink"
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
      paddingTop: 30,
      backgroundColor: '#f7f7f7'
    },
    cover: {
      width: 600,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
 
    },
    footer: {
      backgroundColor: "#212121",
      height: "60px",
      position: 'fixed',
      width: '100%',
      bottom: 0
    },
    text:{
      color: 'white',
      fontFamily:  "Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif !important"
    },
    logo: {
      height: 50,
      width: 50,
      backgroundColor: 'pink',
      borderRadius: '50%',
  },
  font:{
    fontFamily:  "Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif !important"

  }
  }));
  
  function getSteps() {
    return ['Enter Location Details', 'Join a rooming group', 'Book at a lower cost'];
  }
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return `Search for housing in your desired internship location. It's as simple
                as entering the desired zip code and browsing the catalog of available
                / potential houses.`;
      case 1:
        return `Choose to split rent with up to 5 other people. Find the right group for you.
                View potential roomate(s) hobbies and cleanliness.`;
      case 2:
        return `With our rent splitting features, you'll be able to save money by rooming with
                others who share your interests. `;
      default:
        return 'Unknown step';
    }
  }

function Home() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleListings = () => {
      history.replace("/listings");
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
    return (
      <div>
        <Header />
        <Grid container>
          <Grid item container>
          <img src={House} className={classes.image}/>
          <div className={classes.containerRoot}>
          <MuiThemeProvider theme={muiTheme}> 
          <Stepper 
          
          activeStep={activeStep} orientation="vertical" className={classes.containerRoot}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel >{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                    {activeStep === steps.length - 1 ? <Button
                    variant="contained"
                    disabled={activeStep === 0}
                    onClick={handleListings}
                    className={classes.stepIcon}
                  >
                    View Listings
                  </Button> :    <Button
                    variant="contained"
                    onClick={handleNext}
                    className={classes.stepIcon}
                  > Next </Button>}
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      </MuiThemeProvider>
          </div>

        </Grid>
        <Grid item display="flex" justify="center" container>
        <Typography style={{fontSize: 36, fontWeight: 'bold'}} className={classes.font}>
          Find housing and meet friends in another city or state.
        </Typography>
        </Grid>
        <Grid item display="flex" justify="center" container>
          <hr width="95%" border="none" color="#b4b4b4" />
        </Grid>

        <Grid item container display="flex" justify="space-evenly">
        <Grid item >
        <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" className={classes.font}>
            Find housing locations within commuting distance of your internship !
          </Typography>
        </CardContent>
   
      </div>
      <CardMedia
        className={classes.cover}
        image={Tech}
      />
    </Card>
        </Grid>
        <Grid item >
        <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" className={classes.font}>
            List your property for a seasonal rent!
          </Typography>
        </CardContent>
   
      </div>
      <CardMedia
        className={classes.cover}
        image={HouseCard}
      />
    </Card>
        </Grid>
        </Grid>
        </Grid>
        <footer className={classes.footer}>

          <Grid container display ="flex" justify="flex-end" style={{marginLeft: -30, marginTop:-1}} spacing={2}>
          <Grid item >
            <div className={classes.logo}></div>
            </Grid>
          <Grid item >
          <Typography className={classes.text}>  
            By: Marcos, Alexis, Mark, Peter
          </Typography>
          <Typography className={classes.text}>
            February 27, 2021
          </Typography>
          </Grid>
          </Grid>
        </footer>
      </div>
    );
  }
  
  export default Home;