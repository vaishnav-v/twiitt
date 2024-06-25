import { CommentUpdateManyWithoutTweetsInput } from "./CommentUpdateManyWithoutTweetsInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetUpdateInput = {
  comments?: CommentUpdateManyWithoutTweetsInput;
  content?: string | null;
  media?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
