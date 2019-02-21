import React from 'react'
import { Link } from 'gatsby'
import './css/contact.css'

import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'
import IconService from '../utils/IconService'
import Image from '../utils/image'

const contactPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query contactPage {
          dataJson {
            contactPage {
              title
              email
              Twitter
              Linkedin
            }
          }
        }
      `}
      render={data => {
        const { title, email, Twitter, Linkedin } = data.dataJson.contactPage
        //console.log(data)
        return (
          <Layout>
            <h1 className="c-page__title">{title}</h1>
            {/* <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}> */}
            <div className="c-contact">
              <div>
                <p>
                  <a className="c-link" href={email}>
                    <IconService
                      nameIcon="mail"
                      iconStyleContext={{
                        color: 'var(--iconContactColor)',
                        className: 'c-contact__link__icon',
                      }}
                    />
                    <span className="c-contact__link__text">
                      send me an email
                    </span>
                  </a>
                </p>
                <p>
                  <a className="c-link" href={Twitter} target="_blank">
                    <IconService
                      nameIcon="Twitter"
                      iconStyleContext={{
                        color: 'var(--iconContactColor)',
                        className: 'c-contact__link__icon',
                      }}
                    />
                    <span className="c-contact__link__text">Tweet to me!</span>
                  </a>
                </p>
              </div>
              <div className="c-contact__map">
                {/* <p>map france with pin trex on paris</p> */}
                <Image imageName="map" />
              </div>
            </div>
            {/* <Link to="/">Go back to the homepage</Link>
            <Link to="/playground/">Go to the playground</Link> */}
            {/* </div> */}
          </Layout>
        )
      }}
    />
  )
}

export default contactPage
