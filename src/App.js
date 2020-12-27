import React ,{ Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Cart from './components/Cart';
import Login from './components/Login' ;
import Register from './components/Register' ;
import './Login.css';
import './App.css';
import Productlist from './components/Productlist';

class App extends Component{
  render(){
  return (
    <React.Fragment>
    <Navbar />
     <Switch>
       <Route path='/details' component={Details} />
       <Route path='/cart' component={Cart} />
       <Route path='/login' component={Login} />
       <Route path='/register' component={Register} />
       <Route path='/' component={Productlist} />
     </Switch>
     </React.Fragment>
  );
  }
}

export default App;
