import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
import React from 'react';
import './header.css';

const headerConfig = {
  menu: ['about', 'projects', 'contact'],
};

const Header = () => {
  return (
    <header
      style={{
        marginBottom: '1.45rem',
      }}
    >
      <ul className="menu">
        <li className="menu-item left">
          <h1 style={{ margin: 0 }}>
            <Link to="/">dg</Link>
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
//   siteTitle: PropTypes.string,
// };

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
