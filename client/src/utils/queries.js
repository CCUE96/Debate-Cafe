import { gql } from '@apollo/client';

export const Query_TEAM = gql`
{
 team {
     id
     name
     votes
     members {
         id
         username
     }
 }
}
`

export const Query_DEBATES = gql`
    {

        debates {
            id
            team1 {
                id
                name
                votes
                members {
                    id
                    username
                }
            }
            team2 {
                id
                name
                votes
                members {
                    id
                    username
                }
            }
            winner {
                id
                name
                votes
                members {
                    id
                    username
                }
            }
            status
        
        }
`

export const Query_USER = gql`
{
    user {
        id
        username
        email
        debates {
            id
            team1 {
                id
                name
                votes
                members {
                    id
                    username
                }
            }
            team2 {
                id
                name
                votes
                members {
                    id
                    username
                }
            }
            winner {
                id
                name
                votes
                members {
                    id
                    username
                }
            }
            status
        }
    }
}  
`

export const AUTH = gql`
    auth {
     token {
         id
     }
         user {
          User}
    }
`

export const COMMENT = gql`

{

    comment {
        id
        commentText
        user {
            User
        }
    }
}
`

export const REPLY = gql`
{
    reply {
        id
        replyText
        user {
            User
        }
    }
}
`