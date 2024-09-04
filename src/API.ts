/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type createUserInput = {
  username: string,
  email: string,
  avatar?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  email: string,
  avatar?: string | null,
  contacts?:  Array<User | null > | null,
  conversations?:  Array<Conversation | null > | null,
};

export type Conversation = {
  __typename: "Conversation",
  id: string,
  participants:  Array<User >,
  messages?:  Array<Message | null > | null,
  lastMessage?: Message | null,
  createdAt: string,
  updatedAt: string,
};

export type Message = {
  __typename: "Message",
  id: string,
  conversation: Conversation,
  sender: User,
  content: string,
  timestamp: string,
};

export type updateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
  avatar?: string | null,
};

export type addContactInput = {
  id: string,
  username?: string | null,
  email?: string | null,
  avatar?: string | null,
};

export type createConversationInput = {
  participantIds?: Array< string > | null,
};

export type sendMessageInput = {
  conversationId: string,
  senderId: string,
  content: string,
};

export type getRessourceById = {
  id: string,
};

export type MessageConnection = {
  __typename: "MessageConnection",
  items?:  Array<Message | null > | null,
  nextToken?: string | null,
};

export type CreateUserMutationVariables = {
  payload?: createUserInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    avatar?: string | null,
    contacts?:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      avatar?: string | null,
    } | null > | null,
    conversations?:  Array< {
      __typename: "Conversation",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  payload?: updateUserInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    avatar?: string | null,
    contacts?:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      avatar?: string | null,
    } | null > | null,
    conversations?:  Array< {
      __typename: "Conversation",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
  } | null,
};

export type AddContactMutationVariables = {
  payload?: addContactInput | null,
};

export type AddContactMutation = {
  addContact?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    avatar?: string | null,
    contacts?:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      avatar?: string | null,
    } | null > | null,
    conversations?:  Array< {
      __typename: "Conversation",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
  } | null,
};

export type CreateConversationMutationVariables = {
  payload: createConversationInput,
};

export type CreateConversationMutation = {
  createConversation?:  {
    __typename: "Conversation",
    id: string,
    participants:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      avatar?: string | null,
    } >,
    messages?:  Array< {
      __typename: "Message",
      id: string,
      content: string,
      timestamp: string,
    } | null > | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      content: string,
      timestamp: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SendMessageMutationVariables = {
  payload?: sendMessageInput | null,
};

export type SendMessageMutation = {
  sendMessage?:  {
    __typename: "Message",
    id: string,
    conversation:  {
      __typename: "Conversation",
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    sender:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      avatar?: string | null,
    },
    content: string,
    timestamp: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: getRessourceById,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    avatar?: string | null,
    contacts?:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      avatar?: string | null,
    } | null > | null,
    conversations?:  Array< {
      __typename: "Conversation",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
  } | null,
};

export type GetConversationQueryVariables = {
  id: getRessourceById,
};

export type GetConversationQuery = {
  getConversation?:  {
    __typename: "Conversation",
    id: string,
    participants:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      avatar?: string | null,
    } >,
    messages?:  Array< {
      __typename: "Message",
      id: string,
      content: string,
      timestamp: string,
    } | null > | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      content: string,
      timestamp: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserConversationsQueryVariables = {
  userId: getRessourceById,
};

export type GetUserConversationsQuery = {
  getUserConversations?:  Array< {
    __typename: "Conversation",
    id: string,
    participants:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      avatar?: string | null,
    } >,
    messages?:  Array< {
      __typename: "Message",
      id: string,
      content: string,
      timestamp: string,
    } | null > | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      content: string,
      timestamp: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null > | null,
};

export type GetMessagesQueryVariables = {
  conversationId: getRessourceById,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetMessagesQuery = {
  getMessages?:  {
    __typename: "MessageConnection",
    items?:  Array< {
      __typename: "Message",
      id: string,
      content: string,
      timestamp: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};
