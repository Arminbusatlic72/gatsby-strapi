import React from 'react'
import Layout from '../components/layout/Layout'
import SEO from '../components/seo'
import ManagementSection from '../components/managementSection/ManagemntSection'

const ManagementPage = () => {
    return (
        <Layout>
            <SEO title="Management" />
            <ManagementSection />

        </Layout>
    )
}

export default ManagementPage
