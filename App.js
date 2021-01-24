import React, {useEffect} from "react";
import './App.css';
import Header from './Header';
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from"./Checkout";
import Login from "./Login";
import Orders from "./Orders";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51I7Zy0JLAoA9L4fPCOCU1Hfvx63PWQX8I2Rj2nFqnhNTZFkxfAOIGNNvoJnUY119h7stKKnQlbq9PH7V2xPJjsIG00ckpa1CN4");

function App() {
  const [{}, dispatch] =useStateValue();

  useEffect(()=>{
    //this will only run once when the app component loads
    
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER  IS >>>', authUser);    //when auth changes it will give the username

      if (authUser) {
        //the user just ooged in /  the user was logged in
        dispatch({
          type: 'SET_USER',
          user:authUser   // it will shoot the new user into the data layer
        })
      } else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])


  return (
    //BEM
    <Router>
      <div className="App">
        
        
        <Switch>
          <Route path="/orders">
            <Header/>
            <Orders/>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
        
          <Route path="/payment">
            <Header/>
            <Elements stripe = {promise}>
              <Payment/>
            </Elements> 
          </Route>

          <Route path="/">
            <Header/>
            <Home/>
          </Route>

        </Switch>  
      </div>
    </Router>  
  );
}

export default App;
