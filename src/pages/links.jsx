import React from 'react';
import Image from '../utils/image';

import Layout from '../components/layout';
import { StaticQuery, graphql } from 'gatsby';
import '../pages/css/links.css';

const linksPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query linksPage {
          dataJson {
            linksPage {
              title
              intro
            }
          }
        }
      `}
      render={data => {
        const { title, intro } = data.dataJson.linksPage;
        return (
          <Layout>
            <h1 className="c-page__title">{title}</h1>
            <div className="c-coming-soon__image">
              <div className="c-coming-soon__image__inner">
                <Image imageName="trexComingSoon" />
              </div>
            </div>
            <p>{intro}</p>
          </Layout>
        );
      }}
    />
  );
};

export default linksPage;
