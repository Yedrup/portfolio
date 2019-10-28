import React from 'react'
import { Link } from 'gatsby'
import './css/playground.css'
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'
import IconService from '../utils/IconService'
import Image from '../utils/image'

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
            <p>{intro}
              <a href={github.url} target="_blank">
                <IconService
                  nameIcon={github.name}
                  iconStyleContext={{
                    color: 'var(--highlight-color)',
                    size: '1.5rem'
                  }}
                />
              </a>
            </p>
            <ul className="c-projects">
              {projects.map((project, index) => {
                return (
                  <li key={index} className="c-project">
                    <div className="c-project__infos--written">
                      <div className="c-project__infos__title">
                        <a
                          href={project.url}
                          target="_blank"
                          className="c-project__link-title"
                        >
                          <h2 className="c-project__title">
                            {project.name}
                          </h2>
                        </a>
                        <ul className="c-project__links">
                          <li className="c-project__link">
                            <a href={project.GithubUrl} target="_blank">
                              <IconService
                                nameIcon="Github"
                                iconStyleContext={{
                                  color: 'var(--playgroundProjectIconLinkColor)',
                                  size: '1.5rem'
                                }}
                              />
                            </a>
                          </li>
                          <li className="c-project__link">
                            <a href={project.url} target="_blank">
                              <IconService
                                nameIcon="link"
                                iconStyleContext={{
                                  color: 'var(--playgroundProjectIconLinkColor)',
                                  size: '1.5rem'
                                }}
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="c-project__technologies">
                        <span className="c-project__purpose__title">
                          Technologies:
                        </span>
                        {project.technologies.map((technologie, index) => {
                          return <span className="c-project__technology" key={index}>{technologie.name}</span>
                        })}
                      </div>
                      <p className="c-project__purpose">
                        <span className="c-project__purpose__title">
                          Project's purpose:
                        </span>
                        {project.purpose}
                      </p>
                      <p className="c-project__purpose">
                        <span className="c-project__purpose__title">
                          Project's tech purpose:
                        </span>
                        {project.purposeTech}
                      </p>
                    </div>
                    <a href={project.url} className="c-project__image" target="_blank">
                      <Image imageName={project.imgName} />
                    </a>
                  </li>
                )
              })}
            </ul>
          </Layout>
        )
      }}
    />
  )
}

export default playgroundPage
