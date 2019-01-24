import React from 'react'
import { Link } from 'gatsby'
import Image from '../utils/image'
import ScrollableAnchor from 'react-scrollable-anchor'
import cv from '../document/purdey_chambraud_cv_front_end-en.pdf'
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'

import './css/resume.css'

const resumePage = () => {
  return (
    <StaticQuery
      query={graphql`
        query resumePage {
          dataJson {
            resumePage {
              buttonTitle
              title
              intro
              jobsSection {
                title
                id
                jobs {
                  name
                  url
                  years
                  missions {
                    name
                  }
                  formerProfession
                  current
                }
              }
              educationSection {
                title
                id
                educationList {
                  name
                  place
                  year
                  url
                }
              }
              skillsSection {
                title
                id
                skills {
                  title
                  list {
                    name
                  }
                }
                languages {
                  title
                  list {
                    name
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        console.log('data resume', data)
        const {
          title,
          buttonTitle,
          intro,
          jobsSection,
          educationSection,
          skillsSection,
        } = data.dataJson.resumePage
        const { skills, languages } = skillsSection

        return (
          <Layout>
            <h1 className="c-page__title">{title}</h1>
            {/* <Image imageName="workplace2" /> */}
            <p>{intro}</p>
            <h2>{jobsSection.title}</h2>
            <ul className="c-jobs">
              {jobsSection.jobs.map(job => {
                return (
                  <li className="c-job" key={job.name}>
                    <span className="c-job__year">{job.years}</span>
                    <a href={job.url}>{job.name}</a>
                    <ul className="c-missions">
                      {job.missions.map((mission, index) => {
                        console.log(mission.name)
                        return (
                          <li className="c-mission" key={index}>
                            {mission.name}
                          </li>
                        )
                      })}
                    </ul>
                  </li>
                )
              })}
            </ul>
            <h2>{skillsSection.title}</h2>
            <ul className="c-skills">
              {skills.map((skillType, index) => {
                return (
                  <li className="" key={index}>
                    <h3>{skillType.title}</h3>
                    <ul className="c-skills">
                      {skillType.list.map((skill, index) => {
                        return (
                          <li className="c-skill" key={index}>
                            <span>{skill.name}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </li>
                )
              })}
            </ul>
            <h2>{languages.title}</h2>
            <ul className="c-languages">
              {languages.list.map((language, index) => {
                return (
                  <li className="" key={index}>
                    <span>{language.name}</span>
                  </li>
                )
              })}
            </ul>

            <h2>{educationSection.title}</h2>
            <ul className="c-educations">
            {educationSection.educationList.map((education, index) => {
              return (
                <li className="c-job" key={index}>
                  <span className="c-job__year">{education.year}</span>
                  <span className="c-job__year">{education.name}</span>
                  <a href={education.url}>{education.place}</a>
                </li>
              )
            })}
            </ul>
            <div className="c-resume-section--button">
              <a href={cv} target="_blank" className="c-resume-button">
                {buttonTitle}
              </a>
            </div>
            {/*  
            <Link to="/">Go back to the jobs</Link>
            <Link to="/playground/">Go to the playground</Link> */}
          </Layout>
        )
      }}
    />
  )
}

export default resumePage
