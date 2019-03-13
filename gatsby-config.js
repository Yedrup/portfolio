module.exports = {
  siteMetadata: {
    title: 'Purdey Chambraud',
    description:"Hi! Welcome on my portfolio! I'm an enthusiastic Front-End Developer living in Paris area!",
    siteUrl: 'https://www.purdeychambraud.com',
    httpEquiv: 'http-equiv'
    
    
  },
  plugins: [
    `gatsby-transformer-json`,
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lato`,
          `Alegreya`,
          `Bubblegum Sans` // you can also specify font weights and styles
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `data`,
    //     path: `${__dirname}/src/markdownData`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: `data`,
        // typeName: `Json`,
      },
    },
    // 'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Purdey's portfolio",
        short_name: 'portfolio',
        start_url: '/playground/gatsbyreactnewfolio/',
        background_color: '#519f94',
        theme_color: '#519f94',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
    pathPrefix: `/playground/gatsbyreactnewfolio`,
}
