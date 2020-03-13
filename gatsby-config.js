const path = require('path')

module.exports = ({ root }) => ({
  pathPrefix: '/gatsby-starter-blog',
  plugins: [
    'gatsby-transformer-yaml',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/data`,
        name: 'data',
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `src/pages`,
        name: 'pages',
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
})
