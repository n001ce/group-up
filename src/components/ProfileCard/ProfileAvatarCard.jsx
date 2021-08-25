import React from 'react';
import {Badge,Avatar} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large:{
    width: theme.spacing(15),
    height: theme.spacing(15),
}
}));

export default function ProfileAvatarCard({url,live,name}) {
  const classes = useStyles();
  const newUrl = url.replace('{width}','200').replace('{height}','200')
  console.log(newUrl)
  return (
    <>
    <div className={classes.root}>
      
    {live ? (<StyledBadge
        overlap="circular"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
        <Avatar alt={name} src={newUrl} className={classes.large}/>
      </StyledBadge>) : (
      <Avatar alt={name} src={newUrl} className={classes.large}/>  )}

      
    </div>
    </>
  );
}
