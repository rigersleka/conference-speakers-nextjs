import React from 'react';
import SignMeUp from './SignMeUp';
import Navigation from './Navigation';

const Home = () => {
  const signupCallback = (email) => {
    console.log(`sign up called with email ${email}`);
  };

  return (
    <>
      <div className='jumbotron jumbotronheight'>
        <div className='row'>
          <div className='col-12 col-sm-4 text-center'>
            <h6 className='text-uppercase'>October 19-20&nbsp;&nbsp;2019</h6>
            <h6 className='text-uppercase'>San Jose, California</h6>
          </div>
          <div className='col-12 col-sm-8 text-lg-right'>
            <h2>Silicon Valley Code Camp 2019</h2>
            <div className='row col-12 text-lg-right'>
              <SignMeUp signupCallback={signupCallback} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Navigation />
      </div>
    </>
  );
};

export default Home;
