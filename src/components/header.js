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
      <div> 
        <header className="w_90 w_91_desktop section_middle_justify">
          <Link to="./" className="w_13_desktop img_medium_mobile">
            <img src={Logo} alt="Logo navike" className="w_100" />
          </Link>
          <nav className="align_right">
            <div className="wrap_menu">
              <div className="font_semibold blackColor section_middle_right">
                <i className="fas fa-bars font_medium"></i> &nbsp;&nbsp;MENU
              </div>
            </div>
          </nav>
        </header>
        <ul className="menu w_100 w_20_desktop active_menu section_middle_center">
          <MenuLink active={true} to="/" label="Home" />
          <MenuLink to="/about" label="About" />
        </ul>
      </div>
    )
  }
}
