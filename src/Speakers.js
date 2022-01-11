import React, { useState, useContext } from 'react';
import { ConfigContext } from './App';
import HeaderRouter from './HeaderRouter';
import useAxiosFetch from './useAxiosFetch';

const Speakers = () => {
  const { isLoading, hasErrored, errorMessage, data } = useAxiosFetch(
    'http://localhost:4000/speakers',
    []
  );

  const context = useContext(ConfigContext);

  if (hasErrored) {
    return <div>{errorMessage} Run json-sever</div>;
  }

  console.log(errorMessage);
  return context.showSpeakerSpeakingDays === false ? null : (
    <>
     Conditional Rendering Technique
    </>
  );
};

export default Speakers;
