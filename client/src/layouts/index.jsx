import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components';

const Footer = styled.footer`
  display: flex;
  padding: 50px 0;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 100;
  opacity: 0.3;
`;

const Layout = () => {
  return (<div>
    <Outlet />
    <Footer >
    Ruud Juffermans © 2023
    </Footer>
    </div>
)}

export default Layout