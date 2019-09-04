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
              contactIntro
              email
              Twitter
              Linkedin
            }
          }
        }
      `}
      render={data => {
        const { contactIntro, title, email, Twitter, Linkedin } = data.dataJson.contactPage
        //console.log(data)
        return (
          <Layout>
            <h1 className="c-page__title">{title}</h1>
            <p>{contactIntro}</p>
            {/* <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}> */}
            <div className="c-contact">
              <div>
                <p>
                  <a className="c-contact__link" href={email}>
                    <IconService
                      nameIcon="mail"
                      iconStyleContext={{
                        color: 'var(--contactIconColor)',
                        className: 'c-contact__link__icon',
                      }}
                    />
                    <span>
                      send me an email
                    </span>
                  </a>
                </p>
                <p>
                  <a className="c-contact__link" href={Twitter} target="_blank">
                    <IconService
                      nameIcon="Twitter"
                      iconStyleContext={{
                        color: 'var(--contactIconColor)',
                        className: 'c-contact__link__icon',
                      }}
                    />
                    <span>Tweet to me!</span>
                  </a>
                </p>
              </div>
              <div className="c-contact__map">
                {/* <p>map france with pin trex on paris</p> */}
                <Image imageName="map" />
              </div>
            </div>
          </Layout>
        )
      }}
    />
  )
}

export default contactPage
