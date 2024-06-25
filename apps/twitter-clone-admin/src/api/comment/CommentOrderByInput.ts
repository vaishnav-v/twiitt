import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  repliedToCommentId?: SortOrder;
  tweetId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
