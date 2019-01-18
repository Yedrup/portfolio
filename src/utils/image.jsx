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
  let backgroungSectionStyle= {
    position: 'absolute',
    left: 0,
    top: 0,
    right:0,
    bottom:0,
    width: '100%',
    height: '100%'
  }
    return (
      <StaticQuery
        query={graphql`
          query { 
            purdey: file(relativePath: { eq: "purdey_photo.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            logoExplosion: file(relativePath: { eq: "explosion-purdey-smaller.png" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
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
            forestSnowFilter: file(relativePath: { eq: "forest.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 1024) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            workplace: file(relativePath: { eq: "workplace.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 1024) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            forestPlaceholder: file(relativePath: { eq: "forestPlaceholder.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 1024) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tunnelPlaceholder: file(relativePath: { eq: "tunnelPlaceholder.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 1024) {
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
            trexNoBg: file(relativePath: { eq: "trex-no-bg.png" }) {
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
            astronaut: file(relativePath: { eq: "gatsby-astronaut.png" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => {
          // console.log(data)
          if(props.imageName === "purdey") {
            return (<Img fluid={data.purdey.childImageSharp.fluid} />)
          } else if(props.imageName === "workplace"){
            return (<Img fluid={data.workplace.childImageSharp.fluid} 
              style={{
               ...backgroungSectionStyle
                }} />)
          } else if(props.imageName === "logo"){
            return (<Img fluid={data.logo.childImageSharp.fluid} />)
          } else if(props.imageName === "logoExplosion") {
            return (<Img fluid={data.logoExplosion.childImageSharp.fluid} />)
          } else if(props.imageName === "logoExplosionNoBg") {
            return (<Img fluid={data.logoExplosionNoBg.childImageSharp.fluid} />)
          } else if(props.imageName === "trexNoBg") {
            return (<Img fluid={data.trexNoBg.childImageSharp.fluid} />)
          }else if(props.imageName === "forestSnowFilter") {
            return (<Img fluid={data.forestSnowFilter.childImageSharp.fluid} 
              style={{
                ...backgroungSectionStyle
                 }} 
              />
              )
          }else if(props.imageName === "404Large") {
            return (<Img fluid={data.notFoundLarge.childImageSharp.fluid} />)
          }else if(props.imageName === "forestPlaceholder") {
            return (<Img fluid={data.forestPlaceholder.childImageSharp.fluid} 
              style={{
                ...backgroungSectionStyle
                 }} 
              />
              )
          }else if(props.imageName === "tunnelPlaceholder") {
            return (<Img fluid={data.tunnelPlaceholder.childImageSharp.fluid} 
              style={{
                ...backgroungSectionStyle
                 }} 
              />
              )
          }
           else {
            return (<Img fluid={data.astronaut.childImageSharp.fluid} />)
          }
      }
    }
      />
  )
}
export default Image
