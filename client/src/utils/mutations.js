import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      id
      username
      email
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
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
  mutation addComment($matchupId: ID!, $userId: ID!, $commentText: String!) {
    addComment(matchupId: $matchupId, userId: $userId, commentText: $commentText) {
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
  mutation editComment($commentId: ID!, $newCommentText: String!) {
    editComment(commentId: $commentId, newCommentText: $newCommentText) {
      id
      comment_text
      user {
        id
        username
      }
    }
  }
`;
