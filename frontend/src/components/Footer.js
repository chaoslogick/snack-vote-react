import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="site-ft">
        <div className="footer u-constrainer">
          <div className="footer-primary">
            <a className="footLogo" href="/">
              <svg viewBox="0 0 900 300">
                <use xlinkHref="#logo" />
              </svg>
            </a>
          </div>
          <div className="footer-secondary">
            <nav className="hList hList_divided u-vr_x3">
              <a className="navLink navLink_dark" href="#main">Home</a>
              <a className="navLink navLink_dark" href="#current">Current</a>
              <a className="navLink navLink_dark" href="#voting">Voting</a>
              <a className="navLink navLink_dark" href="#signup">Sign Up</a>
            </nav>
            <small className="finePrint">&copy; The Company | 1234 Main St, Anytown, ST 12345</small>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;