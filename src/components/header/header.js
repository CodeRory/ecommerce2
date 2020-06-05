import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { CSSTransition } from 'react-transition-group';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import '../header/header.css';





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
  title: {      
    flexGrow: 1,
    fontWeight: 'bolder',
    display: 'none',
    width: '40px',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };
  

  return (
    <div className={classes.root} >
      <AppBar position="static" style={{backgroundColor: '#303030'}}>
        <Toolbar style={{border: 'solid', borderColor: 'pink'}}>
          <div className="leftHeader" style={{border: 'solid', borderColor: 'green'}} >      
            <CSSTransition
              in={!isSmallScreen || isNavVisible}
              timeout={350}
              classNames="NavAnimation"
              unmountOnExit
            >
              <nav className="Nav" style={{fontFamily: 'Oxygen'}}>
                <p>Menu</p>
                <p>Services</p>
                <p>Terms</p>
                <p>Contact</p>
              </nav>
            </CSSTransition>
            <button onClick={toggleNav} className="Burger" style={{color: 'white'}}>
              📕
            </button>
          </div>
        
          <Typography className={classes.title} variant="h6" noWrap style={{fontFamily: 'Oxygen', border: 'solid'}}>
            Music Ipsum
          </Typography>

          <div className={classes.search} style={{border: 'solid'}}>
            <div className={classes.searchIcon}>
              <SearchIcon style={{fontFamily: 'Oxygen'}} />
            </div>
            <InputBase
              style={{fontFamily: 'Oxygen'}}
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              />
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
