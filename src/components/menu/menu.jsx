import { bubble as BubbleMenuC } from 'react-burger-menu'
import React, { Component } from 'react'
import './menu.css'
import { Link, GatsbyLinkProps } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import Image from '../../utils/image'

//TODO create component, see how to manage classes
const ListLink = props => {
  return (
    <li className="bm-item">
      <Link
        activeClassName="c-menu_link_active_path"
        className="c-menu_link"
        to={props.to}
      >
        {props.children}
      </Link>
    </li>
  )
}

class BubbleMenu extends Component {
  state = {
    menuOpen: false,
  }

  isMenuOpen = state => {
    console.log('state', state)
    this.setState({ menuOpen: state.isOpen })
  }

  render() {
    // console.log(this.props)
    return (
      <StaticQuery
        query={graphql`
          query BubbleMenu {
            dataJson {
              menu {
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
          console.log(data)
          return (
            <BubbleMenuC
              width={250} 
              right
              className={
                this.state.menuOpen ? 'c-menu c-menu-openned' : 'c-menu'
              }
              onStateChange={this.isMenuOpen}
            >
              <Link className="c-menu-logo" to={'/'}>
                <Image imageName="trexNoBg" />
              </Link>
              <ul className="bm-item-list" role="navigation">
                {data.dataJson.menu.map((link, index) => {
                  return (
                    <ListLink
                      to={link.url}
                      key={index}
                    >
                      {link.name}
                    </ListLink>
                  )
                })}
              </ul>
              <p>Social Medias</p>
              {/* GO TO 404 bexause Link is internal */}
              <ul className="bm-item-list" role="navigation">
                {data.dataJson.socialMedias.map((link, index) => {
                  return (
                    <ListLink to={link.url} key={index}>
                      {link.name}
                    </ListLink>
                  )
                })}
              </ul>
            </BubbleMenuC>
          )
        }}
      />
    )
  }
}

export default BubbleMenu
