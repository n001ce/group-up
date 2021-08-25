import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, CssBaseline, Button, Switch, FormControlLabel,Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';

import { Link } from 'react-router-dom'
import SearchForm from '../SearchForm/SearchForm'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    height:'70px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  titleLink:{
    color:theme.palette.secondary.main,
    textDecoration: 'none',
    fontSize: '25px',
  },
  navLink:{
    color:theme.palette.secondary.main,
    textDecoration: 'none',
    fontSize: '18px',
    padding: '10px'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menu:{
    padding:theme.spacing(5),
  }
}));

export default function PrimarySearchAppBar({ user, handleLogout, history, handleTheme }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      className={classes.menu}
    >
      <Box m={2}>
      <MenuItem component={Link} to='' onClick={handleLogout}>Logout</MenuItem>
      <MenuItem component={Link} to='/'>My Profile</MenuItem>
      <FormControlLabel
        control={
          <Switch
            // checked={state.checkedB}
            onChange={handleTheme}
            name="checkedB"
            color="secondary"
          />
        }
        label="Dark Mode"
        labelPlacement="start"
      />
      </Box>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem component={Link} to="/users">
      <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <SupervisedUserCircleOutlinedIcon />
          </IconButton>
            <p>Users</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
      <> 
    <div className={classes.grow}>
    <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} elevation={1}>
        <Toolbar>
        
          <Typography className={classes.titleLink} variant="h6" noWrap component={Link} to='/'>
          Twitch Goose
          </Typography>
          {user? (
          <>
          <div className={classes.grow} />

            <SearchForm 
                history={history}
              />

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button size="medium" color="secondary" component={Link} to="/games">Games</Button>
            <Button size="medium" color="secondary" component={Link} to="/users">Users</Button>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
          </>
        ):(
                    < >
          <div className={classes.grow} />
          <Button size="medium" color="secondary" component={Link} to="/users">Users</Button>
          <Button size="medium" color="secondary" component={Link} to="/signup">Sign Up</Button>
          <Button size="medium" color="secondary" variant="contained" component={Link} to="/login">Log In</Button>
                    </>
         )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
    
      </>
  );
}