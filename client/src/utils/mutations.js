import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
       token
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
      comment_text
      user {
        id
        username
      }
    }
  }
`;

export const EDIT_COMMENT = gql`
  mutation updateComment($commentId: ID!, $newCommentText: String!) {
    updateComment(commentId: $commentId, newCommentText: $newCommentText) {
      id
      comment_text
      user {
        id
        username
      }
    }
  }
`;
