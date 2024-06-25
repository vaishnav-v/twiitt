import { IssueWhereUniqueInput } from "../issue/IssueWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentUpdateInput = {
  issue?: IssueWhereUniqueInput | null;
  text?: string | null;
  user?: UserWhereUniqueInput | null;
};
