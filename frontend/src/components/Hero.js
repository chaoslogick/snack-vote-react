import React from 'react';

class Hero extends React.Component {
  render() {
    return (
      <div className="site-bd-section">
        <div className="heroBanner">
          <div className="heroBanner-content u-constrainer">
            <div className="heroBanner-content-hd">
              <h1 className="hdg hdg_1">Snack Food System</h1>
            </div>
            <div className="heroBanner-content-bd">
              <p className="copy">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="heroBanner-content-ft">
              <a className="btn" href="#voting">Vote Now</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero;