
// // Create travel category page, including pagination
// const getTravel = makeRequest(graphql, `
// {
//   allContentfulBlog (
//     sort: { fields: [createdAt], order: DESC }
//     filter: {
//       categories: {elemMatch: {category: {eq: "Travel"}}}
//     },)
//   {
//     edges {
//       node {
//         id
//         slug
//       }
//     }
//   }
// }
// `).then(result => {
//   const blogs = result.data.allContentfulBlog.edges
//   const blogsPerPage = 9
//   const numPages = Math.ceil(blogs.length / blogsPerPage)

//   Array.from({ length: numPages }).forEach((_, i) => {
//     createPage({
//       path: i === 0 ? `/category/travel` : `/category/travel/${i + 1}`,
//       component: path.resolve("./src/templates/travel.js"),
//       context: {
//         limit: blogsPerPage,
//         skip: i * blogsPerPage,
//         numPages,
//         currentPage: i + 1
//       },
//     })
//   })
// });

// Create guide category page, including pagination
// const getLanguages = makeRequest(graphql, `
// {
//   allContentfulBlog (
//     sort: { fields: [createdAt], order: DESC }
//     filter: {
  
//       categories: {elemMatch: {category: {eq: "Languages"}}}
//     },)
//   {
//     edges {
//       node {
//         id
//         slug
//       }
//     }
//   }
// }
// `).then(result => {
//   const blogs = result.data.allContentfulBlog.edges
//   const blogsPerPage = 9
//   const numPages = Math.ceil(blogs.length / blogsPerPage)

//   Array.from({ length: numPages }).forEach((_, i) => {
//     createPage({
//       path: i === 0 ? `/category/guide` : `/category/languages/${i + 1}`,
//       component: path.resolve("./src/templates/languages.js"),
//       context: {
//         limit: blogsPerPage,
//         skip: i * blogsPerPage,
//         numPages,
//         currentPage: i + 1
//       },
//     })
//   })
// });

// Create opinion category page, including pagination
// const getLifehack = makeRequest(graphql, `
// {
//   allContentfulBlog (
//     sort: { fields: [createdAt], order: DESC }
//     filter: {
//       categories: {elemMatch: {category: {eq: "lifehack"}}}
//     },)
//   {
//     edges {
//       node {
//         id
//         slug
//       }
//     }
//   }
// }
// `).then(result => {
//   const blogs = result.data.allContentfulBlog.edges
//   const blogsPerPage = 9
//   const numPages = Math.ceil(blogs.length / blogsPerPage)

//   Array.from({ length: numPages }).forEach((_, i) => {
//     createPage({
//       path: i === 0 ? `/category/lifehack` : `/category/lifehack/${i + 1}`,
//       component: path.resolve("./src/templates/lifehack.js"),
//       context: {
//         limit: blogsPerPage,
//         skip: i * blogsPerPage,
//         numPages,
//         currentPage: i + 1
//       },
//     })
//   })
// });

