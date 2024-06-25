import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TweetUpdateManyWithoutUsersInput } from "./TweetUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  bio?: string | null;
  comments?: CommentUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  tweets?: TweetUpdateManyWithoutUsersInput;
  username?: string;
};
