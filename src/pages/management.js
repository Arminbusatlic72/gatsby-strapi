import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout/Layout'
import Seo from '../components/seo'
import ManagementSection from '../components/managementSection/ManagemntSection'

const ManagementPage = ({data}) => {
   
    return (
        <Layout>
            <Seo title="Management" />
            <ManagementSection managementData={data.allStrapiManagementPage.edges[0].node} />

        </Layout>
    )
}
export const query = graphql`
query ManagementPageQuery {
    allStrapiManagementPage {
        edges {
          node {
            biography
            heading
            sub_heading
            name
            manager_bio {
              paragraph
              paragraph1
              paragraph2
              paragraph3
              paragraph4
            }
            advisors {
              advisor_image {
                childImageSharp {
                  gatsbyImageData
                }
              }
              advisor_bio
              advisor_name
            }
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
  }
  
`

export default ManagementPage
