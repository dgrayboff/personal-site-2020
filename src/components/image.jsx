// import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';

// /*
//  * This component is built using `gatsby-image` to automatically serve optimized
//  * images with lazy loading and reduced file sizes. The image is loaded using a
//  * `useStaticQuery`, which allows us to load the image from directly within this
//  * component, rather than having to pass the image data down from pages.
//  *
//  * For more information, see the docs:
//  * - `gatsby-image`: https://gatsby.dev/gatsby-image
//  * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
//  */

// const Image = (props) => {
//   const { query, sharp, type } = props;
//   const data = useStaticQuery(graphql`
//     query {
//       profPic: file(relativePath: { eq: "profpic_stripes_bw.jpg" }) {
//         childImageSharp {
//           fixed(width: 80, height: 80) {
//             ...GatsbyImageSharpFixed_withWebp_noBase64
//           }
//         }
//       }
//     }
//   `);

//   return <Img fixed={data[query][sharp][type]} />;
// };

// export default Image;
