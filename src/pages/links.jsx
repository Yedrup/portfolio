import React from 'react'
import { Link } from 'gatsby'
import Image from '../utils/image'

import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'

const linksPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query linksPage {
          dataJson {
            linksPage {
              title
              intro
            }
          }
        }
      `}
      render={data => {
        const { title, intro } = data.dataJson.linksPage
        //console.log(data)
        return (
          <Layout>
            <h1 className="c-page__title">{title}</h1>
            <p>{intro}</p>
            <Link to="/">Go back to the homepage</Link>
            <Link to="/playground/">Go to the playground</Link>
          </Layout>
        )
      }}
    />
  )
}


export default linksPage
