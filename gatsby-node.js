const path = require(`path`)


const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      return result;
    })
  )
 });



//blog...

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
 

  const getBlog =  graphql(`
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
  `).then(result => {
  
  result.data.allContentfulBlog.edges.forEach(({ node })=> {
    createPage({
      path: `blog/${ node.slug }`,
      component: path.resolve("./src/templates/blog.js"),
      context: {
        slug:node.slug,
        id: node.id
      }
    })
  })
} );



//Create archive page for all blogs, including pagination
const getArchive = makeRequest(graphql, `
  query {
    allContentfulBlog (
   
      edges {
        node {
          id
          slug
        }
      }
    }
  }
`).then(result => {
  const blogs = result.data.allContentfulBlog.edges
  const blogsPerPage = 9
  const numPages = Math.ceil(blogs.length / blogsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/archive.js"),
      context: {
        limit: blogsPerPage,
        skip: i * blogsPerPage,
        numPages,
        currentPage: i + 1
      },
    })
  })
});

return Promise.all([
  getBlog,
  getArchive
  // getTech
 ])
};



