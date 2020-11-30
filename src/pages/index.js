import React from 'react';
import { Link } from 'gatsby';
import Nav from '../components/nav';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Featured from '../components/featured';
import Home from '../components/home';
import Footer from '../components/footer';
import './index.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Nav />
    <Featured />
    <Home />
    <Link to="/blog" className="viewmore">
      View Mores
    </Link>
    <Footer />
  </Layout>
);

export default IndexPage;
