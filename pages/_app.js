import React from 'react';
import '../styles/globals.css';
import '../static/site.css';
import 'bootstrap/dist/css/bootstrap.css'

/* ref: https://nextjs.org/docs/advanced-features/custom-app
    Next.js uses App component to initialize pages. 
    By-Default: Perform automatic optimization.

    You can override it and control the page initialization. HOW? By using getInitialProps().
    getInitialProps() disable the posibility to perform automatic optimization, so each page will be as a server-side
*/

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default MyApp;
