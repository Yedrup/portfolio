import React from 'react';
import './layout.css';
import '../pages/css/variables.css';
import Header from './header/header';
import Footer from './footer/footer';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import portfolioOG from '../images/portfolio-og.png';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query Layout {
        site {
          siteMetadata {
            title
            description
            httpEquiv
            siteUrl
          }
        }
        dataJson {
          title
        }
      }
    `}
    render={({ site, dataJson }) => {
      const { title, description, siteUrl, httpEquiv } = site.siteMetadata;
      const ogImageUrl = `${siteUrl}/${portfolioOG}`;
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
                content:
                  'portfolio, Front-End, developer, Paris, France, JavaScript, React, Web Development, UI, Node, Angular, Ionic, HTML, CSS',
              },
              { name: 'google', content: 'notranslate' },
              {
                [httpEquiv]: 'Content-Security-Policy',
                content: 'upgrade-insecure-requests',
              },
            ]}
          >
            <html lang="en" />
            <meta name="author" content="Purdey Chambraud" />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta
              property="og:title"
              content="Purdey Chambraud | Front-End Developer"
            />
            <meta property="og:site_name" content="Purdey's Portfolio" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:image" content={ogImageUrl} />
            <meta
              property="og:image:alt"
              content="Purdey Chambraud's Portfolio"
            />
            {/* twitter */}
            <meta name="twitter:site" content="@yedrup" />
            <meta
              name="twitter:title"
              content="Purdey - Front-End Developer | Portfolio"
            />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImageUrl} />
            <meta name="twitter:url" content={siteUrl} />
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
