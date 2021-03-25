import React, { useEffect } from "react";

import { useSelector, useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'

// Import Css
import './header.css'

// Matierial Icons
import MenuIcon from "@material-ui/icons/Menu";
import CallEndIcon from "@material-ui/icons/CallEnd";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

// Images
import instagram from './images/instagram.png'
import facebook from "./images/facebook.png";

const Header = () => {
  const stateMenu = useSelector(({stateMenu}) => stateMenu)

  const navigationActive = useSelector(({ navigationActive }) => navigationActive);

  console.log( navigationActive )
  const dispatch  = useDispatch()

  const changeStateMenu = () => {
    let currentState = null
    currentState = stateMenu === false ? currentState = true : currentState = false
    dispatch({
      type: 'SET_STATE_MENU',
      state: currentState
    })
  }
  return (
    <div className="header">
      {/* Mobile Header */}
      <div className="mobile__header">
        <div className="header__left">
          <div className="phone">
            <CallEndIcon className="call__end__icon" />
            <span>999900000</span>
          </div>
        </div>
        <div className="header__middle">
          <Link
            to="/"
            className="title"
            style={navigationActive === "home" ? { color: "#e6ac42" } : {}}
          >
            Delish
          </Link>
        </div>
        <div className="header__right">
          <div className="icon__menu" onClick={changeStateMenu}>
            <MenuIcon className="menu__icon" />
          </div>
          {stateMenu === !true ? null : (
            <div className="menu__options" onClick={changeStateMenu}>
              <ul>
                <li>
                  <Link
                    to="/menu"
                    className={
                      navigationActive === "menu" ? "mobile__active" : null
                    }
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={
                      navigationActive === "about" ? "mobile__active" : null
                    }
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Header */}
      <div className="desktop__header">
        <div className="header__left">
          <Link
            to="/"
            className="title"
            style={navigationActive === "home" ? { color: "#e6ac42" } : {}}
          >
            Delish
          </Link>
        </div>
        <div className="header__middle">
          <ul>
            <li>
              <Link
                to="/"
                className={
                  navigationActive === "home" ? "descktop__active" : null
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className={
                  navigationActive === "menu" ? "descktop__active" : null
                }
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={
                  navigationActive === "about" ? "descktop__active" : null
                }
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="header__right">
          <div className="phone">
            <CallEndIcon className="call__end__icon" />
            <span>999900000</span>
          </div>
          <div className="socialmedia">
            <a href="#">
              <img src={instagram} alt="" />
            </a>
            <a href="#">
              <img src={facebook} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
