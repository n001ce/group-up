import React from 'react';
import {Badge,Avatar, Typography} from '@material-ui/core';
import { makeStyles, withStyles  } from '@material-ui/core/styles';

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
      transform: 'scale(3.4)',
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
  content:{
      width:'5px',
  }
}));

export default function LiveBadge({live,name}) {
  const classes = useStyles();
  return (
    <>
    <div className={classes.root}>
      
    {live ? (<StyledBadge
        overlap="circular"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        variant="dot"
      >
       <div div className={classes.content}></div>
      </StyledBadge>) : (
      <div></div> )}
<Typography variant="h4" >{name}</Typography>
      
    </div>
    </>
  );
}
