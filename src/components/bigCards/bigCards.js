import React from 'react';
import city1 from '../bigCards/city1.png';
import city2 from '../bigCards/city2.png';

import concert from '../bigCards/concert.png';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';


import '../bigCards/bigCards.css';







const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
      fontFamily: 'Porpora',
      textAlign: 'center',
      
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
        <button onClick={handleClickOpen} className="buttonBig" >
          {props.title}
        </button>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
          <AppBar className={classes.appBar} id='fullDialogBar'>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h4" className={classes.title}>
                  Template
              </Typography>            
            </Toolbar>
          </AppBar>
          <div id='textFullDialog'>
              This is just a template. Here you would find a new section of this website.         
          </div>
        </Dialog>
      </div>
    );
  }
  
  
  
  
  
  
  
  
  

export default function BigCards() {
    return (

        <main className="sections">
            <div className='twoBigCards'>
                
                <a href='/#' className="firstBigPic">
                  <div className='textContainer'>
                    <h2 className="titleBigOne">Lorem Ipsum 1</h2>
                    <p className="subBigOne">Aenean velit felis, interdum tristique odio eget, tempor convallis felis. Phasellus et dui purus. Donec vulputate orci sed purus venenatis, a finibus eros tristique.</p>
                  </div>
                    </a>
                    
                <a href='/#' className="secondBigPic">
                    <div className='textContainer'>
                    <h2 className="titleBigOne">Lorem Ipsum 2</h2>
                    <p className="subBigOne">Proin odio neque, mattis eu augue eu, lacinia lacinia augue. Aliquam euismod nibh quis purus euismod bibendum. Proin eleifend ipsum at augue scelerisque, eget malesuada lacus varius. </p>
                    </div>
                </a>

            </div>   
            
            <a href='/#' className='oneBigCard'>                
                <div className="theBigPic">
                    <div className='textContainer'>
                    <h2 className="titleBigOne">Lorem Ipsum 3</h2>
                    <p className="subBigOne">Pellentesque sit amet luctus sem, sit amet mollis libero. Fusce in maximus lacus. Etiam nulla mi, accumsan vel luctus eu, iaculis ut diam. Praesent mollis sollicitudin rhoncus. Ut dictum elit nec elit facilisis ornare. Donec vulputate orci sed purus venenatis, a finibus eros tristique.</p></div>
                </div>
            </a>
           
        </main>



    );


}





/* <div className='allBigCardsSection'>
            
        
        
<div className='twoBigCards'>

        <img src={city1} alt='/#' id='firstBigPic'></img>
        <img src={city2} alt='/#' id='secondBigPic'></img>
    
    
    </div>

    <div className='oneBigCard'>
        <img src={concert} alt='/#' id='theBigPic'></img>
    
    </div>




      
   


</div> */