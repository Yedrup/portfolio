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
                paragraph
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
        //console.log(data)
        return (
          <Layout>
            <div className="myPhoto" style={{ maxWidth: '190px' }}>
              <Image imageName="purdey" />
            </div>
            <h1 className="c-page__title">{title}</h1>
            <p>{intro}</p>
            <h2 className="c-about__title">{bioTitle}</h2>
            {biography.map((bioParagraph, index) => {
              return <p className="c-bioParagraph" key={index}>{bioParagraph.paragraph}</p>
            })}
            <h2 className="c-about__title">{valuesTitle}</h2>
            {values.map((value, index) => {
              return <p key={index}>{value.name}</p>
            })}
             <h2 className="c-about__title">{passionTitle}</h2>
             <div className="c-passions">
              {passions.map((passion, index) => {
                return <p className="c-passion" key={index}>{passion.name}</p>
              })}
            </div>  
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
