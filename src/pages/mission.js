import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout/Layout'
import Seo from '../components/seo'
import PageHeader from '../components/pageHeader/PageHeader'
import OurMission from '../components/ourMission/OurMission'


const MissionPage = ({data}) => {
    console.log(data)
    
    return (
        <Layout>
            <Seo title="Mission" />
            <PageHeader headerData={data.allStrapiMissionPage.edges[0].node}/>
            <OurMission sectionData={data.allStrapiMissionPage.edges[0].node} />

        </Layout>
            
        
    )
}
export const query = graphql`
query MissionPageQuery {
    allStrapiMissionPage {
      edges {
        node {
          featured_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          text
          title
        }
      }
    }
  }
  
`
export default MissionPage
