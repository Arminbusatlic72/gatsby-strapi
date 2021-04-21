import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout/Layout'
import BoardMembersSection from '../components/boardMembersSection/BoardMembersSection'

const BoardPage = ({data}) => {
  
    return (
        <Layout>
            <BoardMembersSection sectionData={data.allStrapiBoardPage.edges[0].node} />
        </Layout>
    )
        
}
export const query = graphql`
query boardPageQuery {
    allStrapiBoardPage {
      edges {
        node {
          title
          board_member_info {
              id
            board_member_bio
            board_member_email
            board_member_name
            board_member_image {
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
export default BoardPage
