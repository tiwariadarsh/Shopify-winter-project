import React, { Component } from 'react'
import {storeProducts , detailProduct} from './Data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
state = {
    products : storeProducts ,
    detailProduct : detailProduct 
};

handelDetail = () => {
console.log("hello from detail")
}

addtoCart = () => {
console.log("Hello from add to cart")
}
    render() {
        return (
          <ProductContext.Provider value={{
              ...this.state ,
              handelDetail : this.handelDetail ,
              addtoCart : this.addtoCart
          }}>
              {this.props.children}
          </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer ;

export {ProductProvider , ProductConsumer} ;