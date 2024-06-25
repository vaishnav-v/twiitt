import { StringFilter } from "../../util/StringFilter";
import { IssueWhereUniqueInput } from "../issue/IssueWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentWhereInput = {
  id?: StringFilter;
  issue?: IssueWhereUniqueInput;
  text?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
