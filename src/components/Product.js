import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Productlist from './Productlist';


class Product extends Component {
    render(){

        const {id , title , img , price , inCart} = this.props.product ;

        return(
          <ProductCard className='col-9 mx-auto col-md-6 col-lg-6 my-3'>
              <div className='card'>
                  <div className='image-container p-5' onClick={() => console.log('chap be')}>
                      <Link to='/details'>
                      <img src={img} alt='product' className='card-img-top' />
                      </Link>
                      <button className='cart-btn' disabled={inCart ? true : false} onClick={()=>{ console.log('CHAP')}}>
                      {
                          inCart ? (
                              <p disabled>
                                 In Cart
                              </p>
                          ) :
                          (
                              <i className='fa fa-cart-plus fa-2x' />
                          )
                      }
                      </button>
                  </div>

                  {/* card-footer */}
                  <div className='card-footer justify-content-between d-flex'>
                   <h4 className='align-self-center mb-0'>
                       {title}
                    </h4>
                       <h4 className=' mb-0 font-italic'>
                        <span className='mr-1'>
                            $
                        </span>
                        {price}
                       </h4>
                  </div>
              </div>
          </ProductCard>
        );
    }
}

export default Product


const ProductCard = styled.div`
.card{
    border-color : var(--lightBlue); ;
    transition : all 0.4s linear ;
}
.card-footer {
    background : black ;
    color : white ;
    border-top : transparent ;
    transition : all linear ;
}
&:hover {
    .card{
        border : 0.1rem rgb(0,0,0,0.3);
        box-shadow : 2px 2px 5px 0px rgb(0,0,0,0.3);
    }
    .card-footer {
        background : var(--lightBlue);
        color :  black ;
    }
}
.cart-btn {
    position : absolute ;
    top : 0 ;
    right : 0 ;
     padding : 0.5rem 0.5rem;
    background : orange ;
    color : white;
    border-radius : 0rem 0rem 0rem 1rem;
}
`;