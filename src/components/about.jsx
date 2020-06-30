import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetaData';
import './about.scss';

const About = () => {
  const { about1, about2, about3 } = useSiteMetadata();

  return (
    <div id="about">
      <h3>Hi, I&lsquo;m David.</h3>
      <div className="content">
        <p>
          <span>{about2}</span>
        </p>
        <p>{about3}</p>
        <p>{about1}</p>
      </div>
    </div>
  );
};

export default About;
