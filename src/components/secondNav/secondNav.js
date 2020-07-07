import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

import '../secondNav/secondNav.css';



const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    color: 'white',
    backgroundColor: '#303030',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
    fontFamily: 'Oxygen',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button id='mySectionButton' onClick={handleClickOpen}>
        {props.title}
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Instrument Area Template
            </Typography>            
          </Toolbar>
        </AppBar>
        <h1 id='bigAreaDialogText'>This is an Instrument Area. Here you would find all the categories of the product. </h1>
      </Dialog>
    </div>
  );
}


const Transition2 = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button id='mySectionButton' onClick={handleClickOpen}>
        {props.title}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition2}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <h3 id="littleDialogTitle">{"Instrument Section"}</h3>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" style={{fontFamily: 'Oxygen'}}>
            Here you would find a specific section of an instrument.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="gray" style={{textTransform: 'none'}}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}



class SecondNav extends React.Component {  
  render() {
    return (
      <div className='bothSecondNav'>
        <div className='secondNav'>
          <nav className="nav">
            <ul className="nav__menu">
              <li className="nav__menu-item">
                <a href='#/'><FullScreenDialog title='Guitars' /></a>
                <SubmenuGuitar />
              </li>
              
              <li className="nav__menu-item">
                <a href='#/'><FullScreenDialog title='Bass' /></a>
                <SubmenuBass />
              </li>
              <li className="nav__menu-item">
                <a href='#/'><FullScreenDialog title='Piano' /></a>
                <SubmenuPiano />
              </li>

              <li className="nav__menu-item">
                <a href='#/'><FullScreenDialog title='Drums' /></a>
                <SubmenuDrums />
              </li>
              <li className="nav__menu-item">
                <a href='#/'><FullScreenDialog title='DJ' /></a>
              </li>

              <li className="nav__menu-item">
                <a href='#/'><FullScreenDialog title='Brass' /></a>
                <SubmenuBrass />
              </li>
              <li className="nav__menu-item">
                <a href='#/'><FullScreenDialog title='Studio' /></a>
              </li>
              <li className="nav__menu-item">
                <a href='#/'><FullScreenDialog title='Software' /></a>
                <SubmenuSoftware />
              </li>
              <li className="nav__menu-item">
                <a href='#/'><FullScreenDialog title='Accessories' /></a>
              </li>
              <li className="nav__menu-item">
                <a href='#/'><FullScreenDialog title='Cases' /></a>
              </li>
            </ul>
          </nav>
        </div>  
        <div className='secondNavLittle'>
          <ul className='threeLittleSections'>
            <li>
              <FullScreenDialog title='Modern' />
            </li>
            <li>
              <FullScreenDialog title='Classical' />
            </li>
            <li>
              <FullScreenDialog title='Studio' />
            </li>
            <li>
              <FullScreenDialog title='Accessories' />
            </li>
          </ul>
        
        
        
        
        
        </div>
      </div>
    )
  }
}


class SubmenuGuitar extends React.Component {
  render() {
    return (
      <ul className="nav__submenu">
        <li className="nav__submenu-item ">
          <a href='#/'><AlertDialogSlide title='Electric'  /></a>
        </li>
        <li className="nav__submenu-item ">
          <a href='#/'><AlertDialogSlide title='Acoustic' /></a>
        </li>
        <li className="nav__submenu-item ">
          <a href='#/'><AlertDialogSlide title='Classical' /></a>
        </li>
      </ul>
    )
  }
}





class SubmenuBass extends React.Component {
  render() {
    return (
      <ul className="nav__submenu">
        <li className="nav__submenu-item ">
          <a href='#/'><AlertDialogSlide title='Electric' /></a>
        </li>
        <li className="nav__submenu-item ">
          <a href='#/'><AlertDialogSlide title='Acoustic' /></a>
        </li>
        
      </ul>
    )
  }
}

class SubmenuDrums extends React.Component {
  render() {
    return (
      <ul className="nav__submenu">
        <li className="nav__submenu-item ">
          <a href='#/'><AlertDialogSlide title='Electric' /></a>
        </li>
        <li className="nav__submenu-item ">
          <a href='#/'><AlertDialogSlide title='Acoustic' /></a>
        </li>
        <li className="nav__submenu-item ">
          <a href='#/'><AlertDialogSlide title='Cymbals' /></a>
        </li>
        <li className="nav__submenu-item ">
          <a href='#/'><AlertDialogSlide title='Sticks' /></a>
        </li>
        
      </ul>
    )
  }
}

class SubmenuBrass extends React.Component {
  render() {
    return (
      <ul className="nav__submenu">
        <li className="nav__submenu-item ">
          <a href='#/'><AlertDialogSlide title='Saxophones' /></a>
        </li>
        <li className="nav__submenu-item ">
          <a href='#/'><AlertDialogSlide title='Trumpets' /></a>
        </li>
        <li className="nav__submenu-item ">
          <a href='#/'><AlertDialogSlide title='Clarinets' /></a>
        </li>
        <li className="nav__submenu-item ">
          <a href='#/'><AlertDialogSlide title='Trombones' /></a>
        </li>
        <li className="nav__submenu-item ">
          <a href='#/'><AlertDialogSlide title='Oboes' /></a>
        </li>
        <li className="nav__submenu-item ">
          <a href='#/'><AlertDialogSlide title='More' /></a>
        </li>
        
      </ul>
    )
  }
}

class SubmenuPiano extends React.Component {
  render() {
    return (
      <ul className="nav__submenu">
        <li className="nav__submenu-item ">
          <a href='#/'><AlertDialogSlide title='Grand Piano' /></a>
        </li>
        <li className="nav__submenu-item ">
          <a href='#/'><AlertDialogSlide title='Keyboard' /></a>
        </li>
        <li className="nav__submenu-item ">
          <a href='#/'><AlertDialogSlide title='MIDI' /></a>
        </li>       
        
      </ul>
    )
  }
}

class SubmenuSoftware extends React.Component {
  render() {
    return (
      <ul className="nav__submenu">
        <li className="nav__submenu-item ">
          <a href='#/'><AlertDialogSlide title='Windows' /></a>
        </li>
        <li className="nav__submenu-item ">
          <a href='#/'><AlertDialogSlide title='Linux' /></a>
        </li>
        <li className="nav__submenu-item ">
          <a href='#/'><AlertDialogSlide title='Mac' /></a>
        </li>       
        
      </ul>
    )
  }
}
export default SecondNav;






