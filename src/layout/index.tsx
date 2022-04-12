import React from 'react';
import Header from './Header';
import './index.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="global-container">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
