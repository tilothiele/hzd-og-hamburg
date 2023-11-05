import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  pathPrefix: "/hzd-og-hamburg",
  siteMetadata: {
    title: 'HZD Ortsgruppe Hamburg',
    description: 'HZD Ortsgruppe Hamburg',
    image: '/images/favicon.png',
    siteUrl: 'https://hzd-og-hamburg.de'
  },
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    `gatsby-plugin-pnpm`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "HZD Ortsgruppe Hamburg",
        short_name: "HZD OG HH",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/favicon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    }
  ],
  jsxRuntime: `automatic`,
};

export default config;
