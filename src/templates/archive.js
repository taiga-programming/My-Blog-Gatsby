import React from 'react';

const Archive = () => {
  return (
    <div>
      Test
    </div>
  )
}
export default Archive;



// export const query = graphql`
//  query ArchiveQuery($skip: Int!, $limit!: Int!) {
//    allcontentfulBlog(id: {eq: $id}) {
//      title
//      id
//      slug
//      content {
//        childMarkdownRemark {
//          html
//        }
//      }
//      seoTitle
//      seoDescription
//      seoAuthor
//      seoKeywords
//      seoImage {
//        fluid(maxWidth: 1200, quality: 100) {
//          ...GatsbyContentfulFluid
//          src
//        }
//      }
//      featuredImage {
//        fluid(maxWidth: 1200, quality: 100) {
//          ...GatsbyContentfulFluid
//          src
//        }
//      }
//    }
//  }
// `
