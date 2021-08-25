import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {Avatar, Card, Box, Typography, Divider, Button } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const useStyles = makeStyles((theme) => ({
  cardContainer:{
    width:'220px',
    margin:'auto',
    textAlign:'center',
  },
  avatar:{
    margin:'auto',
  },
  buttons:{
    fontSize:'13px',
    margin:'3px',
  }
}));

const ProfileCard = ({ profile, userProfile, handleAddFriend, handleRemoveFriend }) => {
  const classes = useStyles();

  return (
    <>
    <Box m={3} className={classes.cardContainer} justifyContent={'center'}>
    <Card className={classes.root} >
      <Box m={1} pt={2}>
    <Avatar className={classes.avatar} alt="User Avatar" src={profile.avatar} variant="rounded"/>

        <h4>{profile.name}</h4>
      <Divider/>
      <Box m={1} >
      <Button className={classes.buttons} size="small" variant="outlined" color="secondary" component={Link} to={{
          pathname: '/profile',
          state: {profile}
        }}>Details</Button>
      { !(userProfile?._id === profile._id) && !(userProfile?.friends?.some(eachProfile => eachProfile._id === profile._id)) &&
      <Button className={classes.buttons} size="small" variant="contained" color="secondary" startIcon={<PersonAddIcon />} onClick={() => handleAddFriend(profile._id)}> Friend</Button> 
      }
      { !(userProfile?._id === profile._id) && (userProfile?.friends?.some(eachProfile => eachProfile._id === profile._id)) &&
      <Button className={classes.buttons} size="small" variant="contained" startIcon={<RemoveCircleIcon />}onClick={() => handleRemoveFriend(profile._id)}> Friend</Button> 
      }   
      </Box>
      </Box>
    </Card>
    </Box>
    </>
  );
}
 
export default ProfileCard;
