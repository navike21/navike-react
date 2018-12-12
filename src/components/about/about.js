import React, { Component } from 'react';

import Yo from '../../images/yo.png';

export default class About extends Component {
  render() {
    return (
      <div className="w_100 section_middle_center full_min_h yo">
        <img src={Yo} alt="Yo" />
        <div className="w_80_desktop w_80">
          <h2 className="blueColor font_biggest font_big_mobile">¿Quién soy?</h2>
          <p className="w_50_desktop">
          Hola, mi nombre es José Iván, un programador web autodidacta, vivo en Perú y me emociona mucho cuando un proyecto llega a mis manos para poder darle vida, llevo haciéndolo durante 6 años. y he disfrutado cada hora dedicada acompañado de una buena taza de café.
          </p>
        </div>
      </div>
    )
  }
}
