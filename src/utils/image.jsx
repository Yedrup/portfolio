import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Image = props => {
  // console.log(props)
  let backgroungSectionStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  }
  let backgroungProjectStyle = {
    height: 'unset',
  }

  return (
    <StaticQuery
      query={graphql`
        query {
          logoExplosion: file(
            relativePath: { eq: "explosion-purdey-smaller.png" }
          ) {
            childImageSharp {
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          haveyousin: file(
            relativePath: { eq: "haveyousin.png" }
          ) {
            childImageSharp {
              fixed(width: 300, height: 300) {
                ...GatsbyImageSharpFixed
              } 
            }
          }
          legacyPortfolio: file(
            relativePath: { eq: "legacyPortfolio.png" }
          ) {
            childImageSharp {
              fixed(width: 300, height: 300) {
                ...GatsbyImageSharpFixed
              } 
            }
          }
          portfolio: file(
            relativePath: { eq: "portfolio.png" }
          ) {
            childImageSharp {
              fixed(width: 300, height: 300) {
                ...GatsbyImageSharpFixed
              } 
            }
          }
          logoExplosionNoBg: file(relativePath: { eq: "explosion-no-bg.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          purdeyPortrait: file(relativePath: { eq: "purdey107.jpg" }) {
            childImageSharp {
              fixed(width: 500, height: 500) {
                ...GatsbyImageSharpFixed
              }      
            }
          }
          purdeyPortraitLaptop: file(relativePath: { eq: "purdey119.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1224) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          purdeyPortraitStandingUpExplosions: file(relativePath: { eq: "photo-explosion-small.png" }) {
            childImageSharp {
              fluid(maxWidth: 1224) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          deskDeco: file(relativePath: { eq: "purdey179.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1224) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          purdeyWorking: file(relativePath: { eq: "purdey191.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1224) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          purdeyWorkingSmile: file(relativePath: { eq: "purdey243.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1224) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          purdeyWorkingBack: file(relativePath: { eq: "purdey207.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1224) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          purdeyWorkingFace: file(relativePath: { eq: "purdey225.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1224) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          logo: file(relativePath: { eq: "favicon.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          colorGame: file(relativePath: { eq: "colorGame.png" }) {
            childImageSharp {
              fixed(width: 300, height: 300) {
                ...GatsbyImageSharpFixed
              } 
            }
          }
          HYSAJS: file(relativePath: { eq: "HYSAJS.png" }) {
            childImageSharp {
              fixed(width: 300, height: 300) {
                ...GatsbyImageSharpFixed
              } 
            }
          }
          rockPaperScissors: file(
            relativePath: { eq: "rockPaperScissors.png" }
          ) {
            childImageSharp {
              fixed(width: 300, height: 300) {
                ...GatsbyImageSharpFixed
              } 
            }
          }
          trexComingSoon: file(
            relativePath: { eq: "trexComingSoon.png" }
          ) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          kwick: file(relativePath: { eq: "kwick.png" }) {
            childImageSharp {
              fixed(width: 300, height: 300) {
                ...GatsbyImageSharpFixed
              } 
            }
          }
          trexNoBg: file(relativePath: { eq: "trex-no-bg.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          French: file(
            relativePath: { eq: "French.png" }
          ) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          English: file(
            relativePath: { eq: "English.png" }
          ) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          Spanish: file(
            relativePath: { eq: "Spanish.png" }
          ) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          notFoundLarge: file(relativePath: { eq: "trex-404-large.png" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={
        data => {
          // console.log(data)
          if (props.imageName === 'logo') {
            return <Img fluid={data.logo.childImageSharp.fluid} />
          }
          else if (props.imageName === 'logoExplosion') {
            return <Img fluid={data.logoExplosion.childImageSharp.fluid} />
          }
          else if (props.imageName === 'logoExplosionNoBg') {
            return <Img fluid={data.logoExplosionNoBg.childImageSharp.fluid} />
          }
          else if (props.imageName === 'trexNoBg') {
            return <Img fluid={data.trexNoBg.childImageSharp.fluid} />
          }
          else if (props.imageName === 'purdeyPortraitLaptop') {
            return <Img fluid={data.purdeyPortraitLaptop.childImageSharp.fluid} />
          }
          else if (props.imageName === 'purdeyPortraitStandingUpExplosions') {
            return <Img fluid={data.purdeyPortraitStandingUpExplosions.childImageSharp.fluid} />
          } else if (props.imageName === 'purdeyPortrait') {
            return (
              <Img
                fixed={data.purdeyPortrait.childImageSharp.fixed}
                style={{
                  ...backgroungSectionStyle,
                }}
              />
            )
          } else if (props.imageName === 'purdeyWorkingSmile') {
            return (
              <Img
                fluid={data.purdeyWorkingSmile.childImageSharp.fluid}
                style={{
                  ...backgroungSectionStyle,
                }}
              />
            )
          }
          else if (props.imageName === 'purdeyWorkingBack') {
            return (
              <Img
                fluid={data.purdeyWorkingBack.childImageSharp.fluid}
                style={{
                  ...backgroungSectionStyle,
                }}
              />
            )
          }
          else if (props.imageName === 'purdeyWorkingFace') {
            return (
              <Img
                fluid={data.purdeyWorkingFace.childImageSharp.fluid}
                style={{
                  ...backgroungSectionStyle,
                }}
              />
            )
          }
          else if (props.imageName === 'deskDeco') {
            return (
              <Img
                fluid={data.deskDeco.childImageSharp.fluid}
                style={{
                  ...backgroungSectionStyle,
                }}
              />
            )
          }
          else if (props.imageName === '404Large') {
            return <Img fluid={data.notFoundLarge.childImageSharp.fluid} />
          }
          else if (props.imageName === 'trexComingSoon') {
            return <Img fluid={data.trexComingSoon.childImageSharp.fluid} />
          }
          else if (props.imageName === 'rockPaperScissors') {
            return (
              <Img
                fixed={data.rockPaperScissors.childImageSharp.fixed}
                imgStyle={{ objectFit: 'outside' }}
              />
            )
          }
          else if (props.imageName === 'kwick') {
            return (
              <Img
                fixed={data.kwick.childImageSharp.fixed}
                imgStyle={{ objectFit: 'outside' }}
              />
            )
          }
          else if (props.imageName === 'HYSAJS') {
            return (
              <Img
                fixed={data.HYSAJS.childImageSharp.fixed}
                imgStyle={{ objectFit: 'outside' }}
              />
            )
          }
          else if (props.imageName === 'colorGame') {
            return (
              <Img
                fixed={data.colorGame.childImageSharp.fixed}
                imgStyle={{ objectFit: 'outside' }}
              />
            )
          }
          else if (props.imageName === 'haveyousin') {
            return (
              <Img
                fixed={data.haveyousin.childImageSharp.fixed}
                imgStyle={{ objectFit: 'outside' }}
              />
            )
          }
          else if (props.imageName === 'legacyPortfolio') {
            return (
              <Img
                fixed={data.legacyPortfolio.childImageSharp.fixed}
                imgStyle={{ objectFit: 'outside' }}
              />
            )
          }
          else if (props.imageName === 'portfolio') {
            return (
              <Img
                fixed={data.portfolio.childImageSharp.fixed}
                imgStyle={{ objectFit: 'outside' }}
              />
            )
          }
          else if (props.imageName === 'Spanish') {
            return (
              <Img
                fluid={data.Spanish.childImageSharp.fluid}
              />
            )
          }
          else if (props.imageName === 'English') {
            return (
              <Img
                fluid={data.English.childImageSharp.fluid}
              />
            )
          }
          else if (props.imageName === 'French') {
            return (
              <Img
                fluid={data.French.childImageSharp.fluid}
              />
            )
          }
          else {
            return <Img fluid={data.logoExplosion.childImageSharp.fluid} style={{
              ...backgroungProjectStyle,
            }} />
          }
        }}
    />
  )
}
export default Image
