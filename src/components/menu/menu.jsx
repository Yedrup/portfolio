import { bubble as BubbleMenuC } from 'react-burger-menu'
import React from 'react'
import './menu.css'
import { Link, GatsbyLinkProps } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import Image from '../../utils/image'

//TODO create component, see how to manage classes
const ListLink = props => {
  return (
    <li className="bm-item">
      <Link activeClassName="c-menu_link_active_path" className="c-menu_link" to={props.to}>
        {props.children}
      </Link>
    </li>
  )
}

const BubbleMenu = () => {
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
          <BubbleMenuC right className='c-menu'>
            <Link className="c-menu-logo" exact strict to={'/'}>
            <Image imageName="trexNoBg" />
            </Link>
            <ul className="bm-item-list" role="navigation">
              {data.dataJson.menu.map((link,index) => {
                return (
                  <ListLink to={link.url} key={index}>
                    {link.name}
                  </ListLink>
                )
              })}
            </ul>
            <p>Social Medias</p>
            <ul className="bm-item-list" role="navigation">
            {data.dataJson.socialMedias.map((link,index) => {
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

export default BubbleMenu
