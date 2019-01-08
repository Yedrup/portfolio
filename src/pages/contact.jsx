
import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import { StaticQuery, graphql } from 'gatsby'

const contactPage = () => {
  return (
    <StaticQuery
    query={graphql`
      query contactPage {
        dataJson {
          contactPage {
            title
          }
        }
      }
    `}
    render={data => {
      const { title } = data.dataJson.contactPage
      console.log(data)
      return (
        <Layout>
          <h1 className="c-page__title">{title}</h1>
          <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
            <p>
              <a href="mailto:purdey.chambraud@gmail.com">send me an email</a>
            </p>
            <Link to="/">Go back to the homepage</Link>
            <Link to="/playground/">Go to the playground</Link>
          </div>
        </Layout>
      )
    }}
  />

)

}

export default contactPage
