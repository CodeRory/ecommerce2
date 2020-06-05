import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { CSSTransition } from 'react-transition-group';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import '../header/header.css';





const useStyles = makeStyles((theme) => ({
  root: {
    /* flexGrow: 1, */
  },
  
  title: {      
    flexGrow: 1,
    fontWeight: 'bolder',
    /* display: 'none', */
    width: '200px',
    overflow: 'hidden',
    textOverflow: 'clip',
    /* [theme.breakpoints.up('sm')]: {
      display: 'block',
    }, */
  },
  search: {
    
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '20%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(0),
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
    padding: theme.spacing(1, 0, 1, 0),
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
        <Toolbar >
          <div className="leftHeader"  >      
            <CSSTransition
              in={!isSmallScreen || isNavVisible}
              timeout={350}
              classNames="NavAnimation"
              unmountOnExit
            >
              <nav className="Nav" style={{fontFamily: 'Oxygen', fontSize:'0.9em'}}>
                <p id='navSections'>Menu</p>
                <p id='navSections'>Services</p>
                <p id='navSections'>Terms</p>
                <p id='navSections'>Contact</p>
                <p id='navSectionsClose' onClick={toggleNav}><ExpandLessIcon /></p>
                
              </nav>
            </CSSTransition>
            <button onClick={toggleNav} className="Menu"  >
              <MenuSharpIcon id='menuIcon' />
            </button>
          </div>
        
          <Typography className={classes.title} variant="h6" noWrap style={{fontFamily: 'Oxygen'}}>
            Music Ipsum
          </Typography>

          <div className={classes.search} id='searchRight'  >
            <div className={classes.searchIcon} >
              <SearchIcon style={{fontFamily: 'Oxygen'}} />
            </div>
            <InputBase
              id='inputSearch'
              style={{fontFamily: 'Oxygen'}}
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search'}}
              />
            </div>
            
          
        </Toolbar>

        <div className={classes.search} id='searchRight2'  >
            <div className={classes.searchIcon} >
              <SearchIcon style={{fontFamily: 'Oxygen'}} />
            </div>
            <InputBase
              id='inputSearch'
              style={{fontFamily: 'Oxygen'}}
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search'}}
              />
          </div>
      </AppBar>
    </div>
  );
}
