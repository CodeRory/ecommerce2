import React from 'react';

import '../secondNav/secondNav.css';




class secondNav extends React.Component {  
  render() {
    return (
      <div className='secondNav'>
        <nav className="nav">
          <ul className="nav__menu">
            <li className="nav__menu-item">
              <a>Guitars</a>
              <SubmenuGuitar />
            </li>
            
            <li className="nav__menu-item">
              <a>Bass</a>
              <SubmenuBass />
            </li>
            <li className="nav__menu-item">
              <a>Piano</a>
              <SubmenuPiano />
            </li>

            <li className="nav__menu-item">
              <a>Drums</a>
              <SubmenuDrums />
            </li>
            <li className="nav__menu-item">
              <a>DJ</a>
            </li>

            <li className="nav__menu-item">
              <a>Brass</a>
              <SubmenuBrass />
            </li>
            <li className="nav__menu-item">
              <a>Studio</a>
            </li>
            <li className="nav__menu-item">
              <a>Software</a>
              <SubmenuSoftware />
            </li>
            <li className="nav__menu-item">
              <a>Accessories</a>
            </li>
            <li className="nav__menu-item">
              <a>Cases</a>
            </li>
          </ul>
        </nav>
      </div>  
    )
  }
}


class SubmenuGuitar extends React.Component {
  render() {
    return (
      <ul className="nav__submenu">
        <li className="nav__submenu-item ">
          <a>Electric</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Acoustic</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Classical</a>
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
          <a>Electric</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Acoustic</a>
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
          <a>Electric</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Acoustic</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Cymbals</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Sticks and Drumheads</a>
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
          <a>Saxophones</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Trumpets</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Clarinets</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Trombones</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Oboes</a>
        </li>
        <li className="nav__submenu-item ">
          <a>More</a>
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
          <a>Grand Piano</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Keyboard</a>
        </li>
        <li className="nav__submenu-item ">
          <a>MIDI</a>
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
          <a>Windows</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Linux</a>
        </li>
        <li className="nav__submenu-item ">
          <a>Mac</a>
        </li>       
        
      </ul>
    )
  }
}









export default secondNav;






