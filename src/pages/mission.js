import React from 'react'
import Layout from '../components/layout/Layout'
import SEO from '../components/seo'
import PageHeader from '../components/pageHeader/PageHeader'
import OurMission from '../components/ourMission/OurMission'


const MissionPage = () => {
    
    return (
        <Layout>
            <SEO title="Mission" />
            <PageHeader  />
            <OurMission />

        </Layout>
            
        
    )
}

export default MissionPage
