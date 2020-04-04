const sharedFontOpts = {
  subsets: ["cyrillic"],
  fontDisplay: "block",
  strategy: "selfHosted",
};

module.exports = {
  siteMetadata: {
    title: "Lighty — создание сайтов",
    lang: "ru",
    // HACK: using arrays so that graphql doesn't add absent fields to items
    meta: [
      [
        ["name", "viewport"],
        ["content", "width=device-width, initial-scale=1, shrink-to-fit=no"],
      ],
      [
        ["name", "author"],
        ["content", "lighty.agency"],
      ],
      [
        ["name", "description"],
        ["content", "Делаем быстрые сайты, максимизирующие продажи"],
      ],
    ],
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Lighty",
        short_name: "Lighty",
        start_url: "/",
        background_color: "#8CE2CF",
        theme_color: "#8CE2CF",
        display: "minimal-ui",
        icon: "src/images/icons/maskable_icon.png",
        include_favicon: false,
        icons: [48, 72, 96, 144, 192, 256, 512].map((res) => ({
          src: `icons/maskable_icon-${res}_x_${res}.png`,
          sizes: `${res}x${res}`,
          type: "image/png",
          purpose: "maskable any",
        })),
      },
    },
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/layout/index.jsx"),
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto Slab",
              variants: ["400"],
              ...sharedFontOpts,
            },
            {
              family: "Roboto",
              variants: ["400", "500"],
              ...sharedFontOpts,
            },
          ],
        },
      },
    },
    // "gatsby-plugin-preact",
  ],
};
