import { Link, GatsbyLinkProps } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
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
            {/* call navigation graphql and map*/}
            <ul className="c-header__links">
            {data.dataJson.navigation.map(link => {
              return(
                <ListLink to={link.url}  key="">{link.name}</ListLink>
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

// const Header = ({ siteTitle }) => {
//   console.log("GatsbyLinkProps",GatsbyLinkProps)

//   return (
//   <header
//     className='c-header'
//   >
//       <h1 className='c-header__title'>
//         <Link
//           to="/"
//           style={{
//             textDecoration: 'none',
//           }}
//           className='c-header__title__link'
//         >
//           <Image imageName="logoExplosionNoBg" />
//           <span className="c-header_written-logo">{siteTitle}</span>
//         </Link>
//       </h1>
//       {/* call navigation graphql and map*/}
//       <ul className='c-header__links'>
//         <ListLink to="/about/">About</ListLink>
//         <ListLink to="/playground/">Playground</ListLink>
//         <ListLink to="/contact/">Contact</ListLink>
//         <ListLink to="/work/">Work</ListLink>
//         <ListLink to="/links/">Links</ListLink>
//       </ul>
//     </header>
// )}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: '',
// }

// export default Header
