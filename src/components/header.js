import React, { Component } from 'react';

import {
  Route,
  Link
} from "react-router-dom";

import {Facebook, Instagram, Github, Youtube} from "./export/icons";

import Logo from "../images/logo.svg";

function MenuLink({ label, to, active, showMenuFunction }) {
  return (
    <Route
      path={to}
      exact={active}
      showMenuFunction={showMenuFunction}
      children={({ match }) => (
        <li className={"w_100 " + [match ? "active" : ""]} onClick={showMenuFunction}>
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
      activeMenu: false,
      flag: "esp"
    };
  }

  showMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu
    })
  }

  showMenuLogo = () =>{
    this.setState({
      activeMenu: false
    })
  }

  render() {
    return (
      <header className="section_middle_justify w_100">
        <Link to="/" className="w_10_desktop logo" onClick={this.showMenuLogo}>
          <img src={Logo} alt="Logo navike" className="w_100" />
        </Link>
        <button className="icon_menu font_semibold blueColor" onClick={this.showMenu}>
          <i className="fas fa-bars font_big"></i>
        </button>
        <nav className={"section_middle_center " + (this.state.activeMenu ? "nav_active" : "nav_inactive")}>
          <ul className="menu w_80 section_middle_center">
            <MenuLink active={true} to="/about-me" label="Quién soy?" showMenuFunction={this.showMenu} />
            <MenuLink to="/services" label="Mis servicios" showMenuFunction={this.showMenu} />
            <MenuLink to="/job" label="Mi trabajo" showMenuFunction={this.showMenu} />
            <MenuLink to="/blog" label="Blog" showMenuFunction={this.showMenu} />
            <MenuLink to="/contact" label="Trabajamos?" showMenuFunction={this.showMenu} />
          </ul>
          <aside className="w_80 section_middle_right">
            <ul className="section_middle_right w_100">
              <li>
                <Link to="./" className="rss_icons"><Facebook /></Link>
              </li>
              <li>
                <Link to="./" className="rss_icons"><Instagram /></Link>
              </li>
              <li>
                <Link to="./" className="rss_icons"><Github /></Link>
              </li>
              <li>
                <Link to="./" className="rss_icons"><Youtube /></Link>
              </li>
            </ul>
          </aside>
        </nav>

      </header>
    )
  }
}
