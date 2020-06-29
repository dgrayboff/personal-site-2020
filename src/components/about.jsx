import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetaData';
import './about.scss';

const About = () => {
  const { about1, about2, about3 } = useSiteMetadata();

  return (
    <div id="about">
      <h3>About</h3>
      <div className="content">
        <p>{about1}</p>
        <p>
          <span>{about2}</span>
        </p>
        <p>{about3}</p>
      </div>
    </div>
  );
};

export default About;
