/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($email: String!) {
  getUser(email: $email) {
    items {
      id
      userName
      email
      avatar
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const getContacts = /* GraphQL */ `query GetContacts($userId: ID!, $limit: Int, $nextToken: String) {
  getContacts(userId: $userId, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userName
      email
      avatar
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetContactsQueryVariables,
  APITypes.GetContactsQuery
>;
export const getConversations = /* GraphQL */ `query GetConversations($userId: ID!, $limit: Int, $nextToken: String) {
  getConversations(userId: $userId, limit: $limit, nextToken: $nextToken) {
    items {
      id
      contactName
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetConversationsQueryVariables,
  APITypes.GetConversationsQuery
>;
export const getMessages = /* GraphQL */ `query GetMessages($conversationId: ID!, $limit: Int, $nextToken: String) {
  getMessages(
    conversationId: $conversationId
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      timestamp
      senderId
      receiverId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMessagesQueryVariables,
  APITypes.GetMessagesQuery
>;
