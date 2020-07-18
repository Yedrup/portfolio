import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

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

const Image = ({ imageName }) => {
  let backgroundSectionStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  };
  let backgroundProjectStyle = {
    height: 'unset',
  };

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
          haveyousin: file(relativePath: { eq: "haveyousin.png" }) {
            childImageSharp {
              fixed(width: 300, height: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          cpuMonitor: file(relativePath: { eq: "cpu-monitor-dark-theme.png" }) {
            childImageSharp {
              fixed(width: 300, height: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          legacyPortfolio: file(relativePath: { eq: "legacyPortfolio.png" }) {
            childImageSharp {
              fixed(width: 300, height: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          portfolio: file(relativePath: { eq: "portfolio.png" }) {
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
          purdeyPortraitStandingUpExplosions: file(
            relativePath: { eq: "photo-explosion-small.png" }
          ) {
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
          trexComingSoon: file(relativePath: { eq: "trexComingSoon.png" }) {
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
          French: file(relativePath: { eq: "French.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          English: file(relativePath: { eq: "English.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          Spanish: file(relativePath: { eq: "Spanish.png" }) {
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
      render={({
        logo,
        logoExplosion,
        logoExplosionNoBg,
        kwick,
        trexNoBg,
        purdeyPortraitLaptop,
        purdeyPortraitStandingUpExplosions,
        purdeyPortrait,
        purdeyWorkingSmile,
        purdeyWorkingBack,
        purdeyWorkingFace,
        deskDeco,
        notFoundLarge,
        trexComingSoon,
        rockPaperScissors,
        HYSAJS,
        colorGame,
        haveyousin,
        legacyPortfolio,
        cpuMonitor,
        portfolio,
        Spanish,
        English,
        French,
      }) => {
        // console.log(data)

        switch (imageName) {
          case 'logo':
            return <Img fluid={logo.childImageSharp.fluid} />;

          case 'logoExplosion':
            return <Img fluid={logoExplosion.childImageSharp.fluid} />;

          case 'logoExplosionNoBg':
            return <Img fluid={logoExplosionNoBg.childImageSharp.fluid} />;

          case 'trexNoBg':
            return <Img fluid={trexNoBg.childImageSharp.fluid} />;

          case 'purdeyPortraitLaptop':
            return <Img fluid={purdeyPortraitLaptop.childImageSharp.fluid} />;

          case 'purdeyPortraitStandingUpExplosions':
            return (
              <Img
                fluid={purdeyPortraitStandingUpExplosions.childImageSharp.fluid}
              />
            );

          case '404Large':
            return <Img fluid={notFoundLarge.childImageSharp.fluid} />;

          case 'trexComingSoon':
            return <Img fluid={trexComingSoon.childImageSharp.fluid} />;

          case 'Spanish':
            return <Img fluid={Spanish.childImageSharp.fluid} />;

          case 'English':
            return <Img fluid={English.childImageSharp.fluid} />;

          case 'French':
            return <Img fluid={French.childImageSharp.fluid} />;

          case 'purdeyPortrait':
            return (
              <Img
                fixed={purdeyPortrait.childImageSharp.fixed}
                style={{
                  ...backgroundSectionStyle,
                }}
              />
            );

          case 'purdeyWorkingSmile':
            return (
              <Img
                fluid={purdeyWorkingSmile.childImageSharp.fluid}
                style={{
                  ...backgroundSectionStyle,
                }}
              />
            );

          case 'purdeyWorkingBack':
            return (
              <Img
                fluid={purdeyWorkingBack.childImageSharp.fluid}
                style={{
                  ...backgroundSectionStyle,
                }}
              />
            );

          case 'purdeyWorkingFace':
            return (
              <Img
                fluid={purdeyWorkingFace.childImageSharp.fluid}
                style={{
                  ...backgroundSectionStyle,
                }}
              />
            );

          case 'deskDeco':
            return (
              <Img
                fluid={purdeyWorkingBack.childImageSharp.fluid}
                style={{
                  ...backgroundSectionStyle,
                }}
              />
            );

          case 'rockPaperScissors':
            return (
              <Img
                fixed={rockPaperScissors.childImageSharp.fixed}
                imgStyle={{ objectFit: 'outside' }}
              />
            );

          case 'kwick':
            return (
              <Img
                fixed={kwick.childImageSharp.fixed}
                imgStyle={{ objectFit: 'outside' }}
              />
            );

          case 'HYSAJS':
            return (
              <Img
                fixed={HYSAJS.childImageSharp.fixed}
                imgStyle={{ objectFit: 'outside' }}
              />
            );

          case 'colorGame':
            return (
              <Img
                fixed={colorGame.childImageSharp.fixed}
                imgStyle={{ objectFit: 'outside' }}
              />
            );

          case 'haveyousin':
            return (
              <Img
                fixed={haveyousin.childImageSharp.fixed}
                imgStyle={{ objectFit: 'outside' }}
              />
            );

          case 'legacyPortfolio':
            return (
              <Img
                fixed={legacyPortfolio.childImageSharp.fixed}
                imgStyle={{ objectFit: 'outside' }}
              />
            );

          case 'cpu-monitor-dark-theme':
            return (
              <Img
                fixed={cpuMonitor.childImageSharp.fixed}
                imgStyle={{ objectFit: 'outside' }}
              />
            );

          case 'portfolio':
            return (
              <Img
                fixed={portfolio.childImageSharp.fixed}
                imgStyle={{ objectFit: 'outside' }}
              />
            );

          default:
            return (
              <Img
                fluid={logoExplosion.childImageSharp.fluid}
                style={{
                  ...backgroundProjectStyle,
                }}
              />
            );
        }
      }}
    />
  );
};
export default Image;
