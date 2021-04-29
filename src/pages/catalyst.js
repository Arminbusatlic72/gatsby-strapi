import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout/Layout'
import Seo from '../components/seo'
import CatalystVideo from '../components/catalystSection/CatalystVideo'
import CatalystSection from '../components/catalystSection/CatalystSection'
const CatalystPage = ({data}) => {
    
    return (
       <Layout>
           <Seo title="Catalyst" />
           <CatalystVideo />
            <CatalystSection sectionData ={data.allStrapiCatalystPage.edges[0].node} />
       </Layout>
    )
}
export const query = graphql`
query CatalysPagrQuery {
    allStrapiCatalystPage {
      edges {
        node {
          title
          sub_title
          paragraph
          link_url
        }
      }
    }
  }
  

`
export default CatalystPage
