import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../../logo.svg';
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        
        
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Store
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer style={{border: 'none'}}>
            
            <ShoppingCartIcon style={{color: 'white'}}/>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: #303030;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
