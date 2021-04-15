import React from 'react'
import Layout from '../components/layout/Layout'
import SEO from '../components/seo';
import PageHeader from '../components/pageHeader/PageHeader1'
import KnowledgeAdWisdomSection from '../components/knowledgeAndWisdomSection/KowledgeAndWisdomSection'
import PlannedKnowledgeBasesSection from '../components/plannedKnowledgeBases/PlannedKnowledgeBasesSection'

function KnowledegeBasePage() {
    return (
        <Layout>
            <SEO title="Knowledege Base" />
            <PageHeader />
            <KnowledgeAdWisdomSection />
            <PlannedKnowledgeBasesSection />
        </Layout>
    )
}

export default KnowledegeBasePage
