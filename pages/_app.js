import React from 'react';
import '../styles/globals.css';

/* ref: https://nextjs.org/docs/advanced-features/custom-app
    Next.js uses App component to initialize pages. 
    You can override it and control the page initialization. 
*/

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default MyApp;
