import React, { Component } from 'react';

// styles
import { GlobalStyle, MainContainer } from './styles';

// components
import Header from '../components/Header';
import HeadLocal from '../components/_Head';
import Footer from '../components/Footer';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <MainContainer>
        <GlobalStyle />
        <HeadLocal />
        <Header />
        <main key="main" className="g-main">
          {children}
        </main>
        <Footer />
      </MainContainer>
    );
  }
}

export default Layout;
