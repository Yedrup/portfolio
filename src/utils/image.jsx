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
  // let test = "purdey_photo.jpg";
  console.log(props)
  // if(props.imageName === "purdey") {
  //   console.log("photo purdey asked")
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
          console.log(data)
          if(props.imageName === "purdey") {
            return (<Img fluid={data.purdey.childImageSharp.fluid} />)
          } else if(props.imageName === "workplace2"){
            return (<Img fluid={data.workplace2.childImageSharp.fluid} />)
          } else if(props.imageName === "logo"){
            return (<Img fluid={data.logo.childImageSharp.fluid} />)
          } else if(props.imageName === "logoExplosion") {
            return (<Img fluid={data.logoExplosion.childImageSharp.fluid} />)
          } else if(props.imageName === "logoExplosionNoBg") {
            return (<Img fluid={data.logoExplosionNoBg.childImageSharp.fluid} />)
          } else if(props.imageName === "trexNoBg") {
            return (<Img fluid={data.trexNoBg.childImageSharp.fluid} />)
          }
           else {
            return (<Img fluid={data.astronaut.childImageSharp.fluid} />)
          }
      }
    }
      />
  )
  // } else if(props.imageName ==='miaou'){
  //   console.log("this is another img", props.imageName )
  //   return (
  //     <StaticQuery
  //       query={graphql`
  //         query { 
  //           placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
  //             childImageSharp {
  //               fluid(maxWidth: 300) {
  //                 ...GatsbyImageSharpFluid
  //               }
  //             }
  //           }
  //         }
  //       `}
  //       render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  //     />
  // )
  // }
}
export default Image
