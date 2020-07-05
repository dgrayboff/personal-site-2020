import { Link } from 'gatsby';
import React from 'react';
import Image from './image';
import './header.css';

const headerConfig = {
  menu: ['about', 'work', 'contact'],
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
            <Link to="/">
              <Image query="profPic" sharp="childImageSharp" type="fixed" />
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
  data: '',
};

export default Header;
