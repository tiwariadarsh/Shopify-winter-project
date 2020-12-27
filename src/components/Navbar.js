import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button'
import styled from 'styled-components'

class Navbar extends Component {
    render(){
        return(
            <NavWrapper className='navbar navbar-expand-sm px-sm-5'>
            <ul className='nav align-items-center'>
            <li className="nav-item mr-5">
              <Link to='/'>
              <i class="fa fa-amazon fa-4x fa_custom" />
              </Link>
            </li>
            <li>
            <Link to='/login'>
              <ButtonContainer>
                  Login
              </ButtonContainer>
          </Link>
            </li>
          </ul>
          <Link to='/cart' className='ml-auto' >
                  <ButtonContainer>
                      <span className='mr-2'>
                      <i className='fa fa-cart-plus' />
                      </span>
                       My Cart
                  </ButtonContainer>
              </Link>
          </NavWrapper>
        );
    }
}
 
const NavWrapper = styled.nav`
background : #009ffd ;
.nav-link {
    color : white ;
    font-size : 1.3rem;
}
`;

export default Navbar