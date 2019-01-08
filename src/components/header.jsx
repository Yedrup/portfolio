import { Link, GatsbyLinkProps } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import "./header.css"
import Image from '../components/image'


const ListLink = props => {
  return (
  <li className='c-header__li'>
    <Link 
    activeClassName='link_active_path'
          className='c-header__link' to={props.to}>{props.children}</Link>
  </li>
)}

const Header = ({ siteTitle }) => {
  console.log("GatsbyLinkProps",GatsbyLinkProps)

  return (
  <header
    className='c-header'
  >
      <h1 className='c-header__title'>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
          className='c-header__title__link'
        >
          <Image imageName="logoExplosionNoBg" />
          <span className="c-header_written-logo">{siteTitle}</span>
        </Link>
      </h1>
      <ul className='c-header__links'>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/playground/">Playground</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
        <ListLink to="/work/">Work</ListLink>
        <ListLink to="/links/">Links</ListLink>
      </ul>
    </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
