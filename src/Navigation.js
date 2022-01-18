import React from 'react';
import Link from './Links';

const Navigation = () => {
    return (
        <>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <Link href='/'>Home</Link>
                        <Link href='/speakers'>Speakers</Link>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navigation;
