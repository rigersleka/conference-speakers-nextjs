import React, { Component } from 'react';
import Link from 'next/link';

export class Menu extends Component {
  render() {
    return (
      <>
        <nav>
          <div className='navbar'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link href='/'>
                  <a className='nav-link'>Home</a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/speakers'>
                  <a className='nav-link'>Speakers</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
