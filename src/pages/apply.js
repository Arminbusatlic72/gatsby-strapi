import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout/Layout'
import Seo from '../components/seo'
import PageHeader from '../components/pageHeader/PageHeader'
import ApplySection from '../components/applySection/ApplySection'
import CreateKnowledgeBase from '../components/applySection/CreateKnowledgeBase'


const ApplyPage = ({data}) => {
    
    return (
        <Layout>
            <Seo title="Apply" />
            <PageHeader headerData={data.allStrapiApplyPage.edges[0].node}/>
            <ApplySection sectionData={data.allStrapiApplyPage.edges[0].node}/>
            <CreateKnowledgeBase />

        </Layout>
    )
}

export const query = graphql`
query MyQuery {
    allStrapiApplyPage {
      edges {
        node {
          verification {
            id
            verification_list_item
          }
          title
          sub_title
          paragraph
          featured_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
  
`



export default ApplyPage
