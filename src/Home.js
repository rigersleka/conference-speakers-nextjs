import React from 'react';
import Header from './Header';
import HeaderRouter from './HeaderRouter';

const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      {/** Meth 1: Routing Component
        <div>
          <Menu />
        </div>
      */}
      {/** Meth 2: Routing between components */}
      <div>
        <HeaderRouter />
      </div>
    </>
  );
};

export default Home;
