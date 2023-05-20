import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartModal, setCartModal] = useState(false);

  const showCartHandler = () => {
    setCartModal(true);
  };

  const hideCartHandler = () => {
    setCartModal(false);
  };

  return (
    <CartProvider>
      {cartModal && <Cart onClose = {hideCartHandler}/>}
      <Header onShowCart = {showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
