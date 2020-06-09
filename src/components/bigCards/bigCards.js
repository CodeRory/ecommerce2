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
        <button onClick={handleClickOpen} className="btn" >
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
                
                <one id="firstBigPic">
                    <h2 className="title">Lorem Ipsum 1</h2>
                    <p className="copy">Aenean velit felis, interdum tristique odio eget, tempor convallis felis. Phasellus et dui purus.</p><FullScreenDialog title='More Information' />
                </one>
                    
                <second className="secondBigPic">
                    
                    <h2 className="title">Lorem Ipsum 2</h2>
                    <p className="copy">Proin odio neque, mattis eu augue eu, lacinia lacinia augue. Aliquam euismod nibh quis purus euismod bibendum. </p><FullScreenDialog title='Subscribe' />
                </second>

            </div>   
            
            <div className='oneBigCard'>                
                <div className="content">
                    <h2 className="title">Lorem Ipsum 3</h2>
                    <p className="copy">Pellentesque sit amet luctus sem, sit amet mollis libero. Fusce in maximus lacus.</p><FullScreenDialog title='Reserve' /></div>
                
            </div>
           
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