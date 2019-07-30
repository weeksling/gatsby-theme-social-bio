/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require("path")

require("dotenv").config({
  path: `../.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-social-bio",
      options: {
        twitterCredentials: {
          consumer_key: process.env.TWITTER_CONSUMER_KEY,
          consume_secret: process.env.TWITTER_CONSUMER_SECRET,
          bearer_token: process.env.TWITTER_BEARER_TOKEN,
        },
      },
    },
  ],
}
