import React from 'react';
import Link from 'next/link';
import SignMeUp from './SignMeUp.js';

const Header = () => {
  const signupCallback = (email) => {
    return console.log(`Sign up call with email: ${email}`);
  };

  return (
    <>
      <div className='jumbotron jumbotronheight'>
        <div className='row'>
          <div className='col-12 col-sm-8 text-lg-right'>
            <div className='row col-12 text-lg-right'>
              <SignMeUp signupCallback={signupCallback} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
