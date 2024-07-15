import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        id
        username
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $userData: UserUpdateInput!) {
    updateUser(id: $id, userData: $userData) {
      id
      username
      email
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      username
      email
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation createComment($debateId: ID!, $userId: ID!, $commentText: String!) {
    createComment(debateId: $debateId, userId: $userId, commentText: $commentText) {
      id
      commentText
      user {
        id
        username
      }
    }
  }
`;

export const EDIT_COMMENT = gql`
  mutation updateComment($id: ID!, $commentText: String!) {
    updateComment(id: $id, commentText: $commentText) {
      id
      commentText
      user {
        id
        username
      }
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment($id: ID!) {
    deleteComment(id: $id) {
      id
      commentText
      user {
        id
        username
      }
    }
  }
`;

export const ADD_REPLY = gql`
  mutation createReply($username: String!, $userId: ID!, $commentId: ID!, $content: String!) {
    createReply(username: $username, userId: $userId, commentId: $commentId, content: $content) {
      id
      content
      username
      userId
      commentId
      createdAt
    }
  }
`;

export const EDIT_REPLY = gql`
  mutation updateReply($id: ID!, $content: String!) {
    updateReply(id: $id, content: $content) {
      id
      content
      createdAt
    }
  }
`;

export const DELETE_REPLY = gql`
  mutation deleteReply($id: ID!) {
    deleteReply(id: $id) {
      id
      content
      createdAt
    }
  }
`;

export const VOTE = gql`
  mutation votes($teamId: ID!, $userId: ID!) {
    votes(teamId: $teamId, userId: $userId) {
      id
      name
      votes {
        id
        username
      }
    }
  }
`;

export const CREATE_TEAM = gql`
  mutation createTeam($name: String!) {
    createTeam(name: $name) {
      id
      name
    }
  }
`;

export const CREATE_DEBATE = gql`
  mutation createDebate($team1Name: String!, $team2Name: String!) {
    createDebate(team1Name: $team1Name, team2Name: $team2Name) {
      id
      team1 {
        id
        name
      }
      team2 {
        id
        name
      }
      status
    }
  }
`;

export const DELETE_DEBATE = gql`
  mutation deleteDebate($id: ID!) {
    deleteDebate(id: $id) {
      id
      team1 {
        id
        name
      }
      team2 {
        id
        name
      }
      status
    }
  }
`;
