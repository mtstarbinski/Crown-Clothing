import React from "react";
import { Link } from "react-router-dom";
import "./Header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from 'react-redux';
import CartIcon from "../Cart-Icon/CartIcon";
import CartDropdown from "../Cart-Dropdown/CartDropdown";
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selector";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to='/signin'>SIGN IN</Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null :
        <CartDropdown />
      }
    </div>
  );
};

const mapStateToProp = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProp)(Header);
