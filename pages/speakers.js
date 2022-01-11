import React from 'react';
import App from '../src/App';
import Container from '../src/container';

const Speakers = ({ isServer }) => {

  console.log('Speakers' + isServer);
  return (
    <Container>
      <App pageName='Speakers' />
    </Container>
  );
};

Speakers.getInitialProps = async ({ req }) => {
  const isServer = !!req;
  if (isServer) {
    return { isServer };
  } else {
    try {
      return { isServer };
    } catch (e) {
      return { isServer };
    }
  }
};

export default Speakers;
