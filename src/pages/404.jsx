import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import Image from '../utils/image';
import '../pages/css/404.css';

const NotFoundPage = () => (
  <Layout>
    <h1 className="c-page__title">PAGE NOT FOUND!</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>

    <div className="c-notFound__image__inner">
      <Image imageName="404Large" />
      <Link className="c-notFound__link" to="/">
        Go back to a safer place
      </Link>
    </div>
  </Layout>
);

export default NotFoundPage;
