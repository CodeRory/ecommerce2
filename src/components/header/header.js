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
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';

import '../header/header.css';




function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button id='navSections' style={{fontFamily: 'Oxygen'}} onClick={handleClickOpen}>
        {props.title}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      <Button onClick={handleClose} color="primary" autoFocus id='buttonClose'>
            <CloseIcon />
          </Button>
      
        <h3 id='dialogTitle'>{props.header}</h3>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" style={{fontFamily: 'Oxygen'}}>
            This is a ecommerce web template. In this area, you would find another section of this website.
          </DialogContentText>
        </DialogContent>
        
      </Dialog>
    </div>
  );
}

/* --------finDelDialog---------------- */



const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  
  title: {      
    flexGrow: 1,
    fontWeight: 'bolder',
    width: '200px',
    overflow: 'hidden',
    textOverflow: 'clip',
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
    const mediaQuery = window.matchMedia("(max-width: 850px)");
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
                <p id='navSections'><AlertDialog title='Menu' header='Menu' /></p>
                <p id='navSections'><AlertDialog title='Services' header='Services' /></p>
                <p id='navSections'><AlertDialog title='Terms' header= 'Terms' /></p>
                <p id='navSections'><AlertDialog title='Contact' header='Contact' /></p>
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
              type='search'
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
              type='search'
              color='white'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ color: 'white'
               }}
              />
          </div>
      </AppBar>
    </div>
  );
}
