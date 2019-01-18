import { Link, GatsbyLinkProps } from 'gatsby'
import PropTypes from 'prop-types'
import React, {Component} from 'react'
import './header.css'
import Image from '../../utils/image'
import { StaticQuery, graphql } from 'gatsby'
import BubbleMenu from '../menu/menu'


const ListLink = props => {
  return (
    <li className="c-header__li">
      <Link
        activeClassName="link_active_path"
        className="c-header__link"
        to={props.to}
      >
        {props.children}
      </Link>
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
          }
        }
      `}
      render={data => {
        console.log(data)
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
            {data.dataJson.navigation.map((link,index) => {
              return(
                <ListLink to={link.url}  key={index}>{link.name}</ListLink>
              )
            })}
            </ul>
            <BubbleMenu />
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
