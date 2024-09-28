/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  email: string,
  avatar?: string | null,
  userName: string,
};

export type User = {
  __typename: "User",
  id: string,
  userName: string,
  email: string,
  avatar?: string | null,
  conversations?:  Array<Conversation | null > | null,
};

export type Conversation = {
  __typename: "Conversation",
  id: string,
  contactName: string,
  lastMessage?:  Array<Message | null > | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  content: string,
  timestamp: string,
  senderId: string,
  receiverId: string,
};

export type CreateConversationInput = {
  contactName: string,
  contactId: string,
  userId: string,
  message: string,
  userName: string,
};

export type TransactionConnection = {
  __typename: "TransactionConnection",
  keys?:  Array<TransactionKey | null > | null,
  cancellationReasons?: string | null,
};

export type TransactionKey = {
  __typename: "TransactionKey",
  id: string,
  typeId: string,
};

export type SendMessageInput = {
  content: string,
  conversationId: string,
  contactId: string,
  userId: string,
};

export type UserConnection = {
  __typename: "UserConnection",
  items:  Array<User >,
  nextToken?: string | null,
};

export type ConverstaionConnection = {
  __typename: "ConverstaionConnection",
  items:  Array<Conversation >,
  nextToken?: string | null,
};

export type MessageConnection = {
  __typename: "MessageConnection",
  items:  Array<Message >,
  nextToken?: string | null,
};

export type CreateUserMutationVariables = {
  createUserInput: CreateUserInput,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    userName: string,
    email: string,
    avatar?: string | null,
    conversations?:  Array< {
      __typename: "Conversation",
      id: string,
      contactName: string,
    } | null > | null,
  },
};

export type CreateConversationMutationVariables = {
  createConversationInput: CreateConversationInput,
};

export type CreateConversationMutation = {
  createConversation:  {
    __typename: "TransactionConnection",
    keys?:  Array< {
      __typename: "TransactionKey",
      id: string,
      typeId: string,
    } | null > | null,
    cancellationReasons?: string | null,
  },
};

export type SendMessageMutationVariables = {
  sendMessageInput: SendMessageInput,
};

export type SendMessageMutation = {
  sendMessage:  {
    __typename: "TransactionConnection",
    keys?:  Array< {
      __typename: "TransactionKey",
      id: string,
      typeId: string,
    } | null > | null,
    cancellationReasons?: string | null,
  },
};

export type GetUserQueryVariables = {
  email: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "UserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      userName: string,
      email: string,
      avatar?: string | null,
    } >,
    nextToken?: string | null,
  },
};

export type GetContactsQueryVariables = {
  userId: string,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetContactsQuery = {
  getContacts:  {
    __typename: "UserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      userName: string,
      email: string,
      avatar?: string | null,
    } >,
    nextToken?: string | null,
  },
};

export type GetConversationsQueryVariables = {
  userId: string,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetConversationsQuery = {
  getConversations:  {
    __typename: "ConverstaionConnection",
    items:  Array< {
      __typename: "Conversation",
      id: string,
      contactName: string,
    } >,
    nextToken?: string | null,
  },
};

export type GetMessagesQueryVariables = {
  conversationId: string,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetMessagesQuery = {
  getMessages:  {
    __typename: "MessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      content: string,
      timestamp: string,
      senderId: string,
      receiverId: string,
    } >,
    nextToken?: string | null,
  },
};
