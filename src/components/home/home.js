import React, { Component } from 'react';

import Portada from '../../images/portada.png';
import Phone from '../../images/phone.png';

import {Dictionary} from '../export/dictionary';

export default class HomeScreen extends Component {
  render() {
    return (
      <div className="w_100 section_middle_center wrapp_inner">
        <div className="portada section_middle_center full_min_h w_100">
          <div className="section_middle_center w_100 w_85_desktop">
            <div className="w_100 w_65_desktop align_center laptop_wrap">
              <img src={Portada} alt="Code view" className="w_100 laptop" />
              <div className="phone">
                <img src={Phone} alt="Phone" className="w_100" />
              </div>
            </div>
            <div className="w_100 w_35_desktop section_middle_center">
              <h2 className="w_80 w_90_desktop font_biggest font_medium_mobile font_light blackColor">
                {Dictionary.textHome.eng}
                {this.props.free}
              </h2>
              <p className="w_80 w_90_desktop">Produciendo sitios web, de calidad con una buena experiencia de usuario final.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
