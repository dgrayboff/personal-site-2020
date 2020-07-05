import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import './work.scss';

// export const clientImage = graphql`
//   fragment clientImage on File {
//     childImageSharp {
//       fluid(maxWidth: 200, maxHeight: 200) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `;

// export const query = graphql`
//   query {
//     amex: file(relativePath: { eq: "images/clients/amex-logo.png" }) {
//       ...clientImage
//     }
//     avis: file(relativePath: { eq: "images/clients/avis-logo.jpg" }) {
//       ...clientImage
//     }
//     barnes: file(relativePath: { eq: "images/clients/bn-logo.jpg" }) {
//       ...clientImage
//     }
//   }
// `;

// console.log(query.childImageSharp)

const Work = () => (
  <div id="work">
    <h3>Work</h3>
    <div className="content">
      <h4>
        I've built: landing pages, retail product page redesigns, product cart
        modules, checkout flow redesigns, promo banners, navigation menus, and
        more.
      </h4>
      <p>Clients' sites I've worked on:</p>
      <div className="clients">
        Clients
        <StaticQuery
          query={graphql`
            query {
              amex: file(relativePath: { eq: "clients/amex-logo.png" }) {
                childImageSharp {
                  fluid(maxWidth: 175, quality: 100) {
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluidLimitPresentationSize
                  }
                }
              }
            }
          `}
          render={(data) => (
            <div>
              <Img fluid={data.amex.childImageSharp.fluid} />
            </div>
          )}
        />
      </div>
    </div>
  </div>
);

export default Work;
