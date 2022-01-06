import React from 'react';
import Home from './Home';
import Speakers from './Speakers';

export const ConfigContext = React.createContext();

const pageToShow = (pageName) => {
  if (pageName === 'Home') return <Home />;
  if(pageName === 'Speakers') return <Speakers/>

  return <div> Not Found</div>;
};

const App = ({ pageName }) => {

  return (
    <div>
      <h2>NextJS Starter</h2>
      <ConfigContext.Provider>{pageToShow(pageName)}</ConfigContext.Provider>
    </div>
  );
};

export default App;
