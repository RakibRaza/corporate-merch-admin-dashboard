import { Router } from "next/router";
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "flag-icon-css/css/flag-icons.min.css";
import '../styles/style.scss';
import Layout from '../components/Common/Layout/Layout';
import Loader from '../components/Common/Loader/Loader';

function MyApp({ Component, pageProps }) {
  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', (url) => {
      SetLoading(true);
    });

    Router.events.on('routeChangeComplete', (url) => {
      SetLoading(false);
    });
  }, []);
  return (<>
    {loading && <Loader />}
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  )
}

export default MyApp