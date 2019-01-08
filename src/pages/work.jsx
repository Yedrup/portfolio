import React from 'react'
import { Link } from 'gatsby'
import Image from '../components/image'

import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'

import "./css/work.css"

const workPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query workPage {
          dataJson {
            workPage {
              title
              intro
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
          }
        }
      `}
      render={data => {
        const { title, intro, jobs } = data.dataJson.workPage
        console.log(jobs)
        return (
          <Layout>
            <h1 className="c-page__title">{title}</h1>
            {/* <Image imageName="workplace2" /> */}
            <p>{intro}</p>
            <ul className="c-jobs">
              {jobs.map(job => {
                console.log(job)
                return (
                  <li className="c-job" key={job.name}>
                    <span className="c-job__year">{job.years}</span>
                    <a href={job.url}>{job.name}</a>
                    <ul className="c-missions">
                      {job.missions.map((mission, index) => {
                        console.log(mission.name)
                        return <li  className= "c-mission" key={index}>{mission.name}</li>
                      })}
                    </ul>
                  </li>
                )
              })}
            </ul>

            <Link to="/">Go back to the jobs</Link>
            <Link to="/playground/">Go to the playground</Link>
          </Layout>
        )
      }}
    />
  )
}

export default workPage
