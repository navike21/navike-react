import React, { Component } from 'react';

import {
  Route,
  Link
} from "react-router-dom";

import Logo from "../images/logo.svg";

function MenuLink({ label, to, active }) {
  return (
      <Route
        path={to}
        exact={active}
        children={({ match }) => (
          <li className={"w_55_desktop w_25 align_center " + [match ? "active" : ""]}>
            <Link to={to}>{label}</Link>
          </li>
        )}
      />
  );
}

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: "esp"
    };
  }  

  render() {
    return (
      <header className="section_middle_justify">
        <Link to="/" className="w_11_desktop img_medium_mobile">
          <img src={Logo} alt="Logo navike" className="w_100" />
        </Link>
        <button className="icon_menu font_semibold blueColor">
          <i className="fas fa-bars font_big"></i>
        </button>
        <nav className="align_right">
        </nav>
        <ul className="menu section_middle_center">
          <MenuLink active={true} to="/" label="Home" />
          <MenuLink to="/about" label="About" />
        </ul>
      </header>
    )
  }
}
