import React from 'react';
import {
    makeStyles,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    Button,
    CardActions,
    Menu,
    MenuItem
} from '@material-ui/core';
import Image from '../images/House.jpg'
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';



const useStyles = makeStyles({
    root: {
      maxWidth: 320,
      minWidth: 320,
    },
    media: {
      height: 140,
    },
  });

function CustomCard(props){
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
      if (anchorEl !== event.currentTarget) {
        setAnchorEl(event.currentTarget);
      }
    }
  
    function handleClose() {
      setAnchorEl(null);
    }

    const [open, setOpen] = React.useState(true);

    const handleClick1 = () => {
      setOpen(!open);
    };

    return(
        <div>
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
        />
        <CardContent>
          <Typography align='left' variant="h5" component="h2">
            {"$ "}{props.price}
          </Typography>
         
          <Typography align='left' variant="body2" color="textSecondary" component="p">
            {props.rooms}{" "}{props.baths}
          </Typography>
          <Typography align='left' variant="body2" color="textSecondary" component="p">
          {props.address}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" 
        aria-owns={anchorEl ? "simple-menu" : undefined}
                        aria-haspopup="true"
                        onMouseOver={handleClick}>
          Group
        </Button>
      </CardActions>
    </Card>

                    <Menu
                        style={{ marginTop: 50, marginLeft: 5}}
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        MenuListProps={{ onMouseLeave: handleClose }}>


        <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Group Members
        </ListSubheader>
      }
    >
      <ListItem >
        <ListItemIcon>
          <EmojiPeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Person 1"  style={{paddingRight: 10}}/>
        <ListItemText primary="Cleanliness: 4/5" style={{paddingRight: 10}}/>
        <ListItemText primary="Hobbies: " style={{paddingRight: 5}}/>
        <ListItemText primary={""} />
      </ListItem>
    
     
    </List>
        </Menu>
        </div>
    )
}

export default CustomCard