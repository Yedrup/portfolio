
import React from "react"
import './layout.css'
import '../pages/css/variables.css'
import Header from './header'
import Footer from "./footer"
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query Layout {
        site {
          siteMetadata {
            title
            description,
            httpEquiv
          }
        }
      }
    `}

    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: 'portfolio, front-End, developer,Paris' },
            { [data.site.siteMetadata.httpEquiv]: 'Content-Security-Policy', content: 'upgrade-insecure-requests' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle="Purdey Chambraud" />
        <div style={{ margin: `0`, maxWidth: 650,minHeight: "70vh", padding: `0 1rem`, flex:"1",display:"flex", flexDirection:"column" }}>
          {children}
        </div>
        <Footer/>
      </>
    )}
  />
)

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout





// import React from 'react'
// import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
// import { StaticQuery, graphql } from 'gatsby'

// import Header from './header'
// import './layout.css'


// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Helmet
//           title={data.site.siteMetadata.title}
//           meta={[
//             { name: 'description', content: 'Sample' },
//             { name: 'keywords', content: 'sample, something' },
//           ]}
//         >
//           <html lang="en" />
//         </Helmet>
//         <Header siteTitle={data.site.siteMetadata.title} />
//         <div
//           style={{
//             margin: '0 auto',
//             maxWidth: 960,
//             padding: '0px 1.0875rem 1.45rem',
//             paddingTop: 0,
//           }}
//         >
//           {children}
//         </div>
//       </>
//     )}
//   />
// )

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout
