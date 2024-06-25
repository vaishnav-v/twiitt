import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  issueId?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
