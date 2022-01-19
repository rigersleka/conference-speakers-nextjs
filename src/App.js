import React from 'react';
import Home from './Home';
import Speakers from './Speakers';
import Login from './Login.js';

export const ConfigContext = React.createContext();

const pageToShow = (pageName) => {
  if (pageName === 'Home') return <Home />;
  if(pageName === 'Speakers') return <Speakers/>
  if(pageName === 'Login') return <Login/>

  return <div> Not Found</div>;
};

const configValue = {
  showSignMeUp: true,
  showSpeakerSpeakingDays: true
}
const App = ({ pageName }) => {

  return (
    <div>
      <h2>NextJS Starter</h2>
      <ConfigContext.Provider value={configValue}>{pageToShow(pageName)}</ConfigContext.Provider>
    </div>
  );
};

export default App;
