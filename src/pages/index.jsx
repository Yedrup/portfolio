import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Section from '../components/section/section'
import Image from '../utils/image'
import { StaticQuery, graphql } from 'gatsby'

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
        const { title, sections, intro } = data.dataJson.homePage
        return (
          <Layout>
            <div className="c-page__intro--home">
              <h1 className="c-page__title">{title}</h1>
              {
                intro.map((paragraph, index) => {
                  return(
                    <p key={index}> {paragraph} </p>
                  )
                })
              }
            </div>
            <div className="c-sections">
              {sections.map((section, index) => {
                return (
                  <Section
                    key={index}
                    name={section.name}
                    url={section.url}
                    description={section.description}
                    color={section.color}
                    img={section.img}
                  />
                )
              })}
            </div>
          </Layout>
        )
      }}
    />
  )
}
export default IndexPage

