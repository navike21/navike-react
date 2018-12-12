import React, { Component } from 'react';

import laptop from '../../images/laptop.png';

export default class HomeScreen extends Component {
  render() {
    return (
      <div className="w_100 section_middle_center wrapp_inner full_min_h">
        <div className="laptop_portada w_78_desktop w_90 section_middle_left"> 
          <img src={laptop} alt="Laptop" /> 
          <div className="wrapTextoHome">
            <h2 className="blueColor">UN SITIO WEB SERÁ</h2>
            <p>Tu mejor carta de presentación</p>
            <div className="font_normal marginTop_tiny">Programador web frontend</div>
          </div>
        </div>
      </div>
    )
  }
}
