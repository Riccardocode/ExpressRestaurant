import styles from './Header.module.css';
import React from 'react';
import HeaderImg from '../../assets/Header.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) =>{
    return(
        <React.Fragment>
            <header className={styles.header}>
                <h1>Express Restaurant</h1>
               <HeaderCartButton onClick = {props.onShowCart}/>
            </header>
            <div className={styles['main-image']}>
                <img src={HeaderImg}/>
            </div>
        </React.Fragment>

    );
};

export default Header;
