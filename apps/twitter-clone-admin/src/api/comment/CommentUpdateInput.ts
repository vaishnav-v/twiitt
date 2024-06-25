import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  repliedToCommentId?: string | null;
  tweet?: TweetWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
