
const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions


  const { data }= await graphql(`
    query {
      allContentfulBlog {
        edges {
          node {
            slug 
            id
          }
        }
      }
    }
  `)
  
  data.allContentfulBlog.edges.forEach(({ node })=> {
    createPage({
      path: `blog/${ node.slug }`,
      component: path.resolve("./src/templates/blog.js"),
      context: {
        slug:node.slug,
        id: node.id
      }
    })
  })
} 


// const path = require(`path`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   const blogTemplate = path.resolve(`src/templates/blog.js`)
//   return graphql(`
//     query loadPagesQuery ($limit: Int!) {
//       allContentfulBlog(limit: $limit) {
//         edges {
//           nodes {
//             node { 
//               allMarkdownRemark {
//                 id 
//                 slug
//               }
//             }
//           }
//         }
//       }
//     }
//   `, { limit: 100000 }).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }

//     // Create blog post pages.
//     result.data.allMarkdownRemark.edges.forEach( edge=> { 
//       createPage({
//         path:  `/blog/${edge.slug}`,
//         component:  blogTemplate,
//         context: {
//           id: node.id
//         },
//       })
//     })
//   })
// }

