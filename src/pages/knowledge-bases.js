import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout/Layout'
import Seo from '../components/seo';
import PageHeader from '../components/pageHeader/PageHeader'
import KnowledgeAndWisdomSection from '../components/knowledgeAndWisdomSection/KnowledgeAndWisdomSection'
import PlannedKnowledgeBasesSection from '../components/plannedKnowledgeBases/PlannedKnowledgeBasesSection'
import ProposeKnowledgeBaseSection from '../components/plannedKnowledgeBases/ProposeKnowledgeBaseSection'

const KnowledgeBasePage = ({data}) => {
    
    return (
        <Layout>
            <Seo title="Knowledge Base" />
            <PageHeader headerData={data.allStrapiKnowledgeBase.edges[0].node} />
            <KnowledgeAndWisdomSection sectionData={data.allStrapiKnowledgeBase.edges[0].node} />
            <PlannedKnowledgeBasesSection sectionData={data.allStrapiKnowledgeBase.edges[0].node} />
            <ProposeKnowledgeBaseSection />
        </Layout>
    )
}
export const query = graphql`
query KnowledgeBasePageQuery {
    allStrapiKnowledgeBase {
      edges {
        node {
          title
          sub_title
          featured_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          knowledge_base_list {
            id
            knowledge_base_list_item
          }
          section {
            id
            section_alignment
            section_title
            section_list {
              knowledge_base_list_item
            }
            section_image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
  


`
export default KnowledgeBasePage
