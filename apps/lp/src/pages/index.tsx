import React from "react"
import Layout from "../components/layout/index"
import {Seo} from "../components/layout/seo"
import { HeroSection } from "../sections"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
  </Layout>
)

export default IndexPage
