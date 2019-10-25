import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SiteBody from './SiteBody';

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <SiteBody />
        <Footer />
      </React.Fragment>
    )
  }
}

export default Main;