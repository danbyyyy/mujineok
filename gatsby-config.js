module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "stellarity",
  },
  plugins: [
    
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
     {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: "./src/markdown/",
      },
    },
    "gatsby-plugin-mdx"
  ],
};
