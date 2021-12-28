import React from 'react';
import styled from "styled-components/macro";
import Header from "./Header";
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
};

const Main = styled.main`
  scroll-snap-type: y mandatory;
`;

export default Layout;