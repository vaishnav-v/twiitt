import { CommentCreateNestedManyWithoutTweetsInput } from "./CommentCreateNestedManyWithoutTweetsInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetCreateInput = {
  comments?: CommentCreateNestedManyWithoutTweetsInput;
  content?: string | null;
  media?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
