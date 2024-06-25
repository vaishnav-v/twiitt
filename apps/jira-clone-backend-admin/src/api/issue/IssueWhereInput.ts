import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type IssueWhereInput = {
  comments?: CommentListRelationFilter;
  description?: StringNullableFilter;
  estimate?: IntNullableFilter;
  id?: StringFilter;
  priority?: "Option1";
  project?: ProjectWhereUniqueInput;
  status?: "Option1";
  title?: StringNullableFilter;
  typeField?: "Option1";
  user?: UserWhereUniqueInput;
};
