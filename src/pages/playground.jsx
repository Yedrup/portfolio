import React from 'react';
import './css/playground.css';
import Layout from '../components/layout';
import { StaticQuery, graphql } from 'gatsby';
import IconService from '../utils/IconService';
import Image from '../utils/image';

const playgroundPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query playgroundPage {
          dataJson {
            socialMedias {
              Github {
                name
                url
              }
            }
            playgroundPage {
              title
              intro
              projects {
                name
                imgName
                purpose
                purposeTech
                GithubUrl
                url
                technologies {
                  name
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { intro, title, projects } = data.dataJson.playgroundPage;
        const github = data.dataJson.socialMedias.Github;
        return (
          <Layout>
            <h1 className="c-page__title">{title}</h1>
            <p>
              {intro}
              <a href={github.url} rel="noreferrer" target="_blank">
                <IconService
                  nameIcon={github.name}
                  iconStyleContext={{
                    color: 'var(--highlight-color)',
                    size: '1.5rem',
                  }}
                />
              </a>
            </p>
            <ul className="c-projects">
              {projects.map((project, index) => {
                const {
                  url,
                  name,
                  GithubUrl,
                  imgName,
                  purpose,
                  purposeTech,
                  technologies,
                } = project;

                let isHosted = !!url;
                return (
                  <li key={index} className="c-project">
                    <div className="c-project__header">
                      <a
                        href={isHosted ? url : GithubUrl}
                        rel="noreferrer"
                        target="_blank"
                        className="c-project__link-title"
                      >
                        <h2 className="c-project__title">{name}</h2>
                      </a>
                      <ul className="c-project__links">
                        <li className="c-project__link">
                          <a href={GithubUrl} rel="noreferrer" target="_blank">
                            <IconService
                              nameIcon="Github"
                              iconStyleContext={{
                                color: 'var(--playgroundProjectIconLinkColor)',
                                size: '1.5rem',
                              }}
                            />
                          </a>
                        </li>
                        {isHosted && (
                          <li className="c-project__link">
                            <a href={url} rel="noreferrer" target="_blank">
                              <IconService
                                nameIcon="link"
                                iconStyleContext={{
                                  color:
                                    'var(--playgroundProjectIconLinkColor)',
                                  size: '1.5rem',
                                }}
                              />
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="c-project__image__wrapper">
                      <a
                        href={isHosted ? url : GithubUrl}
                        className="c-project__image"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Image imageName={imgName} />
                      </a>
                    </div>

                    <div className="c-project__infos--written">
                      <div className="c-project__technologies">
                        {technologies.map((technology, index) => {
                          return (
                            <span className="c-project__technology" key={index}>
                              {technology.name}
                            </span>
                          );
                        })}
                      </div>
                      <p className="c-project__purpose">
                        <span className="c-project__purpose__title">
                          Project's purpose:
                        </span>
                        {purpose}
                      </p>
                      <p className="c-project__purpose">
                        <span className="c-project__purpose__title">
                          Tech purpose:
                        </span>
                        {purposeTech}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Layout>
        );
      }}
    />
  );
};

export default playgroundPage;
