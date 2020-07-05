import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import './work.scss';

export const clientImage = graphql`
  fragment clientImage on File {
    childImageSharp {
      fluid(maxWidth: 150, quality: 100) {
        ...GatsbyImageSharpFluid
        ...GatsbyImageSharpFluidLimitPresentationSize
      }
    }
  }
`;

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
        <StaticQuery
          query={graphql`
            query {
              ua: file(relativePath: { eq: "clients/ua-logo.png" }) {
                ...clientImage
              },
              amex: file(relativePath: { eq: "clients/amex-logo.png" }) {
                ...clientImage
              },
              avis: file(relativePath: { eq: "clients/avis-logo.jpg" }) {
                ...clientImage
              },
              budget: file(relativePath: { eq: "clients/budget-logo.png" }) {
                ...clientImage
              },
              barnes: file(relativePath: { eq: "clients/bn-logo.jpg" }) {
                ...clientImage
              },
              uber: file(relativePath: { eq: "clients/uber-logo.png" }) {
                ...clientImage
              },
            }
          `}
          render={(data) => (
            <div className="clients-image-wrapper">
              <Img fluid={data.amex.childImageSharp.fluid} />
              <Img fluid={data.avis.childImageSharp.fluid} />
              <Img fluid={data.budget.childImageSharp.fluid} />
              <Img fluid={data.ua.childImageSharp.fluid} />
              <Img fluid={data.uber.childImageSharp.fluid} />
              <Img fluid={data.barnes.childImageSharp.fluid} />
            </div>
          )}
        />
      </div>
    </div>
  </div>
);

export default Work;
