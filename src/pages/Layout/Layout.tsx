import React from 'react';
import './Layout.scss';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div>
    <div className="page-container">
      <div className="header">
        <h1 className="header__logo">Placeholder for logo</h1>
      </div>
      <div className="content-wrapper">
        <Outlet />
      </div>
    </div>
  </div>
);

export default Layout;
