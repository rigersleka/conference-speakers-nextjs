import React, { useState, useContext, useMemo } from 'react';
import { ConfigContext } from './App';
import HeaderRouter from './HeaderRouter';
import useAxiosFetch from './useAxiosFetch';

const Speakers = () => {
  const { isLoading, hasErrored, errorMessage, data, updateDataRecord } =
    useAxiosFetch('http://localhost:4000/speakers', []);

  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);

  const context = useContext(ConfigContext);

  const handleChangeSaturday = () => {
    setSpeakingSaturday(!speakingSaturday);
  };

  const handleChangeSunday = () => {
    setSpeakingSunday(!speakingSunday);
  };

  if (hasErrored)
    return (
      <div>
        {errorMessage}&nbsp; Make sure you have launched npm run json-server
      </div>
    );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <HeaderRouter />
      {context.showSpeakerSpeakingDays === false ? null : (
        <div className='hide'>
          <div className='form-check-inline'>
            <label className='form-check-label'>
              <input
                type='checkbox'
                className='form-check-input'
                onChange={handleChangeSaturday}
                checked={speakingSaturday}
              />
              Saturday Speakers
            </label>
          </div>
          <div className='form-check-inline'>
            <label className='form-check-label'>
              <input
                type='checkbox'
                className='form-check-input'
                onChange={handleChangeSunday}
                checked={speakingSunday}
              />
              Sunday Speakers
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Speakers;
