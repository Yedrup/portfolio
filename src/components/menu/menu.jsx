import { bubble as BubbleMenuC } from 'react-burger-menu'
import React, { Component } from 'react'
import './menu.css'
import cv from '../../document/purdey_chambraud_cv_front_end-en.pdf'
import { Link, GatsbyLinkProps,StaticQuery, graphql } from 'gatsby'
import Image from '../../utils/image'
import IconService from "../../utils/IconService"


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
    let socialLinks = [...this.props.socialLinks]
    return (
      <StaticQuery
        query={graphql`
          query BubbleMenu {
            dataJson {
              buttons {
                buttonDownload
              }
              menu {
                name
                url
              }
            }
          }
        `}
        render={data => {
          //console.log(data)

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
              {/* <p>Social Medias</p> */}
              {/* GO TO 404 bexause Link is internal */}
              <ul className="c-menu__socials" >
                {this.props.socialLinks.map((link, index) => {
                  return (
                    <ListLink to={link.url} key={index}>
                      <IconService nameIcon={link.name} iconStyleContext={{
                      color: "#FFF"
                    }}/>
                    </ListLink>
                  )
                })}
              </ul>
              <div className="c-resume-section--menu">
              <a href={cv} target="_blank" className="c-button c-resume-button--menu">
                {data.dataJson.buttons.buttonDownload}
              </a>
            </div>
            </BubbleMenuC>
          )
        }}
      />
    )
  }
}

export default BubbleMenu
