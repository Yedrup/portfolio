import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../utils/image'
import { StaticQuery, graphql } from 'gatsby'

import '../pages/css/about.css'

const aboutPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query aboutPage {
          dataJson {
            aboutPage {
              title
              intro
              bioTitle
              biography {
                periodTitle
                paragraphs {
                  paragraph
                }
              }
              valuesTitle
              values {
                name
              }
              passionTitle
              introPassions
              passions {
                name
                imageName
              }
            }
          }
        }
      `}
      render={data => {
        const {
          title,
          intro,
          bioTitle,
          biography,
          passionTitle,
          introPassions,
          passions,
          valuesTitle,
          values
        } = data.dataJson.aboutPage
        return (
          <Layout>
          <h1 className="c-page__title">{title}</h1>
            <div className="myPhoto" style={{ maxWidth: '190px' }}>
              <Image imageName="purdey" />
            </div>
            <p>{intro}</p>
            {/* <h1 className="c-page__title">{title}</h1> */}
            <h2 className="c-about__title">{bioTitle}</h2>
            {/* <h3 className="c-about__subtitle">period</h3>  */}
            {biography.map((bioParagraph, index) => {
              let paragraphs = bioParagraph.paragraphs;
              return (
                <div>
                  <h3 className="c-about__bio__title" key={index}>{bioParagraph.periodTitle}</h3>
                  <ul key={index} className="c-about__bio__paragraphs">
                    {paragraphs.map((value, index) => {
                      console.log("value", value)
                      return (
                        <li key={index}>{value.paragraph}</li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
            <h2 className="c-about__title">{passionTitle}</h2>
            <ul className="c-passions">
              {passions.map((passion, index) => {
                return <li className="c-passion" key={index}>{passion.name}</li>
              })}
            </ul>
            <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
              <Link to="/">Go back to the homepage</Link>
              <Link to="/playground/">Go to the playground</Link>
            </div>
          </Layout>
        )
      }}
    />

  )
}

export default aboutPage
