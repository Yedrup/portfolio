import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../utils/image'
import { StaticQuery, graphql } from 'gatsby'

import "../pages/css/about.css"

const aboutPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query aboutPage {
          dataJson {
            aboutPage {
              title
              intro
            }
          }
        }
      `}
      render={data => {
        const { title, intro } = data.dataJson.aboutPage
        console.log(data)
        return (
          <Layout>
            <div className="myPhoto" style={{ maxWidth: '190px' }}>
              <Image imageName="purdey" />
            </div>
              {/* <Image imageName="miaou" /> */}
            <h1 className="c-page__title">{title}</h1>
            <p>{intro}</p>
            <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
              <Link to="/">Go back to the homepage</Link>
              <Link to="/playground/">Go to the playground</Link>
            </div>
          </Layout>
        )
      }}
    />

    // <Layout>
    //   <h1>Hi from the About Page</h1>z
    //   <Link to="/">Go back to the homepage</Link>
    //   <Link to="/playground/">Go to the playground</Link>
    // </Layout>
  )
}

export default aboutPage
