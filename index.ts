import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";
import { initSchema } from "@aws-amplify/datastore";

import { schema } from "./schema";





type EagerConversationModel = {
  readonly createdAt: string;
  readonly id: string;
  readonly lastMessage?: Message | null;
  readonly messages?: (Message | null)[] | null;
  readonly participants: User[];
  readonly updatedAt: string;
}

type LazyConversationModel = {
  readonly createdAt: string;
  readonly id: string;
  readonly lastMessage?: Message | null;
  readonly messages?: (Message | null)[] | null;
  readonly participants: User[];
  readonly updatedAt: string;
}

export declare type ConversationModel = LazyLoading extends LazyLoadingDisabled ? EagerConversationModel : LazyConversationModel

export declare const ConversationModel: (new (init: ModelInit<ConversationModel>) => ConversationModel)

type EagerMessageModel = {
  readonly content: string;
  readonly conversation: Conversation;
  readonly id: string;
  readonly sender: User;
  readonly timestamp: string;
}

type LazyMessageModel = {
  readonly content: string;
  readonly conversation: Conversation;
  readonly id: string;
  readonly sender: User;
  readonly timestamp: string;
}

export declare type MessageModel = LazyLoading extends LazyLoadingDisabled ? EagerMessageModel : LazyMessageModel

export declare const MessageModel: (new (init: ModelInit<MessageModel>) => MessageModel)

type EagerMessageConnectionModel = {
  readonly items?: (Message | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyMessageConnectionModel = {
  readonly items?: (Message | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type MessageConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerMessageConnectionModel : LazyMessageConnectionModel

export declare const MessageConnectionModel: (new (init: ModelInit<MessageConnectionModel>) => MessageConnectionModel)

type EagerUserModel = {
  readonly avatar?: string | null;
  readonly contacts?: (User | null)[] | null;
  readonly conversations?: (Conversation | null)[] | null;
  readonly email: string;
  readonly id: string;
  readonly username: string;
}

type LazyUserModel = {
  readonly avatar?: string | null;
  readonly contacts?: (User | null)[] | null;
  readonly conversations?: (Conversation | null)[] | null;
  readonly email: string;
  readonly id: string;
  readonly username: string;
}

export declare type UserModel = LazyLoading extends LazyLoadingDisabled ? EagerUserModel : LazyUserModel

export declare const UserModel: (new (init: ModelInit<UserModel>) => UserModel)

const { Conversation, Message, MessageConnection, User } = initSchema(schema) as {
  Conversation: PersistentModelConstructor<ConversationModel>;
  Message: PersistentModelConstructor<MessageModel>;
  MessageConnection: PersistentModelConstructor<MessageConnectionModel>;
  User: PersistentModelConstructor<UserModel>;
};

export {
  
};