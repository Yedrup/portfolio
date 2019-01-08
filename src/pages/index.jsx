import React from 'react'
import {
  Link
} from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import {
  StaticQuery,
  graphql
} from 'gatsby'


const IndexPage = () => {

  return ( 
    <StaticQuery 
    query={graphql `
    query IndexPage {
      dataJson {
        homePage {
          title,
          intro
        }
      }
    }
  `}

  render={data => {
      const { title, intro } = data.dataJson.homePage;   
      console.log(data)
     return (
      <Layout>
         <h1 className="c-page__title">{title}</h1>
         <p>{intro}</p>
         <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
           {/* <Image /> */}
         </div>
       </Layout>
      
      )
      
    }
  
  }
  />
  )
}
export default IndexPage

    
    /*
      //     render={data => (
      //       <>
      //       <p>{JSON.stringify(data)}</p>
      //       </>
      //     )
      // }
        // const IndexPage = ({data}) => {
        // const { title } = data.title;
        // console.log("datajson",dataJson)
        //   return (
        //     <Layout>
        //     <h1>Hi {title}</h1>
        //     {/* <p>Welcome to your new Gatsby site.{query.allMarkdownRemark.edges.node.frontmatter.title}</p> */
        //     <p>Now go build something great.</p>
        //     <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        //       <Image />
        //     </div>
        //   </Layout>
        //   )
        // }

        // export default IndexPage
        // export const IndexQuery = graphql`
        // query IndexPage {
        //   dataJson {
        //         title
        //         test
        //   }
        // }*/