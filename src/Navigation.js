import React from 'react';
import Link from './Links';

const Navigation = () => {
  return (
    <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
      <div className='navbar-nav'>
        <li className='nav-item'>
          <Link href='/'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link href='/speakers'>Speakers</Link>
        </li>
      </div>
    </nav>
  );
};

export default Navigation;
