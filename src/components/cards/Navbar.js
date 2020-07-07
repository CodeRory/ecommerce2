import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="cartBar">        
          <div id="storeBar">
            <Link to="/" id="storeBarText">
              Our offers
            </Link>
          </div>  
          <div id='cartBar'> 
            <Link to="/cart" className="">
              <ButtonContainer style={{border: 'none'}}>            
                <ShoppingCartIcon id='iconCart' />
              </ButtonContainer>
            </Link>       
          </div>
        
        
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
