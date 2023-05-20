import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import { useContext,useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const [btnIsHigh,setBtnIsHigh] = useState(false);
  const cartCtx = useContext(CartContext);
  const {items} = cartCtx;

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);


  const btnClasses=`${styles.button} ${btnIsHigh ? styles.bump : ''}`;

  useEffect(()=>{
    if(cartCtx.items.length === 0){
        return;
    }
    setBtnIsHigh(true);
    const timer = setTimeout(()=>{
        setBtnIsHigh(false);
    },300);
    return () => {
        clearTimeout(timer);
    };
  },[items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
