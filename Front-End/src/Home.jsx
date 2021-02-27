import Header from './components/Header.jsx';
import House from './images/House.jpg';

import {
    makeStyles
  } from '@material-ui/core';
  
  const useStyles = makeStyles(() => ({
    image:{
        width: '100%',
        height: '700px',
        position: 'relative',
        marginTop: '-140px',
        zIndex: -1
    }
  }));
  

function Home() {
    const classes = useStyles();
    return (
      <div className="App">
        <Header />
            <img src={House} className={classes.image}></img>
      </div>
    );
  }
  
  export default Home;