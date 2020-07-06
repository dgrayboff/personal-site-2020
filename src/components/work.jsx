import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import './work.scss';

export const clientImage = graphql`
  fragment clientImage on File {
    childImageSharp {
      fluid(maxWidth: 150, quality: 100) {
        ...GatsbyImageSharpFluid_noBase64
        ...GatsbyImageSharpFluidLimitPresentationSize
      }
    }
  }
`;

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
              }
              amex: file(relativePath: { eq: "clients/amex-logo.png" }) {
                ...clientImage
              }
              avis: file(relativePath: { eq: "clients/avis-logo.jpg" }) {
                ...clientImage
              }
              budget: file(relativePath: { eq: "clients/budget-logo.png" }) {
                ...clientImage
              }
              barnes: file(relativePath: { eq: "clients/bn-logo.jpg" }) {
                ...clientImage
              }
              uber: file(relativePath: { eq: "clients/uber-logo.png" }) {
                ...clientImage
              }
            }
          `}
          render={(data) => (
            <div className="clients-image-wrapper">
              {Object.keys(data).map((keyName) => (
                <Img fluid={data[keyName].childImageSharp.fluid} key={keyName} />
              ))}
            </div>
          )}
        />
      </div>
    </div>
  </div>
);

export default Work;
