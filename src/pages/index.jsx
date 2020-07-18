import React from 'react';

import Layout from '../components/layout';
import Section from '../components/section/section';
import { StaticQuery, graphql } from 'gatsby';

const IndexPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query IndexPage {
          dataJson {
            homePage {
              title
              intro
              sections {
                name
                url
                description
                img
                color
              }
            }
          }
        }
      `}
      render={data => {
        const { title, sections, intro } = data.dataJson.homePage;
        return (
          <Layout>
            <div className="c-page__intro--home">
              <h1 className="c-page__title">{title}</h1>
              {intro.map((paragraph, index) => {
                return <p key={index}> {paragraph} </p>;
              })}
            </div>
            <div className="c-sections">
              {sections.map((section, index) => {
                const { name, url, description, color, img } = section;
                return (
                  <Section
                    key={index}
                    name={name}
                    url={url}
                    description={description}
                    color={color}
                    img={img}
                  />
                );
              })}
            </div>
          </Layout>
        );
      }}
    />
  );
};
export default IndexPage;
