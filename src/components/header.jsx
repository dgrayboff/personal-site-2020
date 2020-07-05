import { Link, graphql, useStaticQuery } from 'gatsby';
// import PropTypes from 'prop-types';
import React from 'react';
// import Image from './image';
import './header.css';
import Img from 'gatsby-image';

const headerConfig = {
  menu: ['about', 'work', 'contact'],
};

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profpic_stripes_bw.jpg" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
`);

  return (
    <header
      style={{
        marginBottom: '1.45rem',
      }}
    >
      <ul className="menu">
        <li className="menu-item left">
          <h1 style={{ margin: 0 }}>
            <Link to="/">
              <Img fixed={data.file.childImageSharp.fixed} />
            </Link>
          </h1>
        </li>
        {headerConfig.menu.map((item) => (
          <li key={item} className="menu-item">
            <a href={`#${item}`} key={item}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

// Header.propTypes = {
//   data: PropTypes.object,
// };

Header.defaultProps = {
  data: ''
};

export default Header;
