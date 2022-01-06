import React from 'react';
import Header from './Header';
import HeaderRouter from './HeaderRouter';

const Home = () => {
  return (
    <>
      <div>
        <h4>Type 1: Routing</h4>
        <Header />
      </div>
      <div>
      <h4>Type 2: Routing</h4>
        <HeaderRouter />
      </div>
    </>
  );
};

export default Home;
