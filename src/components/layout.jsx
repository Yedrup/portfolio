import React from 'react';
import './layout.css';
import '../pages/css/variables.css';
import Header from './header/header';
import Footer from './footer/footer';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query Layout {
        site {
          siteMetadata {
            title
            description
            httpEquiv
          }
        }
        dataJson {
          title
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            {
              name: 'keywords',
              content: 'portfolio, front-End, developer,Paris',
            },
            { name: 'google', content: 'notranslate' },
            {
              [data.site.siteMetadata.httpEquiv]: 'Content-Security-Policy',
              content: 'upgrade-insecure-requests',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.dataJson.title} />
        <main className="main">{children}</main>
        <Footer />
      </>
    )}
  />
);

export default Layout;
