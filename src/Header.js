import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href='/speakers'>
            <a>Speakers</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
