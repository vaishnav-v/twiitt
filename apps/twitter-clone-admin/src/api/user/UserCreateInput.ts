import { CommentCreateNestedManyWithoutUsersInput } from "./CommentCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TweetCreateNestedManyWithoutUsersInput } from "./TweetCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  bio?: string | null;
  comments?: CommentCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  tweets?: TweetCreateNestedManyWithoutUsersInput;
  username: string;
};
