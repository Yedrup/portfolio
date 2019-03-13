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
            playgroundPage {
              title
              intro
              projects {
                name
                shortName
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
        const { intro, title, projects } = data.dataJson.playgroundPage
        //console.log(data)
        return (
          <Layout>
            <h1 className="c-page__title">{title}</h1>

            <p>{intro}</p>

            <ul className="c-projects">
              {projects.map((project, index) => {
                return (
                  <li key={index} className="c-project">
                    <div className="c-project__infos--written">
                      <div className="c-project__infos__title">
                        <a
                          href={project.url}
                          target="_blank"
                          className="c-project__title"
                        >
                          <h2>{project.name}</h2>
                        </a>
                        <ul className="c-project__links">
                          <li className="c-project__link">
                            <a href={project.GithubUrl} target="_blank">
                              <IconService
                                nameIcon="Github"
                                iconStyleContext={{
                                  color: 'var(--color-text-on-dark)',
                                }}
                              />
                            </a>
                          </li>
                          <li className="c-project__link">
                            <a href={project.url} target="_blank">
                              <IconService
                                nameIcon="link"
                                iconStyleContext={{
                                  color: 'var(--color-text-on-dark)',
                                }}
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="c-project__technologies">
                      <span className="c-project__purpose__title">
                          technologies:
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
                    <div className="c-project__image">
                      <Image imageName={project.shortName} />
                    </div>
                  </li>
                )
              })}
            </ul>
            <Link to="/">Go back to the homepage</Link>
          </Layout>
        )
      }}
    />
  )
}

export default playgroundPage
