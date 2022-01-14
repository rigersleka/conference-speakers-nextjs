import React from 'react';
import ImageToggleOnScroll from './ImageToggleOnScroll';

const SpeakerDetail = ({ id }) => {
  return (
    <div className='card col-4 cardmin'>
      <ImageToggleOnScroll
        className='card-img-top'
        primaryImg={`/static/speakers/bw/Speaker-${id}.jpg`}
        secondaryImg={`/static/speakers/Speaker-${id}.jpg`}
        alt='{firstName} {lastName}'
      />
    </div>
  );
};
export default SpeakerDetail;
