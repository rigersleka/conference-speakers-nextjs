import React from 'react';
import SignMeUp from './SignMeUp';

const Login = ({email}) => {
  const signupCallback = () => {
    console.log(`Your email is: ${email}`);
  };

  return (
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
  );
};

export default Login;
