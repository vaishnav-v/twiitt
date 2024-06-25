import { IssueWhereUniqueInput } from "../issue/IssueWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentCreateInput = {
  issue?: IssueWhereUniqueInput | null;
  text?: string | null;
  user?: UserWhereUniqueInput | null;
};
