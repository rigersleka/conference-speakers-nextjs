import React from 'react';
import SignMeUp from './SignMeUp';
import Navigation from './Navigation';

const Home = () => {
    return (<>
        <div>
           <SignMeUp/>
        </div>
        <div>
            <Navigation/>
        </div>
    </>);
};

export default Home;
