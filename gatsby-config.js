const siteMetadata = require('./site-metadata.json')

module.exports = {
    pathPrefix: '/',
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-source-data`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`
            }
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {}
        },
        {
            resolve: `gatsby-remark-page-creator`,
            options: {}
        },
        {
            resolve: `@stackbit/gatsby-plugin-menus`,
            options: {
                sourceUrlPath: `fields.url`,
                pageContextProperty: `menus`,
            }
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                {
                    site {
                        siteMetadata {
                            title
                            description
                        }
                    }
                }
                `,
                feeds: [
                    {
                        serialize: ({ query: { site, allSitePage } }) => {
                        return allSitePage.nodes.map(node => {
                            return Object.assign({}, node.frontmatter, {
                            description: node.context.frontmatter.title,
                            date: node.context.frontmatter.date,
                            url: site.siteMetadata.siteUrl + node.path,
                            guid: site.siteMetadata.siteUrl + node.id,
                            custom_elements: [{ "content:encoded": node.context.html }],
                            })
                        })
                        },
                        query: `
                        {
                            allSitePage(filter: {context: {frontmatter: {date: {gte: "2020-01-01"}}}}, sort: {order: DESC, fields: context___frontmatter___date}) {
                                nodes {
                                    id
                                    path
                                    context {
                                        name
                                        html
                                        frontmatter {
                                            title
                                            date
                                        }
                                    }
                                }
                            }
                        }
                        `,
                        output: "/rss.xml",
                        title: "Your Site's RSS Feed",
                        // optional configuration to insert feed reference in pages:
                        // if `string` is used, it will be used to create RegExp and then test if pathname of
                        // current page satisfied this regular expression;
                        // if not provided or `undefined`, all pages will have feed reference inserted
                        match: "^/posts/",
                        // optional configuration to specify external rss feed, such as feedburner
                        link: "https://feeds.feedburner.com/gatsby/blog",
                    }
                ]
            }
        }
    ]
};
