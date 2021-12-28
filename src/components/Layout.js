import React from 'react';
import styled from "styled-components/macro";
import Header from "./Header";
import { COLORS, GRADIENT } from "../constants.js";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer>
        <p>Designed and built by Julia Martin</p>
        <SiteLinks>
          <Link href="https://github.com/julia-martin">github</Link>
          <Link href="https://www.linkedin.com/in/juliadmartin/">linkedin</Link>
        </SiteLinks>
      </Footer>
    </>
  )
};

const Main = styled.main`
  scroll-snap-type: y mandatory;
`;

const Footer = styled.footer`
  background: ${GRADIENT};
  color: ${COLORS.offwhite};
  text-align: center;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SiteLinks = styled.li`
  list-style-type: none;
  font-weight: bold;
`;

const Link = styled.a`
  color: ${COLORS.darkBlue};
  display: inline-block;
  padding: 0px 10px;
  margin: 0px 10px;
`;

export default Layout;