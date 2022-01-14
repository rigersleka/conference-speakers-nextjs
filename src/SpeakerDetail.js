import React from 'react';

const SpeakerDetail = ({ firstName, lastName }) => {
  return (
    <>
      <div>{firstName} </div>
      <div>{lastName} </div>
    </>
  );
};

export default SpeakerDetail;
