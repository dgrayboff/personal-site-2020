/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import useSiteMetadata from '../hooks/useSiteMetaData';

import Header from './header';
import './layout.css';
import '../styles/global.scss';

const Layout = ({ children }) => {
  const siteData = useSiteMetadata();

  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1100,
        padding: '0.75em 2em 2em 2em'
      }}
      className="layoutWrapper"
    >
      <Header siteTitle={siteData.title} />
      <div>
        <main>{children}</main>
        <footer style={{ fontFamily: 'Roboto Mono', marginTop: '1.45rem' }}>
          ©
          {` ${new Date().getFullYear()} `}
          {` ${siteData.title}`}
        </footer>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
