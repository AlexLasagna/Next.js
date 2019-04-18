import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';

// styles
import { LinkComponent, Nav } from './styles';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <Nav>
          <LinkComponent>
            <Link href="/">
              <a>Home</a>
            </Link>
          </LinkComponent>
          <Link href="/check-out-redux">
            <a>Check out redux</a>
          </Link>
        </Nav>
      </header>
    );
  }
}
export default Header;
