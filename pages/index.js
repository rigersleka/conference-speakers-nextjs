import App from '../src/App.js';
import styles from '../styles/Home.module.css';

function Index({ isServer }) {
 
  console.log(isServer);
  return (
    <div className={styles.container}>
      <App pageName='Home' />
    </div>
  );
}

Index.getInitialProps = async ({ req }) => {
  const isServer = !!req;
  if (isServer) {
    return { isServer };
  }
};

export default Index;
