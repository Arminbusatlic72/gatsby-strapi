import React from 'react'
import Layout from '../components/layout/Layout'
import SEO from '../components/seo'
import PageHeader2 from '../components/pageHeader/PageHeader2'
import ApplySection from '../components/applySection/ApplySection'
import CreateKnowledgeBase from '../components/applySection/CreateKnowledgeBase'


const ApplyPage = () => {
    return (
        <Layout>
            <SEO title="Apply" />
            <PageHeader2 />
            <ApplySection />
            <CreateKnowledgeBase />

        </Layout>
    )
}

export default ApplyPage
