import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="site-hd" >
        <div className="masthead u-constrainer">
          <a className="logo" href="/">
            <svg viewBox="0 0 900 300">
              <use xlinkHref="#logo" />
            </svg>
          </a>
          <nav className="hList">
            <a className="navLink" href="/">Home</a>
            <a className="navLink" href="#current">Current</a>
            <a className="navLink" href="#voting">Voting</a>
            <a className="navLink" href="#signup">Sign Up</a>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header;