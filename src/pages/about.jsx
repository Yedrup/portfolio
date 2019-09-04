import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../utils/image'
import { StaticQuery, graphql } from 'gatsby'
import GifService from '../utils/gifsService'

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
              passionTitle
              introPassions
              passions {
                name
                gifName
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
          passions
        } = data.dataJson.aboutPage

        return (
          <Layout>
            <h1 className="c-page__title">{title}</h1>
            <div className="c-about__presentation">
              <p className="c-about__presentation__text">{intro}</p>
              <div className="myPhoto" style={{ width: '100px' }}>
                <Image imageName="purdey" />
              </div>
            </div>
            <span className="c-about__title">{bioTitle}</span>
            <div className="c-about__bio__sections">
              {biography.map((bioParagraph, index) => {
                let paragraphs = bioParagraph.paragraphs;
                return (
                  <div key={index} className="c-about__bio__section">
                    <h3 className="c-about__bio__title">{bioParagraph.periodTitle}</h3>
                    <ul className="c-about__bio__paragraphs">
                      {paragraphs.map((value, index) => {
                        return (
                          <li key={index}>{value.paragraph}</li>
                        )
                      })}
                    </ul>
                  </div>
                )
              })}
            </div>
            <h2 className="c-about__title">{passionTitle}</h2>
            <ul className="c-passions">
              {passions.map((passion, index) => {
                return (
                  <li className="c-passion" key={index}>
                    <GifService nameGif={passion.gifName} alt=""/>
                    <p>{passion.name}</p>
                  </li>)
              })}
            </ul>
          </Layout>
        )
      }}
    />

  )
}

export default aboutPage
