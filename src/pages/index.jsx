import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';
import Hero from '../components/hero';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Projects />
    <Contact />
  </Layout>
);

export default IndexPage;
