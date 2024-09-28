/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser($createUserInput: CreateUserInput!) {
  createUser(createUserInput: $createUserInput) {
    id
    userName
    email
    avatar
    conversations {
      id
      contactName
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const createConversation = /* GraphQL */ `mutation CreateConversation(
  $createConversationInput: CreateConversationInput!
) {
  createConversation(createConversationInput: $createConversationInput) {
    keys {
      id
      typeId
      __typename
    }
    cancellationReasons
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateConversationMutationVariables,
  APITypes.CreateConversationMutation
>;
export const sendMessage = /* GraphQL */ `mutation SendMessage($sendMessageInput: SendMessageInput!) {
  sendMessage(sendMessageInput: $sendMessageInput) {
    keys {
      id
      typeId
      __typename
    }
    cancellationReasons
    __typename
  }
}
` as GeneratedMutation<
  APITypes.SendMessageMutationVariables,
  APITypes.SendMessageMutation
>;
