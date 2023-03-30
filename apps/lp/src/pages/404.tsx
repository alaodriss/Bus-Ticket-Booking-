import * as React from "react"

import Layout from "../components/layout/index"
import {Seo} from "../components/layout/seo"


const notFoundPage = () => (
  <Layout>
     <Seo title="404: Not Found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)


export default notFoundPage
