import React from "react"
import { Link } from "gatsby"
import Nav from '../components/nav';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Featured from '../components/featured';
import Home from '../components/home'

const IndexPage = () => (
  <Layout>
    <SEO title="Home"  keywords={[`gatsby`, `application`, `react`]}/>
    <Nav />
    <Featured />
    <Home/>
   
  </Layout>
)

export default IndexPage
