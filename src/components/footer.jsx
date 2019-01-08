import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './footer.css'
import { StaticQuery, graphql } from 'gatsby'

const Footer = () => {
  return (
    <StaticQuery
      query={graphql`
        query Footer {
          dataJson {
            footer {
              name
              url
            }
          }
        }
      `}
      render={data => {
        // console.log(data)
        return (
          <footer className="c-footer">
            {data.dataJson.footer.map(link => {
              // console.log(link)
              return (
                <a
                  key={link.name}
                  className="c-footer_links"
                  href={link.url}
                  target="_blank"
                >
                  {link.name}
                </a>
              )
            })}
          </footer>
        )
      }}
    />
  )
}

export default Footer
