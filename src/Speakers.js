import React, { useState, useContext, useMemo, useCallback } from 'react';
import { ConfigContext } from './App';
import HeaderRouter from './HeaderRouter';
import SpeakerDetail from './SpeakerDetail';
import useAxiosFetch from './useAxiosFetch';
import axios from 'axios';

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

  const newFilterList = useMemo(
    () =>
      data
        .filter(
          ({ sat, sun }) => (speakingSaturday && sat) || (speakingSunday && sun)
        )
        .sort((a, b) =>
          a.firstName > b.firstName ? 1 : a.firstName < b.firstName ? -1 : 0
        ),
    [speakingSaturday, speakingSunday, data]
  );

  const speakerListFiltered = isLoading ? [] : newFilterList;

  const heartFavoriteHandler = useCallback((e, speakerRec) => {
    e.preventDefault();
    const toggledRec = { ...speakerRec, favorite: !speakerRec.favorite };
    axios
      .put(`http://localhost:4000/speakers/${speakerRec.id}`, toggledRec)
      .then(function (response) {
        updateDataRecord(toggledRec);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (hasErrored)
    return (
      <div>
        {errorMessage}&nbsp; Make sure you have launched npm run json-server
      </div>
    );

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <HeaderRouter />
      <div className='container'>
        <div className='btn-toolbar  margintopbottom5 checkbox-bigger'>
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
        <div className='row'>
          <div className='card-deck'>
            {speakerListFiltered.map(
              ({ id, firstName, lastName, bio, favorite, sat, sun }) => {
                return (
                  <SpeakerDetail
                    key={id}
                    id={id}
                    favorite={favorite}
                    onHeartFavoriteHandler={heartFavoriteHandler}
                    firstName={firstName}
                    lastName={lastName}
                    bio={bio}
                    sat={sat}
                    sun={sun}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Speakers;
