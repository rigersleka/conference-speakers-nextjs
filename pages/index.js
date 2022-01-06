import App from '../src/App.js';
import Container from '../src/Container.js';

function Index({ isServer }) {
  return (
    <Container>
      <App pageName='Home' />
    </Container>
  );
}

/* 
If getServerSideProps or getInitialProps is used in a page, 
Next.js will switch to render the page on-demand, per-request (meaning Server-Side Rendering).

If the above is not the case, Nex.js will statically optimize your page 
automatically by prerendering the page to static HTML.
*/
Index.getInitialProps = async ({ req }) => {
  const isServer = !!req;
  if (isServer) {
    return { isServer };
  }
  try {
    return { isServer };
  } catch (e) {
    console.log(e);
  }
};

export default Index;
