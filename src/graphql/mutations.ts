/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser($payload: createUserInput) {
  createUser(payload: $payload) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser($payload: updateUserInput) {
  updateUser(payload: $payload) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const addContact = /* GraphQL */ `mutation AddContact($payload: addContactInput) {
  addContact(payload: $payload) {
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
` as GeneratedMutation<
  APITypes.AddContactMutationVariables,
  APITypes.AddContactMutation
>;
export const createConversation = /* GraphQL */ `mutation CreateConversation($payload: createConversationInput!) {
  createConversation(payload: $payload) {
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
` as GeneratedMutation<
  APITypes.CreateConversationMutationVariables,
  APITypes.CreateConversationMutation
>;
export const sendMessage = /* GraphQL */ `mutation SendMessage($payload: sendMessageInput) {
  sendMessage(payload: $payload) {
    id
    conversation {
      id
      createdAt
      updatedAt
      __typename
    }
    sender {
      id
      username
      email
      avatar
      __typename
    }
    content
    timestamp
    __typename
  }
}
` as GeneratedMutation<
  APITypes.SendMessageMutationVariables,
  APITypes.SendMessageMutation
>;
