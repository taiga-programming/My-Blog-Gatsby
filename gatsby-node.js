const path = require(`path`)

exports.createPages = async ({ actions, graphql}) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog.js`)
  const result = await graphql(`
  query {
    allContentfulBlog {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
`)
  result.data.allContentfulBlog.edges.forEach( ({ node }) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: blogPostTemplate,
      context: {
        id: node.id,
        slug: node.slug
      },
    })
  })
}
