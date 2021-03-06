module.exports = {
  siteMetadata: {
    title: `skills2bank`,
    description: `Discover your transferable employability skills: use them for interview preparation, applications, assessments, personal statements:  get free app`,
    author: `@gatsbyjs`,
    siteUrl:`https://www.skills2bank.com`,
    image:`src/assets/favicon.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`, 
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: `https://gmail.us2.list-manage.com/subscribe/post?u=665762a3d5158719c0c7278c0&amp;id=ad0108fed4`,
      }
    },
  ]
}
