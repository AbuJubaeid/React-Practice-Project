import React, { useState } from 'react';
import CartProvider from './Store/CartProvider.js';
import Cart from './components/Cart/Cart.js';
import Header from './components/Layout/Header.js';
import Meals from './components/Meals/Meals.js';

function App() {
  //useState e false dilam karon cart ta amar initially dekhabe na....ami jokhon cart button e click korbo then show korbe....
    const [cartIsShown, setCartIsShown] = useState(false)

    const showCartHandler = () =>{
      setCartIsShown(true)
    }
    const hideCartHandler = () =>{
      setCartIsShown(false)
    }

  return (
    <CartProvider>
      {/* dynamic expression create korte {} r cartIsShown diye target korlam 2 ta function k......jodi cartIsShown true hoy to showCartHandler function call hobe r nahole viseversa..... */}
       {cartIsShown && <Cart onClose={hideCartHandler}/>}
       <Header onShowCart={showCartHandler}/>
       <main>
         <Meals/>
       </main>
    </CartProvider>
  );
}

export default App;
