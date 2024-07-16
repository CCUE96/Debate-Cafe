import { gql } from '@apollo/client';

export const QUERY_TEAMS = gql`
  query getTeams {
    teams {
      id
      name
      votes {
        id
        username
      }
    }
  }
`;

export const QUERY_TEAM = gql`
  query getTeam($teamId: ID!) {
    team(id: $teamId) {
      id
      name
      votes {
        id
        username
      }
    }
  }
`;

export const QUERY_DEBATES = gql`
  query getDebates {
    debates {
      _id
      team1 {
        id
        name
      }
      team2 {
        id
        name
      }
      winner {
        id
        name
      }
      status
      comments {
        id
        commentText
        user {
          id
          username
        }
        createdAt
        replies {
          id
          content
          username
          userId
          commentId
          createdAt
        }
      }
    }
  }
`;

export const QUERY_DEBATE = gql`
  query getDebate($debateId: ID!) {
    debate(id: $debateId) {
      _id
      team1 {
        id
        name
      }
      team2 {
        id
        name
      }
      winner {
        id
        name
      }
      status
      comments {
        id
        commentText
        user {
          id
          username
        }
        createdAt
        replies {
          id
          content
          username
          userId
          commentId
          createdAt
        }
      }
    }
  }
`;

export const QUERY_USERS = gql`
  query getUsers {
    users {
      id
      username
      email
    }
  }
`;

export const QUERY_USER = gql`
  query getUser($userId: ID!) {
    user(id: $userId) {
      id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      id
      username
      email
    }
  }
`;
