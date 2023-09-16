import React from 'react';
import TopMenu from "../components/TopMenu";

const Layout = ({ children }) => {
  return (
    <div>
      <TopMenu userName="Username"/>
      {children}
    </div>
  );
};

export default Layout;
