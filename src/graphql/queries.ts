/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: getRessourceById!) {
  getUser(id: $id) {
    id
    username
    email
    avatar
    contacts {
      id
      username
      email
      avatar
      __typename
    }
    conversations {
      id
      createdAt
      updatedAt
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const getConversation = /* GraphQL */ `query GetConversation($id: getRessourceById!) {
  getConversation(id: $id) {
    id
    participants {
      id
      username
      email
      avatar
      __typename
    }
    messages {
      id
      content
      timestamp
      __typename
    }
    lastMessage {
      id
      content
      timestamp
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetConversationQueryVariables,
  APITypes.GetConversationQuery
>;
export const getUserConversations = /* GraphQL */ `query GetUserConversations($userId: getRessourceById!) {
  getUserConversations(userId: $userId) {
    id
    participants {
      id
      username
      email
      avatar
      __typename
    }
    messages {
      id
      content
      timestamp
      __typename
    }
    lastMessage {
      id
      content
      timestamp
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserConversationsQueryVariables,
  APITypes.GetUserConversationsQuery
>;
export const getMessages = /* GraphQL */ `query GetMessages(
  $conversationId: getRessourceById!
  $limit: Int
  $nextToken: String
) {
  getMessages(
    conversationId: $conversationId
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      timestamp
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
