module.exports = {
  siteMetadata: {
    title: `@pauliescanlon/gatsby-remark-grid-system`,
    description: `gatsby-remark-grid-system is a plugin that creates sticky header tables from markdown.`,
    siteURL: "https://gatsby-remark-grid-system.netlify.com",
    siteImage: "remark-grid-system-og-image.jpg",
    author: "@pauliescanlon",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: `${__dirname}/src/layouts/layout.js`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `@pauliescanlon/gatsby-remark-grid-system`,
            options: {
              // padding: 16,
              // debug: true,
              // breakpoints: [576, 768, 992, 1200],
            },
          },
        ],
      },
    },
  ],
}
