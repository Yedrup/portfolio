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
    render={({ site, dataJson }) => {
      const { title, description, httpEquiv } = site.siteMetadata;
      const { title: siteTitle } = dataJson;

      return (
        <>
          <Helmet
            title={title}
            meta={[
              {
                name: 'description',
                content: description,
              },
              {
                name: 'keywords',
                content: 'portfolio, front-End, developer,Paris',
              },
              { name: 'google', content: 'notranslate' },
              {
                [httpEquiv]: 'Content-Security-Policy',
                content: 'upgrade-insecure-requests',
              },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Header siteTitle={siteTitle} />
          <main className="main">{children}</main>
          <Footer />
        </>
      );
    }}
  />
);

export default Layout;
