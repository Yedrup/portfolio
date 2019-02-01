import { Link, GatsbyLinkProps } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './header.css'
import Image from '../../utils/image'
import { StaticQuery, graphql } from 'gatsby'
import IconService from '../../utils/IconService'
import BubbleMenu from '../menu/menu'

const ListLink = props => {
  return (
    <li className="c-header__li">
      <Link
        activeClassName="link_active_path c-button"
        className="c-header__link"
        to={props.to}
      >
        {props.children}
      </Link>
    </li>
  )
}
const LinkHref = props => {
  return (
    <li className="c-header__social">
      <a href={props.url} target="_blank">
        <IconService
          nameIcon={props.name}
          iconStyleContext={{
            color: 'var(--headerSocialColor)',
          }}
        />
      </a>
    </li>
  )
}
const Header = ({ siteTitle }) => {
  console.log('GatsbyLinkProps', GatsbyLinkProps)

  return (
    <StaticQuery
      query={graphql`
        query Header {
          dataJson {
            navigation {
              name
              url
            }
            socialMedias {
              name
              url
              img
            }
          }
        }
      `}
      render={data => {
        console.log(data);
        const socialLinks = data.dataJson.socialMedias;
        return (
          <header className="c-header">
            <h1 className="c-header__title">
              <Link
                to="/"
                style={{
                  textDecoration: 'none',
                }}
                className="c-header__title__link"
              >
                <Image imageName="logoExplosionNoBg" />
                <span className="c-header_written-logo">{siteTitle}</span>
              </Link>
            </h1>

            <ul className="c-header__links">
              {data.dataJson.navigation.map((link, index) => {
                return (
                  <ListLink to={link.url} key={index}>
                    {link.name}
                  </ListLink>
                )
              })}
            </ul>

            <BubbleMenu socialLinks={socialLinks} />
            <ul className="c-header__socials">
              {socialLinks.map((linkheader, index) => {
                return <LinkHref name={linkheader.name} key={index} url={linkheader.url}/>
              })}
            </ul>
          </header>
        )
      }}
    />
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
