import React from 'react'
import './section.css'
import { Link, GatsbyLinkProps } from 'gatsby'
// import { StaticQuery, graphql } from 'gatsby'
import Image from '../../utils/image'

const Section = props => {
  // console.log(props)
  return (
    <Link className="c-section__link" to={props.url}>
    <div className="c-section--on-image" style={{ backgroundColor: props.color }}>
      <div className="c-section__content">
        <h2 className="c-section__name">{props.name}</h2>
        <p className="">{props.description}</p>
      </div>
      <Image className="c-section__image" imageName={props.img} />
    </div>
    </Link>
  )
}

export default Section
