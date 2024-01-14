import React from 'react';
import Header from '../header/index.js'
import Footer from '../footer/index.js';

const MasterLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MasterLayout;