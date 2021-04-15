import React from 'react'
import Layout from '../components/layout/Layout'
import SEO from '../components/seo'
// import PageHeaderVideo from '../components/pageHeaderVideo/PageHeaderVideo'
import CatalystVideo from '../components/catalystSection/CatalystVideo'
import CatalystSection from '../components/catalystSection/CatalystSection'
const CatalystPage = () => {
    return (
       <Layout>
           <SEO title="Catalyst" />
           <CatalystVideo />
            <CatalystSection />
           
          

       </Layout>
    )
}

export default CatalystPage
